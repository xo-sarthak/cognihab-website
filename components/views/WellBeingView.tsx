import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import { FAQS } from "@/content/faqs";
import UseCaseCards from "@/components/UseCaseCards";

export default function WellBeingView() {
  return (
    <main className="view on" id="v-well-being" data-view="well-being">
      <section className="pg">
        <div className="pghero"><img className="pgimg" src="/media/pillar-mind.jpg" alt="A woman reclines in a chair wearing a VR headset during a guided journey" />
          <div className="scrim"></div></div>
        <div className="wrap">
          <div className="rt">
      <Breadcrumbs path="/well-being/" />
            <div className="eb">Well-being · VR well-being</div>
            <h1>VR meditation and relaxation: a quieter room, anywhere.</h1>
            <p className="lead">Guided VR meditation for stress relief, with 11 guided journeys lasting 8 to 10 minutes each. Sessions are taken sitting down, require no prior experience, and need no instructor in the room. Designed for workplaces, wards, care homes and home use.</p>
            <div className="acts" style={{ display: "flex", gap: ".7rem", flexWrap: "wrap" }}>
              <Link className="btn p" href="/contact/?programme=well-being">Book a well-being demo{" "}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
              <Link className="btn o" href="/well-being/workplace-wellbeing/">For employers</Link></div></div></div></section>
      <section className="sec tight whatis" id="w-what">
        <div className="wrap wgrid">
          <div className="rt">
            <div className="eb" style={{ color: "var(--royal)" }}>Overview</div>
            <h2>What is VR meditation?</h2>
            <p>VR meditation uses a virtual reality headset and headphones to place a person inside a calm natural scene while a voice guides their breathing. Blocking out the room makes it easier to settle, even for beginners. CogniHab’s journeys last 8–10 minutes, are taken seated, and use breathing, humming or the voice as the anchor.</p></div>
          <aside className="facts rt" aria-label="At a glance">
            <div className="ft">At a glance</div>
            <ul>
              <li><b>11 guided journeys</b>{" "}· 3 types</li>
              <li><b>8–10 min</b>{" "}sessions</li>
              <li><b>Meta Quest + mobile VR</b></li>
              <li><b>DASS check-in</b>{" "}· before & after</li>
              <li><b>No instructor or booking</b></li>
              <li><b>Jaipur, India</b></li></ul></aside></div></section>
      <section className="sec tight" id="w-cases" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb" style={{ color: "var(--royal)" }}>Use cases</div>
              <h2>VR Well-being for Workplaces, Care Settings and Home</h2></div>
            <p>The same guided VR well-being journeys, designed for different settings. From short workplace resets and quiet time in care settings to daily practice at home, CogniHab makes guided sessions easy to access without an instructor.</p></div>
          <div className="ucards rt">
      <UseCaseCards programme="well-being" /></div></div></section>
      <section className="sec tight" id="w-journeys" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb" style={{ color: "var(--royal)" }}>The journeys</div>
              <h2>Eleven journeys.</h2></div>
            <p>Each journey is an immersive natural scene the person is taken through while a voice guides their breathing. Some use humming or the voice itself to settle the body. They sit throughout, and nothing is asked of them beyond following along.</p></div>
          <div className="journeys rt">
            <div className="jn a"><img src="/images/wellbeing-journey-dawn.jpg" alt="" loading="lazy" decoding="async" />
              <div className="eb">Breathing-led</div><b>Guided breathing</b><span>A voice sets the rhythm of the breath inside a calm scene. The simplest place to start.</span></div>
            <div className="jn b"><img src="/images/wellbeing-journey-forest.jpg" alt="" loading="lazy" decoding="async" />
              <div className="eb">Humming-led</div><b>Humming</b><span>Slow humming on the out-breath, which settles the body faster than breathing alone.</span></div>
            <div className="jn c"><img src="/images/wellbeing-journey-night.jpg" alt="" loading="lazy" decoding="async" />
              <div className="eb">Voice-led</div><b>Voice</b><span>The person's own voice used as the anchor, guided phrase by phrase.</span></div></div>
          <p className="under rt" style={{ borderColor: "var(--royal)" }}>Eight to ten minutes each. Taken seated. Suitable for people who have never done anything like it, and repeatable as often as the day allows.</p></div></section>
      <section className="sec" id="w-employers">
        <div className="wrap split">
          <div className="side rt">
            <div className="eb" style={{ color: "var(--royal)" }}>For employers</div>
            <h2>Ten quiet minutes, without leaving the building.</h2>
            <p>Staff sit down, put the headset on, and are guided through a journey. No booking, no instructor, no room to hire.</p>
            <div className="rv side-img"><img src="/images/wellbeing-office-corner.jpg" alt="A quiet office corner with an armchair, a plant and a VR headset resting on a side table" loading="lazy" decoding="async" /></div></div>
          <div className="ways rt">
            <div className="wayc">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V9l8-5 8 5v10M9 19v-6h6v6" /></svg></div>
              <div>
                <h3>A quiet corner and a chair</h3>
                <p>The headset and headphones live in a quiet corner of the office. Anyone can take ten minutes, on their own, without anyone else involved. At home the same journeys run on mobile VR goggles and a phone.</p>
                <div className="eq"><b>Needs</b>{" "}· headset + headphones · or goggles + phone</div></div></div>
            <div className="wayc">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></svg></div>
              <div>
                <h3>The DASS check-in</h3>
                <p>A short DASS questionnaire inside the headset gives each person a starting score for depression, anxiety and stress. The same check repeated later shows the change, for the person themselves.</p></div></div>
            <div className="wayc">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6" r="3" /><path d="M12 9v6M8 21l4-6 4 6" /></svg></div>
              <div>
                <h3>Posture for desk workers</h3>
                <p>The same headset kit also runs a posture scan for people who sit at a desk all day, which shows where strain is building before it becomes a complaint.</p>
                <div className="eq"><b>Needs</b>{" "}· phone on a stand · two metres of floor</div></div></div></div></div></section>
      <section className="sec tight" id="w-equipment">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb" style={{ color: "var(--royal)" }}>What the buyer needs</div>
              <h2>The equipment, line by line.</h2></div>
            <p>What has to be in the room for the well-being programme.</p></div>
          <div className="tblwrap rt">
            <table className="eqt">
              <thead>
                <tr><th>Programme</th><th>What the buyer needs</th></tr></thead>
              <tbody>
                <tr><td>Well-being journeys, headset</td><td>Meta Quest headset and headphones. Seated.</td></tr>
                <tr><td>Well-being journeys, home</td><td>Lightweight VR goggles that hold a mobile phone, plus headphones.</td></tr>
                <tr><td>DASS check-in</td><td>Runs inside the headset before and after a programme.</td></tr>
                <tr><td>Posture scan for desk workers</td><td>Phone camera on a stand, four standing positions, under two minutes.</td></tr></tbody></table></div></div></section>
      <section className="sec faq" id="w-faq">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb" style={{ color: "var(--royal)" }}>FAQ</div>
              <h2>VR meditation: common questions</h2></div>
            <p>What employers, care teams and individuals ask before they start.</p></div>
          <div className="list rt">
      <FaqList items={FAQS["well-being"]} /></div></div></section>
      <section className="pillar-cta">
        <div className="wrap rt">
          <div>
            <h2>Experience a guided VR well-being journey</h2>
            <p>Bring your team or care setting into the room and experience one of CogniHab’s guided VR well-being journeys. See how the session works, what the setup requires and how it can fit into your programme.</p>
            <p className="talk">WhatsApp / Call{" "}<a href="tel:+917426060606">+91 74260 60606</a>{" "}·{" "}<a href="mailto:info@cognihab.com">info@cognihab.com</a></p>
            <p className="also">Explore other CogniHab programmes:{" "}
              <Link href="/rehabilitation/">VR Rehabilitation</Link>{" "}·{" "}
              <Link href="/vision/">VR Vision Therapy</Link></p></div>
          <div className="pcta-acts">
            <Link className="btn w" href="/contact/?programme=well-being">Book a well-being demo{" "}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></Link>
            <Link className="btn o" href="/contact/?programme=well-being">Talk to our team</Link></div></div></section>
    </main>
  );
}
