import Link from "next/link";
import type { ReactNode } from "react";

export function Header({ light = false }: { light?: boolean }) {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">CALYX <em>PRIVÉ</em></Link>
      <nav aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <details>
          <summary>The Journey</summary>
          <div>
              <Link href="/journey/health-wellbeing">Health &amp; Wellbeing</Link>
              <Link href="/journey/technology-innovation">Technology &amp; Innovation</Link>
              <Link href="/journey/culture-lifestyle">Culture &amp; Lifestyle</Link>
              <Link href="/journey/relationships-opportunities">Relationships &amp; Opportunities</Link>
          </div>
        </details>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/about">About</Link>
        <Link className="nav-cta" href="/private-enquiries">Private Enquiries</Link>
      </nav>
    </header>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="label">{children}</p>;
}

export function SplitSection({ label, title, children, dark = false, className = "" }: { label: string; title: ReactNode; children: ReactNode; dark?: boolean; className?: string }) {
  return <section className={`section split ${dark ? "dark" : ""} ${className}`}><div className="wrap splitGrid"><div><Label>{label}</Label><h2>{title}</h2></div><div className="splitCopy">{children}</div></div></section>;
}

export function Footer() {
  return <footer><div className="wrap footer-grid"><div><Link className="wordmark" href="/">CALYX <em>PRIVÉ</em></Link><p>A deeper way into China.</p><a href="mailto:concierge@calyx.global">concierge@calyx.global</a><br /><a href="https://www.calyxprive.com">www.calyxprive.com</a></div><div><p>China · The Gulf · Africa · Beyond</p><div className="footer-links"><Link href="/#journey">The Journey</Link><Link href="/how-it-works">How It Works</Link><Link href="/about">About</Link><Link href="/private-enquiries">Private Enquiries</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Disclaimer</Link></div></div></div><div className="wrap footer-note">Calyx Privé facilitates access and coordination. Regulated services remain the responsibility of appropriately licensed independent providers.</div></footer>;
}
