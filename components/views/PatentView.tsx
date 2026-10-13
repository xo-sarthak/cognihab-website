import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PatentView() {
  return (
    <main className="view on" id="v-patent-page" data-view="patent">
      <section className="sec creds" id="patent">
        <div className="wrap">
      <Breadcrumbs path="/patent/" />
          <div className="head2 rt">
            <div>
              <div className="eb">Patent</div>
              <h1 className="as-h2">Indian Patent 575729: a patented method, not a claim.</h1></div>
            <p>CogniHab’s vision programme rests on a granted Indian patent for assessing and correcting vision inside an immersive system. It covers the VR lazy eye therapy and the vision screening.</p></div>
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
      <section className="pillar-cta">
        <div className="wrap rt">
          <div>
            <h2>See the patented programme run.</h2>
            <p>Bring an optometrist or an ophthalmologist. We will run the lazy eye therapy and the screening check on someone in the room.</p>
            <p className="talk">WhatsApp / Call{" "}<a href="tel:+917426060606">+91 74260 60606</a>{" "}·{" "}<a href="mailto:info@cognihab.com">info@cognihab.com</a></p></div>
          <div className="pcta-acts">
            <Link className="btn w" href="/contact/?programme=vision">Book a vision demo{" "}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
            <Link className="btn o" href="/vision/">Explore VR vision therapy</Link></div></div></section>
    </main>
  );
}
