"""Build the CogniHab site from cognihab.src.html.
Run:  python src/build.py
Edit copy/CSS/JS in cognihab.src.html, never in the built files.

Two outputs:
  cognihab.html  one file, every asset inlined, hash-routed across all views. Opens from disk.
  deploy/        one folder per URL (deploy/rehabilitation/index.html ...), each with its own
                 title, description, canonical, breadcrumb and JSON-LD. What gets uploaded."""
import base64, html, io, json, re, pathlib, shutil, subprocess

HERE = pathlib.Path(__file__).parent
ROOT = HERE.parent
SITE = 'https://cognihab.com'
S = (HERE / 'cognihab.src.html').read_text(encoding='utf-8')

# ---- page table: view -> (title, meta description, breadcrumb name) ----
# The URL of each view is '/<view>/' ('/' for home). Breadcrumbs follow the URL segments.
PAGES = {
    'home': ('CogniHab | VR Healthcare: Rehabilitation, Vision Care & Well-being',
             'CogniHab brings VR rehabilitation, vision therapy and guided well-being to hospitals, clinics, employers and homes on one headset. Every session scored.',
             'Home'),
    'rehabilitation': ('VR Rehabilitation System for Hospitals & Clinics | CogniHab',
                       'VR rehabilitation with 34 gamified tasks, 1,000+ AI-coached exercises, and posture and joint scans. For hospitals, physio clinics and home programmes.',
                       'Rehabilitation'),
    'rehabilitation/stroke-neurological-rehabilitation': ('VR Stroke & Neurological Rehabilitation | CogniHab',
        'Gamified VR tasks for grip, reach and everyday actions after stroke, head injury and cerebral palsy. Every task scored automatically.',
        'Stroke & Neurological Rehabilitation'),
    'rehabilitation/orthopaedic-post-surgical-recovery': ('VR Orthopaedic & Post-Surgical Rehabilitation | CogniHab',
        'Guided exercises with phone-camera form checking and joint movement scans, for structured recovery after orthopaedic injury or surgery.',
        'Orthopaedic & Post-Surgical Recovery'),
    'rehabilitation/spinal-injury-rehabilitation': ('VR Spinal Cord Injury Rehabilitation | CogniHab',
        'Assisted, passive, seated, core and spine exercises for patients with limited mobility, recorded and scored in every session.',
        'Spinal Injury'),
    'rehabilitation/senior-care-fall-prevention': ('Senior Care & Fall Prevention with VR | CogniHab',
        'Guided balance and strength exercises with posture scans for older adults. Runs on a phone alone or a headset, in care homes and at home.',
        'Senior Care & Fall Prevention'),
    'rehabilitation/sports-rehabilitation-fitness': ('VR Sports Rehabilitation & Fitness | CogniHab',
        'Range of motion measured in degrees, guided exercises and camera-checked form for sports rehabilitation, return to activity and fitness.',
        'Sports Rehabilitation & Fitness'),
    'vision': ('VR Vision Therapy & Vision Screening for Clinics | CogniHab',
               'VR lazy eye (amblyopia) therapy children finish, and a 10-minute, 6-check vision screening. Patented in India. For eye clinics, schools and workplaces.',
               'Vision'),
    'vision/lazy-eye-therapy': ('VR Lazy Eye (Amblyopia) Therapy for Clinics | CogniHab',
        'Eleven therapy games across three modes in 15-minute sessions. Both eyes stay open; the clinic tracks completion between visits. Patented in India.',
        'Lazy Eye Therapy in the Clinic'),
    'vision/vision-screening': ('VR Vision Screening for Clinics & Workplaces | CogniHab',
        'Six guided vision checks inside a VR headset in under ten minutes, run by a trained assistant. Each result is clear or refer.',
        'Screening in the Clinic & Workplace'),
    'vision/school-community-screening': ('School & Community Vision Screening in VR | CogniHab',
        'Screen schools and communities with six guided VR vision checks run by a trained non-clinician, and leave with a referral list.',
        'School & Community Screening'),
    'well-being': ('VR Meditation & Well-being for Workplaces & Care | CogniHab',
                   'Eleven guided VR meditation journeys of 8 to 10 minutes, taken seated with no instructor, plus a DASS check-in. For workplaces, wards and homes.',
                   'Well-being'),
    'well-being/workplace-wellbeing': ('VR Workplace Well-being Programme | CogniHab',
        'Ten quiet minutes without leaving the building: guided VR journeys, a DASS check-in and posture scans for desk workers. No instructor needed.',
        'Workplace Well-being'),
    'well-being/care-settings': ('VR Well-being in Hospitals & Care Homes | CogniHab',
        'Guided VR journeys to settle patients before procedures, between therapy sessions and as quiet time in care homes. Taken seated.',
        'Well-being in Care Settings'),
    'well-being/at-home': ('VR Meditation at Home | CogniHab',
        'Eleven guided VR meditation journeys at home on lightweight goggles that hold a mobile phone. Seated, 8 to 10 minutes, no experience needed.',
        'At Home'),
    'about-us': ('About CogniHab | VR Healthcare Company in Jaipur, India',
                 'CogniHab is a Jaipur-based digital therapeutics company delivering VR rehabilitation, vision therapy and well-being, built with 14 clinical advisors.',
                 'About CogniHab'),
    'patent': ('Indian Patent 575729: VR Vision Assessment & Correction | CogniHab',
               'CogniHab holds Indian Patent 575729, granted 12 December 2025, for an immersive system and method for vision assessment and correction.',
               'Patent'),
    'research': ('Published Research: VR Lazy Eye Therapy | CogniHab',
                 'The CogniHab lazy eye programme, published in the Indian Journal of Community Health. Read the study and download the paper.',
                 'Research'),
    'advisors': ('Clinical Advisors | CogniHab',
                 'The senior doctors and clinicians who guide how CogniHab builds and validates its VR rehabilitation, vision and well-being programmes.',
                 'Advisors'),
    'contact': ('Contact CogniHab | Book a VR Healthcare Demo',
                'Book a 30-minute CogniHab demo in person or online, or reach us on WhatsApp or phone at +91 74260 60606 and info@cognihab.com.',
                'Contact Us'),
}
# breadcrumb parents that are not views of their own
CRUMB_PARENT = {'about-us': None, 'patent': ('About Us', '/about-us/'), 'research': ('About Us', '/about-us/'),
                'advisors': ('About Us', '/about-us/')}
