import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header, Label } from "../site";

type PageData = {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  sections?: Array<{ title: string; text: string }>;
  items?: string[];
};

const journeys: Record<string, PageData> = {
  "journey/health-wellbeing": {
    eyebrow: "Health & Wellbeing",
    title: "Health begins long before treatment.",
    intro: "A personally coordinated pathway through China’s medical and wellbeing landscape.",
    image: "/images/calyx-prive/health.png",
    sections: [{ title: "A coordinated health and wellbeing journey.", text: "From preventative assessment and specialist access to restorative support and continuity, each element is selected around the client’s health needs, family context and preferred pace." }],
    items: ["Preventative assessments", "Hospital and specialist access", "Medical interpretation", "Travel and family coordination", "Traditional Chinese medicine", "Sleep, recovery and nutrition", "Private retreat settings", "Bilingual practical support", "Post-visit continuity"],
  },
  "journey/technology-innovation": {
    eyebrow: "Technology & Innovation",
    title: "The future is already visible.",
    intro: "Private exposure to the people, companies and ecosystems shaping China’s next chapter.",
    image: "/images/calyx-prive/technology.png",
    sections: [{ title: "Private access to China’s innovation landscape.", text: "Meetings, company visits and expert conversations are curated around the client’s sectors, questions and strategic interests." }],
    items: ["Private company visits", "Expert conversations", "Research and innovation ecosystems", "Artificial intelligence and digital ecosystems", "Robotics and advanced manufacturing", "Mobility and clean technology", "Biotechnology and health technology", "Practical and cultural context"],
  },
  "journey/culture-lifestyle": {
    eyebrow: "Culture & Lifestyle",
    title: "China is understood through experience.",
    intro: "A private journey into culture, place and contemporary life—designed with context and time.",
    image: "/images/calyx-prive/culture.png",
    sections: [{ title: "Culture revealed through place and participation.", text: "Private hospitality, contemporary culture, heritage, gastronomy and restorative travel are combined around the individual’s interests and rhythm." }],
    items: ["Art, architecture and heritage", "Design and contemporary culture", "Gastronomy and regional traditions", "Family and intergenerational discovery", "Private hospitality", "Restorative travel", "Thoughtful pacing and privacy", "Bilingual practical coordination", "Continuity throughout the journey"],
  },
  "journey/relationships-opportunities": {
    eyebrow: "Relationships & Opportunities",
    title: "The right conversation can change a journey.",
    intro: "Introductions are shaped around relevance, mutual interest and permission—never volume.",
    image: "/images/calyx-prive/relationships.png",
    sections: [{ title: "Relevant relationships, introduced with care.", text: "Experts, institutions, entrepreneurs and private communities are approached selectively, with mutual relevance, discretion and permission." }],
    items: ["Experts and institutions", "Entrepreneurs and industry leaders", "Cultural and private communities", "Family and philanthropic networks", "Relevant hosted conversations", "Family and next-generation interests", "Occasional commercial opportunities"],
  },
};

const legal: Record<string, PageData> = {
  privacy: {
    eyebrow: "Legal", title: "Privacy Policy",
    sections: [
      { title: "Information we collect", text: "When you submit an enquiry, we may collect your name, contact details, country of residence, the capacity in which you are enquiring, areas of interest, timing and the information you choose to include in your message." },
      { title: "How information is used", text: "Enquiry information is used to assess and respond to your request, communicate with you, maintain appropriate records and, where you consent, coordinate with approved parties on a need-to-know basis." },
      { title: "Sensitive information", text: "Please do not submit confidential medical, financial or highly sensitive personal information through the website form. If such information is required, Calyx Privé will identify an appropriate secure private channel." },
      { title: "Consent and communications", text: "By submitting the form, you consent to being contacted in relation to your enquiry. You may withdraw communication consent by contacting concierge@calyx.global." },
      { title: "Confidentiality limitations", text: "While Calyx Privé treats enquiries discreetly, internet and email communications cannot be guaranteed to be completely secure. Information may also need to be shared where required by law." },
      { title: "Independent providers", text: "Where an engagement involves independent providers, their own privacy notices and professional obligations may apply." },
      { title: "Retention and rights", text: "Information should be retained only for as long as reasonably necessary for the purpose collected and applicable legal requirements." },
    ],
  },
  terms: {
    eyebrow: "Legal", title: "Terms & Disclaimer",
    sections: [
      { title: "Website information", text: "Information on this website is general in nature and does not constitute medical, legal, financial, investment or other regulated professional advice." },
      { title: "Nature of the service", text: "Calyx Privé curates access, facilitates relationships and coordinates experiences. It is not a travel agency, healthcare provider, legal adviser, financial adviser or investment adviser." },
      { title: "Independent providers", text: "Clinical, travel, legal, financial and other regulated services remain the responsibility of appropriately licensed independent providers." },
      { title: "No guarantee of access", text: "All introductions and access are subject to relevance, availability, mutual interest, permission and the discretion of the relevant parties." },
      { title: "No guarantee of outcomes", text: "Calyx Privé does not guarantee medical, commercial, investment, relationship or other outcomes." },
      { title: "Engagement terms", text: "The scope, responsibilities, fees and commercial terms for any engagement are agreed separately in writing before substantive work begins." },
      { title: "Intellectual property", text: "Website copy, design and brand materials are owned by or licensed to Calyx Privé and may not be reproduced without permission." },
    ],
  },
};

