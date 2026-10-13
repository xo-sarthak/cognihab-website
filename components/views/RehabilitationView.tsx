import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import { FAQS } from "@/content/faqs";
import UseCaseCards from "@/components/UseCaseCards";

export default function RehabilitationView() {
  return (
    <main className="view on" id="v-rehabilitation" data-view="rehabilitation">
      <section className="pg">
        <div className="pghero"><img className="pgimg" src="/media/pillar-body.jpg" alt="A patient in a VR headset mid-session while a clinician watches the skeleton tracking view" />
          <div className="scrim"></div></div>
        <div className="wrap">
          <div className="rt">
      <Breadcrumbs path="/rehabilitation/" />
            <div className="eb">VR rehabilitation</div>
            <h1>VR rehabilitation that scores itself.</h1>
            <p className="lead">CogniHab is a virtual reality rehabilitation system for hospitals, physiotherapy clinics, care homes, sports clinics and home programmes. Two scans that set a baseline in minutes. Thirty-four gamified tasks for the upper body and everyday actions. An exercise library of more than a thousand movements with a coach on screen and a camera checking the form. One report at the end of every session.</p>
            <div className="acts" style={{ display: "flex", gap: ".7rem", flexWrap: "wrap" }}>
              <Link className="btn p" href="/contact/?programme=rehabilitation">Book a rehabilitation demo{" "}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link><a className="btn o" href="#tasks">See the tasks</a></div></div></div></section>
      <section className="sec tight whatis" id="r-what">
        <div className="wrap wgrid">
          <div className="rt">
            <div className="eb g">Overview</div>
            <h2>What is VR rehabilitation?</h2>
            <p>VR rehabilitation uses a virtual reality headset to turn physiotherapy and occupational therapy exercises into guided, game-like tasks. Sensors track each movement, so the system can score it and report progress. CogniHab adds phone-camera scans and an AI-coached exercise library, so therapy can continue at home without the headset.</p></div>
          <aside className="facts rt" aria-label="At a glance">
            <div className="ft">At a glance</div>
            <ul>
              <li><b>34</b>{" "}Rehabilitation tasks</li>
              <li><b>1,000+</b>{" "}Coached exercises</li>
              <li><b>4</b>{" "}Posture scan views</li>
              <li><b>48</b>{" "}Joint movements measured</li>
              <li><b>Meta Quest or phone</b></li>
              <li><b>Session & programme reports</b></li>
              <li><b>Built in Jaipur, India</b></li></ul></aside></div></section>
      <section className="sec" id="r-cases">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb g">Use cases</div>
              <h2>VR Rehabilitation Use Cases</h2></div>
            <p>CogniHab provides{" "}<strong>VR rehabilitation</strong>{" "}for different conditions, recovery goals and care settings. The{" "}<strong>virtual reality rehabilitation system</strong>{" "}combines interactive rehabilitation tasks, guided exercises, movement assessments and progress tracking to support structured rehabilitation programmes.</p></div>
          <div className="ucards rt">
      <UseCaseCards programme="rehabilitation" /></div></div></section>
      <section className="sec tight" id="r-ways">
        <div className="wrap split">
          <div className="side rt">
            <div className="eb g">Delivery</div>
            <h2>Two ways to run it: in a VR headset or on a phone.</h2>
            <p>The full programme lives in the headset. The scans and the exercise library also run from a phone alone, which takes the headset out of the price entirely.</p></div>
          <div className="ways rt">
            <div className="wayc"><img src="/images/rehab-headset-clinic.jpg" alt="A patient in a VR headset mid-task in a rehabilitation room with a phone on a tripod and a physiotherapist at a laptop" loading="lazy" decoding="async" />
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-3l-3-3-3 3H6a3 3 0 0 1-3-3Z" /></svg></div>
              <div>
                <h3>In the headset</h3>
                <p>The full programme on a Meta Quest headset. Gamified tasks played with the controllers or with bare hands, plus the coached exercise library with the phone camera checking form. This is the clinic setup.</p>
                <div className="eq"><b>Needs</b>{" "}· Meta Quest headset · phone on a stand for the exercise library</div></div></div>
            <div className="wayc"><img src="/images/rehab-phone-home.jpg" alt="An older man does a seated knee extension at home facing a phone on a small tripod, no headset" loading="lazy" decoding="async" />
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg></div>
              <div>
                <h3>On a phone, no headset</h3>
                <p>The two scans and the coached exercise library run from a mobile phone camera alone. The patient stands in front of the phone and follows the coach on the screen. Nothing is worn. This is the setup for home programmes, care homes, fitness centres and screening at scale.</p>
                <div className="eq"><b>Needs</b>{" "}· a mobile phone on a stand · about two metres of clear floor</div></div></div></div></div></section>
      <section className="sec" id="tasks">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb g">The tasks</div>
              <h2>Thirty-four gamified rehabilitation tasks. Played with the controllers, or with bare hands.</h2></div>
            <p>Built for upper-body rehabilitation after stroke, spinal cord injury, head injury and cerebral palsy. A patient who cannot hold a controller uses bare-hand tracking instead.</p></div>
          <div className="strip rt">
            <figure>
              <div className="rv"><img src="/images/rehab-task-arm.jpg" alt="First-person view inside the headset: throwing a basketball toward a hoop" loading="lazy" decoding="async" /></div><figcaption>Whole-arm movement · Throwing a basketball</figcaption></figure>
            <figure>
              <div className="rv"><img src="/images/rehab-task-hand.jpg" alt="First-person view inside the headset: putting a key into a lock" loading="lazy" decoding="async" /></div><figcaption>Hand precision · Key and lock</figcaption></figure>
            <figure>
              <div className="rv"><img src="/images/rehab-task-daily.jpg" alt="First-person view inside the headset: pouring tea into a cup" loading="lazy" decoding="async" /></div><figcaption>Everyday action · Pouring tea</figcaption></figure></div>
          <div className="grids rt">
            <div>
              <h3>Reaching and grip{" "}<span>WHOLE-ARM AND HAND WORK</span></h3>
              <div className="chips"><span>Sorting balls</span><span>Cutting fruit</span><span>Playing the drum</span><span>Throwing a basketball</span><span>Ball in the basket</span><span>Turning a wheel</span><span>Clip and board</span><span>Ring and rod</span><span>Nail and hammer</span><span>Key and lock</span><span>Sweeping</span><span>Fitting shapes</span><span>Removing rings</span><span>Punching the bag</span><span>Placing a rod</span><span>Moving a ring along a path</span></div></div>
            <div>
              <h3>Everyday actions{" "}<span>ACTIVITIES OF DAILY LIVING</span></h3>
              <div className="chips"><span>Holding a spoon</span><span>Eating a meal</span><span>Eating fruit</span><span>Drinking water</span><span>Pouring tea</span><span>Brushing teeth</span><span>Putting on and taking off glasses</span><span>Picking up the phone</span><span>Switching lights on and off</span><span>Opening and closing a drawer</span><span>Opening and closing a window</span><span>Opening and closing a rack</span><span>Opening and closing a tap</span><span>Opening and closing a cabinet</span><span>Opening and closing curtains</span><span>Watering a plant</span><span>Changing a bulb</span><span>Painting on a canvas</span></div></div></div>
          <p className="under rt">Every task is scored automatically, so function returning is something the therapist can see rather than judge.</p></div></section>
      <section className="sec tight" id="r-library" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap split">
          <div className="side rt">
            <div className="eb g">The exercise library</div>
            <h2>More than a thousand exercises, with a coach and a camera.</h2>
            <p>A trainer on screen demonstrates each movement. The patient mirrors it. A phone camera watches and scores the form of every repetition, so the exercise is either being done properly or the patient is told it is not.</p>
            <p style={{ marginTop: "1rem", fontSize: ".95rem" }}>Programmes can be generated from a scan result, or built by the clinician movement by movement.</p></div>
          <div className="rt">
            <div className="rv wide"><img src="/images/rehab-coach.jpg" alt="A patient mid-lunge in front of a phone on a tripod while a coach on a wall screen performs the same movement" loading="lazy" decoding="async" /></div>
            <div className="cats">
              <div className="cat"><b>Lower limb</b><span>Knee, hip, ankle and foot</span></div>
              <div className="cat"><b>Upper limb</b><span>Shoulder, elbow, wrist and hand</span></div>
              <div className="cat"><b>Spine and core</b><span>Cervical, thoracic and lumbar work</span></div>
              <div className="cat"><b>Mobility and stretching</b><span>Whole-body flexibility</span></div>
              <div className="cat"><b>Strength and conditioning</b><span>Including higher-intensity work</span></div>
              <div className="cat"><b>Balance and body awareness</b><span>Fall prevention and proprioception</span></div>
              <div className="cat"><b>Nerve glides</b><span>Median, ulnar, radial and femoral</span></div>
              <div className="cat"><b>Assisted and passive</b><span>For patients with very limited movement</span></div>
              <div className="cat"><b>Equipment variants</b><span>Resistance band, exercise ball, foam roller, dumbbells</span></div>
              <div className="cat"><b>Left and right versions</b><span>Every movement, so one side can be worked alone</span></div></div></div></div></section>
      <section className="sec" id="r-scans">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb g">The two scans</div>
              <h2>Measured before, measured after.</h2></div>
            <p>Both scans run from the phone camera, take minutes, and need no second person in the room. The same scan repeated later sits next to the first, so the change is a number.</p></div>
          <div className="two rt">
            <div className="scan">
              <div className="fig ph"><img src="/images/rehab-scan-posture.jpg" alt="A woman stands straight, side-on to a phone on a tripod, for the posture scan" loading="lazy" decoding="async" /></div>
              <div className="fig">
                <svg viewBox="0 0 400 250" fill="none" aria-hidden="true">
                  <g stroke="#0E4553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <g transform="translate(50 30)"><circle cx="30" cy="16" r="11" /><path d="M30 27v52M30 40l-22 20M30 40l22 20M30 79l-12 56M30 79l12 56" /></g>
                    <g transform="translate(140 30)"><circle cx="30" cy="16" r="11" /><path d="M30 27v52M30 40l-22 20M30 40l22 20M30 79l-12 56M30 79l12 56" /></g>
                    <g transform="translate(230 30)"><circle cx="30" cy="16" r="11" /><path d="M30 27v52M30 40l6 22M30 79l4 56M30 40l-2 22" /></g>
                    <g transform="translate(320 30)"><circle cx="30" cy="16" r="11" /><path d="M30 27v52M30 40l-6 22M30 79l-4 56M30 40l2 22" /></g></g>
                  <g fill="#E4646C"><circle cx="80" cy="70" r="3.5" /><circle cx="170" cy="70" r="3.5" /><circle cx="260" cy="70" r="3.5" /><circle cx="350" cy="70" r="3.5" /><circle cx="80" cy="109" r="3.5" /><circle cx="170" cy="109" r="3.5" /><circle cx="260" cy="109" r="3.5" /><circle cx="350" cy="109" r="3.5" /></g>
                  <g fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill="#8296a0" textAnchor="middle" letterSpacing="1.2"><text x="80" y="200">FRONT</text><text x="170" y="200">BACK</text><text x="260" y="200">LEFT</text><text x="350" y="200">RIGHT</text></g><path d="M40 215h320" stroke="#e0eff3" /><text x="200" y="236" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#E4646C" textAnchor="middle" letterSpacing="1">4 VIEWS · UNDER 2 MINUTES · 2 M FROM THE PHONE</text></svg></div>
              <div className="out">Posture scan</div>
              <h3>Four views, under two minutes.</h3>
              <p>The patient stands about two metres from the phone with their full body in frame. A voice guides them through four positions, front, back, left side and right side, holding each one while it captures. No hands-on measurement and no second person needed.</p>
              <p><b>What comes out:</b>{" "}a full-body postural analysis with the risks it identifies and the recommendations that follow from them, ready to compare with the next scan.</p></div>
            <div className="scan">
              <div className="fig ph"><img src="/images/rehab-scan-joint.jpg" alt="A woman seated on a stool raises one straight leg toward a phone on a tripod for the joint movement scan" loading="lazy" decoding="async" /></div>
              <div className="fig">
                <svg viewBox="0 0 400 250" fill="none" aria-hidden="true">
                  <g fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#0E4553"><text x="30" y="46">Shoulder flexion</text><rect x="200" y="38" width="150" height="8" rx="4" fill="#e0eff3" /><rect x="200" y="38" width="128" height="8" rx="4" fill="#E4646C" /><text x="380" y="46" textAnchor="end" fill="#E4646C">154°</text><text x="30" y="80">Shoulder abduction</text><rect x="200" y="72" width="150" height="8" rx="4" fill="#e0eff3" /><rect x="200" y="72" width="118" height="8" rx="4" fill="#E4646C" /><text x="380" y="80" textAnchor="end" fill="#E4646C">142°</text><text x="30" y="114">Elbow flexion</text><rect x="200" y="106" width="150" height="8" rx="4" fill="#e0eff3" /><rect x="200" y="106" width="136" height="8" rx="4" fill="#4AA3B6" /><text x="380" y="114" textAnchor="end" fill="#4AA3B6">138°</text><text x="30" y="148">Hip flexion</text><rect x="200" y="140" width="150" height="8" rx="4" fill="#e0eff3" /><rect x="200" y="140" width="96" height="8" rx="4" fill="#4AA3B6" /><text x="380" y="148" textAnchor="end" fill="#4AA3B6">88°</text><text x="30" y="182">Knee flexion</text><rect x="200" y="174" width="150" height="8" rx="4" fill="#e0eff3" /><rect x="200" y="174" width="122" height="8" rx="4" fill="#1C7E93" /><text x="380" y="182" textAnchor="end" fill="#1C7E93">121°</text><text x="30" y="216">Ankle dorsiflexion</text><rect x="200" y="208" width="150" height="8" rx="4" fill="#e0eff3" /><rect x="200" y="208" width="60" height="8" rx="4" fill="#1C7E93" /><text x="380" y="216" textAnchor="end" fill="#1C7E93">18°</text></g><text x="200" y="240" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8296a0" textAnchor="middle" letterSpacing="1">ILLUSTRATIVE VALUES · 6 OF 48 MOVEMENTS</text></svg></div>
              <div className="out">Joint movement scan</div>
              <h3>Forty-eight movements, measured in degrees.</h3>
              <p>Upper body measured standing, side-on to the camera. Lower body measured seated, facing it. Each movement is captured at the patient's maximum and recorded in degrees, so the same scan repeated in six weeks sits next to the first one and the change is a number.</p>
              <p><b>Examples of what is measured:</b>{" "}shoulder flexion and abduction, elbow flexion, wrist extension, hip flexion, knee flexion, ankle dorsiflexion, neck rotation.</p></div></div></div></section>
      <section className="sec tight" id="r-report" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap rep">
          <div className="rt">
            <div className="eb g">What the clinician gets</div>
            <h2>One report per session, one per programme.</h2>
            <ul>
              <li><i>
                  <svg viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.5l2.5 2.5 4.5-5" /></svg></i><span>What was completed in the session: which tasks, which exercises, how many repetitions.</span></li>
              <li><i>
                  <svg viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.5l2.5 2.5 4.5-5" /></svg></i><span>How well it was done: the form score the camera gave each repetition, and the score each task earned.</span></li>
              <li><i>
                  <svg viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.5l2.5 2.5 4.5-5" /></svg></i><span>The scans set against the baseline, so the programme report shows movement returning in degrees.</span></li>
              <li><i>
                  <svg viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.5l2.5 2.5 4.5-5" /></svg></i><span>Ready to hand to the patient, the family or the referring doctor.</span></li></ul></div>
          <div className="rt repcol">
            <div className="rv"><img src="/images/rehab-report.jpg" alt="A physiotherapist shows a tablet report to a seated older patient" loading="lazy" decoding="async" /></div>
            <div className="fig">
              <svg viewBox="0 0 400 400" fill="none" aria-hidden="true"><rect x="70" y="60" width="260" height="290" rx="16" fill="#f5f9fa" stroke="#e0eff3" /><text x="92" y="94" fontFamily="Manrope,sans-serif" fontSize="17" fontWeight="700" fill="#0E4553">Programme report</text><text x="92" y="112" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8296a0">6 WEEKS · 18 SESSIONS</text>
                <g fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#5A6E76"><text x="92" y="148">Sessions completed</text><rect x="92" y="156" width="216" height="8" rx="4" fill="#e0eff3" /><rect x="92" y="156" width="194" height="8" rx="4" fill="#E4646C" /><text x="308" y="150" textAnchor="end" fill="#0E4553">18 / 20</text><text x="92" y="194">Average form score</text><rect x="92" y="202" width="216" height="8" rx="4" fill="#e0eff3" /><rect x="92" y="202" width="199" height="8" rx="4" fill="#4AA3B6" /><text x="308" y="196" textAnchor="end" fill="#0E4553">92%</text><text x="92" y="240">Shoulder flexion vs baseline</text><rect x="92" y="248" width="216" height="8" rx="4" fill="#e0eff3" /><rect x="92" y="248" width="150" height="8" rx="4" fill="#1C7E93" /><text x="308" y="242" textAnchor="end" fill="#E4646C">+38°</text></g><rect x="92" y="280" width="216" height="46" rx="10" fill="#fff" stroke="#e0eff3" /><circle cx="112" cy="303" r="9" fill="#E4646C" /><path d="M107 303l3.5 3.5 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><text x="130" y="299" fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill="#0E4553">Ready to share</text><text x="130" y="313" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8296a0">Patient · family · referring doctor</text><text x="200" y="372" fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8296a0" textAnchor="middle" letterSpacing="1">ILLUSTRATIVE</text></svg></div></div></div></section>
      <section className="sec tight why" id="r-why">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb g">Why VR rehabilitation</div>
              <h2>Why clinics choose VR rehabilitation</h2></div></div>
          <div className="whyg rt">
            <div className="whyc">
              <h3>Patients finish what they start</h3>
              <p>Therapy is a game, and every task is built to be completed.</p></div>
            <div className="whyc">
              <h3>Progress is measured, not judged</h3>
              <p>Every repetition and task is scored, and scans are in degrees.</p></div>
            <div className="whyc">
              <h3>Therapy continues at home</h3>
              <p>The scans and exercise library run on a phone alone, and the clinic sees what was done.</p></div>
            <div className="whyc">
              <h3>Less specialist time per session</h3>
              <p>Voice guidance means a trained assistant can run sessions the clinician has prescribed.</p></div></div></div></section>
      <section className="sec tight" id="r-equipment">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb g">What the buyer needs</div>
              <h2>The equipment for VR rehabilitation</h2></div>
            <p>Everything a clinic, care home, gym or household has to have in the room for each part of the programme.</p></div>
          <div className="tblwrap rt">
            <table className="eqt">
              <thead>
                <tr><th>Programme</th><th>What the buyer needs</th></tr></thead>
              <tbody>
                <tr><td>Gamified tasks</td><td>Meta Quest headset only. Controllers or bare hands.</td></tr>
                <tr><td>Coached exercise library</td><td>Headset, plus a phone on a stand about two metres away with the full body in frame, plus clear floor space. Or the phone alone.</td></tr>
                <tr><td>Posture scan</td><td>Phone camera. Four standing positions, under two minutes.</td></tr>
                <tr><td>Joint movement scan</td><td>Same phone setup, plus a chair for the seated movements.</td></tr>
                <tr><td>Phone-only delivery</td><td>Phone camera alone, nothing worn. Scans and the exercise library.</td></tr></tbody></table></div></div></section>
      <section className="sec faq" id="r-faq">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">FAQ</div>
              <h2>VR rehabilitation: common questions</h2></div>
            <p>What clinics and care teams ask before they start.</p></div>
          <div className="list rt">
      <FaqList items={FAQS["rehabilitation"]} /></div></div></section>
      <section className="pillar-cta">
        <div className="wrap rt">
          <div>
            <h2>See How CogniHab Supports VR Rehabilitation</h2>
            <p>Bring structured rehabilitation, movement tracking and progress reporting into your clinical or care setting.</p>
            <p>See how CogniHab can support rehabilitation programmes through guided exercises, interactive tasks, posture and joint movement scans, and session reports.</p>
            <p className="talk">WhatsApp / Call{" "}<a href="tel:+917426060606">+91 74260 60606</a>{" "}·{" "}<a href="mailto:info@cognihab.com">info@cognihab.com</a></p>
            <p className="also">Explore other CogniHab programmes:{" "}
              <Link href="/vision/">VR Vision Therapy</Link>{" "}·{" "}
              <Link href="/well-being/">VR Well-being</Link></p></div>
          <div className="pcta-acts">
            <Link className="btn w" href="/contact/?programme=rehabilitation">Book a VR Rehabilitation Demo{" "}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
            <Link className="btn o" href="/contact/">Contact the CogniHab Team</Link></div></div></section>
    </main>
  );
}
