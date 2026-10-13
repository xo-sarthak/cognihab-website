import Link from "next/link";

export const metadata = { title: { absolute: "Page not found | CogniHab" }, robots: { index: false } };

export default function NotFound() {
  return (
    <main className="view on" id="v-404">
      <section className="sec">
        <div className="wrap">
          <div className="head2 rt in">
            <div>
              <div className="eb">404</div>
              <h1 className="as-h2">This page is not here.</h1>
            </div>
            <p>
              The link may be old. Try the <Link href="/">home page</Link>, one of the programmes in the menu, or{" "}
              <Link href="/contact/">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
