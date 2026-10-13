import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import { FAQS } from "@/content/faqs";
import UseCaseCards from "@/components/UseCaseCards";

export default function VisionView() {
  return (
    <main className="view on" id="v-vision" data-view="vision">
      <section className="pg">
        <div className="pghero"><img className="pgimg" src="/media/pillar-vision.jpg" alt="A doctor guides a child wearing a VR headset through a vision exercise" />
          <div className="scrim"></div></div>
        <div className="wrap">
          <div className="rt">
      <Breadcrumbs path="/vision/" />
            <div className="eb">VR vision care</div>
            <h1>VR vision therapy and screening. Screen widely. Treat what you find.</h1>
            <p className="lead">An immersive therapy for lazy eye (amblyopia) that a child will actually finish, and a guided screening check of several tests, under ten minutes, that tells you who needs the ophthalmologist. Built for eye clinics, schools, workplaces and community programmes.</p>
            <div className="acts" style={{ display: "flex", gap: ".7rem", flexWrap: "wrap" }}>
              <Link className="btn p" href="/contact/?programme=vision">Book a vision demo{" "}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link><a className="btn o" href="#screening">The screening check</a></div>
            <div className="shortcuts">Choose your setting:{" "}
              <Link href="/vision/lazy-eye-therapy/">Lazy eye therapy in the clinic</Link>{" "}·{" "}
              <Link href="/vision/vision-screening/">Screening in the clinic and the workplace</Link>{" "}·{" "}
              <Link href="/vision/school-community-screening/">School and community screening</Link></div>
            <div className="std">Screening indicates when an ophthalmologist should be consulted. It is not a diagnosis.</div></div></div></section>
      <section className="sec tight whatis" id="v-what">
        <div className="wrap wgrid">
          <div className="rt">
            <div className="eb">Overview</div>
            <h2>What is VR vision therapy?</h2>
            <p>VR vision therapy uses a virtual reality headset to show each eye a different part of the same scene. For lazy eye (amblyopia), a game can only be completed when the weaker eye does its share, so both eyes learn to work together instead of patching the stronger one. CogniHab pairs it with a guided VR vision screening.</p></div>
          <aside className="facts rt" aria-label="At a glance">
            <div className="ft">At a glance</div>
            <ul>
              <li><b>11 games</b>{" "}· 3 modes</li>
              <li><b>15-min</b>{" "}sessions</li>
              <li><b>Meta Quest + mobile VR</b></li>
              <li><b>6 vision checks</b>{" "}· under 10 min</li>
              <li><b>Clear / Refer</b>{" "}results</li>
              <li><b>Patent 575729</b></li>
              <li><b>Jaipur, India</b></li></ul></aside></div></section>
      <section className="sec tight" id="v-cases" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">Use cases</div>
              <h2>Vision Care Use Cases</h2></div>
            <p>Three settings, one vision care platform. CogniHab supports lazy eye therapy and guided vision screening across clinics, workplaces, schools and community programmes.</p></div>
          <div className="ucards rt">
      <UseCaseCards programme="vision" /></div></div></section>
      <section className="sec tight" id="v-lazy" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap split">
          <div className="side rt">
            <div className="eb">Lazy eye therapy (amblyopia)</div>
            <h2>VR lazy eye therapy: the therapy happens while they play.</h2>
            <p>Each eye is shown a different part of the same scene. The game cannot be completed unless the weaker eye is doing its share of the work. The child is playing a game; the eye is being trained. Unlike patching, both eyes stay open: the image to the stronger eye is held back, the weaker eye’s is enhanced, and the gap narrows automatically as the child improves.</p>
            <div className="rv side-img"><img src="/images/vision-lazy-eye-game.jpg" alt="Inside the headset: a bright meadow game with floating shapes and a ring sight" loading="lazy" decoding="async" /></div></div>
          <div className="ways rt">
            <div className="wayc">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h6l2 3h8M4 8v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" /></svg></div>
              <div>
                <h3>The programme</h3>
                <p>Eleven therapy games across three training modes, mixing matching games and shooting games. Sessions run about fifteen minutes. The clinic prescribes the programme and can see whether sessions are being completed at home between visits.</p></div></div>
            <div className="wayc"><img src="/images/vision-clinic-kit.jpg" alt="A white VR headset with two ring controllers on a white surface" loading="lazy" decoding="async" />
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-3l-3-3-3 3H6a3 3 0 0 1-3-3Z" /></svg></div>
              <div>
                <h3>In the clinic</h3>
                <p>A Meta Quest headset with controllers. The clinic prescribes the programme, runs the first sessions in the consulting room, and sees whether sessions are being completed between visits.</p>
                <div className="eq"><b>Needs</b>{" "}· Meta Quest headset with controllers · a chair</div></div></div>
            <div className="wayc"><img src="/images/vision-home-kit.jpg" alt="Lightweight VR goggles with a phone slotted in, and a small handheld remote, on a white surface" loading="lazy" decoding="async" />
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg></div>
              <div>
                <h3>At home</h3>
                <p>Lightweight VR goggles that hold a mobile phone, with a handheld remote, so the programme continues between appointments without the family travelling to the clinic.</p>
                <div className="eq"><b>Needs</b>{" "}· goggles · a mobile phone · the remote</div></div></div></div></div></section>
      <section className="sec" id="screening">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">VR vision screening</div>
              <h2>A ten-minute vision screening check that tells you who needs the ophthalmologist.</h2></div>
            <p>A voice walks the person through each check inside the headset, so a trained assistant can run it without a clinician present. A detailed report is presented at the end, and a screening day ends with the referral list ready.</p></div>
          <div className="two rt">
            <div className="scan">
              <div className="fig ph"><img src="/images/vision-screening-clinic.jpg" alt="A woman seated in a VR headset in an eye-clinic waiting area with a clinic assistant beside her" loading="lazy" decoding="async" /></div>
              <div className="out" style={{ color: "var(--blue)" }}>The checks, one after another</div>
              <div className="chips v"><span>Visual acuity</span><span>Contrast sensitivity</span><span>Depth perception</span><span>Eye coordination</span><span>Colour vision</span><span>Near focusing</span></div>
              <p>Six checks in sequence, under ten minutes for one person. The result for each check is either clear or a referral.</p></div>
            <div className="scan">
              <div className="fig">
                <svg viewBox="0 0 400 250" fill="none" aria-hidden="true"><rect x="30" y="24" width="340" height="200" rx="14" fill="#fff" stroke="#e0eff3" /><text x="48" y="52" fontFamily="Manrope,sans-serif" fontSize="14" fontWeight="700" fill="#0E4553">Screening report</text><text x="352" y="52" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8296a0" textAnchor="end">UNDER 10 MIN</text>
                  <g fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill="#5A6E76"><text x="48" y="84">Visual acuity</text><text x="352" y="84" textAnchor="end" fill="#E4646C">CLEAR</text><text x="48" y="108">Contrast sensitivity</text><text x="352" y="108" textAnchor="end" fill="#E4646C">CLEAR</text><text x="48" y="132">Depth perception</text><text x="352" y="132" textAnchor="end" fill="#4AA3B6">REFER</text><text x="48" y="156">Eye coordination</text><text x="352" y="156" textAnchor="end" fill="#E4646C">CLEAR</text><text x="48" y="180">Colour vision</text><text x="352" y="180" textAnchor="end" fill="#E4646C">CLEAR</text><text x="48" y="204">Near focusing</text><text x="352" y="204" textAnchor="end" fill="#E4646C">CLEAR</text></g>
                  <g stroke="#e9f1f4"><path d="M48 92h304M48 116h304M48 140h304M48 164h304M48 188h304" /></g><text x="200" y="240" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8296a0" textAnchor="middle" letterSpacing="1">ILLUSTRATIVE · REFERRAL, NOT DIAGNOSIS</text></svg></div>
              <p><b>The standing line:</b>{" "}this is a screening tool. It indicates when an ophthalmologist should be consulted and does not diagnose any condition.</p></div></div></div></section>
      <section className="sec creds" id="v-patent">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">Patent</div>
              <h2>A patented method, not a claim.</h2></div>
            <p>The vision programme rests on a granted Indian patent for assessing and correcting vision inside an immersive system.</p></div>
          <div className="patrow rt">
            <div className="patcard">
              <div className="patno"><span className="eb">Patent number</span><b>575729</b></div>
              <h3>Immersive System and Method for Vision Assessment and Correction</h3>
              <dl className="patmeta">
                <div><dt>Granted by</dt><dd>The Patent Office, Government of India</dd></div>
                <div><dt>Patentee</dt><dd>CogniHab Healthcare Solutions Private Limited</dd></div>
                <div><dt>Application</dt><dd>202411011027</dd></div>
                <div><dt>Filed</dt><dd>16 February 2024</dd></div>
                <div><dt>Granted</dt><dd>12 December 2025</dd></div>
                <div><dt>Term</dt><dd>20 years from the date of filing</dd></div></dl></div>
            <figure className="patfig rv"><a href="/images/patent-certificate-cognihab.jpg" target="_blank" rel="noopener" aria-label="View the full patent certificate">{" "}<img src="/images/patent-certificate-cognihab.jpg" alt="Patent certificate 575729 issued by the Patent Office, Government of India, to CogniHab Healthcare Solutions Private Limited" loading="lazy" decoding="async" />{" "}</a><figcaption>The granted certificate. Click to view full size.</figcaption></figure></div></div></section>
      <section className="sec tight" id="v-equipment">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">What the buyer needs</div>
              <h2>The equipment for VR vision therapy and screening</h2></div>
            <p>What has to be in the room for each part of the vision programme.</p></div>
          <div className="tblwrap rt">
            <table className="eqt">
              <thead>
                <tr><th>Programme</th><th>What the buyer needs</th></tr></thead>
              <tbody>
                <tr><td>Lazy eye therapy, clinic</td><td>Meta Quest headset with controllers.</td></tr>
                <tr><td>Lazy eye therapy, home</td><td>Lightweight VR goggles that hold a mobile phone, with a handheld remote.</td></tr>
                <tr><td>Vision screening</td><td>Meta Quest headset, a chair, and an internet connection. A trained assistant runs the screening.</td></tr></tbody></table></div></div></section>
      <section className="sec faq" id="v-faq">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">FAQ</div>
              <h2>VR vision therapy and screening: common questions</h2></div>
            <p>What eye clinics, schools and programme leads ask before they start.</p></div>
          <div className="list rt">
      <FaqList items={FAQS["vision"]} /></div></div></section>
      <section className="pillar-cta">
        <div className="wrap rt">
          <div>
            <h2>Ready to set up VR vision therapy or screening?</h2>
            <p>Talk to the CogniHab team about the equipment, setup and programme requirements for your clinic, school or screening programme.</p>
            <p className="talk">WhatsApp / Call{" "}<a href="tel:+917426060606">+91 74260 60606</a>{" "}·{" "}<a href="mailto:info@cognihab.com">info@cognihab.com</a></p>
            <p className="also">Explore other CogniHab programmes:{" "}
              <Link href="/rehabilitation/">VR Rehabilitation</Link>{" "}·{" "}
              <Link href="/well-being/">VR Well-being</Link></p></div>
          <div className="pcta-acts">
            <Link className="btn w" href="/contact/?programme=vision">Talk to Our Team{" "}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
            <Link className="btn o" href="/contact/?programme=vision">Request a Demo</Link></div></div></section>
    </main>
  );
}
