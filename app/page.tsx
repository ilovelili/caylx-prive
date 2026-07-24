import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./site";

const pathways = [
  {
    n: "01",
    title: "Health & Wellbeing",
    text: "Preventative assessments, specialist access, integrative wellbeing and coordinated health journeys.",
    href: "/journey/health-wellbeing",
    image: "/images/calyx-prive/health.png",
    alt: "A calm private treatment setting in China",
  },
  {
    n: "02",
    title: "Technology & Innovation",
    text: "Private meetings, company visits and curated access to China’s innovation ecosystems.",
    href: "/journey/technology-innovation",
    image: "/images/calyx-prive/technology.png",
    alt: "Advanced robotics within a Chinese manufacturing environment",
  },
  {
    n: "03",
    title: "Culture & Lifestyle",
    text: "Restorative travel, culture, hospitality and experiences shaped around the individual.",
    href: "/journey/culture-lifestyle",
    image: "/images/calyx-prive/culture.png",
    alt: "A contemporary cultural retreat in China",
  },
  {
    n: "04",
    title: "Relationships & Opportunities",
    text: "Permission-based introductions and relevant cultural, philanthropic, family or occasional commercial opportunities.",
    href: "/journey/relationships-opportunities",
    image: "/images/calyx-prive/relationships.png",
    alt: "A discreet contemporary lounge prepared for conversation",
  },
];

const steps = [
  ["01", "Discover", "Understand the client, the purpose of the journey and what has already been arranged."],
  ["02", "Curate", "Design the pathway, qualify the relevant parties and define what belongs in the experience."],
  ["03", "Facilitate", "Confirm access, prepare each engagement and coordinate communication across borders."],
  ["04", "Coordinate", "Remain personally involved through the journey, changes, follow-up and continuity."],
];

const principles = [
  ["By invitation or referral", "Access begins through a trusted relationship and a clear understanding of the client’s purpose."],
  ["Consent and privacy", "Information is shared only on a need-to-know, permission-based basis with approved parties."],
  ["Provider boundaries", "Licensed providers retain clinical and professional responsibility. Calyx Privé facilitates and coordinates."],
  ["Personal continuity", "One point of coordination maintains context, communication and follow-through across the journey."],
];

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <Image src="/images/calyx-prive/hero.png" alt="A private contemporary retreat overlooking the karst landscape of China" fill priority sizes="100vw" />
          <div className="hero-wash" />
          <Header light />
          <div className="hero-copy wrap reveal">
            <p className="eyebrow light">China × Health × Culture × Innovation</p>
            <h1 style={{ lineHeight: 0.98 }}>A deeper way<br />into China.</h1>
            <p>Privately coordinated access to China’s health, innovation, culture and relationships—created for a select group of ultra-high-net-worth individuals, families and family offices.</p>
            <div className="actions">
              <Link className="button light" href="/private-enquiries">Request a Private Conversation</Link>
              <Link className="text-action journey-link" href="#journey">Explore the Journey <span aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className="editorial-split perspective-section section wrap">
          <div><p className="section-number">01 / Perspective</p><h2>China is easy<br />to visit.</h2></div>
          <div><p className="large-copy">It is far harder to access with context, trust and purpose.</p><p className="body-copy">Modern health, advanced industry, contemporary culture and one of the world’s deepest living traditions converge here.</p><p className="accent-copy">The opportunity lies in knowing what matters—and how to reach it.</p></div>
        </section>

        <section className="image-statement section dark"><div className="wrap statement-grid">
          <div><p className="section-number light">02 / Our role</p><h2>Trusted access,<br />personally coordinated.</h2></div>
          <div><p className="body-copy light-copy">Calyx Privé creates privately coordinated pathways into China for ultra-high-net-worth individuals and families seeking meaningful access across health, innovation, culture and relationships.</p><div className="verb-sequence"><span>Curate</span><span>Facilitate</span><span>Coordinate</span><span>Accompany</span></div><p className="fine light-copy">Each pathway is shaped around the individual and personally coordinated with discretion, cultural fluency and close attention.</p></div>
        </div></section>

        <section className="section warm audience"><div className="wrap">
          <p className="section-number">03 / Who we serve</p>
          <div className="editorial-split"><h2>Created for those who value access built on trust.</h2><div><p className="body-copy">Calyx Privé is designed for a select group of ultra-high-net-worth individuals, international families, family offices, founders, entrepreneurs, business leaders and trusted advisers acting on behalf of private clients.</p><p>We accept a limited number of engagements each year, allowing every relationship to remain highly personal, thoughtfully coordinated and personally overseen.</p><p className="accent-copy">Relationships typically begin through referral, invitation or a confidential introductory conversation.</p></div></div>
        </div></section>

        <section className="section pathways-section" id="journey">
          <div className="wrap">
            <p className="section-number">04 / The journey</p>
            <h2>Four pathways shape<br />every journey.</h2>
          </div>
          <div className="pathway-grid wrap">{pathways.map((item) => (
            <Link className="pathway-card" href={item.href} key={item.title}>
              <div className="card-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
              <p className="pathway-index">{item.n}</p><h3>{item.title}</h3><p>{item.text}</p><span className="card-link">Explore pathway →</span>
            </Link>
          ))}</div>
        </section>

        <section className="section warm understanding-section"><div className="wrap narrow">
          <p className="section-number">05 / Understanding</p><h2>Every journey<br /><span className="keep-together">begins with</span><br className="mobile-break" /> understanding.</h2>
          <p className="body-copy">Rather than offering predefined itineraries, Calyx Privé takes time to understand each client’s objectives, interests and priorities before designing an appropriate pathway. No two engagements need to look the same.</p>
          <p className="body-copy">Whether the focus is health, innovation, culture or relationships, every journey is shaped around the individual—not assembled from a catalogue of experiences.</p>
        </div></section>

        <section className="section wrap">
          <p className="section-number">06 / How it works</p><h2>A discreet process holds<br />every journey.</h2>
          <div className="process-grid">{steps.map(([n, title, text]) => <article key={title}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          <Link className="text-action dark-link" href="/how-it-works">View the full process →</Link>
        </section>

        <section className="section dark principles">
          <div className="wrap">
            <p className="section-number light">07 / Principles</p><h2>Discretion is designed<br />into the service.</h2>
            <div className="principle-grid">
              {principles.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section wrap about-preview"><div className="editorial-split">
          <div><p className="section-number">08 / About</p><h2>Strategic access,<br />made personal.</h2></div>
          <div><p className="body-lead">Calyx Privé is the private-client division of Calyx, a cross-border strategic access platform connecting trusted partners across China, the Gulf, Africa and beyond.</p><p className="body-copy">It extends that trusted reach to individuals and families seeking privately coordinated access across health and wellbeing, technology, culture, relationships and selected opportunities.</p><Link className="text-action dark-link" href="/about">About Calyx Privé →</Link></div>
        </div></section>

        <section className="section cta">
          <div className="wrap">
            <p className="eyebrow light">A private conversation</p>
            <h2>The right pathway changes<br />what is possible.</h2>
            <p>Every engagement begins with a confidential conversation.</p>
            <Link className="button light" href="/private-enquiries">Request a Private Conversation</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
