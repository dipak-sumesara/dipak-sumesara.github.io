// Single source of truth for every word on the site. Sourced from public/resume.pdf —
// when the résumé changes, update this file and nothing else.

export const profile = {
  name: "Dipak Sumesara",
  role: "Senior Backend Engineer",
  location: "Ahmedabad, India",
  availability: "Open to senior backend roles",
  workStyle: "Remote",
  email: "dipakbsumesara@gmail.com",
  phone: "+91 96621 84977",
  phoneHref: "tel:+919662184977",
  github: "https://github.com/dipak-sumesara",
  githubHandle: "dipak-sumesara",
  linkedin: "https://linkedin.com/in/dipakbsumesara",
  linkedinHandle: "dipakbsumesara",
  site: "https://dipak-sumesara.github.io",
  resume: "/resume.pdf",
  avatar: "/avatar.jpg",
} as const;

export const hero = {
  eyebrow: "Senior Backend Engineer · Node.js · TypeScript · AWS",
  headline: ["I turn seconds", "into milliseconds."],
  lede:
    "8+ years architecting Node.js and TypeScript backends that stay fast, correct, and recoverable under real load — from leading the backend of a US company's B2B operations platform, to real-time systems serving 100K+ concurrent users.",
  stack: ["Node.js", "TypeScript", "MongoDB", "Microservices", "AWS", "LLM Systems"],
};

export type Metric = { value: string; label: string; context: string };

export const metrics: Metric[] = [
  {
    value: "s → ms",
    label: "API response times",
    context: "Redis caching, query optimization, and indexing on an enterprise B2B platform",
  },
  {
    value: "100K+",
    label: "Concurrent users at peak",
    context: "Real-time WebSocket backend for a fantasy sports platform",
  },
  {
    value: "8+",
    label: "Years in production",
    context: "Backend engineering across B2B SaaS, gov-tech, sports, and agritech",
  },
  {
    value: "90%",
    label: "Enforced test-coverage gate",
    context: "Singapore government health platform — commits blocked below threshold",
  },
  {
    value: "~20K",
    label: "Products in live search",
    context: "Elasticsearch with indexing pipelines kept consistent with source data",
  },
];

export type CompetencyGroup = { title: string; items: string[] };

export const competencies: CompetencyGroup[] = [
  {
    title: "Distributed Systems",
    items: [
      "Microservices",
      "Event-Driven Architecture",
      "API Gateway",
      "Pub/Sub",
      "SQS · DLQ · BullMQ",
      "WebSockets",
      "Server-Sent Events",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Fastify",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
    ],
  },
  {
    title: "Cloud & Reliability",
    items: [
      "AWS Lambda",
      "API Gateway",
      "S3 · CloudFront",
      "Docker",
      "GitHub Actions",
      "Sentry",
      "JWT · OAuth",
    ],
  },
];

export type Principle = { title: string; body: string };

export const principles: Principle[] = [
  {
    title: "Design for failure",
    body: "Every queue gets a dead-letter path, every job a retry policy, every incident a root cause. Recovery is a feature, not a fire drill.",
  },
  {
    title: "Contracts before code",
    body: "Versioned APIs, enforced schemas, and response transformers mean services evolve without breaking the teams that depend on them.",
  },
  {
    title: "Cache with intent",
    body: "Speed comes from understanding access patterns — indexing, read/write splitting, and caching only where it changes the curve.",
  },
];

export const leadership = {
  title: "Raise the floor, not just the ceiling",
  body: "I lead by setting standards the whole team ships against — Jest testing and code-review norms — then mentoring engineers until those standards are theirs.",
  points: ["Led system design for the Aloha backend", "Set team testing & review standards", "Mentored junior developers"],
  stat: { value: "3", label: "Engineers led on Salam Kisan" },
};

export type AiProject = { name: string; summary: string; href: string; stack: string };

export const aiProjects: AiProject[] = [
  {
    name: "AI Commerce Assistant",
    summary: "Natural-language shopping queries turned into Zod-validated filters, grounded by a lightweight RAG pipeline behind a relevance guardrail.",
    href: "https://github.com/dipak-sumesara/ai-commerce-assistant",
    stack: "Fastify · Ollama · Zod · SSE",
  },
  {
    name: "AI Integration Discovery Agent",
    summary: "Proof-of-concept agent that reads API docs, probes a mock API through tool calls, and emits a Zod-validated connector spec.",
    href: "https://github.com/dipak-sumesara/ai-integration-discovery-agent",
    stack: "Claude API · Ollama · Tool Use",
  },
  {
    name: "Reverie: AI Character Chat",
    summary: "Conversation memory that keeps long chats inside the context window via Redis-cached summaries, streamed over SSE.",
    href: "https://github.com/dipak-sumesara/ai-chat-app",
    stack: "Express · MongoDB · Redis · Llama",
  },
];