const process = [
  ["Initial private conversation", "Begin with the individual, the purpose and the context."],
  ["Understanding objectives", "Clarify interests, priorities, timing and the desired level of support."],
  ["Research and qualification", "Identify relevant pathways and qualify appropriate parties."],
  ["Proposed pathway", "Present a clear scope shaped around the client."],
  ["Client approval", "Confirm responsibilities, terms and consent before substantive work begins."],
  ["Access and coordination", "Facilitate relevant access and coordinate communication across borders."],
  ["Pre-journey preparation", "Prepare the client, providers and practical arrangements."],
  ["On-the-ground continuity", "Remain close through meetings, visits, changes and decisions."],
  ["Follow-up", "Maintain context and coordinate appropriate continuity after the journey."],
];

const questions = [
  ["Is Calyx Privé a travel agency?", "No. Calyx Privé curates access, facilitates relationships and coordinates the wider journey. Regulated travel services may be delivered by approved specialist providers where required."],
  ["Does Calyx Privé offer fixed itineraries?", "No. Every engagement begins with understanding the client’s objectives before an appropriate pathway is designed."],
  ["Can Calyx Privé arrange medical treatment?", "Calyx Privé may facilitate introductions and practical coordination. All medical advice, diagnosis and treatment remain the responsibility of licensed healthcare providers."],
  ["How are introductions handled?", "Introductions are considered individually and proceed only where there is relevance, mutual interest and permission from all appropriate parties."],
  ["Is the service available only through referral?", "Many relationships begin through referral or invitation. Direct confidential enquiries from suitable prospective clients or their advisers are also considered."],
  ["Can family offices and trusted advisers make enquiries on behalf of clients?", "Yes. Calyx Privé may work directly with individuals, families, family offices and trusted professional advisers."],
  ["How far in advance should an enquiry be made?", "As early as reasonably possible. The time required depends on the nature of the request, access requirements and the level of coordination involved."],
  ["Are fees agreed before work begins?", "Yes. The proposed scope, responsibilities and commercial terms are confirmed before substantive work begins."],
];

export function generateStaticParams() {
  return [
    ...Object.keys(journeys),
    ...Object.keys(legal),
    "about",
    "how-it-works",
    "private-enquiries",
  ].map((path) => ({ slug: path.split("/") }));
}

function InnerHero({ data }: { data: PageData }) {
  return <section className={`innerHero ${data.image ? "imageHero" : ""}`}>{data.image && <Image src={data.image} alt="" fill priority sizes="100vw" />}<div className="innerShade" /><Header light={!!data.image} /><div className="wrap innerHeroContent"><Label>{data.eyebrow}</Label><h1>{data.title}</h1>{data.intro && <p>{data.intro}</p>}</div></section>;
}

function JourneyPage({ data }: { data: PageData }) {
  return <><main><InnerHero data={data} /><section className="section detail"><div className="wrap detailGrid"><div><Label>01 / {data.eyebrow}</Label><h2>{data.sections?.[0].title}</h2></div><div><p>{data.sections?.[0].text}</p><div className="itemList">{data.items?.map(item => <span key={item}>{item}</span>)}</div></div></div></section><section className="section cta"><div className="wrap"><Label>Begin privately</Label><h2>Every journey starts<br />with understanding.</h2><Link className="button light" href="/private-enquiries">Request a Private Conversation</Link></div></section></main><Footer /></>;
}

function LegalPage({ data }: { data: PageData }) {
  return <><main><InnerHero data={data} /><section className="section legal"><div className="wrap legalGrid">{data.sections?.map(section => <article key={section.title}><h2>{section.title}</h2><p>{section.text}</p></article>)}</div></section></main><Footer /></>;
}