EXTERNAL_PATHS = ('/blog/', '/case-studies/', '/terms-and-conditions/', '/privacy-policy/', '/returns-policy/', '/qr-code/')


def url(view):
    return '/' if view == 'home' else '/%s/' % view


def b64(p, mime):
    return 'data:%s;base64,%s' % (mime, base64.b64encode(pathlib.Path(p).read_bytes()).decode())


MEDIA = {  # token -> (file, mime)
    'LOGO': (ROOT / 'cognihab-logo.png', 'image/png'),
    'LOGOICON': (ROOT / 'cognihab-icon.png', 'image/png'),
    'VIDEO': (HERE / 'hero_scrub.mp4', 'video/mp4'),
    'IMG_BODY': (ROOT / 'pillar-body.jpg', 'image/jpeg'),
    'IMG_BODY_T': (ROOT / 'pillar-body-tall.jpg', 'image/jpeg'),
    'IMG_VISION': (ROOT / 'pillar-vision.jpg', 'image/jpeg'),
    'IMG_VISION_T': (ROOT / 'pillar-vision-tall.jpg', 'image/jpeg'),
    'IMG_MIND': (ROOT / 'pillar-mind.jpg', 'image/jpeg'),
    'IMG_MIND_T': (ROOT / 'pillar-mind-tall.jpg', 'image/jpeg'),
}
PILLAR = {'body': 'IMG_BODY', 'vision': 'IMG_VISION', 'mind': 'IMG_MIND'}
PDF = ROOT / 'docs' / 'cognihab-amblyopia-publication.pdf'

# ---------------------------------------------------------------- checks on the source
css = re.search(r'<style>(.*?)</style>', S, re.S).group(1)
assert css.count('{') == css.count('}'), 'css braces'
js = '\n'.join(re.findall(r'<script>(.*?)</script>', S, re.S))
chk = HERE / '_check.js'
chk.write_text(js, encoding='utf-8')
r = subprocess.run(['node', '--check', str(chk)], capture_output=True, text=True)
chk.unlink()
assert r.returncode == 0, r.stderr
assert S.count('<div') == S.count('</div>'), 'div balance'
assert S.count('<section') == S.count('</section>'), 'section balance'
visible = re.sub(r'<(script|style)[\s\S]*?</\1>', ' ', S)
visible = re.sub(r'<[^>]+>', ' ', visible).lower()
for w in ['lorem', 'tbd', 'placeholder', 'dummy', 'yoga', 'chapati', 'namaste@']:
    assert w not in visible, 'forbidden word in visible copy: ' + w

