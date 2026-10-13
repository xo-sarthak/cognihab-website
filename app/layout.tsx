import type { Metadata, Viewport } from "next";
import { Instrument_Sans, JetBrains_Mono, Manrope } from "next/font/google";
import Announcements from "@/components/Announcements";
import Assistant from "@/components/Assistant";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SiteEffects from "@/components/SiteEffects";
import { JsonLd } from "@/components/ui";
import { SITE } from "@/content/site";
import { ORGANIZATION } from "@/lib/seo";
import "./globals.css";

// Self-hosted at build time: no request to Google Fonts from the visitor's browser.
const manrope = Manrope({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-manrope", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-instrument", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  icons: { icon: "/media/cognihab-icon.png", apple: "/media/cognihab-icon.png" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#0E4553", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="cur" aria-hidden="true"></div>
        <Announcements />
        <Header />
        <div id="main">{children}</div>
        <Footer />
        <Assistant />
        <SiteEffects />
        <JsonLd data={ORGANIZATION} />
      </body>
    </html>
  );
}
