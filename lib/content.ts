// Single source of truth for every word on the site. Sourced from public/resume.pdf —
// when the Resume changes, update this file and nothing else.

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
  avatar: "/avatar.png",
} as const;

export const hero = {
  eyebrow: "Senior Backend Engineer · Node.js · TypeScript · AWS",
  headline: ["Owned the backend", "of a B2B marketplace."],
  lede:
    "I owned the backend of SwagUp's multi-tenant B2B marketplace: Lambda microservices, event-driven sync, and API response times cut from about 4 seconds to 300–500 ms. Earlier I built real-time features for a fantasy sports platform with 100K+ concurrent users at peak, and backend services for Singapore's citizen health app. 8+ years building backends.",
  stack: ["Node.js", "TypeScript", "MongoDB", "Microservices", "AWS", "LLM APIs"],
};

export type Metric = { value: string; label: string; context: string };

export const metrics: Metric[] = [
  {
    value: "~4s → 300–500ms",
    label: "API response times",
    context: "About 4 s down to 300–500 ms on SwagUp's Aloha marketplace, using Redis caching, query optimization and indexing. Price and stock data are not cached",
  },
  {
    value: "100K+",
    label: "Concurrent users at peak",
    context: "Fantasy sports platform I built real-time backend features for (WebSockets, Redis)",
  },
  {
    value: "5K+",
    label: "Messages a day",
    context: "Salesforce and Elasticsearch sync via SNS → SQS with idempotent consumers, retries and DLQ recovery",
  },
  {
    value: "3",
    label: "Independent services",
    context: "Vendor, distributor and admin microservices on Lambda behind API Gateway, with a central identity service",
  },
  {
    value: "~20K",
    label: "Active products in live search",
    context: "Indexed in Elasticsearch through an SNS → SQS pipeline, reconciled with MongoDB on a schedule",
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
      "SNS · SQS · DLQ",
      "CQRS · Idempotency",
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
      "Docker · Kubernetes",
      "GitHub Actions",
      "Sentry · CloudWatch",
      "JWT · OAuth · RBAC",
    ],
  },
];

export type Principle = { title: string; body: string };

export const principles: Principle[] = [
  {
    title: "Design for failure",
    body: "Queues get dead-letter queues, consumers are idempotent, and jobs have retries, so failed work can be inspected and replayed.",
  },
  {
    title: "Contracts before code",
    body: "Versioned, Swagger-documented APIs and validated schemas let services change without surprising their consumers.",
  },
  {
    title: "Cache with intent",
    body: "Start with access patterns: indexes, query fixes and read/write separation first, then caching only where stale data is acceptable.",
  },
];

export const leadership = {
  title: "Standards and mentoring",
  body: "On Aloha I wrote design docs with the US product and engineering teams, set Jest and code-review standards, and mentored teammates. On Salam Kisan I led a team of three.",
  points: ["Led system design with US product and engineering teams", "Set Jest and code-review standards", "Migrated the Aloha codebase from JavaScript to TypeScript with the team"],
  stat: { value: "3", label: "Engineers led on Salam Kisan" },
};

export type AiProject = { name: string; summary: string; href: string; stack: string };

export const aiProjects: AiProject[] = [
  {
    name: "AI Commerce Assistant",
    summary: "Small project: natural-language product searches turned into Zod-validated filters with deterministic TypeScript, a guardrail for unrelated queries, and a small RAG pipeline (Markdown chunks, embeddings, cosine similarity).",
    href: "https://github.com/dipak-sumesara/ai-commerce-assistant",
    stack: "Ollama · Zod · RAG · TypeScript",
  },
  {
    name: "AI Integration Discovery Agent",
    summary: "Proof of concept that reads client API docs, probes a mock API through tool calls, and produces a Zod-validated connector spec. Framework-free agent loop, switchable Claude/Ollama providers, SSRF protection.",
    href: "https://github.com/dipak-sumesara/ai-integration-discovery-agent",
    stack: "Claude · Ollama · Tool Use · Zod",
  },
];

