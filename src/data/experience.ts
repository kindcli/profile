export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type?: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    company: 'SAP America, Inc.',
    location: 'Dallas–Fort Worth, TX',
    period: '2021 – Present',
    bullets: [
      'Led a team of 5 engineers designing a normalized booking abstraction layer across Sabre, Amadeus, and Travelport under a single API contract, serving 5M+ daily users. Built in Go and Kotlin, deployed via Helm and Kubernetes.',
      'Owned the full pre and post booking lifecycle for air and hotel: shop, price, book, ticket, exchange, cancel, void, PNR acquisition, and hotel Direct Connect integrations with GDS passive creation across NDC and EDIFACT.',
      'Architected a CI/CD pipeline from scratch across 20+ repos introducing build-once/deploy-anywhere, version-based and commit-level rollbacks, and hotfix support. Cut build times from 20–40 min to 9–20 min and reduced infrastructure cost by 30%.',
      'Architected an AI-powered travel agent covering all air shop, book, cancel, and change flows across NDC and EDIFACT, one-way, round-trip, and multi-city, built with one team member using Go, MCP, and A2A.',
      'Owned STRIDE threat modeling, SAST/DAST tooling, GDPR-compliant logging with PII masking, and built a Presidio PII detection pipeline action that surfaces data exposure risks automatically.',
      'Team-owned the full AWS infrastructure: EKS, ECS, Lambda, DynamoDB, API Gateway, CodeBuild, Secrets Manager, SNS/SQS, CloudFormation, Vault, service mesh, and sidecar architecture.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Indigo Consulting US',
    location: 'Barrington, IL',
    period: '2020 – 2021',
    bullets: [
      'Led development of a ForgeRock IAM stack (AM, OpenAM, OpenIDM, OpenLDAP) for Verizon business customers, building enterprise SSO and identity management from the ground up in Scala and Akka.',
      'Contributed to an ML model for fraudulent authentication detection, identifying anomalous login patterns across enterprise-scale session and access metadata.',
      'Integrated Kafka for event-driven notifications and Redis for session caching. Configured Prometheus and Grafana for infrastructure monitoring. Containerized the full stack with Docker and Kubernetes.',
    ],
  },
  {
    title: 'M.S. — Electrical & Computer Engineering',
    company: 'Illinois Institute of Technology',
    location: 'Chicago, IL',
    period: '2018 – 2020',
    type: 'education',
    bullets: [
      'Graduate research and coursework in embedded systems, IoT, and applied ML. Built multiple hardware and software projects including fall detection, weather monitoring, and motion sensing systems on Raspberry Pi and Arduino platforms.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'MetriTrack Inc.',
    location: 'Hillside, IL',
    period: '2019 – 2020',
    type: 'internship',
    bullets: [
      'Designed and developed a medical device tracking application, including data acquisition and analysis on sensor data using SQL Server.',
      'Researched medical device standards, rules, and compliance norms. Drafted technical documents from functional specifications and participated in design, data modelling, sprint planning, and retrospectives.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Cognizant Technology Solutions',
    location: 'Hyderabad, India',
    period: '2017 – 2018',
    bullets: [
      'Worked across the full stack of the Harcourt Online Tracking System — a license management platform for a large publishing company. Contributed across Java, Spring Boot, C#, .NET, JSP, jQuery, TypeScript, HTML, and CSS within Agile Scrum cycles.',
      'Designed and optimized SQL stored procedures and triggers, reducing transaction latency by 20% and improving overall system throughput by 15%.',
    ],
  },
  {
    title: 'B.E. — Electrical & Electronics Engineering',
    company: 'BMS Institute of Technology',
    location: 'Bengaluru, Karnataka, India',
    period: '2012 – 2016',
    type: 'education',
    bullets: [
      'Undergraduate engineering with focus on electronics, embedded systems, and hardware design. Affiliated to Visvesvaraya Technological University (VTU).',
    ],
  },
];