export type CaseStudy = {
  id: string;
  index: string;
  client: string;
  title: string;
  context: string;
  period: string;
  problem: string;
  problemPoints: string[];
  architecture: { label: string; detail: string }[];
  outcomes: { value: string; label: string }[];
  impact: string;
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "aloha",
    index: "01",
    client: "SwagUp",
    title: "Re-architecting an enterprise operations platform for speed and resilience",
    context: "Aloha — B2B admin and operations platform for vendors, distributors, and internal teams",
    period: "2023 — 2026 · Senior Backend Engineer",
    problem:
      "A growing B2B platform was carrying vendor, distributor, and admin workflows on a single backend. API calls took seconds, the Salesforce sync needed to recover failed messages instead of losing them, and the platform had to meet high-availability SLAs for a US customer base.",
    problemPoints: [
      "Seconds-long API responses on core operational workflows",
      "A Salesforce sync that must recover from failures, not drop them",
      "Vendor, distributor, and admin workflows competing on one backend",
    ],
    architecture: [
      {
        label: "Service decomposition",
        detail: "Split the platform into microservices behind an API Gateway on AWS Lambda, with a central service for authentication (JWT, API keys, Google OAuth), authorization, and sessions.",
      },
      {
        label: "Performance layer",
        detail: "Redis caching, query optimization, and database indexing on hot paths; connection pooling and read/write splitting for throughput.",
      },
      {
        label: "Reliable async",
        detail: "Event-driven flows on pub/sub, SQS, and BullMQ with retries and observability; Salesforce sync on SQS with a dead-letter queue.",
      },
      {
        label: "High availability",
        detail: "Replication, failover, and load balancing; Dockerized services for Kubernetes, shipped through GitHub Actions under high-availability SLAs.",
      },
      {
        label: "Search",
        detail: "Elasticsearch over ~20K products with custom indexing pipelines that keep the index consistent with source data.",
      },
    ],
    outcomes: [
      { value: "s → ms", label: "API response times" },
      { value: "~20K", label: "Products searchable in real time" },
      { value: "DLQ", label: "Failed sync messages captured and recoverable" },
    ],
    impact:
      "Turned a slow platform into independently deployable services with predictable latency, recoverable integrations, and a team shipping against shared test and review standards.",
    stack: ["Node.js", "TypeScript", "Express", "MongoDB", "Redis", "GraphQL", "AWS Lambda", "SQS", "BullMQ", "Elasticsearch", "Docker"],
  },
  {
    id: "11wickets",
    index: "02",
    client: "Yudiz Solutions",
    title: "Real-time backend for a fantasy sports platform at match-day scale",
    context: "11Wickets — fantasy sports platform competing with Dream11",
    period: "2020 — 2021 · Software Engineer",
    problem:
      "Fantasy sports traffic is brutally spiky: almost every user arrives at once when a match goes live, and all of them expect scores and chat to update instantly. The backend had to absorb peak match load without degrading the live experience.",
    problemPoints: [
      "Extreme read concurrency concentrated in match windows",
      "Live scores that must reach every client in real time",
      "In-match engagement features under the same load",
    ],
    architecture: [
      {
        label: "Push, don't poll",
        detail: "WebSocket channels stream live score updates to connected clients instead of letting them hammer the API.",
      },
      {
        label: "Read-path caching",
        detail: "Redis absorbs the high-concurrency read traffic so the primary datastore is protected at peak.",
      },
      {
        label: "Live engagement",
        detail: "WebSocket-based live chat built on the same real-time layer for in-match conversation.",
      },
    ],
    outcomes: [
      { value: "100K+", label: "Concurrent users at peak match load" },
      { value: "Live", label: "Scores and chat pushed over WebSockets" },
    ],
    impact:
      "Delivered a real-time experience that held up at peak concurrency, while mentoring junior developers on the team.",
    stack: ["Node.js", "TypeScript", "Express", "MongoDB", "Redis", "WebSockets"],
  },
  {
    id: "healthy365",
    index: "03",
    client: "CoffeeBeans Consulting",
    title: "Shipping citizen health services under a government-grade quality bar",
    context: "Healthy 365 — the Singapore Health Promotion Board's citizen health app",
    period: "2021 — 2023 · Software Engineer / Backend Lead",
    problem:
      "A national, citizen-facing health app can't treat quality as a goal — it has to be enforced. Every backend change had to clear automated gates and multiple human checkpoints before it reached production, inside a 10-person cross-functional team.",
    problemPoints: [
      "Citizen-facing government service",
      "Coverage enforced at commit time, not as an aspiration",
      "Four environments between a commit and production",
    ],
    architecture: [
      {
        label: "Coverage as a hard gate",
        detail: "90% minimum unit-test coverage, with commits blocked below the threshold.",
      },
      {
        label: "Static guarantees",
        detail: "Strict ESLint rules enforced across the Node.js and TypeScript backend services.",
      },
      {
        label: "Two sets of eyes",
        detail: "Pair programming during implementation and dual QA before sign-off.",
      },
      {
        label: "Staged promotion",
        detail: "Dev → QA → UAT → Production, with each stage a gate for the next.",
      },
    ],
    outcomes: [
      { value: "90%", label: "Minimum unit-test coverage, enforced" },
      { value: "4", label: "Gated environments from commit to production" },
      { value: "10", label: "Person cross-functional delivery team" },
    ],
    impact:
      "Backend services for a government health platform, delivered with quality enforced by tooling and process rather than left to good intentions.",
    stack: ["Node.js", "TypeScript", "Express", "MongoDB", "PostgreSQL", "Jest"],
  },
];