# ---------------------------------------------------------------- split shell / views
MAIN_RE = re.compile(r'<main class="view( on)?" id="v-[\w-]+" data-view="([\w/-]+)">.*?</main>\n?', re.S)
mains = {m.group(2): m.group(0) for m in MAIN_RE.finditer(S)}
assert set(mains) <= set(PAGES), 'views without a PAGES entry: %s' % (set(mains) - set(PAGES))
for v in set(PAGES) - set(mains):  # TODO(phase 7): make this strict once every page exists
    print('no view yet for', v); del PAGES[v]
first, last = MAIN_RE.search(S).start(), list(MAIN_RE.finditer(S))[-1].end()
PRE, POST = S[:first], S[last:]
for v, m in mains.items():
    assert len(re.findall(r'<h1[\s>]', m)) == 1, 'view %s needs exactly one <h1>' % v

# ---------------------------------------------------------------- 1) single file
def to_hash(m):
    path, frag = m.group(1), m.group(2) or ''
    if path.startswith(EXTERNAL_PATHS):
        return 'href="%s%s%s"' % (SITE, path, frag)
    path = path.split('?')[0].strip('/')
    h = '/'.join(p for p in [path or ('home' if not frag else ''), frag.lstrip('#')] if p)
    return 'href="#%s"' % (h or 'home')


one = re.sub(r'href="(/[^"#]*)(#[^"]*)?"', to_hash, S)
for k, (f, mime) in MEDIA.items():
    one = one.replace('{{%s}}' % k, b64(f, mime))
one = one.replace('{{PDF}}', b64(PDF, 'application/pdf'))
from PIL import Image


def lite(f, maxw=1200, q=76):
    im = Image.open(f).convert('RGB')
    if im.width > maxw:
        im = im.resize((maxw, int(im.height * maxw / im.width)), Image.LANCZOS)
    buf = io.BytesIO(); im.save(buf, 'JPEG', quality=q, optimize=True, progressive=True)
    return 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode()


for name in sorted(set(re.findall(r'\{\{IMG:([\w\-.]+)\}\}', one))):
    f = ROOT / 'images' / name
    if not f.exists():
        print('missing photo, slot left empty:', name)
        one = re.sub(r'<img [^>]*\{\{IMG:%s\}\}[^>]*>' % re.escape(name), '', one)
        continue
    one = one.replace('{{IMG:%s}}' % name, lite(f))  # single file gets lighter copies; deploy keeps full files
assert '{{' not in one, 'unfilled token'
(ROOT / 'cognihab.html').write_text(one, encoding='utf-8')
print('built cognihab.html, %d bytes' % len(one.encode()))

# ---------------------------------------------------------------- 2) deploy, one folder per URL
dep = ROOT / 'deploy'
if dep.exists():
    shutil.rmtree(dep)
for sub in ('images', 'media', 'docs'):
    (dep / sub).mkdir(parents=True, exist_ok=True)
for k, (f, mime) in MEDIA.items():
    shutil.copy(f, dep / 'media' / f.name)
shutil.copy(PDF, dep / 'docs' / PDF.name)
shutil.copy(ROOT / 'og-cover.jpg', dep / 'og-cover.jpg')
if (ROOT / 'video').exists():
    shutil.copytree(ROOT / 'video', dep / 'video', dirs_exist_ok=True)


def crumbs(view):
    if view == 'home':
        return []
    out = [('Home', '/')]
    parent = CRUMB_PARENT.get(view)
    if parent:
        out.append(parent)
    parts = view.split('/')
    for i in range(1, len(parts) + 1):
        k = '/'.join(parts[:i])
        out.append((PAGES[k][2], url(k)))
    return out


