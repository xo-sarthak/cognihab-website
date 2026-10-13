"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";

const REPLIES: [RegExp, string][] = [
  [/digital therapeutic|what is|dtx/i, "Digital therapeutics are clinically designed software programmes that treat or manage a condition. CogniHab delivers them through virtual reality: guided rehabilitation tasks, lazy eye therapy and well-being journeys, with every session measured and reported."],
  [/programme|clinic|fit|which|hospital|rehab|vision|eye|well/i, "Three programmes run on one headset. Rehabilitation for movement recovery, Vision care for lazy eye therapy and screening, and Well-being for guided journeys. Tell me your setting and I will point you to the right page, or open the menu above to browse them."],
  [/demo|book|price|cost|contact|call|whatsapp/i, "The quickest way is the Contact Us button. It takes a minute to fill in and the team replies within two working days, in person or online. There is no pricing on the website; it comes on the call once we understand your setting."],
];
const FALLBACK = "Thank you. A member of the CogniHab team will pick this up. In the meantime, you can contact us from the button at the top of the page.";
const CHIPS = ["What is digital therapeutics?", "Which programme fits my clinic?", "How do I book a demo?"];

type Msg = { who: "bot" | "me"; text: string };

/** Front-end only chat with scripted replies. */
export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ who: "bot", text: "Hello, and welcome to CogniHab. How may I assist you today?" }]);
  const [input, setInput] = useState("");
  const body = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    if (open) setTimeout(() => field.current?.focus(), 350);
  }, [open]);
  useEffect(() => {
    body.current?.scrollTo({ top: body.current.scrollHeight });
  }, [msgs]);

  const ask = (q: string) => {
    setMsgs((m) => [...m, { who: "me", text: q }]);
    const hit = REPLIES.find(([re]) => re.test(q));
    setTimeout(() => setMsgs((m) => [...m, { who: "bot", text: hit ? hit[1] : FALLBACK }]), 600);
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    setInput("");
    ask(q);
  };

  return (
    <>
      <button className="asst-btn" id="asstBtn" aria-label="Open the CogniHab assistant" aria-expanded={open} onClick={() => setOpen(!open)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4Z" />
          <path d="M8 8h8M8 11h5" />
        </svg>
        <span className="asst-dot"></span>
      </button>
      <div className={open ? "asst open" : "asst"} id="asst" aria-hidden={!open} role="dialog" aria-label="CogniHab assistant">
        <div className="asst-h">
          <div className="asst-av">
            <img id="asstLogo" src="/media/cognihab-icon.png" alt="" />
          </div>
          <div>
            <b>CogniHab Assistant</b>
            <span>Digital therapeutics, explained simply</span>
          </div>
          <button className="asst-x" id="asstClose" aria-label="Close" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>
        <div className="asst-b" id="asstBody" ref={body}>
          {msgs.slice(0, 1).map((m, i) => (
            <div className={`msg ${m.who}`} key={i}>
              {m.text}
            </div>
          ))}
          <div className="chips" id="asstChips">
            {CHIPS.map((c) => (
              <button type="button" key={c} onClick={() => ask(c)}>
                {c}
              </button>
            ))}
          </div>
          {msgs.slice(1).map((m, i) => (
            <div className={`msg ${m.who}`} key={i + 1}>
              {m.text}
            </div>
          ))}
        </div>
        <form className="asst-f" id="asstForm" onSubmit={submit}>
          <input id="asstIn" ref={field} type="text" placeholder="Type a message" autoComplete="off" aria-label="Your message" value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="btn p" type="submit" aria-label="Send">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 8h11M9 4l4 4-4 4" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