export type Role = {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  years: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "SwagUp",
    title: "Senior Backend Engineer",
    location: "Remote · US team",
    start: "Mar 2023",
    end: "Apr 2026",
    years: "3 yrs",
    summary:
      "Aloha, SwagUp's B2B operations platform, and the customer-facing swagup.com. Joined as a Full Stack Developer, moved to the backend, and later led the Aloha backend.",
    highlights: [
      "Cut API response times from seconds to milliseconds with Redis caching, query optimization, and indexing.",
      "Led system design and delivery for the Aloha backend alongside US product and engineering teams.",
      "Split the platform into microservices behind an API Gateway on AWS Lambda with a central auth service.",
      "Built a Node.js-to-Salesforce sync on SQS with a dead-letter queue to capture and recover failures.",
      "Built Elasticsearch product search (~20K products) with indexing pipelines kept consistent with source data.",
      "Handled production incidents with Sentry, logging, and alerting — RCA, rollbacks, and hotfixes.",
      "Built REST and GraphQL APIs for order tracking and a multi-tier pricing engine with real-time quotes.",
      "Built Aloha admin, quote, and pricing screens in React with Redux, React Query, and MUI.",
    ],
    stack: ["Node.js", "TypeScript", "Express", "MongoDB", "Redis", "Elasticsearch", "GraphQL", "AWS", "React"],
  },
  {
    company: "CoffeeBeans Consulting",
    title: "Software Engineer / Backend Lead",
    location: "Remote",
    start: "Jun 2021",
    end: "Mar 2023",
    years: "2 yrs",
    summary: "Backend for a Singapore government health platform and backend lead for an agritech platform.",
    highlights: [
      "Built Node.js backend systems for Healthy 365 (Health Promotion Board, Singapore) in a 10-person team.",
      "Shipped under a 90% minimum coverage gate, strict linting, dual QA, and staged Dev → QA → UAT → Prod promotion.",
      "Owned backend architecture for Salam Kisan's agricultural supply chain, including Open edX integration.",
      "Led a 3-engineer backend team across sprint delivery, code quality, and production support.",
    ],
    stack: ["Node.js", "TypeScript", "Express", "MongoDB", "PostgreSQL", "Strapi", "AWS"],
  },
  {
    company: "Yudiz Solutions",
    title: "Software Engineer",
    location: "Ahmedabad, India",
    start: "May 2020",
    end: "May 2021",
    years: "1 yr",
    summary: "Real-time backend features for 11Wickets, a fantasy sports platform.",
    highlights: [
      "Built real-time features serving 100K+ concurrent users at peak match load.",
      "WebSockets for live scores and live chat; Redis caching for high-concurrency reads.",
      "Mentored junior developers.",
    ],
    stack: ["Node.js", "TypeScript", "Express", "MongoDB", "Redis", "WebSockets", "React"],
  },
  {
    company: "Biztech Consulting & Solutions",
    title: "Software Engineer",
    location: "Ahmedabad, India",
    start: "Jan 2019",
    end: "Mar 2020",
    years: "1 yr",
    summary: "Proposed and led the v2.0 rewrite of BrushYourIdeas.",
    highlights: [
      "Moved the product from a legacy Angular codebase to the latest Angular with a modular architecture — adopted by the founding team.",
      "Rebuilt it as independent feature modules, so Professional, Ultimate, and Custom packs replaced the all-or-nothing model.",
    ],
    stack: ["Angular", "TypeScript", "MySQL"],
  },
  {
    company: "Angular Minds",
    title: "Software Engineer (Intern → Full-Time)",
    location: "Pune, India",
    start: "Dec 2017",
    end: "Sep 2018",
    years: "10 mos",
    summary: "Built Numnu, a food-event discovery app, end-to-end.",
    highlights: [
      "NestJS and MongoDB backend with an Angular/Ionic frontend, surfacing events by proximity and date.",
      "Shipped an event-guide mode used at the Royal Manitoba Winter Fair.",
    ],
    stack: ["Node.js", "NestJS", "MongoDB", "Angular", "Ionic"],
  },
];

export const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Savitribai Phule Pune University", year: "2018" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "Krantiguru Shyamji Krishna Verma Kachchh University", year: "2015" },
];

export const nav = [
  { href: "#impact", label: "Impact" },
  { href: "#work", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
