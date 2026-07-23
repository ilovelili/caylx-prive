import Link from "next/link";
import type { ReactNode } from "react";

export function Header({ light = false }: { light?: boolean }) {
  return (
    <header className={`header ${light ? "headerLight" : ""}`}>
      <div className="headerInner wrap">
        <Link className="brand" href="/">CALYX <i>PRIVÉ</i></Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link><Link href="/#journey">The Journey</Link><Link href="/how-it-works">How It Works</Link><Link href="/about">About</Link>
          <Link className="navButton" href="/private-enquiries">Private Enquiries</Link>
        </nav>
      </div>
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
  return <footer><div className="wrap footerGrid"><div><Link className="brand" href="/">CALYX <i>PRIVÉ</i></Link><p>A deeper way into China.</p><a href="mailto:concierge@calyx.global">concierge@calyx.global</a><a href="https://www.calyxprive.com">www.calyxprive.com</a></div><div><p>China · The Gulf · Africa · Beyond</p><Link href="/#journey">The Journey</Link><Link href="/about">About</Link><Link href="/privacy">Privacy Policy</Link></div><div><Link href="/how-it-works">How It Works</Link><Link href="/private-enquiries">Private Enquiries</Link><Link href="/terms">Terms & Disclaimer</Link></div></div><div className="wrap footerNote">Calyx Privé facilitates access and coordination. Regulated services remain the responsibility of appropriately licensed independent providers.</div></footer>;
}
