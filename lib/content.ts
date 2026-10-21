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
  headline: ["Led the backend", "of a B2B marketplace."],
  lede:
    "I led backend development for SwagUp's multi-tenant B2B marketplace: redesigned order-to-invoice billing to stop recurring margin loss, cut API response times from about 4 seconds to 300–500 ms, and built event-driven AWS integrations. Earlier I built real-time features for a fantasy sports platform with 3M+ registered users, and backend services for Singapore's citizen health app. 8+ years building backends.",
  stack: ["Node.js", "TypeScript", "MongoDB", "Microservices", "AWS", "LLM APIs"],
};

export type Metric = { value: string; label: string; context: string };

export const metrics: Metric[] = [
  {
    value: "~4s → 300–500ms",
    label: "API response times",
    context: "Product-listing API at SwagUp: fixed MongoDB aggregation-stage ordering, added a missing compound index, and introduced Redis cache-aside caching with TTLs",
  },
  {
    value: "3M+",
    label: "Registered users",
    context: "Fantasy sports platform (11Wickets) where I built real-time chat and unified live scores over WebSockets and Redis",
  },
  {
    value: "~900K",
    label: "Monthly active users",
    context: "Healthy 365, Singapore's citizen health app, where I delivered backend services under a 90% unit-test coverage gate",
  },
  {
    value: "20K–40K",
    label: "Salesforce records per bulk run",
    context: "Hierarchical product records processed through an async job scheduler and Node.js worker-thread pipeline with SKU-based upserts",
  },
  {
    value: "550,000+",
    label: "Farmers on Salam Kisan",
    context: "Agricultural platform whose Open edX integrations, payments and reward wallet I built as team lead",
  },
];

export type CompetencyGroup = { title: string; items: string[] };

export const competencies: CompetencyGroup[] = [
  {
    title: "Distributed Systems",
    items: [
      "Microservices",
      "Event-Driven Systems",
      "Pub/Sub",
      "SNS · SQS · DLQ",
      "CQRS · Idempotency",
      "Multi-Tenant Design",
      "WebSockets",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "TypeScript",
      "Express",
      "NestJS",
      "GraphQL · REST",
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
      "EC2 · ECS",
      "S3 · SQS · SNS",
      "Docker · Kubernetes",
      "CI/CD",
      "Sentry · CloudWatch",
    ],
  },
];

export type Principle = { title: string; body: string };

export const principles: Principle[] = [
  {
    title: "Design for failure",
    body: "Queues get retry policies and dead-letter queues, consumers are idempotent, and admin tools let failed records be diagnosed and reprocessed without manual log tracing.",
  },
  {
    title: "Contracts before code",
    body: "API contracts, architecture docs and RFC-style reviews keep services changeable and new engineers productive.",
  },
  {
    title: "Cache with intent",
    body: "Fix the query first (aggregation ordering, missing indexes), then add cache-aside caching with TTLs where stale data is acceptable.",
  },
];