export type CaseStudy = {
  id: string;
  index: string;
  client: string;
  title: string;
  context: string;
  period: string;
  note?: string;
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
    title: "Speeding up and splitting a multi-tenant B2B marketplace",
    context: "Aloha — SwagUp's multi-tenant B2B marketplace serving thousands of vendors and ~20K active products",
    period: "2023 — 2026 · Lead Engineer (via Extendime)",
    note: "Owned backend for 3 years; engaged via Extendime.",
    problem:
      "A growing multi-tenant marketplace was carrying vendor, distributor, and admin workflows on a single backend. API calls took about 4 seconds, product updates had to reach Salesforce and Elasticsearch without losing messages, and box selection for B2B orders was still manual.",
    problemPoints: [
      "~4 s API responses on core workflows",
      "Salesforce and search syncs that must recover from failures, not drop them",
      "Vendor, distributor, and admin workflows competing on one backend, with manual box picking for orders",
    ],
    architecture: [
      {
        label: "Service decomposition",
        detail: "Split the platform into domain microservices (vendor, distributor, admin) on AWS Lambda behind API Gateway, with a central identity service (JWT, API keys, Google OAuth, role-based access).",
      },
      {
        label: "Performance layer",
        detail: "Redis caching, query optimization, and indexing on hot paths — without caching price or stock data. CQRS-style reads from MongoDB secondaries and Elasticsearch, with connection pooling.",
      },
      {
        label: "Reliable async",
        detail: "SNS fans out product updates to SQS queues for Salesforce sync (5K+ messages a day) and Elasticsearch indexing, with idempotent consumers, retries, and dead-letter queues. Webhook subscriptions deliver updates via Lambda.",
      },
      {
        label: "AI box recommendation",
        detail: "An LLM tool-calling agent calls Node.js tools for order items, product dimensions, and box sizes, then returns a shortlist with a rationale — replacing manual box picking.",
      },
      {
        label: "Search",
        detail: "Elasticsearch over ~20K active products (up to 40K stored), with a scheduled job reconciling the index with MongoDB. Batch migrations use worker threads for up to 50K records per run.",
      },
    ],
    outcomes: [
      { value: "300–500 ms", label: "API response times, down from ~4 s" },
      { value: "~20K", label: "Active products searchable in real time" },
      { value: "5K+", label: "Salesforce sync messages a day, with DLQ recovery" },
    ],
    impact:
      "Faster APIs, independently deployable services, recoverable integrations, and an AI-assisted box recommendation feature. I started as a full-stack developer and took over backend ownership.",
    stack: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Redis", "AWS Lambda", "SNS", "SQS", "Elasticsearch", "Docker", "Kubernetes"],
  },
  {
    id: "11wickets",
    index: "02",
    client: "Yudiz Solutions",
    title: "Real-time backend features for a fantasy sports platform",
    context: "11Wickets — fantasy sports platform",
    period: "2020 — 2021 · Software Engineer",
    problem:
      "Fantasy sports traffic is concentrated around live matches, when many users expect scores and chat to update at once. The backend needed to handle that peak load.",
    problemPoints: [
      "High read concurrency during match windows",
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
        detail: "Redis caching and leaderboards absorb the high-concurrency read traffic, with PostgreSQL tuning to protect the primary datastore at peak.",
      },
      {
        label: "Live engagement & payments",
        detail: "WebSocket-based live chat on the same real-time layer, plus wallet and contest-entry payment flows.",
      },
    ],
    outcomes: [
      { value: "100K+", label: "Concurrent users supported by the platform at peak" },
      { value: "Live", label: "Scores and chat pushed over WebSockets" },
    ],
    impact:
      "Real-time features for a platform that supported 100K+ concurrent users at peak. I also mentored junior developers.",
    stack: ["Node.js", "Redis", "PostgreSQL", "WebSockets"],
  },
  {
    id: "salam-kisan",
    index: "03",
    client: "CoffeeBeans Consulting",
    title: "A learning platform for Salam Kisan's rural training programs",
    context: "Salam Kisan — agritech platform; training programs include drone pilot certification and farmer digital literacy",
    period: "2021 — 2023 · Software Engineer / Backend Lead",
    note: "Owned backend architecture and led a team of 3.",
    problem:
      "Salam Kisan's rural training programs were manual and fragmented, with no central learning infrastructure. The platform needed a stable learning management system that could deliver media-heavy courses to remote users on low-bandwidth networks, and sync learner data back to the main Salam Kisan application.",
    problemPoints: [
      "Manual, fragmented training delivery",
      "Media-heavy courses for rural users on low-bandwidth networks",
      "Learner data had to flow back to the main Salam Kisan app",
    ],
    architecture: [
      {
        label: "Open edX LMS",
        detail: "Deployed and customized Open edX as the core LMS, including changes to the user authentication pipeline and course delivery workflows for rural users.",
      },
      {
        label: "Strapi CMS",
        detail: "Set up Strapi to hold course content, localized documentation and media, so non-technical program managers can update course modules themselves.",
      },
      {
        label: "REST APIs",
        detail: "Built secure REST APIs connecting the main Salam Kisan app, Strapi CMS and the Open edX backend.",
      },
      {
        label: "Automated data sync",
        detail: "Background sync workflows that update course enrollments, lesson progress and completion certificates across the systems.",
      },
    ],
    outcomes: [
      { value: "Launched", label: "Learning platform built and shipped from scratch" },
      { value: "3 systems", label: "Main app, Strapi CMS and Open edX kept in sync automatically" },
      { value: "Self-serve", label: "Program managers publish and update course content in Strapi" },
    ],
    impact:
      "Led a team of 3 and owned the backend architecture for the platform's learning system, connecting the app, the CMS and the LMS.",
    stack: ["Node.js", "Strapi", "Open edX", "REST APIs"],
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
    title: "Lead Engineer",
    location: "Remote · via Extendime",
    start: "Mar 2023",
    end: "Apr 2026",
    years: "3 yrs",
    summary:
      "Aloha, SwagUp's multi-tenant B2B marketplace serving thousands of vendors and ~20K active products. Joined as a full-stack developer, then took backend ownership and worked directly with the founder.",
    highlights: [
      "Cut API response times from ~4 s to 300–500 ms with Redis caching, query optimization, and indexing — without caching price or stock data.",
      "Built the product-update pipeline: SNS → SQS for Salesforce sync (5K+ messages a day) and Elasticsearch indexing, with idempotent consumers, retries, and DLQs.",
      "Built an LLM tool-calling agent for box recommendations, replacing manual box picking for B2B orders.",
      "Split the platform into vendor, distributor, and admin microservices on AWS Lambda with a central identity service (JWT, API keys, Google OAuth, RBAC).",
      "Designed tenant-specific workflows: per-distributor catalogs, collections, preset packs, storefronts, and order management over a shared product pool.",
      "Built scheduled batch migrations with worker threads (up to 50K records per run) and a webhook-subscription API with retries and per-subscriber failure handling.",
      "Worked on payment, subscription, and wallet flows: gateway integrations, idempotent webhooks, plan entitlements, and transactional wallet updates.",
      "Ran production operations with Sentry, CloudWatch, and Slack alerts; led RFC-style design with US teams, set Jest and review standards, and migrated the codebase to TypeScript.",
    ],
    stack: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "AWS", "Docker", "Kubernetes"],
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
      "Owned backend architecture for Salam Kisan, an agricultural supply-chain platform on Strapi CMS: REST APIs, Open edX integration, and automated data-sync workflows.",
      "Led a 3-engineer team.",
      "Also built backend services for Healthy 365, Singapore Health Promotion Board's citizen health app, in a 10-person team with a 90% unit-test coverage gate and four-environment (Dev → QA → UAT → Production) promotion.",
    ],
    stack: ["Node.js", "TypeScript", "Strapi", "REST", "Jest", "ESLint"],
  },
  {
    company: "Yudiz Solutions",
    title: "Software Engineer",
    location: "Ahmedabad, India",
    start: "May 2020",
    end: "May 2021",
    years: "1 yr",
    summary: "Real-time backend features for 11Wickets, a fantasy sports platform supporting 100K+ concurrent users at peak.",
    highlights: [
      "Built real-time backend features for a platform supporting 100K+ concurrent users at peak.",
      "WebSockets for live scores and chat; Redis caching and leaderboards; PostgreSQL tuning.",
      "Built wallet and contest-entry payment flows.",
      "Mentored junior developers.",
    ],
    stack: ["Node.js", "Redis", "PostgreSQL", "WebSockets"],
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
      "Proposed and led the modular Angular rewrite of BrushYourIdeas v2.0, adopted by the founding team.",
      "Packaged features as Professional, Ultimate, or Custom module plans.",
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
      "Built with NestJS, MongoDB, and Angular/Ionic, with proximity and date-range search.",
      "Used at the Royal Manitoba Winter Fair.",
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
