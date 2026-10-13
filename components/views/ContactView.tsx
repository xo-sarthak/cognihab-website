

export default function ContactView() {
  return (
    <main className="view on" id="v-contact" data-view="contact">
      <section className="contact">
        <div className="wrap">
          <div className="rt">
            <div className="eb">Contact Us</div>
            <h1>Let us put a headset in your hands.</h1>
            <p className="lead">Tell us who you are and where you work. We reply within two working days to arrange a demo, in person or online.</p>
            <div className="ways"><a className="way wa" id="waLink" href="#" hidden target="_blank" rel="noopener"><span className="ic">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4 5.3 5.3 0 0 0 3.2.6 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" /></svg></span><span><small>Fastest reply</small><b>Chat on WhatsApp</b></span></a><a className="way" id="telLink" href="#" hidden><span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2Z" /></svg></span><span><small>Call us</small><b id="telText"></b></span></a><a className="way" id="mailLink" href="#" hidden><span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></span><span><small>Email us</small><b id="mailText"></b></span></a></div></div>
          <form className="form rt" id="demoForm" name="demo" method="POST" data-netlify="true" netlify-honeypot="bot-field" noValidate><input type="hidden" name="form-name" defaultValue="demo" />
            <p hidden><label>Leave this empty{" "}<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
            <div className="f"><label htmlFor="fName">Name*</label><input id="fName" name="name" required autoComplete="name" /></div>
            <div className="f"><label htmlFor="fEmail">Email address*</label><input id="fEmail" name="email" type="email" required autoComplete="email" /></div>
            <div className="f"><label htmlFor="fPhone">Phone*</label><input id="fPhone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" /></div>
            <div className="f"><label htmlFor="fArea">What can we help you with?</label>
              <select id="fArea" name="area" required><option value="">Choose one</option><option>Rehabilitation</option><option>Vision care</option><option>Well-being</option><option>All three</option><option>Something else</option></select></div>
            <div className="f"><label htmlFor="fMsg">Your message</label><textarea id="fMsg" name="message" rows={4}></textarea></div><button className="btn p" type="submit">Send message{" "}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8h11M9 4l4 4-4 4" /></svg></button>
            <div className="fmsg" id="fmsg" role="status" aria-live="polite"></div></form></div></section>
    </main>
  );
}
