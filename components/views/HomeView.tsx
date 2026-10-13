import Link from "next/link";
import FaqList from "@/components/FaqList";
import { FAQS } from "@/content/faqs";

export default function HomeView() {
  return (
    <main className="view on" id="v-home" data-view="home">
      <section className="hero" id="hero" aria-label="Introduction">
        <div className="bg">
          <div className="stage" id="stage">
            <video id="heroScrub" muted playsInline preload="auto" src="/media/hero_scrub.mp4" aria-hidden="true"></video>
            <div className="grid" id="heroGrid"></div>
            <svg className="ov" viewBox="0 0 1920 1080" aria-hidden="true"><line id="refL" x1="1128" y1="495" x2="1128" y2="795" stroke="#0E4553" strokeWidth="2" strokeDasharray="6 8" opacity=".45" /><path id="arcL" d="" fill="rgba(228,100,108,.12)" stroke="#E4646C" strokeWidth="3" /><line id="lnL" stroke="#4AA3B6" strokeWidth="3" strokeLinecap="round" opacity=".9" /><line id="lnR" stroke="#4AA3B6" strokeWidth="3" strokeLinecap="round" opacity=".9" /><circle cx="1128" cy="495" r="9" fill="#E4646C" stroke="#fff" strokeWidth="3" /><circle cx="1452" cy="495" r="9" fill="#E4646C" stroke="#fff" strokeWidth="3" /><circle id="hL" r="11" fill="#fff" stroke="#4AA3B6" strokeWidth="4" /><circle id="hR" r="11" fill="#fff" stroke="#4AA3B6" strokeWidth="4" />
              <g id="lab" fontFamily="JetBrains Mono,monospace" textAnchor="end"><text id="labT" fontSize="22" letterSpacing="3" fill="#5A6E76">SHOULDER ABDUCTION</text><text id="labA" y="70" fontSize="64" fontWeight="500" fill="#0E4553">0°</text></g></svg></div>
          <div className="copy">
            <div className="eb hl0">Rehabilitation · Vision care · Well-being</div>
            <h1 className="hl0">VR healthcare solutions you can{" "}<em>measure.</em></h1>
            <p className="lead hl0">CogniHab brings VR healthcare solutions to hospitals, clinics, employers, public health programmes, fitness centres and people at home: VR rehabilitation, vision therapy and guided well-being on one headset. CogniHab is a digital therapeutics platform delivered through virtual reality. Each person trains inside guided immersive sessions, the system scores every movement, and the report is ready at the end.</p>
            <div className="acts hl0">
              <Link className="btn p" href="/contact/">Book a demo{" "}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link><a className="btn o" href="#walkthrough">See what it does</a></div>
            <div className="reads" id="reads" aria-hidden="true">
              <div data-at=".06"><span>Posture scan</span><b>4 views</b><i></i></div>
              <div data-at=".22"><span>Joint movement</span><b id="romRead">0°</b><i></i></div>
              <div data-at=".62"><span>Form check</span><b>every rep</b><i></i></div>
              <div data-at=".9"><span>Report</span><b>ready</b><i></i></div></div></div>
          <div className="prog" id="prog" aria-hidden="true">
            <div className="ring">
              <svg viewBox="0 0 64 64"><circle className="bgc" cx="32" cy="32" r="28" /><circle className="fgc" id="progArc" cx="32" cy="32" r="28" /><path className="tick" d="M22 33l7 7 13-14" /></svg><span className="pct" id="progPct">0%</span><span className="burst"></span></div><span className="lab" id="progLab">Scroll to raise the arms</span></div></div></section>
      <section className="sec kit" id="kit">
        <div className="wrap">
          <div className="rt">
            <div className="eb">The equipment</div>
            <h2>The VR therapy kit: a headset, a phone, and three programmes running on them.</h2>
            <p>One Meta Quest headset carries all three CogniHab programmes. Rehabilitation adds an ordinary mobile phone on a stand so the camera can see the whole body. There is no other equipment to buy and nothing to install in the room.</p>
            <div className="cnt">
              <div><b>34</b><span>Rehabilitation tasks</span></div>
              <div><b>1,000<small>+</small></b><span>Coached exercises</span></div>
              <div><b>48</b><span>Joint movements per scan</span></div>
              <div><b>4</b><span>Posture scan views</span></div>
              <div><b>11</b><span>Lazy eye therapy games</span></div>
              <div><b>11</b><span>Well-being journeys</span></div></div></div>
          <div className="kitfig rt photo">
            <div className="lab"><i></i>The complete kit</div><img src="/images/home-kit.jpg" alt="The CogniHab kit: a white VR headset with two controllers, a phone on a tripod, mobile VR goggles and a handheld remote" loading="lazy" decoding="async" /></div>
          <div className="opts rt">
            <div className="opt">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg></div>
              <div><b>Phone only, no headset</b><span>The two scans and the coached exercise library run from a mobile phone camera alone. Nothing is worn. A lower-cost setup for homes, care homes and fitness centres.</span></div></div>
            <div className="opt">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-3l-3-3-3 3H6a3 3 0 0 1-3-3Z" /></svg></div>
              <div><b>Mobile VR goggles</b><span>Lazy eye therapy and the well-being journeys also run on lightweight goggles that hold a mobile phone, for use at home.</span></div></div>
            <div className="opt">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0M16 4.5a3.2 3.2 0 0 1 0 6.4M21 20a6 6 0 0 0-4-5.6" /></svg></div>
              <div><b>One headset, many people</b><span>Every user has their own login, so one device holds many profiles and each person's history stays separate.</span></div></div></div></div></section>
      <section className="sec walk" id="walkthrough">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">Watch</div>
              <h2>Watch how VR therapy works at CogniHab.</h2></div>
            <p>A short film on what immersive therapy changes for vision care, stroke rehabilitation and everyday well-being — who it is for, and why recovery goes faster when treatment is something people want to do.</p></div>
          <div className="player rt" id="player">
            <video id="walkVideo" preload="none" playsInline controlsList="nodownload" disablePictureInPicture poster="/images/walkthrough-poster.jpg" src="/video/cognihab-overview.mp4"></video><button className="playbtn" id="playBtn" type="button" aria-label="Play the film"><span className="pb">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span><span className="pl">Play the film</span><span className="pd">3 min 35 s · with sound</span></button></div>
          <div className="walk-row rt">
            <Link className="lnk" href="/contact/">Book a live demo{" "}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link></div></div></section>
      <section className="sec tight progs" id="programmes">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">Programmes</div>
              <h2>Three VR therapy programmes on one platform.</h2></div>
            <p>VR rehabilitation, VR vision therapy and VR well-being, each with its own scans, sessions and reports.</p></div></div></section>
      <section className="ch" id="p-body">
        <div className="bg">
          <picture><source media="(max-width:760px)" srcSet="/media/pillar-body-tall.jpg" /><img src="/media/pillar-body.jpg" alt="A patient wearing a VR headset raises both arms while a clinician watches a skeleton-tracking view on a wall screen" loading="lazy" decoding="async" /></picture>
          <div className="chip"><i></i>Rehabilitation</div>
          <div className="big"><span>Movement,</span><span>measured.</span></div></div>
        <div className="fl">
          <div className="scene"></div>
          <div className="scene">
            <div className="cap"><b>What the clinician sees</b>Live skeleton tracking, joint angles and a score for every repetition.</div>
            <div className="plate rt" id="plate-body">
              <div className="inner">
                <div className="face front">
                  <Link className="lnk plink" href="/rehabilitation/">Explore VR rehabilitation{" "}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
                  <div className="eb g">Programme · Rehabilitation</div>
                  <h3>VR rehabilitation: Movement, measured.</h3>
                  <ul>
                    <li>Gamified tasks for upper-body rehabilitation after stroke, spinal cord injury, head injury and cerebral palsy.</li>
                    <li>An AI coach with over 1,000 exercises, form-checked by a phone camera.</li>
                    <li>Posture and joint movement scans that turn recovery into numbers.</li></ul>
                  <div className="eqtag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-3l-3-3-3 3H6a3 3 0 0 1-3-3Z" /></svg>Headset + phone camera · or phone only</div>
                  <div className="prow"><button className="flipbtn" data-flip="plate-body">See more details</button></div></div>
                <div className="face back">
                  <Link className="lnk plink" href="/rehabilitation/">Explore VR rehabilitation{" "}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
                  <h4>What it does</h4>
                  <p>A posture scan and a joint movement scan set the patient's baseline in a few minutes. From there the patient works through therapy tasks in the headset, or follows a coach through exercises while the phone camera checks their form on every repetition. Everything is scored, so progress shows up as numbers rather than impressions.</p>
                  <h4>What it is used for</h4>
                  <div className="chips">
                    <Link href="/rehabilitation/stroke-neurological-rehabilitation/">Stroke recovery</Link>
                    <Link href="/rehabilitation/spinal-injury-rehabilitation/">Spinal cord injury</Link>
                    <Link href="/rehabilitation/stroke-neurological-rehabilitation/">Head injury</Link>
                    <Link href="/rehabilitation/stroke-neurological-rehabilitation/">Cerebral palsy</Link>
                    <Link href="/rehabilitation/orthopaedic-post-surgical-recovery/">Orthopaedic and post-surgical recovery</Link>
                    <Link href="/rehabilitation/sports-rehabilitation-fitness/">Sports injury</Link>
                    <Link href="/rehabilitation/sports-rehabilitation-fitness/">Day-to-day fitness</Link>
                    <Link href="/rehabilitation/senior-care-fall-prevention/">Age-related weakness and falls</Link>
                    <Link href="/well-being/workplace-wellbeing/">Postural strain from desk work</Link>
                    <Link href="/rehabilitation/sports-rehabilitation-fitness/">Day-to-day fitness</Link></div>
                  <h4>Where it is used</h4>
                  <div className="chips"><span>Hospital rehabilitation units</span><span>Physiotherapy and occupational therapy departments</span><span>Sports clinics</span><span>Senior care homes</span><span>Corporate offices</span><span>Fitness centres</span><span>Home programmes supervised from the clinic</span></div>
                  <div className="prow"><button className="flipbtn" data-flip="plate-body">Back</button></div></div></div></div></div></div></section>
      <section className="ch" id="p-vision">
        <div className="bg">
          <picture><source media="(max-width:760px)" srcSet="/media/pillar-vision-tall.jpg" /><img src="/media/pillar-vision.jpg" alt="A doctor points at a screen while a child wearing a VR headset follows a vision exercise" loading="lazy" decoding="async" /></picture>
          <div className="chip"><i></i>Vision care</div>
          <div className="big"><span>Eye care a child</span><span>will sit still for.</span></div></div>
        <div className="fl">
          <div className="scene"></div>
          <div className="scene">
            <div className="cap"><b>Screening, not diagnosis</b>Anyone flagged is referred to an ophthalmologist.</div>
            <div className="plate v rt" id="plate-vision">
              <div className="inner">
                <div className="face front">
                  <Link className="lnk plink" href="/vision/">Explore VR vision therapy{" "}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
                  <div className="eb">Programme · Vision care</div>
                  <h3>VR vision therapy and screening: Eye care a child will sit still for.</h3>
                  <ul>
                    <li>An immersive therapy for lazy eye (amblyopia), delivered as a structured programme of short sessions.</li>
                    <li>Guided vision screening: several tests, one after another, in under ten minutes, with a detailed report at the end.</li>
                    <li>Built for eye clinics, schools, workplaces and community programmes.</li></ul>
                  <div className="eqtag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-3l-3-3-3 3H6a3 3 0 0 1-3-3Z" /></svg>Headset in clinic · goggles at home for lazy eye</div>
                  <div className="prow"><button className="flipbtn" data-flip="plate-vision">See more details</button></div></div>
                <div className="face back">
                  <Link className="lnk plink" href="/vision/">Explore VR vision therapy{" "}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
                  <h4>Lazy eye therapy</h4>
                  <p>Each eye is shown a different part of the same scene, so the game can only be completed if the weaker eye is doing its share of the work. The child plays, and the therapy happens while they play. Sessions run about fifteen minutes and the clinic can see whether they are being completed between visits.</p>
                  <h4>Vision screening</h4>
                  <p>The tests run one after another inside the headset, in under ten minutes, and a detailed report is presented at the end. Each result is either clear or a referral to an ophthalmologist.</p>
                  <h4>What it is used for</h4>
                  <div className="chips">
                    <Link href="/vision/lazy-eye-therapy/">Amblyopia, commonly called lazy eye</Link>
                    <Link href="/vision/vision-screening/">Undetected vision problems in children and adults</Link></div>
                  <h4>Where it is used</h4>
                  <div className="chips"><span>Eye clinics</span><span>Paediatric departments</span><span>Optometry practices</span><span>Schools</span><span>Community screening days</span><span>Primary care networks</span><span>Corporate offices</span></div>
                  <div className="std">Screening indicates when an ophthalmologist should be consulted. It is not a diagnosis.</div>
                  <div className="prow"><button className="flipbtn" data-flip="plate-vision">Back</button></div></div></div></div></div></div></section>
      <section className="ch" id="p-mind">
        <div className="bg">
          <picture><source media="(max-width:760px)" srcSet="/media/pillar-mind-tall.jpg" /><img src="/media/pillar-mind.jpg" alt="A woman reclines in a chair wearing a VR headset during a guided relaxation session" loading="lazy" decoding="async" /></picture>
          <div className="chip"><i></i>Well-being</div>
          <div className="big"><span>A quieter room,</span><span>anywhere.</span></div></div>
        <div className="fl">
          <div className="scene"></div>
          <div className="scene">
            <div className="cap"><b>Eleven guided journeys</b>Breathing, humming and voice, no prior experience needed.</div>
            <div className="plate m rt" id="plate-mind">
              <div className="inner">
                <div className="face front">
                  <Link className="lnk plink" href="/well-being/">Explore VR well-being programmes{" "}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
                  <div className="eb" style={{ color: "var(--royal)" }}>Programme · Well-being</div>
                  <h3>VR meditation and well-being: A quieter room, anywhere.</h3>
                  <ul>
                    <li>Eleven guided journeys built on breathing, humming and voice.</li>
                    <li>Eight to ten minutes each, taken sitting down, with no experience needed.</li>
                    <li>A short DASS check-in for stress, anxiety and depression before and after, so the change is a number.</li></ul>
                  <div className="eqtag">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-3l-3-3-3 3H6a3 3 0 0 1-3-3Z" /></svg>Headset + headphones · or mobile VR goggles + phone</div>
                  <div className="prow"><button className="flipbtn" data-flip="plate-mind">See more details</button></div></div>
                <div className="face back">
                  <Link className="lnk plink" href="/well-being/">Explore VR well-being programmes{" "}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
                  <h4>What it does</h4>
                  <p>The person puts on the headset and is taken through a natural scene while a voice guides their breathing. Some journeys use humming or the voice itself to settle the body. They sit throughout, and nothing is asked of them beyond following along.</p>
                  <h4>What it is used for</h4>
                  <div className="chips">
                    <Link href="/well-being/at-home/">Day-to-day mindfulness</Link>
                    <Link href="/well-being/workplace-wellbeing/">Stress at work</Link>
                    <Link href="/well-being/care-settings/">Settling patients before or between procedures</Link>
                    <Link href="/well-being/care-settings/">Quiet time in senior care</Link></div>
                  <h4>Where it is used</h4>
                  <div className="chips"><span>Employers and workplace health programmes</span><span>Hospitals and clinics</span><span>Senior care homes</span><span>At home</span></div>
                  <div className="prow"><button className="flipbtn" data-flip="plate-mind">Back</button></div></div></div></div></div></div></section>
      <section className="sec sess" id="session">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">How a session runs</div>
              <h2>What a session looks like, from the door to the report.</h2></div></div>
          <div className="tabs rt" role="tablist"><button role="tab" aria-selected="true" data-tab="rehab">Rehabilitation</button><button role="tab" aria-selected="false" data-tab="vision">Vision</button><button role="tab" aria-selected="false" data-tab="mind">Well-being</button></div>
          <div className="pane on" data-pane="rehab">
            <div className="visual">
              <div className="rv"><img src="/images/home-session-rehab.jpg" alt="A patient holds a posture-scan pose two metres from a phone on a tripod while a physiotherapist watches" loading="lazy" decoding="async" /></div>
              <div className="screen">
                <div className="lab"><i></i>Phone on a stand · posture scan</div>
                <svg viewBox="0 0 400 300" fill="none" aria-hidden="true"><rect x="24" y="40" width="352" height="220" rx="16" fill="#f5f9fa" stroke="#e0eff3" />
                  <g stroke="#dbe8ec"><path d="M24 150h352M200 40v220" /></g>
                  <g stroke="#0E4553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="200" cy="82" r="13" /><path d="M200 95v58M200 110l-30 22M200 110l30 22M200 153l-16 62M200 153l16 62" /></g>
                  <g fill="#E4646C"><circle cx="200" cy="110" r="4" /><circle cx="170" cy="132" r="4" /><circle cx="230" cy="132" r="4" /><circle cx="200" cy="153" r="4" /><circle cx="184" cy="215" r="4" /><circle cx="216" cy="215" r="4" /></g><path d="M120 60v180" stroke="#E4646C" strokeDasharray="4 4" opacity=".5" /><path d="M280 60v180" stroke="#E4646C" strokeDasharray="4 4" opacity=".5" />
                  <g fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill="#8296a0" letterSpacing="1.2"><text x="36" y="60">FRONT</text><text x="36" y="245">STEP BACK · 2 M</text><text x="364" y="60" textAnchor="end">VIEW 1 OF 4</text></g>
                  <g fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#0E4553"><text x="36" y="120">Shoulder level</text><text x="36" y="134" fill="#E4646C">within range</text><text x="364" y="120" textAnchor="end">Head tilt</text><text x="364" y="134" textAnchor="end" fill="#4AA3B6">3°</text><text x="36" y="200">Hip level</text><text x="36" y="214" fill="#E4646C">within range</text></g><rect x="24" y="268" width="352" height="20" rx="10" fill="#e0eff3" /><rect x="24" y="268" width="88" height="20" rx="10" fill="#E4646C" /><text x="200" y="282" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#0E4553" textAnchor="middle" letterSpacing="1">HOLD STILL · CAPTURING</text></svg></div></div>
            <div className="steps rt">
              <div className="step"><span className="n">01</span>
                <div><b>First visit</b>
                  <p>The patient stands about two metres from a phone on a stand. A voice guides them through four standing positions for the posture scan, then through the joint movements. Under five minutes, no hands-on measurement, no goniometer.</p></div></div>
              <div className="step"><span className="n">02</span>
                <div><b>The programme</b>
                  <p>The clinician reviews the scan and sets the programme, either taking the one the system generates from the scan or building it themselves.</p></div></div>
              <div className="step"><span className="n">03</span>
                <div><b>The session</b>
                  <p>The patient puts on the headset and works through their tasks or exercises. A coach on screen demonstrates each movement. The camera scores the form of every repetition as they go.</p></div></div>
              <div className="step"><span className="n">04</span>
                <div><b>Between visits</b>
                  <p>The patient continues at home on the same programme, on the headset or on a phone alone. The clinic can see what was completed and how well.</p></div></div>
              <div className="step"><span className="n">05</span>
                <div><b>The report</b>
                  <p>A report comes out per session and per programme, ready to hand to the patient, the family or the referring doctor.</p></div></div>
              <div className="step"><span className="n">06</span>
                <div><b>The next scan</b>
                  <p>The same scan repeated later sits next to the first one, so the change is a number rather than an opinion.</p></div></div></div></div>
          <div className="pane" data-pane="vision">
            <div className="visual">
              <div className="rv"><img src="/images/home-session-vision.jpg" alt="A boy in a VR headset sits in an eye clinic beside a clinic assistant holding a tablet" loading="lazy" decoding="async" /></div>
              <div className="screen">
                <div className="lab"><i className="b"></i>Inside the headset · screening</div>
                <svg viewBox="0 0 400 300" fill="none" aria-hidden="true"><rect x="24" y="40" width="352" height="220" rx="16" fill="#0E2A31" />
                  <g fontFamily="JetBrains Mono,monospace" fontSize="9.5" letterSpacing="1.2" fill="#7fc7da"><text x="40" y="62">CHECK 3 OF 6</text><text x="360" y="62" textAnchor="end">CONTRAST SENSITIVITY</text></g>
                  <g fill="#fff"><circle cx="90" cy="150" r="26" opacity="1" /><circle cx="160" cy="150" r="26" opacity=".55" /><circle cx="230" cy="150" r="26" opacity=".28" /><circle cx="300" cy="150" r="26" opacity=".12" /></g>
                  <g stroke="#E4646C" strokeWidth="2"><circle cx="230" cy="150" r="34" strokeDasharray="5 5" /></g><text x="200" y="215" fontFamily="Instrument Sans,sans-serif" fontSize="12" fill="#bfdde6" textAnchor="middle">Point at the faintest circle you can see</text>
                  <g fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#7fc7da" letterSpacing="1"><text x="40" y="244">ACUITY ✓</text><text x="118" y="244">DEPTH ✓</text><text x="190" y="244" fill="#E4646C">CONTRAST ●</text><text x="278" y="244">COORDINATION</text></g><rect x="24" y="268" width="352" height="20" rx="10" fill="#e0eff3" />
                  <g fontFamily="JetBrains Mono,monospace" fontSize="9" letterSpacing="1"><text x="40" y="282" fill="#0E4553">RESULT</text><text x="200" y="282" fill="#8296a0" textAnchor="middle">CLEAR</text><text x="360" y="282" fill="#4AA3B6" textAnchor="end">REFER TO OPHTHALMOLOGIST</text></g></svg></div></div>
            <div className="steps rt">
              <div className="step"><span className="n">01</span>
                <div><b>On arrival</b>
                  <p>The person puts on the headset. A voice walks them through every check, so a trained assistant can run it without a clinician present.</p></div></div>
              <div className="step"><span className="n">02</span>
                <div><b>The checks</b>
                  <p>Visual acuity, contrast sensitivity, depth perception, eye coordination, colour vision and near focusing, one after another, in under ten minutes.</p></div></div>
              <div className="step"><span className="n">03</span>
                <div><b>The report</b>
                  <p>A detailed report is presented at the end. Each result is either clear or a referral to an ophthalmologist. Screening indicates when to consult; it does not diagnose.</p></div></div>
              <div className="step"><span className="n">04</span>
                <div><b>Lazy eye therapy</b>
                  <p>Where amblyopia is being treated, the clinic prescribes a programme of eleven games. Each eye sees a different part of the same scene, so the game can only be completed if the weaker eye does its share of the work.</p></div></div>
              <div className="step"><span className="n">05</span>
                <div><b>At home</b>
                  <p>Sessions of about fifteen minutes continue on lightweight goggles with a handheld remote, without the family travelling to the clinic.</p></div></div>
              <div className="step"><span className="n">06</span>
                <div><b>Between visits</b>
                  <p>The clinic can see whether sessions are being completed, and adjusts the programme at the next appointment.</p></div></div></div></div>
          <div className="pane" data-pane="mind">
            <div className="visual">
              <div className="rv"><img src="/images/home-session-mind.jpg" alt="An office worker relaxes in an armchair wearing a VR headset and headphones in a quiet corner of the office" loading="lazy" decoding="async" /></div>
              <div className="screen">
                <div className="lab"><i></i>Inside the headset · check-in and journey</div>
                <svg viewBox="0 0 400 300" fill="none" aria-hidden="true">
                  <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4AA3B6" /><stop offset="1" stopColor="#e9f2ff" /></linearGradient></defs><rect x="24" y="40" width="200" height="220" rx="16" fill="url(#sky)" /><circle cx="90" cy="100" r="22" fill="#F7C9A0" opacity=".9" /><path d="M24 200c40-30 80-20 120-40s60-10 80-30v130H24Z" fill="#C24E58" opacity=".8" /><path d="M24 226c50-14 100-6 200-20v54H24Z" fill="#0E3A44" opacity=".85" />
                  <g fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#fff" letterSpacing="1.2"><text x="40" y="62">JOURNEY 4 OF 11 · 9 MIN</text><text x="40" y="246">BREATHE IN · 4</text></g><circle cx="124" cy="150" r="30" stroke="#fff" strokeWidth="1.5" opacity=".8" /><circle cx="124" cy="150" r="18" stroke="#fff" strokeWidth="1.5" opacity=".5" /><rect x="240" y="40" width="136" height="220" rx="16" fill="#f5f9fa" stroke="#e0eff3" />
                  <g fontFamily="JetBrains Mono,monospace" fontSize="9" letterSpacing="1.2" fill="#8296a0"><text x="254" y="62">DASS CHECK-IN</text></g>
                  <g fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#0E4553"><text x="254" y="96">Depression</text><rect x="254" y="104" width="108" height="8" rx="4" fill="#e0eff3" /><rect x="254" y="104" width="30" height="8" rx="4" fill="#E4646C" /><text x="254" y="140">Anxiety</text><rect x="254" y="148" width="108" height="8" rx="4" fill="#e0eff3" /><rect x="254" y="148" width="52" height="8" rx="4" fill="#1C7E93" /><text x="254" y="184">Stress</text><rect x="254" y="192" width="108" height="8" rx="4" fill="#e0eff3" /><rect x="254" y="192" width="66" height="8" rx="4" fill="#4AA3B6" /></g>
                  <g fontFamily="JetBrains Mono,monospace" fontSize="8.5" fill="#8296a0" letterSpacing="1"><text x="254" y="230">START</text><text x="362" y="230" textAnchor="end">WEEK 4</text></g><path d="M254 238h108" stroke="#dbe8ec" /></svg></div></div>
            <div className="steps rt">
              <div className="step"><span className="n">01</span>
                <div><b>Check-in</b>
                  <p>A short DASS questionnaire inside the headset gives a starting score for depression, anxiety and stress.</p></div></div>
              <div className="step"><span className="n">02</span>
                <div><b>The journey</b>
                  <p>The person sits, puts on the headset and headphones, and is taken through a natural scene while a voice guides their breathing. Eight to ten minutes.</p></div></div>
              <div className="step"><span className="n">03</span>
                <div><b>Humming and voice</b>
                  <p>Some journeys use humming or the voice itself to settle the body. Nothing is asked beyond following along, and no experience is needed.</p></div></div>
              <div className="step"><span className="n">04</span>
                <div><b>The routine</b>
                  <p>Short sessions repeat through the week: a quiet corner at work, a ward, a care home, or at home on mobile VR goggles and a phone.</p></div></div>
              <div className="step"><span className="n">05</span>
                <div><b>The follow-up</b>
                  <p>The same questionnaire taken again later sits next to the first, so the change is a number rather than a feeling.</p></div></div></div></div></div></section>
      <section className="hs" id="how" aria-label="How it works">
        <div className="hsS">
          <div className="track" id="track">
            <div className="panel intro on">
              <div className="txt">
                <div className="eb">How it works</div>
                <h2>Assess. Treat. Track. Report.</h2>
                <p className="lead">Four steps, one loop, three programmes. Every person starts with a measurement and ends with a report, so the whole team is looking at the same numbers.</p>
                <div className="steps"><span>01 Assess</span><span>02 Treat</span><span>03 Track</span><span>04 Report</span></div></div></div>
            <div className="panel" data-step="1">
              <div className="txt">
                <div className="num">01 / 04</div>
                <h3>Assess</h3>
                <p>Rehabilitation opens with a posture scan and a joint movement scan. Vision opens with a guided screening of six checks. Well-being opens with a DASS check-in for depression, anxiety and stress. Every programme starts with a number.</p></div>
              <div className="fig">
                <div className="lab"><i></i>Posture · joints · vision · mind</div>
                <svg viewBox="0 0 520 470" fill="none" aria-hidden="true">
                  <defs><linearGradient id="gl" x1="0" x2="1"><stop offset="0" stopColor="#E4646C" stopOpacity="0" /><stop offset=".5" stopColor="#E4646C" /><stop offset="1" stopColor="#E4646C" stopOpacity="0" /></linearGradient></defs>
                  <g stroke="#dbe8ec" strokeWidth="1"><path d="M150 70v330M330 70v330M150 210h180" /></g>
                  <g stroke="#0E4553" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path className="draw d1" d="M240 102v26M240 128l-52 12M240 128l52 12M188 140l-24 64M292 140l24 64M164 204l-12 58M316 204l12 58M240 128v96M240 224l-30 6M240 224l30 6M210 230l-8 76M270 230l8 76M202 306l-4 62M278 306l4 62" /></g><circle cx="240" cy="80" r="22" stroke="#0E4553" strokeWidth="2.2" className="draw d1" />
                  <g fill="#E4646C"><circle className="pt" cx="240" cy="128" r="5" /><circle className="pt" cx="188" cy="140" r="5" /><circle className="pt" cx="292" cy="140" r="5" /><circle className="pt" cx="164" cy="204" r="5" /><circle className="pt" cx="316" cy="204" r="5" /><circle className="pt" cx="152" cy="262" r="5" /><circle className="pt" cx="328" cy="262" r="5" /><circle className="pt" cx="240" cy="224" r="5" /><circle className="pt" cx="210" cy="230" r="5" /><circle className="pt" cx="270" cy="230" r="5" /><circle className="pt" cx="202" cy="306" r="5" /><circle className="pt" cx="278" cy="306" r="5" /><circle className="pt" cx="198" cy="368" r="5" /><circle className="pt" cx="282" cy="368" r="5" /></g><path className="draw d2" d="M306 160a30 30 0 0 1-8 40" stroke="#4AA3B6" strokeWidth="2" strokeDasharray="4 4" /><path className="draw d3" d="M196 244a26 26 0 0 0 0 40" stroke="#4AA3B6" strokeWidth="2" strokeDasharray="4 4" />
                  <g stroke="#bfdde6" strokeWidth="1" strokeDasharray="2 3"><path d="M334 176h30M180 264h-40M338 318h26" /></g>
                  <g fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#0E4553"><text className="tag t1" x="372" y="172">Shoulder</text><text className="tag t1" x="372" y="186" fill="#4AA3B6">abduction 142°</text><text className="tag t2" x="132" y="256" textAnchor="end">Hip</text><text className="tag t2" x="132" y="270" textAnchor="end" fill="#4AA3B6">flexion 88°</text><text className="tag t3" x="372" y="314">Knee</text><text className="tag t3" x="372" y="328" fill="#4AA3B6">extension 171°</text></g>
                  <g stroke="#dbe8ec"><path d="M40 412h440" /></g>
                  <g fontFamily="JetBrains Mono,monospace" fontSize="10.5" letterSpacing="1"><text className="tag t4" x="40" y="436" fill="#8296a0">POSTURE · FRONT · BACK · LEFT · RIGHT</text><text className="tag t4" x="40" y="454" fill="#8296a0">JOINTS · 48 MOVEMENTS IN DEGREES</text><text className="tag t4" x="480" y="436" fill="#4AA3B6" textAnchor="end">VISION · 6 CHECKS</text><text className="tag t4" x="480" y="454" fill="#1C7E93" textAnchor="end">MIND · DASS CHECK-IN</text></g><rect className="scanl" x="150" y="60" width="180" height="2" fill="url(#gl)" /></svg></div></div>
            <div className="panel" data-step="2">
              <div className="txt">
                <div className="num">02 / 04</div>
                <h3>Treat</h3>
                <p>Thirty-four gamified tasks and a thousand coached exercises for the body. Eleven therapy games for the lazy eye. Eleven guided journeys for the mind. Each one is built to be finished, and each one is recorded.</p></div>
              <div className="fig">
                <div className="lab"><i className="b"></i>AI coach · form check</div>
                <svg viewBox="0 0 400 400" fill="none" aria-hidden="true">
                  <g stroke="#dbe8ec"><path d="M200 60v300" /></g>
                  <g fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#8296a0"><text x="70" y="86">COACH</text><text x="270" y="86">PATIENT</text></g>
                  <g stroke="#4AA3B6" strokeWidth="2.4" strokeLinecap="round"><circle cx="120" cy="130" r="16" className="draw d1" /><path className="draw d1" d="M120 146v70M120 216l-22 60M120 216l22 60M120 160l-30 34" />
                    <g style={{ transformOrigin: "120px 160px", transform: "rotate(0deg)" }} className="mimic"><path d="M120 160l40 30" stroke="#4AA3B6" strokeWidth="2.4" strokeLinecap="round" /></g></g>
                  <g stroke="#0E4553" strokeWidth="2.4" strokeLinecap="round"><circle cx="290" cy="130" r="16" className="draw d2" /><rect x="272" y="120" width="36" height="14" rx="5" fill="#0E4553" className="pt" /><path className="draw d2" d="M290 146v70M290 216l-22 60M290 216l22 60M290 160l-30 34" />
                    <g style={{ transformOrigin: "290px 160px" }} className="mimic2"><path d="M290 160l40 30" stroke="#0E4553" strokeWidth="2.4" strokeLinecap="round" /></g></g>
                  <g fill="#E4646C"><circle className="pt" cx="290" cy="160" r="4" /><circle className="pt" cx="290" cy="216" r="4" /><circle className="pt" cx="268" cy="276" r="4" /><circle className="pt" cx="312" cy="276" r="4" /></g><rect x="336" y="200" width="30" height="54" rx="6" stroke="#8296a0" strokeWidth="1.6" className="draw d3" /><circle cx="351" cy="210" r="2" fill="#8296a0" className="pt" /><path className="draw d3" d="M336 226L312 216" stroke="#E4646C" strokeWidth="1.4" strokeDasharray="3 3" /><circle cx="200" cy="330" r="34" stroke="#e0eff3" strokeWidth="6" /><circle cx="200" cy="330" r="34" stroke="#E4646C" strokeWidth="6" strokeLinecap="round" className="ring" transform="rotate(-90 200 330)" style={{ strokeDasharray: "214", strokeDashoffset: "214" }} />
                  <g fontFamily="JetBrains Mono,monospace" textAnchor="middle" fill="#0E4553"><text x="200" y="326" fontSize="15" fontWeight="500" className="tag t1">94%</text><text x="200" y="342" fontSize="8.5" fill="#8296a0" className="tag t1">FORM MATCH</text><text x="120" y="378" fontSize="11" className="tag t2">Shoulder pendulum</text><text x="290" y="378" fontSize="11" className="tag t3" fill="#E4646C">Rep 12 / 15</text></g></svg></div></div>
            <div className="panel" data-step="3">
              <div className="txt">
                <div className="num">03 / 04</div>
                <h3>Track</h3>
                <p>Every task, repetition, game session and journey is logged automatically, so progress shows up week by week as numbers rather than impressions.</p></div>
              <div className="fig">
                <div className="lab"><i></i>Progress over time · illustrative</div>
                <svg viewBox="0 0 400 400" fill="none" aria-hidden="true">
                  <g stroke="#e0eff3"><path d="M60 80h300M60 140h300M60 200h300M60 260h300M60 320h300" /></g>
                  <g fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#8296a0"><text x="34" y="84">180°</text><text x="34" y="144">150°</text><text x="34" y="204">120°</text><text x="34" y="264">90°</text><text x="34" y="324">60°</text><text x="60" y="352">Wk 1</text><text x="200" y="352" textAnchor="middle">Wk 4</text><text x="360" y="352" textAnchor="end">Wk 8</text></g><path className="draw d1" d="M60 292C100 290 120 250 160 244S220 200 260 176 330 128 360 112" stroke="#E4646C" strokeWidth="3" strokeLinecap="round" /><path className="draw d2" d="M60 300C110 298 150 290 200 270S300 236 360 212" stroke="#4AA3B6" strokeWidth="2" strokeDasharray="5 5" strokeLinecap="round" />
                  <g fill="#fff" stroke="#E4646C" strokeWidth="2.5"><circle className="pt" cx="60" cy="292" r="5" /><circle className="pt" cx="160" cy="244" r="5" /><circle className="pt" cx="260" cy="176" r="5" /><circle className="pt" cx="360" cy="112" r="5" /></g>
                  <g fontFamily="JetBrains Mono,monospace" fontSize="11"><text className="tag t1" x="60" y="50" fill="#0E4553">Range of motion, shoulder</text><text className="tag t2" x="60" y="68" fill="#E4646C">— measured</text><text className="tag t2" x="150" y="68" fill="#4AA3B6">- - target</text><text className="tag t3" x="300" y="98" fill="#E4646C" textAnchor="end">+46°</text></g>
                  <g className="tag t4"><rect x="60" y="368" width="70" height="6" rx="3" fill="#e0eff3" /><rect x="60" y="368" width="58" height="6" rx="3" fill="#E4646C" className="bar" /><text x="140" y="374" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8296a0">ADHERENCE 83%</text><rect x="240" y="368" width="70" height="6" rx="3" fill="#e0eff3" /><rect x="240" y="368" width="66" height="6" rx="3" fill="#4AA3B6" className="bar b2" /><text x="320" y="374" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8296a0">FORM 94%</text></g></svg></div></div>
            <div className="panel" data-step="4">
              <div className="txt">
                <div className="num">04 / 04</div>
                <h3>Report</h3>
                <p>A clear report per session and per programme: rehabilitation scores, the screening result, the well-being change. Ready to hand to the patient, the family, the employer or the referring doctor.</p></div>
              <div className="fig">
                <div className="lab"><i className="b"></i>Session report</div>
                <svg viewBox="0 0 400 400" fill="none" aria-hidden="true"><rect x="70" y="70" width="260" height="290" rx="16" fill="#f5f9fa" stroke="#e0eff3" />
                  <g className="row"><text x="92" y="104" fontFamily="Manrope,sans-serif" fontSize="17" fontWeight="700" fill="#0E4553">Session summary</text><text x="92" y="122" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#8296a0">PROGRAMME · WEEK 4 · DAY 3</text></g>
                  <g className="row r2"><text x="92" y="158" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#5A6E76">Tasks completed</text><rect x="92" y="166" width="216" height="8" rx="4" fill="#e0eff3" /><rect x="92" y="166" width="196" height="8" rx="4" fill="#E4646C" className="bar" /><text x="308" y="160" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#0E4553" textAnchor="end">9 / 10</text></g>
                  <g className="row r3"><text x="92" y="204" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#5A6E76">Form accuracy</text><rect x="92" y="212" width="216" height="8" rx="4" fill="#e0eff3" /><rect x="92" y="212" width="203" height="8" rx="4" fill="#4AA3B6" className="bar b2" /><text x="308" y="206" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#0E4553" textAnchor="end">94%</text></g>
                  <g className="row r4"><text x="92" y="250" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#5A6E76">Range of motion vs baseline</text><rect x="92" y="258" width="216" height="8" rx="4" fill="#e0eff3" /><rect x="92" y="258" width="150" height="8" rx="4" fill="#1C7E93" className="bar b3" /><text x="308" y="252" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#E4646C" textAnchor="end">+46°</text></g>
                  <g className="row r5"><rect x="92" y="290" width="216" height="46" rx="10" fill="#fff" stroke="#e0eff3" /><circle cx="112" cy="313" r="9" fill="#E4646C" /><path d="M107 313l3.5 3.5 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><text x="130" y="309" fontFamily="JetBrains Mono,monospace" fontSize="9.5" fill="#0E4553">Ready to share</text><text x="130" y="323" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#8296a0">Patient · family · referring doctor</text></g>
                  <g className="pt"><circle cx="330" cy="70" r="14" fill="#E4646C" /><path d="M324 70l4 4 8-8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></g></svg></div></div></div></div></section>
      <section className="who" id="who">
        <div className="wrap">
          <div className="head rt">
            <div>
              <div className="eb">Who it is for</div>
              <h2>Built for the places people go to get better.</h2></div>
            <p className="lead">Nine kinds of buyer, one platform. Virtual reality therapy for hospitals, clinics, employers, schools, care homes and homes. The dots show which programmes apply to each.</p></div>
          <div className="list rt" id="whoList">
            <Link className="row2" href="/rehabilitation/"><span className="k">Hospitals</span><span className="t">Hospitals and health systems</span><span className="s"><span className="dots"><i className="b"></i><i className="v"></i><i className="m"></i></span></span></Link>
            <Link className="row2" href="/rehabilitation/"><span className="k">Rehab</span><span className="t">Rehabilitation and physiotherapy centres</span><span className="s"><span className="dots"><i className="b"></i><i></i><i></i></span></span></Link>
            <Link className="row2" href="/vision/lazy-eye-therapy/"><span className="k">Eye care</span><span className="t">Eye clinics</span><span className="s"><span className="dots"><i></i><i className="v"></i><i></i></span></span></Link>
            <Link className="row2" href="/well-being/workplace-wellbeing/"><span className="k">Employers</span><span className="t">Employers and corporate offices</span><span className="s"><span className="dots"><i className="b"></i><i className="v"></i><i className="m"></i></span></span></Link>
            <Link className="row2" href="/rehabilitation/senior-care-fall-prevention/"><span className="k">Senior care</span><span className="t">Senior care and geriatric services</span><span className="s"><span className="dots"><i className="b"></i><i></i><i className="m"></i></span></span></Link>
            <Link className="row2" href="/vision/school-community-screening/"><span className="k">Government</span><span className="t">Government health programmes</span><span className="s"><span className="dots"><i className="b"></i><i className="v"></i><i></i></span></span></Link>
            <Link className="row2" href="/rehabilitation/sports-rehabilitation-fitness/"><span className="k">Fitness</span><span className="t">Fitness centres and coaches</span><span className="s"><span className="dots"><i className="b"></i><i></i><i className="m"></i></span></span></Link>
            <Link className="row2" href="/vision/school-community-screening/"><span className="k">Schools</span><span className="t">Schools and school networks</span><span className="s"><span className="dots"><i></i><i className="v"></i><i></i></span></span></Link>
            <Link className="row2" href="/well-being/at-home/"><span className="k">Home</span><span className="t">Individuals at home</span><span className="s"><span className="dots"><i className="b"></i><i className="v"></i><i className="m"></i></span></span></Link></div>
          <div className="legend"><span><i className="dots"><i className="b"></i></i>Rehabilitation</span><span><i className="dots"><i className="v"></i></i>Vision</span><span><i className="dots"><i className="m"></i></i>Well-being</span></div></div></section>
      <section className="winewrap proof" id="proof">
        <div className="wb" aria-hidden="true"><img alt="" loading="lazy" decoding="async" /></div>
        <div className="wrap">
          <div className="head rt">
            <div>
              <div className="eb w">By the numbers</div>
              <h2>What is inside the headset.</h2></div>
            <p>No estimates and no projections. These are counts of what the platform ships with today.</p></div>
          <div className="nums rt" id="nums">
            <div><b data-n="34">0</b><span>Gamified rehabilitation tasks</span></div>
            <div><b data-n="1000">0<small>+</small></b><span>Coached exercises with a camera checking form</span></div>
            <div><b data-n="48">0</b><span>Joint movements measured per scan, in degrees</span></div>
            <div><b data-n="4">0</b><span>Posture views: front, back, left, right</span></div>
            <div><b data-n="11">0</b><span>Lazy eye therapy games</span></div>
            <div><b data-n="6">0</b><span>Vision screening checks, under ten minutes</span></div>
            <div><b data-n="11">0</b><span>Guided well-being journeys</span></div>
            <div><b data-n="1">0</b><span>Headset for all three programmes, one login per user</span></div></div>
          <div className="marks rt"><span><i></i>Runs on Meta Quest headsets</span><span><i></i>Controllers or bare-hand tracking</span><span><i></i>Phone-only option for scans and exercises</span><span><i></i>Mobile VR goggles for lazy eye and journeys</span></div></div></section>
      <section className="sec trust" id="trusted">
        <div className="wrap">
          <h2 className="rt tc">Patented, published and trusted by leading institutions.</h2>
          <div className="trustrow rt">
            <div className="tlogo"><img src="/images/partner-aiims.jpg" alt="All India Institute of Medical Sciences" loading="lazy" decoding="async" /></div>
            <div className="tlogo"><img src="/images/partner-spinal-injuries-centre.jpg" alt="Indian Spinal Injuries Centre" loading="lazy" decoding="async" /></div>
            <div className="tlogo"><img src="/images/partner-guru-nanak-mission.jpg" alt="Guru Nanak Mission Medical and Education Trust" loading="lazy" decoding="async" /></div>
            <div className="tlogo"><img src="/images/partner-national-institute-ayurveda.jpg" alt="National Institute of Ayurveda" loading="lazy" decoding="async" /></div>
            <div className="tlogo"><img src="/images/partner-shroff-eye-centre.jpg" alt="Shroff Eye Centre" loading="lazy" decoding="async" /></div>
            <div className="tlogo"><img src="/images/partner-lady-hardinge.jpg" alt="Lady Hardinge Medical College" loading="lazy" decoding="async" /></div></div></div></section>
      <section className="sec faq" id="faq">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">The questions buyers ask</div>
              <h2>The practical questions, answered.</h2></div>
            <p>Every hospital, care home, employer and programme lead asks these in the first meeting. Here they are before the meeting.</p></div>
          <div className="list rt" id="faqList">
      <FaqList items={FAQS["home"]} /></div></div></section>
      <section className="sec blogstrip" id="fromblog">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">From the blog</div>
              <h2>Digital therapeutics, explained one topic at a time.</h2></div>
            <p>Short reads for clinicians, programme leads and anyone deciding whether this belongs in their setting.</p></div>
          <div className="bgrid rt"><a className="bcard" href="/blog/workplace-back-neck-pain/">{" "}
              <div className="im"><img src="/images/blog-1.jpg" alt="The hidden cost of back and neck pain in employees" loading="lazy" decoding="async" /></div>{" "}
              <div className="bd">
                <div className="eb">Corporate well-being</div>
                <h3>The hidden cost of back and neck pain in employees</h3>
                <p>What smart companies are doing about the strain that builds quietly at a desk.</p></div>{" "}</a><a className="bcard" href="/blog/is-vr-therapy-safe-everything-you-need-to-know-before-starting/">{" "}
              <div className="im"><img src="/images/blog-2.jpg" alt="Is VR therapy safe?" loading="lazy" decoding="async" /></div>{" "}
              <div className="bd">
                <div className="eb">Foundations</div>
                <h3>Is VR therapy safe?</h3>
                <p>Everything worth knowing before a first session, for clinicians and for patients.</p></div>{" "}</a><a className="bcard" href="/blog/vr-ai-orthopaedic-rehabilitation/">{" "}
              <div className="im"><img src="/images/blog-3.jpg" alt="VR and AI for orthopaedic rehabilitation" loading="lazy" decoding="async" /></div>{" "}
              <div className="bd">
                <div className="eb">Rehabilitation</div>
                <h3>VR and AI for orthopaedic rehabilitation</h3>
                <p>A complete guide for physiotherapists, clinics and corporate programmes.</p></div>{" "}</a></div>
          <p className="rt" style={{ marginTop: "1.6rem" }}><a className="lnk" href="/blog/">Read the blog{" "}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></a></p></div></section>
      <section className="close">
        <div className="orb a"></div>
        <div className="orb b"></div>
        <div className="wrap rt">
          <div className="eb">Next step</div>
          <h2>See it on a headset.</h2>
          <p className="lead">A demo takes thirty minutes, in person or online. Bring a clinician, a therapist or a programme lead, and we will show the programme that fits your setting.</p>
          <div className="acts">
            <Link className="btn p" href="/contact/">Book a 30-minute demo{" "}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link><a className="btn o" href="#programmes">Browse the programmes</a></div>
          <p className="talk">Prefer to talk now?{" "}<a href="https://wa.me/917426060606" target="_blank" rel="noopener">WhatsApp</a>{" "}or call{" "}<a href="tel:+917426060606">+91 74260 60606</a>{" "}·{" "}<a href="mailto:info@cognihab.com">info@cognihab.com</a></p></div></section>
    </main>
  );
}
