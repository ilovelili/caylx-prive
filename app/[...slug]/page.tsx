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
  if (path === "about") return <><main><InnerHero data={{ eyebrow:"Behind every journey", title:"Built on trusted relationships. Delivered personally." }} /><section className="section detail"><div className="wrap detailGrid"><div><Label>Katie Kong</Label><h2>Founder &amp;<br />Managing Director</h2></div><div><p>Calyx Privé is the private-client division of Calyx, a cross-border strategic access platform connecting trusted partners across China, the Gulf, Africa and beyond.</p><p>For more than 15 years, Katie Kong has worked across China, Europe and the Middle East, helping entrepreneurs, business leaders and institutions build trusted relationships across cultures.</p><p>As Calyx evolved, clients increasingly sought something beyond commercial opportunities. They wanted a trusted partner to help them navigate China itself—with discretion and confidence.</p></div></div></section></main><Footer /></>;
  if (path === "how-it-works") return <><main><InnerHero data={{ eyebrow:"How it works", title:"A discreet process holds every journey.", intro:"Personal coordination brings clarity to complex requests without turning the relationship into a fixed programme." }} /><section className="section"><div className="wrap processList">{process.map(([title,text],i)=><article key={title}><small>{String(i+1).padStart(2,"0")}</small><h2>{title}</h2><p>{text}</p></article>)}</div></section></main><Footer /></>;
  if (path === "private-enquiries") return <><main><InnerHero data={{ eyebrow:"Private enquiries", title:"Begin with a private conversation.", intro:"Every engagement begins with an understanding of the individual, the purpose of the journey and the level of support required." }} /><section className="section enquiry"><div className="wrap detailGrid"><div><h2>Every enquiry is personally reviewed.</h2><p>Calyx Privé accepts a limited number of engagements each year, ensuring every client receives personal attention from beginning to end.</p></div><form action="mailto:concierge@calyx.global" method="post" encType="text/plain"><label>Name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label><label>Country of residence<input name="country" /></label><label>How may we help?<textarea name="message" rows={5} required /></label><button className="button" type="submit">Send Private Enquiry</button><p className="finePrint">Please do not submit confidential medical, financial or highly sensitive personal information through this form.</p></form></div></section></main><Footer /></>;
  notFound();
}