def text(s):
    return html.unescape(re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', s))).strip()


ORG = {'@context': 'https://schema.org', '@type': 'Organization', 'name': 'CogniHab',
       'legalName': 'CogniHab Healthcare Solutions Private Limited', 'url': SITE + '/',
       'logo': SITE + '/media/cognihab-logo.png', 'email': 'info@cognihab.com', 'telephone': '+91 74260 60606',
       'address': {'@type': 'PostalAddress', 'streetAddress': '4th Floor, 401-403, Mall of Jaipur, Gandhi Path, Vaishali Nagar',
                   'addressLocality': 'Jaipur', 'addressRegion': 'Rajasthan', 'postalCode': '302021', 'addressCountry': 'IN'},
       'sameAs': ['https://www.facebook.com/Cognihab', 'https://x.com/Cognihab', 'https://www.instagram.com/Cognihab',
                  'https://www.linkedin.com/company/cognihab', 'https://www.youtube.com/channel/UCIncaGUch635BdT-LirNPyA']}


def ld(obj):
    return '<script type="application/ld+json">%s</script>\n' % json.dumps(obj, ensure_ascii=False).replace('</', '<\\/')


built, titles, links = [], set(), set()
for view, (title, desc, _) in PAGES.items():
    assert len(title) <= 70, 'title too long: ' + view
    assert title not in titles, 'duplicate title: ' + title
    titles.add(title)
    canon = SITE + url(view)
    main = mains[view].replace('<main class="view"', '<main class="view on"', 1)
    # visible breadcrumb on inner pages: <nav class="crumbs"> slot inside the view's first section
    cr = crumbs(view)
    if cr:
        nav = '<nav class="crumbs" aria-label="Breadcrumb">%s</nav>' % ' <span aria-hidden="true">&#8250;</span> '.join(
            ('<a href="%s">%s</a>' % (u, html.escape(n)) if i < len(cr) - 1 else '<span aria-current="page">%s</span>' % html.escape(n))
            for i, (n, u) in enumerate(cr))
        main = main.replace('<!--CRUMBS-->', nav, 1)
    page = PRE + main + POST
    page = re.sub(r'<title>.*?</title>', '<title>%s</title>' % html.escape(title), page, 1)
    page = re.sub(r'<meta name="description" content="[^"]*">', '<meta name="description" content="%s">' % html.escape(desc), page, 1)
    page = re.sub(r'<meta property="og:title" content="[^"]*">', '<meta property="og:title" content="%s">' % html.escape(title), page, 1)
    page = re.sub(r'<meta property="og:description" content="[^"]*">', '<meta property="og:description" content="%s">' % html.escape(desc), page, 1)
    page = page.replace('<meta property="og:image" content="og-cover.jpg">', '<meta property="og:image" content="%s/og-cover.jpg">' % SITE)
    head = '<link rel="canonical" href="%s">\n<meta property="og:url" content="%s">\n' % (canon, canon)
    head += ld(ORG)
    if cr:
        head += ld({'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
            {'@type': 'ListItem', 'position': i + 1, 'name': n, 'item': SITE + u} for i, (n, u) in enumerate(cr)]})
    qa = re.findall(r'<div class="q"><button[^>]*>(.*?)</button><div class="a">(.*?)</div></div>', main, re.S)
    if qa:
        head += ld({'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
            {'@type': 'Question', 'name': text(q), 'acceptedAnswer': {'@type': 'Answer', 'text': text(a)}} for q, a in qa]})
    page = page.replace('</head>', head + '</head>', 1)
    # media tokens -> files
    for k, (f, mime) in MEDIA.items():
        page = page.replace('{{%s}}' % k, '/media/' + f.name)
    page = page.replace('{{PDF}}', '/docs/' + PDF.name)
    page = re.sub(r'data-src="(body|vision|mind)"', lambda m: 'src="/media/%s"' % MEDIA[PILLAR[m.group(1)]][0].name, page)
    for name in sorted(set(re.findall(r'\{\{IMG:([\w\-.]+)\}\}', page))):
        if not (ROOT / 'images' / name).exists():
            page = re.sub(r'<img [^>]*\{\{IMG:%s\}\}[^>]*>' % re.escape(name), '', page)
            continue
        shutil.copy(ROOT / 'images' / name, dep / 'images' / name)
        page = page.replace('src="{{IMG:%s}}"' % name, 'loading="lazy" src="/images/%s"' % name)
        page = page.replace('{{IMG:%s}}' % name, '/images/%s' % name)  # poster= and any other attribute
    assert '{{' not in page, 'unfilled token in ' + view
    links |= {(view, h) for h in re.findall(r'href="(/[^"#?]*)', page)}
    out = dep / url(view).strip('/') / 'index.html' if view != 'home' else dep / 'index.html'
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(page, encoding='utf-8')
    built.append(url(view))

# every internal link resolves to a built page or a known path on the main domain
urls = set(built)
bad = sorted((v, h) for v, h in links if h not in urls and not h.startswith(EXTERNAL_PATHS)
             and not (dep / h.lstrip('/')).is_file())
assert not bad, 'broken internal links: %s' % bad

(dep / 'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n%s</urlset>\n' % ''.join(
    '  <url><loc>%s%s</loc></url>\n' % (SITE, u) for u in built), encoding='utf-8')
(dep / 'robots.txt').write_text('User-agent: *\nAllow: /\n\nSitemap: %s/sitemap.xml\n' % SITE, encoding='utf-8')
print('built deploy/: %d pages, %d image files' % (len(built), len(list((dep / 'images').glob('*.jpg')))))
