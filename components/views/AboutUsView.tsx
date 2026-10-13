import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import { FAQS } from "@/content/faqs";

export default function AboutUsView() {
  return (
    <main className="view on" id="v-about-us" data-view="about-us">
      <section className="pg">
        <div className="pghero"><img className="pgimg" src="/images/home-session-vision.jpg" alt="A clinician guides a child wearing a VR headset through a CogniHab session" />
          <div className="scrim"></div></div>
        <div className="wrap">
          <div className="rt">
      <Breadcrumbs path="/about-us/" />
            <div className="eb">About Us</div>
            <h1>About CogniHab</h1>
            <p className="sub">Rise above your limits with virtual reality.</p>
            <p className="lead">CogniHab is a digital therapeutics company based in Jaipur, India. We deliver VR rehabilitation, VR vision therapy and screening, and guided VR well-being on one headset, for hospitals, clinics, employers, public health programmes, fitness centres and people at home. Every session is scored, and every programme ends with a report.</p>
            <div className="acts" style={{ display: "flex", gap: ".7rem", flexWrap: "wrap" }}>
              <Link className="btn p" href="/contact/">Book a Demo{" "}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
              <Link className="btn o" href="/advisors/">Meet Our Clinical Advisors</Link></div></div></div></section>
      <section className="sec tight" id="a-mission">
        <div className="wrap wgrid">
          <div className="rt">
            <div className="eb">Our mission</div>
            <h2>Our Mission</h2></div>
          <div className="rt prose2">
            <p>CogniHab is an organisation set up to help patients rise above their limits through the use of virtual reality technology, by making therapy something people want to finish, and progress something clinicians can measure.</p>
            <p>We believe recovery goes faster when treatment is something people want to do, and that a result should be a number, not an impression.</p></div></div></section>
      <section className="sec tight" id="a-programmes" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">What we do</div>
              <h2>Three Programmes, One Headset</h2></div>
            <p>One Meta Quest headset carries all three programmes, and each has its own scans, sessions and reports.</p></div>
          <div className="acards rt">
            <article className="acard">
              <div className="im"><img src="/media/pillar-body.jpg" alt="CogniHab Rehabilitation programme" loading="lazy" decoding="async" /></div>
              <div className="bd">
                <div className="eb">Rehabilitation</div>
                <h3>VR Rehabilitation</h3>
                <p>VR rehabilitation for stroke and neurological conditions, orthopaedic and post-surgical recovery, spinal injury, senior care and fall prevention, and sports.</p>
                <Link className="lnk" href="/rehabilitation/">Explore Rehabilitation{" "}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link></div></article>
            <article className="acard">
              <div className="im"><img src="/media/pillar-vision.jpg" alt="CogniHab Vision programme" loading="lazy" decoding="async" /></div>
              <div className="bd">
                <div className="eb">Vision</div>
                <h3>VR Vision Therapy & Screening</h3>
                <p>Patented VR lazy eye (amblyopia) therapy and a 10-minute vision screening for clinics, workplaces, schools and communities.</p>
                <Link className="lnk" href="/vision/">Explore Vision{" "}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link></div></article>
            <article className="acard">
              <div className="im"><img src="/media/pillar-mind.jpg" alt="CogniHab Well-being programme" loading="lazy" decoding="async" /></div>
              <div className="bd">
                <div className="eb">Well-being</div>
                <h3>VR Well-being</h3>
                <p>Eleven guided VR meditation journeys for workplaces, care settings and home.</p>
                <Link className="lnk" href="/well-being/">Explore Well-being{" "}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link></div></article></div></div></section>
      <section className="sec tight" id="a-build">
        <div className="wrap wgrid">
          <div className="rt">
            <div className="eb">How we build</div>
            <h2>Built With the Clinicians Who Use It</h2></div>
          <div className="rt prose2">
            <p>All our modules are created in house under the guidance of senior doctors and renowned professionals. Every programme follows the same loop: assess, treat, track and report. It starts with a measurement, scores every session and ends with a report the patient, family or referring doctor can read.</p>
            <p>
              <Link className="lnk" href="/research/">Read Our Published Research{" "}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link></p></div></div></section>
      <section className="sec tight" id="a-faces" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">Our clinical advisors</div>
              <h2>Faces Behind CogniHab</h2></div>
            <p>
              <Link className="lnk" href="/advisors/">Meet our clinical advisors{" "}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link></p></div>
          <div className="faces rt">
            <Link className="face" href="/advisors/"><img src="/images/advisor-vijay-beniwal.jpg" alt="Dr. Vijay Beniwal, Senior Orthopedician" loading="lazy" decoding="async" /><span>Dr. Vijay Beniwal</span></Link>
            <Link className="face" href="/advisors/"><img src="/images/advisor-ravindra-gupta.jpg" alt="Dr. Ravindra Gupta, MD Medicine and Cardiologist" loading="lazy" decoding="async" /><span>Dr. Ravindra Gupta</span></Link>
            <Link className="face" href="/advisors/"><img src="/images/advisor-isha-aggarwal.jpg" alt="Isha Aggarwal, Consulting Ophthalmologist" loading="lazy" decoding="async" /><span>Isha Aggarwal</span></Link>
            <Link className="face" href="/advisors/"><img src="/images/advisor-smita-kapoor-grover.jpg" alt="Dr. Smita Kapoor Grover, Paediatric Ophthalmologist and Strabismus Specialist" loading="lazy" decoding="async" /><span>Dr. Smita Kapoor Grover</span></Link>
            <Link className="face" href="/advisors/"><img src="/images/advisor-keerti-bhusan-pradhan.jpg" alt="Keerti Bhusan Pradhan, Senior Healthcare Management Professional" loading="lazy" decoding="async" /><span>Keerti Bhusan Pradhan</span></Link>
            <Link className="face" href="/advisors/"><img src="/images/advisor-al-bhatt.jpg" alt="Dr. AL Bhatt, Senior Urologist" loading="lazy" decoding="async" /><span>Dr. AL Bhatt</span></Link>
            <Link className="face" href="/advisors/"><img src="/images/advisor-alok-gupta.jpg" alt="Dr. Alok Gupta, MD Medicine" loading="lazy" decoding="async" /><span>Dr. Alok Gupta</span></Link>
            <Link className="face" href="/advisors/"><img src="/images/advisor-anil-talwar.jpg" alt="Dr. Anil Talwar, MD Medicine" loading="lazy" decoding="async" /><span>Dr. Anil Talwar</span></Link>
            <Link className="face" href="/advisors/"><img src="/images/advisor-anita-talwar.jpg" alt="Dr. Anita Talwar, Senior Gynaecologist" loading="lazy" decoding="async" /><span>Dr. Anita Talwar</span></Link>
            <Link className="face" href="/advisors/"><img src="/images/advisor-mahender-singh.jpg" alt="Dr. Mahender Singh, Senior Paediatrician" loading="lazy" decoding="async" /><span>Dr. Mahender Singh</span></Link>
            <Link className="face" href="/advisors/"><img src="/images/advisor-pawan-gupta.jpg" alt="Dr. Pawan Gupta, Senior Oncologist" loading="lazy" decoding="async" /><span>Dr. Pawan Gupta</span></Link>
            <Link className="face" href="/advisors/"><img src="/images/advisor-sukhjinder-chawla.jpg" alt="Dr. Sukhjinder Chawla, Senior Radiologist" loading="lazy" decoding="async" /><span>Dr. Sukhjinder Chawla</span></Link>
            <Link className="face" href="/advisors/"><img src="/images/advisor-sunil-bhutani.jpg" alt="Dr. Sunil Bhutani, Senior Paediatrician" loading="lazy" decoding="async" /><span>Dr. Sunil Bhutani</span></Link></div></div></section>
      <section className="sec tight trust" id="a-trust">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">Trusted institutions</div>
              <h2>Healthcare Institutions</h2></div>
            <p>CogniHab programmes have been built, studied and used with these institutions.</p></div>
          <div className="trustrow rt">
            <div className="tlogo"><img src="/images/partner-aiims.jpg" alt="All India Institute of Medical Sciences" loading="lazy" decoding="async" /></div>
            <div className="tlogo"><img src="/images/partner-spinal-injuries-centre.jpg" alt="Indian Spinal Injuries Centre" loading="lazy" decoding="async" /></div>
            <div className="tlogo"><img src="/images/partner-guru-nanak-mission.jpg" alt="Guru Nanak Mission Medical and Education Trust" loading="lazy" decoding="async" /></div>
            <div className="tlogo"><img src="/images/partner-national-institute-ayurveda.jpg" alt="National Institute of Ayurveda" loading="lazy" decoding="async" /></div>
            <div className="tlogo"><img src="/images/partner-shroff-eye-centre.jpg" alt="Shroff Eye Centre" loading="lazy" decoding="async" /></div>
            <div className="tlogo"><img src="/images/partner-lady-hardinge.jpg" alt="Lady Hardinge Medical College" loading="lazy" decoding="async" /></div></div></div></section>
      <section className="sec faq" id="a-faq">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">FAQs</div>
              <h2>About CogniHab: Common Questions</h2></div>
            <p>Who we are, where we work and what stands behind the programmes.</p></div>
          <div className="list rt">
      <FaqList items={FAQS["about-us"]} /></div></div></section>
      <section className="pillar-cta">
        <div className="wrap rt">
          <div>
            <h2>Work With Us</h2>
            <p>Hospitals, clinics, employers and public health programmes: see a programme on a headset in thirty minutes. Researchers and institutions: talk to us about collaboration.</p>
            <p className="talk">WhatsApp / Call{" "}<a href="tel:+917426060606">+91 74260 60606</a>{" "}·{" "}<a href="mailto:info@cognihab.com">info@cognihab.com</a></p></div>
          <div className="pcta-acts">
            <Link className="btn w" href="/contact/">Book a Demo{" "}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
            <Link className="btn o" href="/contact/?topic=collaborate">Collaborate With Us</Link></div></div></section>
    </main>
  );
}
