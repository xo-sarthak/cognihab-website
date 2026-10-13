import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AdvisorsView() {
  return (
    <main className="view on" id="v-advisors" data-view="advisors">
      <section className="sec">
        <div className="wrap">
      <Breadcrumbs path="/advisors/" />
          <div className="head2 rt">
            <div>
              <div className="eb">Our advisors</div>
              <h1 className="as-h2">Built and validated with the clinicians who use it.</h1></div>
            <p>Every programme is shaped and checked by practising specialists across ophthalmology, orthopaedics, rehabilitation, paediatrics, oncology and healthcare management. They tell us what a session has to do before it is worth a patient’s time.</p></div>
          <div className="advgrid">
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-vijay-beniwal.jpg" alt="Dr. Vijay Beniwal, Senior Orthopedician" loading="lazy" decoding="async" /></div>
              <h3>Dr. Vijay Beniwal</h3>
              <p>Senior Orthopedician</p></article>
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-ravindra-gupta.jpg" alt="Dr. Ravindra Gupta, MD Medicine and Cardiologist" loading="lazy" decoding="async" /></div>
              <h3>Dr. Ravindra Gupta</h3>
              <p>MD Medicine & Cardiologist</p><a className="advli" href="https://in.linkedin.com/in/ravindra-gupta-8b148856" target="_blank" rel="noopener" aria-label="Dr. Ravindra Gupta on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-3.9z" /></svg></a></article>
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-isha-aggarwal.jpg" alt="Isha Aggarwal, Consulting Ophthalmologist" loading="lazy" decoding="async" /></div>
              <h3>Isha Aggarwal</h3>
              <p>Consulting Ophthalmologist</p><a className="advli" href="https://in.linkedin.com/in/dr-isha-agarwal-6a88a3215" target="_blank" rel="noopener" aria-label="Isha Aggarwal on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-3.9z" /></svg></a></article>
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-smita-kapoor-grover.jpg" alt="Dr. Smita Kapoor Grover, Paediatric Ophthalmologist and Strabismus Specialist" loading="lazy" decoding="async" /></div>
              <h3>Dr. Smita Kapoor Grover</h3>
              <p>Paediatric Ophthalmologist & Strabismus Specialist</p><a className="advli" href="https://www.visioneyecentre.com/doctors/dr-smita-kapoor-grover" target="_blank" rel="noopener" aria-label="Dr. Smita Kapoor Grover — clinic profile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg></a></article>
            <article className="adv rv">
              <div className="advph advmono" aria-hidden="true">DP</div>
              <h3>Mr. Debashish Pandey</h3>
              <p>Rehabilitation Expert</p></article>
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-keerti-bhusan-pradhan.jpg" alt="Keerti Bhusan Pradhan, Senior Healthcare Management Professional" loading="lazy" decoding="async" /></div>
              <h3>Keerti Bhusan Pradhan</h3>
              <p>Senior Healthcare Management Professional</p><a className="advli" href="https://in.linkedin.com/in/keerti-bhusan-pradhan-526a9819" target="_blank" rel="noopener" aria-label="Keerti Bhusan Pradhan on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-3.9z" /></svg></a></article>
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-al-bhatt.jpg" alt="Dr. AL Bhatt, Senior Urologist" loading="lazy" decoding="async" /></div>
              <h3>Dr. AL Bhatt</h3>
              <p>Senior Urologist</p><a className="advli" href="https://in.linkedin.com/in/dramilalbhat" target="_blank" rel="noopener" aria-label="Dr. AL Bhatt on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-3.9z" /></svg></a></article>
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-alok-gupta.jpg" alt="Dr. Alok Gupta, MD Medicine" loading="lazy" decoding="async" /></div>
              <h3>Dr. Alok Gupta</h3>
              <p>MD Medicine</p><a className="advli" href="https://in.linkedin.com/in/dralokgupta" target="_blank" rel="noopener" aria-label="Dr. Alok Gupta on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-3.9z" /></svg></a></article>
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-anil-talwar.jpg" alt="Dr. Anil Talwar, MD Medicine" loading="lazy" decoding="async" /></div>
              <h3>Dr. Anil Talwar</h3>
              <p>MD Medicine</p><a className="advli" href="https://in.linkedin.com/in/dr-anil-talwar-bb2201342" target="_blank" rel="noopener" aria-label="Dr. Anil Talwar on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-3.9z" /></svg></a></article>
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-anita-talwar.jpg" alt="Dr. Anita Talwar, Senior Gynaecologist" loading="lazy" decoding="async" /></div>
              <h3>Dr. Anita Talwar</h3>
              <p>Senior Gynaecologist</p><a className="advli" href="https://in.linkedin.com/in/aneeta-talwar-a0803a15" target="_blank" rel="noopener" aria-label="Dr. Anita Talwar on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-3.9z" /></svg></a></article>
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-mahender-singh.jpg" alt="Dr. Mahender Singh, Senior Paediatrician" loading="lazy" decoding="async" /></div>
              <h3>Dr. Mahender Singh</h3>
              <p>Senior Paediatrician</p><a className="advli" href="https://in.linkedin.com/in/mahendrasinghniper" target="_blank" rel="noopener" aria-label="Dr. Mahender Singh on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-3.9z" /></svg></a></article>
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-pawan-gupta.jpg" alt="Dr. Pawan Gupta, Senior Oncologist" loading="lazy" decoding="async" /></div>
              <h3>Dr. Pawan Gupta</h3>
              <p>Senior Oncologist</p><a className="advli" href="https://in.linkedin.com/in/drpawangupta" target="_blank" rel="noopener" aria-label="Dr. Pawan Gupta on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-3.9z" /></svg></a></article>
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-sukhjinder-chawla.jpg" alt="Dr. Sukhjinder Chawla, Senior Radiologist" loading="lazy" decoding="async" /></div>
              <h3>Dr. Sukhjinder Chawla</h3>
              <p>Senior Radiologist</p></article>
            <article className="adv rv">
              <div className="advph"><img src="/images/advisor-sunil-bhutani.jpg" alt="Dr. Sunil Bhutani, Senior Paediatrician" loading="lazy" decoding="async" /></div>
              <h3>Dr. Sunil Bhutani</h3>
              <p>Senior Paediatrician</p><a className="advli" href="https://in.linkedin.com/in/sunil-bhutani-b0b2bb91" target="_blank" rel="noopener" aria-label="Dr. Sunil Bhutani on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-3.9z" /></svg></a></article></div></div></section>
      <section className="pillar-cta">
        <div className="wrap rt">
          <div>
            <h2>Want a clinician’s view before you commit?</h2>
            <p>We will arrange a conversation with someone using the programme in a setting like yours.</p></div>
          <Link className="btn w" href="/contact/">Contact Us{" "}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link></div></section>
    </main>
  );
}
