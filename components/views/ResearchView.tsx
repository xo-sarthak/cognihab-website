import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ResearchView() {
  return (
    <main className="view on" id="v-research" data-view="research">
      <section className="sec">
        <div className="wrap">
      <Breadcrumbs path="/research/" />
          <div className="head2 rt">
            <div>
              <div className="eb">Published research</div>
              <h1 className="as-h2">The lazy eye programme, in a peer-reviewed journal.</h1></div>
            <p>A commentary in the{" "}<em>Indian Journal of Community Health</em>{" "}on why amblyopia goes undetected in India, why the conventional treatments are so often abandoned, and what changed when the therapy became something a child would actually finish.</p></div>
          <div className="rgrid">
            <article className="rpaper rt">
              <h3>Unleashing the power of virtual reality to manage lazy eye — a silent public health problem: a case study from India</h3>
              <p className="rauth">Vanishree Ramanathan, Keerti Bhusan Pradhan, Smita Kapoor, Shailesh Tripathi, Sudip Bhattacharya</p>
              <dl className="rmeta">
                <div><dt>Journal</dt><dd>Indian Journal of Community Health</dd></div>
                <div><dt>Citation</dt><dd>2023;35(4):534–536</dd></div>
                <div><dt>Published</dt><dd>31 December 2023</dd></div>
                <div><dt>DOI</dt><dd><a href="https://doi.org/10.47203/IJCH.2023.v35i04.024" target="_blank" rel="noopener">10.47203/IJCH.2023.v35i04.024</a></dd></div>
                <div><dt>Licence</dt><dd>Open access, CC BY 4.0</dd></div></dl>
              <h4>What the paper covers</h4>
              <ul className="rlist">
                <li><b>The scale of the problem.</b>{" "}The World Health Organization puts amblyopia at 1–5% of the global population. In India, a study of children aged 5–15 found a prevalence of 1.67%, higher in rural areas than urban ones.</li>
                <li><b>Why conventional treatment falls short.</b>{" "}Patching means covering the stronger eye for at least six hours a day, six days a week, through school hours. The paper sets out the compliance problem, the discomfort and social stigma, the limited effect once the visual system has matured, and the risk of relapse.</li>
                <li><b>How the VR approach works.</b>{" "}Each eye is shown a different image of the same scene. The signal to the stronger eye is held back while the weaker eye’s is enhanced, and the gap narrows automatically as the patient improves — so the two eyes are pushed to work together rather than one being switched off.</li>
                <li><b>What was observed.</b>{" "}More than 170 patients took part, aged 5 to 35 and above, and a large proportion were past the critical age of nine. Among compliant patients who returned for follow-up, the paper reports 85% seeing at least a one-line improvement in vision, with a significant number also reporting better stereopsis.</li></ul>
              <p className="rnote">These are the authors’ early findings as published, described in the paper as initial results. Read the paper for the full method, the caveats and the references.</p></article>
            <aside className="rgate rv" id="rgate">
              <div className="rform" id="rformWrap">
                <div className="eb">Get the paper</div>
                <h4>Tell us where to send it.</h4>
                <p className="rgp">We will email you the PDF and let you know when there is new evidence worth reading. No newsletter, no sharing your details.</p>
                <form id="paperForm" name="research" method="POST" data-netlify="true" netlify-honeypot="bot-field" noValidate><input type="hidden" name="form-name" defaultValue="research" />
                  <p hidden><label>Leave this empty{" "}<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
                  <div className="f"><label htmlFor="rName">Name*</label><input id="rName" name="name" required autoComplete="name" /></div>
                  <div className="f"><label htmlFor="rEmail">Email address*</label><input id="rEmail" name="email" type="email" required autoComplete="email" /></div>
                  <div className="f"><label htmlFor="rOrg">Organisation*</label><input id="rOrg" name="organisation" required autoComplete="organization" /></div>
                  <div className="f"><label htmlFor="rRole">Your role</label>
                    <select id="rRole" name="role"><option>Clinician</option><option>Hospital or clinic management</option><option>Researcher or academic</option><option>Public health or NGO</option><option>School or employer</option><option>Something else</option></select></div><button className="btn p" type="submit">Get the paper{" "}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></button>
                  <p className="fmsg" id="rmsg" role="status"></p></form></div>
              <div className="rdone" id="rdone" hidden>
                <div className="rtick" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5 9.5 18 20 6.5" /></svg></div>
                <h4>Your download is starting.</h4>
                <p className="rgp">If nothing happened, use the button below.</p><a className="btn p" id="rdl" href="/docs/cognihab-amblyopia-publication.pdf" download="Cognihab-amblyopia-publication.pdf">Download the PDF{" "}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></a><a className="lnk" href="https://www.researchgate.net/publication/377399983_Unleashing_the_power_of_Virtual_Reality_to_manage_LAZY_EYE-A_silent_public_health_problem_A_case_study_from_India" target="_blank" rel="noopener">Or read it on ResearchGate{" "}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></a>
                <p className="rsize">PDF · 3 pages · 189 KB</p></div></aside></div></div></section>
      <section className="pillar-cta">
        <div className="wrap rt">
          <div>
            <h2>See the lazy eye programme run.</h2>
            <p>Bring an optometrist or an ophthalmologist. We will run a session on someone in the room and show the report.</p></div>
          <Link className="btn w" href="/contact/">Contact Us{" "}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link></div></section>
    </main>
  );
}
