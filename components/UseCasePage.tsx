import Link from "next/link";
import { notFound } from "next/navigation";
import { PROGRAMMES, USE_CASES, type Programme } from "@/content/useCases";
import { SITE } from "@/content/site";
import Breadcrumbs from "./Breadcrumbs";
import { Arrow } from "./ui";

export function useCaseParams(programme: Programme) {
  return USE_CASES[programme].map((u) => ({ slug: u.slug }));
}

export default function UseCasePage({ programme, slug }: { programme: Programme; slug: string }) {
  const u = USE_CASES[programme].find((x) => x.slug === slug);
  if (!u) notFound();
  const p = PROGRAMMES[programme];
  const contact = `/contact/?programme=${programme}`;
  return (
    <main className="view on" id={`v-uc-${slug}`} data-view={`${programme}/${slug}`}>
      <section className="pg">
        <div className="pghero">
          <img className="pgimg" src={u.img} alt={u.alt} />
          <div className="scrim"></div>
        </div>
        <div className="wrap">
          <div className="rt">
            <Breadcrumbs path={`/${programme}/${slug}/`} />
            <div className="eb">{p.name} · Use case</div>
            <h1>{u.title}</h1>
            <p className="lead">
              <b>{u.subtitle}</b> {u.summary}
            </p>
            <div className="acts" style={{ display: "flex", gap: ".7rem", flexWrap: "wrap" }}>
              <Link className="btn p" href={contact}>
                Book a demo <Arrow />
              </Link>
              <Link className="btn o" href={`/${programme}/`}>
                Explore {p.long}
              </Link>
            </div>
            {programme === "vision" && (
              <div className="std">Screening indicates when an ophthalmologist should be consulted. It is not a diagnosis.</div>
            )}
          </div>
        </div>
      </section>

      <section className="sec tight whatis ucd" id="uc-detail">
        <div className="wrap wgrid">
          <div className="rt">
            <div className="eb">Use case</div>
            <h2>What it does</h2>
            <p>{u.does}</p>
            <h3 className="uh">Who buys it</h3>
            <p>{u.buys}</p>
            <h3 className="uh">What is needed</h3>
            <p>{u.needed}</p>
          </div>
          <aside className="facts rt" aria-label="What it addresses">
            <div className="ft">What it addresses</div>
            <ul>
              {u.addresses.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="sec tight ucsib">
        <div className="wrap">
          <div className="head2 rt">
            <div>
              <div className="eb">More use cases</div>
              <h2>Other {p.long} use cases</h2>
            </div>
            <p>
              <Link className="lnk" href={`/${programme}/`}>
                See the full {p.long} programme <Arrow />
              </Link>
            </p>
          </div>
          <div className="sibs rt">
            {USE_CASES[programme]
              .filter((x) => x.slug !== slug)
              .map((x) => (
                <Link className="sib" key={x.slug} href={`/${programme}/${x.slug}/`}>
                  <b>{x.title}</b>
                  <span>{x.subtitle}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="pillar-cta">
        <div className="wrap rt">
          <div>
            <h2>See it on a headset.</h2>
            <p>A demo takes thirty minutes, in person or online. Bring the people who would run it, and we will show this use case in the room.</p>
            <p className="talk">
              WhatsApp / Call <a href={`tel:+${SITE.whatsapp}`}>{SITE.phone}</a> · <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
            </p>
          </div>
          <div className="pcta-acts">
            <Link className="btn w" href={contact}>
              Book a 30-minute demo <Arrow />
            </Link>
            <Link className="btn o" href="/contact/">
              Contact the CogniHab team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