export default async function CatchAll({ params }: { params: Promise<{ slug: string[] }> }) {
  const path = (await params).slug.join("/");
  if (journeys[path]) return <JourneyPage data={journeys[path]} />;
  if (legal[path]) return <LegalPage data={legal[path]} />;
  if (path === "about") return <><Header /><main>
    <section className="plain-hero wrap"><p className="eyebrow">Behind every journey</p><h1>Built on trusted relationships.<br />Delivered personally.</h1></section>
    <section className="section wrap founder">
      <div className="founder-image"><Image src="/images/calyx-prive/katie-kong.jpg" alt="Katie Kong, Founder and Managing Director of Calyx and Calyx Privé" fill priority sizes="(max-width:800px) 100vw, 40vw" /></div>
      <div className="founder-copy">
        <p className="eyebrow">Katie Kong</p>
        <p className="founder-title">Founder &amp; Managing Director<br />Calyx &amp; Calyx Privé</p>
        <p className="body-lead founder-intro">Calyx Privé is the private-client division of Calyx, a cross-border strategic access platform connecting trusted partners across China, the Gulf, Africa and beyond.</p>
        <p>For more than 15 years, Katie Kong has worked across China, Europe and the Middle East, helping entrepreneurs, business leaders and institutions build trusted relationships across cultures. Her career spans investment banking, strategic advisory and international business development, giving her a rare perspective on how meaningful access is created through trust, cultural understanding and long-term relationships.</p>
        <p>As Calyx evolved, clients increasingly sought something beyond commercial opportunities. They wanted a trusted partner to help them navigate China itself—its healthcare, innovation, culture and relationships—with discretion and confidence.</p>
        <p>Calyx Privé was created as a natural extension of that work. Today, every engagement is personally designed and overseen by Katie.</p>
        <blockquote>The most valuable access is built on trust, context and personal relationships.</blockquote>
        <ul className="credentials"><li>15+ years of cross-border experience across China, Europe and the Middle East</li><li>Former investment banking professional advising on cross-border transactions</li><li>Executive education at Mannheim Business School, Germany</li><li>Relationships across healthcare, technology, industry and family enterprises</li><li>Personally oversees every Calyx Privé engagement</li></ul>
        <Link href="/private-enquiries" className="button">Begin a Private Conversation</Link>
      </div>
    </section>
  </main><Footer /></>;
  if (path === "how-it-works") return <><Header /><main>
    <section className="plain-hero wrap"><p className="eyebrow">How it works</p><h1>A discreet process holds<br />every journey.</h1><p>Personal coordination brings clarity to complex requests without turning the relationship into a fixed programme.</p></section>
    <section className="section warm"><div className="wrap stage-list">{process.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
    <section className="section wrap faq"><p className="section-number">Questions, considered</p><h2>Before a private conversation.</h2>{questions.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    <section className="cta section"><div className="wrap"><h2>Begin with a private conversation.</h2><Link href="/private-enquiries" className="button light">Private Enquiries</Link></div></section>
  </main><Footer /></>;
  if (path === "private-enquiries") return <><Header /><main>
    <section className="plain-hero wrap"><p className="eyebrow">Private enquiries</p><h1>Begin with a private<br />conversation.</h1><p>Every engagement begins with an understanding of the individual, the purpose of the journey and the level of support required.</p></section>
    <section className="section warm"><div className="wrap enquiry-layout">
      <div className="enquiry-intro"><p className="body-lead">Calyx Privé accepts a limited number of engagements each year, ensuring every client receives personal attention from beginning to end.</p><p>Relationships typically begin through referral, invitation or a confidential introductory conversation.</p><p>Every enquiry is personally reviewed to ensure that the client’s objectives align with the nature of our work and the relationships we cultivate.</p><a className="email-link" href="mailto:concierge@calyx.global">concierge@calyx.global</a></div>
      <form className="enquiry-form" noValidate>
        <label>Full name<input autoComplete="name" required name="name" /></label>
        <label>Email address<input type="email" autoComplete="email" required name="email" /></label>
        <label>Telephone or WhatsApp<input type="tel" autoComplete="tel" required name="phone" /></label>
        <label>Country of residence<input autoComplete="country-name" required name="country" /></label>
        <label>Enquiring as<select name="enquiringAs" required defaultValue=""><option value="" disabled>Select one</option><option>Individual</option><option>Family member</option><option>Family office</option><option>Trusted adviser</option><option>Other</option></select></label>
        <label>Area of interest<select name="interest" required defaultValue=""><option value="" disabled>Select one</option><option>Health &amp; Wellbeing</option><option>Technology &amp; Innovation</option><option>Culture &amp; Lifestyle</option><option>Relationships &amp; Opportunities</option><option>Multiple pathways</option></select></label>
        <label>Approximate timing<input placeholder="For example, October 2026" name="timing" /></label>
        <label>Number of travellers, if relevant<input type="number" min="1" name="travellers" /></label>
        <label>Preferred method of contact<select name="contact" defaultValue="Email"><option>Email</option><option>Telephone</option><option>WhatsApp</option></select></label>
        <label className="full">Message<textarea name="message" rows={6} required /></label>
        <p className="form-warning full">Please do not submit confidential medical, financial or highly sensitive personal information through this form. Where appropriate, sensitive information will be requested through a secure private channel after initial contact.</p>
        <label className="consent full"><input type="checkbox" required /> <span>I consent to Calyx Privé using this information to respond to my enquiry and have read the Privacy Policy.</span></label>
        <button className="button full" type="submit">Send Private Enquiry</button>
      </form>
    </div></section>
  </main><Footer /></>;
  notFound();
}