export const leadership = {
  title: "Standards and mentoring",
  body: "At SwagUp I introduced a branching strategy so two teams could ship from one repository, and rebuilt documentation and RFC-style reviews for onboarding. At CoffeeBeans I led a team of three on Salam Kisan.",
  points: [
    "Git branching strategy: two teams ship independently, no cherry-picks",
    "Confluence docs, API contracts and RFC-style reviews",
    "Took sole ownership of PropSoch when the team shrank",
  ],
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
    title: "Fixing billing, speed and sync in a multi-tenant B2B marketplace",
    context: "SwagUp — multi-tenant B2B marketplace for corporate merchandise, custom branding and global fulfillment, served through GraphQL and REST APIs",
    period: "Mar 2023 — Apr 2026 · Lead Software Engineer",
    note: "Led backend engineering for 3 years.",
    problem:
      "Vendor price increases after order placement caused recurring margin losses, product-listing calls took about 4 seconds, and synchronous Salesforce syncs crashed the application on 20K–40K record loads.",
    problemPoints: [
      "Margin losses from vendor price increases after an order was placed",
      "~4 s product-listing API responses",
      "Synchronous Salesforce and search syncs that crashed or went stale",
    ],
    architecture: [
      {
        label: "Order-to-invoice billing",
        detail: "Replaced single upfront invoicing with staged deposits and purchase-order-based billing, eliminating the recurring margin loss.",
      },
      {
        label: "Performance layer",
        detail: "Corrected MongoDB aggregation-stage ordering, added a missing compound index, and introduced Redis cache-aside caching with TTLs.",
      },
      {
        label: "Reliable async",
        detail: "SNS/SQS and Lambda pub/sub pipeline replacing synchronous Salesforce sync, with per-subscriber webhook URLs and authentication, retry policies, dead-letter queues, and admin tools to reprocess failed records.",
      },
      {
        label: "Search read model",
        detail: "Extended the SNS/SQS pipeline to update the Kubernetes-hosted CQRS Elasticsearch read model in near real time instead of daily cron syncs, with priority alerts for failed price-sensitive updates. Relevance boosting spans name, brand, category and description.",
      },
      {
        label: "Bulk processing & AI packaging",
        detail: "Async job scheduler and worker-thread pipeline with SKU-based upserts for 20K–40K Salesforce records, plus an LLM tool-calling agent that selects custom packaging from product dimensions, weight and type.",
      },
    ],
    outcomes: [
      { value: "300–500 ms", label: "API response times, down from ~4 s" },
      { value: "20K–40K", label: "Salesforce records processed per bulk run without downtime" },
      { value: "Near real-time", label: "Price-sensitive search updates, no daily cron sync" },
    ],
    impact:
      "Margin-safe billing, faster APIs, recoverable integrations, and an AI packaging feature that reduced costs from incorrectly sized boxes. I also introduced the branching strategy and documentation practices the growing team relied on.",
    stack: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Redis", "AWS Lambda", "SNS", "SQS", "Elasticsearch", "Docker", "Kubernetes"],
  },
  {
    id: "11wickets",
    index: "02",
    client: "Yudiz Solutions",
    title: "Real-time and performance work for a fantasy sports platform",
    context: "11Wickets — fantasy sports platform competing directly with Dream11, 3M+ registered users",
    period: "May 2020 — May 2021 · Software Engineer",
    problem:
      "Fantasy sports traffic is concentrated around live matches, when live-score screens lagged and the app depended on a third-party live-score service.",
    problemPoints: [
      "UI lag on live-score screens during peak match traffic",
      "Large initial bundle and weak offline behaviour",
      "Third-party live-score dependency across web, iOS and Android",
    ],
    architecture: [
      {
        label: "React refactor",
        detail: "Moved the legacy codebase from class components to hooks, using React.memo, useMemo and react-window virtualization, plus lazy loading and code splitting.",
      },
      {
        label: "PWA",
        detail: "Converted the web app into a PWA with custom service workers for offline caching.",
      },
      {
        label: "Real-time backend",
        detail: "Real-time chat and unified live-score delivery across web, iOS and Android on a single WebSocket and Redis-based backend, replacing the third-party service.",
      },
    ],
    outcomes: [
      { value: "~60 → 90+", label: "Lighthouse performance score" },
      { value: "3M+", label: "Registered users on the platform" },
    ],
    impact:
      "Smoother live-match screens, a company-recognized jump in web engagement during live matches, and an in-house real-time backend.",
    stack: ["Node.js", "React", "Redis", "WebSockets", "PWA"],
  },
  {
    id: "salam-kisan",
    index: "03",
    client: "CoffeeBeans Consulting",
    title: "Learning, payments and rewards for Salam Kisan",
    context: "Salam Kisan — agricultural platform that has since scaled to 550,000+ farmers across India",
    period: "Jun 2021 — Mar 2023 · Senior Software Engineer",
    note: "Led a team of 3 engineers.",
    problem:
      "Farmers needed course delivery, payments and incentives connected to the main platform, with learner data kept in sync across systems.",
    problemPoints: [
      "Course delivery through Open edX",
      "Learner data that had to stay in sync",
      "Payments and course-completion incentives",
    ],
    architecture: [
      {
        label: "Open edX integrations",
        detail: "Built Open edX integrations and automated data-sync workflows on PostgreSQL.",
      },
      {
        label: "Payments",
        detail: "Integrated the CCAvenue payment gateway.",
      },
      {
        label: "Reward wallet",
        detail: "Built a reward wallet that credits farmers for completing courses.",
      },
    ],
    outcomes: [
      { value: "550,000+", label: "Farmers on the platform today" },
      { value: "3", label: "Engineers led" },
    ],
    impact:
      "Led a 3-engineer team delivering the integrations, payments and reward wallet for a platform that has scaled to 550,000+ farmers.",
    stack: ["Node.js", "PostgreSQL", "Open edX", "CCAvenue"],
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
    title: "Lead Software Engineer",
    location: "Remote",
    start: "Mar 2023",
    end: "Apr 2026",
    years: "3 yrs",
    summary:
      "Led backend engineering for SwagUp's multi-tenant B2B marketplace for corporate merchandise, custom branding and global fulfillment, served through GraphQL and REST APIs.",
    highlights: [
      "Redesigned order-to-invoice billing with staged deposits and purchase-order-based invoicing, eliminating recurring margin losses from post-order vendor price increases.",
      "Cut product-listing API response times from ~4 s to 300–500 ms by fixing MongoDB aggregation-stage ordering, adding a compound index, and introducing Redis cache-aside caching with TTLs.",
      "Improved B2B discovery and repeat ordering with Elasticsearch relevance boosting, editable occasion-based packs and shareable cart IDs.",
      "Built an LLM tool-calling agent that selects custom packaging from product dimensions, weight and type, reducing costs from incorrectly sized boxes.",
      "Moved price-sensitive Elasticsearch updates off daily cron syncs to a near real-time SNS/SQS pipeline feeding a Kubernetes-hosted CQRS read model, with priority alerts on failures.",
      "Stabilized bulk processing of 20K–40K hierarchical Salesforce records with an async job scheduler and worker-thread pipeline using SKU-based upserts.",
      "Replaced synchronous Salesforce sync with an SNS/SQS and Lambda pub/sub pipeline: per-subscriber webhooks and auth, retries, DLQs and admin reprocessing tools.",
      "Built subscription membership tiers and a PostgreSQL-backed customer wallet with automatic refund credits, using Redis idempotency keys to prevent duplicate charges.",
      "Introduced a Git branching strategy for two teams sharing a repository, and re-established Confluence docs, API contracts and RFC-style reviews.",
      "Operated Dockerized microservices on EC2 and ECS behind API Gateway with a central Lambda authorizer, CI/CD deployments, and CloudWatch and Sentry monitoring.",
    ],
    stack: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "AWS", "Docker", "Kubernetes"],
  },
  {
    company: "CoffeeBeans Consulting",
    title: "Senior Software Engineer",
    location: "Remote",
    start: "Jun 2021",
    end: "Mar 2023",
    years: "2 yrs",
    summary: "Backend work across PropSoch, Salam Kisan and Healthy 365.",
    highlights: [
      "Took sole ownership of PropSoch, a property-listing platform: Google Sign-In and Google Maps location search with proximity filtering and nearby-amenity highlighting.",
      "Built a custom admin portal with browser-level persistence for multi-step property forms, cutting data-entry abandonment and helping onboard 10–15k listings.",
      "Led a 3-engineer team on Salam Kisan: Open edX integrations, PostgreSQL data-sync workflows, CCAvenue payments and a course-completion reward wallet. The platform now serves 550,000+ farmers.",
      "Delivered backend services for Healthy 365, a Singapore government health app with ~900K monthly active users, under 90% unit-test coverage gates across Dev, QA, Staging, UAT and Pre-prod, with Sentry monitoring.",
    ],
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Open edX", "Jest", "Sentry"],
  },
  {
    company: "Yudiz Solutions",
    title: "Software Engineer",
    location: "Ahmedabad, India",
    start: "May 2020",
    end: "May 2021",
    years: "1 yr",
    summary: "Worked on 11Wickets, a fantasy sports platform competing with Dream11, with 3M+ registered users.",
    highlights: [
      "Refactored the legacy React codebase to hooks with React.memo, useMemo and react-window virtualization, fixing live-score lag at peak and cutting bundle size via lazy loading and code splitting.",
      "Converted the web app into a PWA with custom service workers, raising Lighthouse performance from ~60 to 90+ and lifting web engagement during live matches.",
      "Built real-time chat and unified live-score delivery across web, iOS and Android on a WebSocket and Redis backend, replacing a third-party service.",
    ],
    stack: ["React", "Node.js", "Redis", "WebSockets", "PWA"],
  },
  {
    company: "Biztech",
    title: "Software Engineer",
    location: "Ahmedabad, India",
    start: "Jan 2019",
    end: "Mar 2020",
    years: "1 yr",
    summary: "Worked on BrushYourIdeas, later rebranded as PrintXpand (350+ print businesses in 40+ countries).",
    highlights: [
      "Proposed and led a modular rewrite of an aging Angular codebase, replacing manual per-order bundle creation with module-based packaging across Professional, Ultimate and Custom tiers.",
      "Validated the new Custom tier through full combinatorial sandbox testing before launch.",
    ],
    stack: ["Angular", "TypeScript"],
  },
  {
    company: "Angular Minds",
    title: "Junior Software Engineer",
    location: "Pune, India",
    start: "Dec 2017",
    end: "Sep 2018",
    years: "10 mos",
    summary: "Worked on Numnu in an early-stage product environment.",
    highlights: [
      "Contributed to frontend and backend feature development, building foundations in Angular and Node.js.",
    ],
    stack: ["Node.js", "Angular"],
  },
];

export const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Savitribai Phule Pune University", year: "2018" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "Krantiguru Shyamji Krishna Verma University", year: "2015" },
];

export const nav = [
  { href: "#impact", label: "Impact" },
  { href: "#work", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
