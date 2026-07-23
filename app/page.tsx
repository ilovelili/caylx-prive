import Image from "next/image";
import Link from "next/link";
import { Footer, Header, Label, SplitSection } from "./site";

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
          <div className="heroShade" />
          <Header light />
          <div className="heroContent wrap">
            <Label>China × Health × Culture × Innovation</Label>
            <h1>A deeper way<br />into China.</h1>
            <p>Privately coordinated access to China’s health, innovation, culture and relationships—created for a select group of ultra-high-net-worth individuals, families and family offices.</p>
            <div className="heroActions">
              <Link className="button light" href="/private-enquiries">Request a Private Conversation</Link>
              <Link className="textLink lightLink" href="#journey">Explore the Journey <span>→</span></Link>
            </div>
          </div>
        </section>

        <SplitSection label="01 / Perspective" title={<>China is easy<br />to visit.</>} className="perspective">
          <h3>It is far harder to access with context, trust and purpose.</h3>
          <p>Modern health, advanced industry, contemporary culture and one of the world’s deepest living traditions converge here.</p>
          <p className="accentCopy">The opportunity lies in knowing what matters—and how to reach it.</p>
        </SplitSection>

        <SplitSection label="02 / Our role" title={<>Trusted access,<br />personally<br />coordinated.</>} dark>
          <p>Calyx Privé creates privately coordinated pathways into China for ultra-high-net-worth individuals and families seeking meaningful access across health, innovation, culture and relationships.</p>
          <div className="roleGrid"><span>Curate</span><span>Facilitate</span><span>Coordinate</span><span>Accompany</span></div>
          <p className="fine">Each pathway is shaped around the individual and personally coordinated with discretion, cultural fluency and close attention.</p>
        </SplitSection>

        <SplitSection label="03 / Who we serve" title={<>Created for<br />those who<br />value access<br />built on<br />trust.</>} className="soft">
          <p>Calyx Privé is designed for a select group of ultra-high-net-worth individuals, international families, family offices, founders, entrepreneurs, business leaders and trusted advisers acting on behalf of private clients.</p>
          <p>We accept a limited number of engagements each year, allowing every relationship to remain highly personal, thoughtfully coordinated and personally overseen.</p>
          <p className="accentCopy">Relationships typically begin through referral, invitation or a confidential introductory conversation.</p>
        </SplitSection>

        <section className="section pathways" id="journey">
          <div className="wrap">
            <Label>04 / The journey</Label>
            <h2>Four pathways shape<br />every journey.</h2>
            <div className="pathGrid">
              {pathways.map((item) => (
                <Link className="pathCard" href={item.href} key={item.title}>
                  <div className="pathImage"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
                  <small>{item.n}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="textLink">Explore pathway →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SplitSection label="05 / Understanding" title={<>Every journey<br />begins with<br />understanding.</>} className="soft">
          <p>Rather than offering predefined itineraries, Calyx Privé takes time to understand each client’s objectives, interests and priorities before designing an appropriate pathway. No two engagements need to look the same.</p>
          <p>Whether the focus is health, innovation, culture or relationships, every journey is shaped around the individual—not assembled from a catalogue of experiences.</p>
        </SplitSection>

        <section className="section process">
          <div className="wrap">
            <Label>06 / How it works</Label>
            <h2>A discreet process holds<br />every journey.</h2>
            <div className="fourGrid">
              {steps.map(([n, title, text]) => <article key={title}><small>{n}</small><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            <Link className="textLink" href="/how-it-works">View the full process →</Link>
          </div>
        </section>

        <section className="section dark principles">
          <div className="wrap">
            <Label>07 / Principles</Label>
            <h2>Discretion is designed<br />into the service.</h2>
            <div className="fourGrid">
              {principles.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <SplitSection label="08 / About" title={<>Strategic<br />access,<br />made<br />personal.</>}>
          <p>Calyx Privé is the private-client division of Calyx, a cross-border strategic access platform connecting trusted partners across China, the Gulf, Africa and beyond.</p>
          <p>It extends that trusted reach to individuals and families seeking privately coordinated access across health and wellbeing, technology, culture, relationships and selected opportunities.</p>
          <Link className="textLink" href="/about">About Calyx Privé →</Link>
        </SplitSection>

        <section className="section cta">
          <div className="wrap">
            <Label>A private conversation</Label>
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
