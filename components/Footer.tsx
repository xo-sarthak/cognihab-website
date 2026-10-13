import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fcols">
          <div className="fbrand"><img id="footLogo" src="/media/cognihab-logo.png" alt="CogniHab" loading="lazy" decoding="async" />
            <p className="fblurb">CogniHab is a digital therapeutics company based in Jaipur, India. We deliver VR rehabilitation, VR vision therapy and screening, and guided VR well-being on one headset, for hospitals, clinics, employers, schools and people at home.</p>
            <ul className="fcred">
              <li>
                <Link prefetch={false} href="/patent/">Granted Indian Patent 575729</Link></li>
              <li>
                <Link prefetch={false} href="/research/">Peer-reviewed lazy eye research</Link></li>
              <li>IVRHA – First Indian Member</li>
              <li>Winner, XR Creator Hackathon, WAVES 2025</li></ul>
            <div className="fivrha"><img src="/images/partner-ivrha.jpg" alt="International Virtual Reality Healthcare Association" loading="lazy" decoding="async" /></div></div>
          <div className="fcol">
            <h4>Rehabilitation</h4>
            <Link prefetch={false} href="/rehabilitation/stroke-neurological-rehabilitation/">Stroke & Neurological Rehabilitation</Link>
            <Link prefetch={false} href="/rehabilitation/orthopaedic-post-surgical-recovery/">Orthopaedic & Post-Surgical Recovery</Link>
            <Link prefetch={false} href="/rehabilitation/spinal-injury-rehabilitation/">Spinal Injury Rehabilitation</Link>
            <Link prefetch={false} href="/rehabilitation/senior-care-fall-prevention/">Senior Care & Fall Prevention</Link>
            <Link prefetch={false} href="/rehabilitation/sports-rehabilitation-fitness/">Sports Rehabilitation & Fitness</Link></div>
          <div className="fcol">
            <h4>Vision</h4>
            <Link prefetch={false} href="/vision/lazy-eye-therapy/">Lazy Eye Therapy</Link>
            <Link prefetch={false} href="/vision/vision-screening/">Vision Screening for Clinics & Workplaces</Link>
            <Link prefetch={false} href="/vision/school-community-screening/">School & Community Screening</Link>
            <h4 className="fh2">Well-being</h4>
            <Link prefetch={false} href="/well-being/workplace-wellbeing/">Workplace Well-being</Link>
            <Link prefetch={false} href="/well-being/care-settings/">Well-being in Care Settings</Link>
            <Link prefetch={false} href="/well-being/at-home/">VR Meditation at Home</Link></div>
          <div className="fcol">
            <h4>Company</h4>
            <Link prefetch={false} href="/about-us/">About CogniHab</Link>
            <Link prefetch={false} href="/research/">Research</Link>
            <Link prefetch={false} href="/advisors/">Clinical Advisors</Link>
            <Link prefetch={false} href="/patent/">Patent</Link><a href="/case-studies/">Case Studies</a><a href="/blog/">Blog</a>
            <Link prefetch={false} href="/contact/">Contact Us</Link></div>
          <div className="fcol faddr">
            <h4>Contact</h4>
            <p><b>Headquarters</b><br />4th Floor, 401-403, Mall of Jaipur, Gandhi Path, Vaishali Nagar, Jaipur, Rajasthan 302021, India</p>
            <p><b>USA</b><br />16192 Coastal Highway, Lewes, Delaware 19958, United States</p>
            <p><b>Phone / WhatsApp</b><br /><a href="tel:+917426060606">+91 74260 60606</a>{" "}·{" "}<a href="https://wa.me/917426060606" target="_blank" rel="noopener">WhatsApp</a></p>
            <p><b>Email</b><br /><a href="mailto:info@cognihab.com">info@cognihab.com</a></p></div></div>
        <div className="fbottom">
          <div className="fsocial"><a href="https://www.facebook.com/Cognihab" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" /></svg></a><a href="https://x.com/Cognihab" target="_blank" rel="noopener" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3l-6.6 7.5L21.7 21h-6l-4.7-6.2L5.6 21h-3l7-8L2.6 3h6.2l4.3 5.7Zm-1 16h1.7L7.6 4.8H5.8Z" /></svg></a><a href="https://www.instagram.com/Cognihab" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" /></svg></a><a href="https://www.linkedin.com/company/cognihab" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM10 9h3.8v1.7c.6-1 1.8-2 3.7-2 3 0 4.5 2 4.5 5.4V21h-4v-6c0-1.6-.6-2.6-2-2.6-1.2 0-1.9.8-2.2 1.6-.1.3-.1.7-.1 1.1V21h-4Z" /></svg></a><a href="https://www.youtube.com/channel/UCIncaGUch635BdT-LirNPyA" target="_blank" rel="noopener" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12s0-3.3-.4-4.8a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.7 2 12 2 12s0 3.3.4 4.8c.2.9.9 1.6 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.5.4-4.8.4-4.8Zm-12 3V9l5.2 3Z" /></svg></a></div>
          <div className="flegal"><a href="/terms-and-conditions/">Terms & Conditions</a><a href="/privacy-policy/">Privacy Policy</a><a href="/returns-policy/">Return Policy</a><a href="/qr-code/">Switch Viewer QR Code</a></div>
          <div className="c">©{" "}<span id="yr">{new Date().getFullYear()}</span>{" "}CogniHab · Digital therapeutics for rehabilitation, vision care and well-being</div></div>
        <div className="fstd">CogniHab screening indicates when an ophthalmologist should be consulted. It is not a diagnosis.</div></div></footer>
  );
}
