"""Build C:/kiomed5/cognihab.html from cognihab.src.html by embedding all media as base64.
Run:  python build.py   (from this folder)
Edit copy/CSS/JS in cognihab.src.html, never in the built file."""
import base64, re, pathlib, shutil, subprocess

HERE = pathlib.Path(__file__).parent
ROOT = HERE.parent
S = (HERE / 'cognihab.src.html').read_text(encoding='utf-8')


def b64(p, mime):
    return 'data:%s;base64,%s' % (mime, base64.b64encode(pathlib.Path(p).read_bytes()).decode())


T = {
    'LOGO': b64(ROOT / 'cognihab-logo.png', 'image/png'),
    'LOGOICON': b64(ROOT / 'cognihab-icon.png', 'image/png'),
    'VIDEO': b64(HERE / 'hero_scrub.mp4', 'video/mp4'),
    'IMG_BODY': b64(ROOT / 'pillar-body.jpg', 'image/jpeg'),
    'IMG_BODY_T': b64(ROOT / 'pillar-body-tall.jpg', 'image/jpeg'),
    'IMG_VISION': b64(ROOT / 'pillar-vision.jpg', 'image/jpeg'),
    'IMG_VISION_T': b64(ROOT / 'pillar-vision-tall.jpg', 'image/jpeg'),
    'IMG_MIND': b64(ROOT / 'pillar-mind.jpg', 'image/jpeg'),
    'IMG_MIND_T': b64(ROOT / 'pillar-mind-tall.jpg', 'image/jpeg'),
}
PDF = ROOT / 'docs' / 'cognihab-amblyopia-publication.pdf'
out = S
for k, v in T.items():
    out = out.replace('{{%s}}' % k, v)
out = out.replace('{{PDF}}', b64(PDF, 'application/pdf'))
from PIL import Image
import io
def lite(f, maxw=1200, q=76):
    im = Image.open(f).convert('RGB')
    if im.width > maxw:
        im = im.resize((maxw, int(im.height * maxw / im.width)), Image.LANCZOS)
    buf = io.BytesIO(); im.save(buf, 'JPEG', quality=q, optimize=True, progressive=True)
    return 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode()
for name in sorted(set(re.findall(r'\{\{IMG:([\w\-.]+)\}\}', out))):
    f = ROOT / 'images' / name
    if not f.exists():
        print('missing photo, slot left empty:', name)
        out = re.sub(r'<img [^>]*\{\{IMG:%s\}\}[^>]*>' % re.escape(name), '', out)
        continue
    out = out.replace('{{IMG:%s}}' % name, lite(f))  # single file gets lighter copies; deploy keeps full files
assert '{{' not in out, 'unfilled token'

css = re.search(r'<style>(.*?)</style>', S, re.S).group(1)
assert css.count('{') == css.count('}'), 'css braces'
js = '\n'.join(re.findall(r'<script>(.*?)</script>', S, re.S))
chk = HERE / '_check.js'
chk.write_text(js, encoding='utf-8')
r = subprocess.run(['node', '--check', str(chk)], capture_output=True, text=True)
chk.unlink()
assert r.returncode == 0, r.stderr
assert S.count('<div') == S.count('</div>'), 'div balance'
visible = re.sub(r'<(script|style)[\s\S]*?</>', ' ', S)
visible = re.sub(r'<[^>]+>', ' ', visible).lower()
for w in ['lorem', 'tbd', 'placeholder', 'dummy', 'yoga', 'chapati']:
    assert w not in visible, 'forbidden word in visible copy: ' + w

(ROOT / 'cognihab.html').write_text(out, encoding='utf-8')
print('built cognihab.html, %d bytes' % len(out.encode()))

# ---- deploy copy for Netlify: photos as lazy-loaded files instead of base64 ----
dep = ROOT / 'deploy'
(dep / 'images').mkdir(parents=True, exist_ok=True)
d = S
for k, v in T.items():
    d = d.replace('{{%s}}' % k, v)
(dep / 'docs').mkdir(parents=True, exist_ok=True)
shutil.copy(PDF, dep / 'docs' / PDF.name)
d = d.replace('{{PDF}}', 'docs/' + PDF.name)
for name in sorted(set(re.findall(r'\{\{IMG:([\w\-.]+)\}\}', d))):
    if not (ROOT / 'images' / name).exists():
        d = re.sub(r'<img [^>]*\{\{IMG:%s\}\}[^>]*>' % re.escape(name), '', d)
        continue
    shutil.copy(ROOT / 'images' / name, dep / 'images' / name)
    d = d.replace('src="{{IMG:%s}}"' % name, 'loading="lazy" src="images/%s"' % name)
    d = d.replace('{{IMG:%s}}' % name, 'images/%s' % name)  # poster= and any other attribute
assert '{{' not in d
(dep / 'index.html').write_text(d, encoding='utf-8')
shutil.copy(ROOT / 'og-cover.jpg', dep / 'og-cover.jpg')
if (ROOT / 'video').exists():
    shutil.copytree(ROOT / 'video', dep / 'video', dirs_exist_ok=True)
print('built deploy/index.html, %d bytes + %d image files' % (len(d.encode()), len(list((dep / 'images').glob('*.jpg')))))
