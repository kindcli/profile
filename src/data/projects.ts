export type ProjectStatus = 'shipped' | 'wip' | 'oss';
export type ProjectCategory = 'ai' | 'travel' | 'security' | 'platform' | 'oss';

export interface Project {
  name: string;
  summary: string;
  detail: string;
  tags: string[];
  categories: ProjectCategory[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
  impact?: string;
}

export const projects: Project[] = [
  {
    name: 'AI-Powered Travel Agent',
    summary: 'End-to-end AI travel agent covering all air booking flows across NDC and EDIFACT.',
    detail: 'Architected with Go and MCP, handling shop, book, cancel, and change for one-way, round-trip, and multi-city itineraries across both NDC and EDIFACT content. Built with one team member at SAP America, Inc.',
    tags: ['Go', 'MCP', 'NDC', 'EDIFACT', 'AI'],
    categories: ['ai', 'travel'],
    status: 'shipped',
    impact: 'Production at SAP America, Inc., serving enterprise travel programs',
  },
  {
    name: 'GDS Booking Abstraction Layer',
    summary: 'Normalized API contract unifying Sabre, Amadeus, and Travelport under one interface.',
    detail: 'Led a team of 5 engineers to design and ship a booking abstraction layer across the three major GDS providers. Single API contract for all pre and post booking lifecycle operations. Built in Go and Kotlin, deployed via Helm on Kubernetes.',
    tags: ['Go', 'Kotlin', 'Sabre', 'Amadeus', 'Travelport', 'Kubernetes'],
    categories: ['travel', 'platform'],
    status: 'shipped',
    impact: '5M+ daily users',
  },
  {
    name: 'CI/CD Pipeline Overhaul',
    summary: 'Build-once/deploy-anywhere pipeline across 20+ repos with rollback and hotfix support.',
    detail: 'Designed from scratch across 20+ repositories. Introduced version-based and commit-level rollbacks, hotfix branching, and environment promotion gates. Reduced build times from 20–40 min to 9–20 min and infrastructure cost by 30%. Adopted across multiple teams.',
    tags: ['GitHub Actions', 'AWS CodeBuild', 'Kubernetes', 'Helm', 'Docker'],
    categories: ['platform'],
    status: 'shipped',
    impact: '55% build time reduction · 30% infra cost reduction',
  },
  {
    name: 'ForgeRock IAM Stack',
    summary: 'Enterprise SSO and identity management platform for Verizon business customers.',
    detail: 'Full ForgeRock stack (AM, OpenAM, OpenIDM, OpenLDAP) for Verizon B2B. Built in Scala and Akka with Kafka for notifications, Redis for session caching, Prometheus/Grafana for observability.',
    tags: ['ForgeRock', 'Scala', 'Akka', 'Kafka', 'Redis', 'OpenLDAP'],
    categories: ['security'],
    status: 'shipped',
    impact: 'Enterprise SSO for Verizon business customers',
  },
  {
    name: 'Presidio PII Detection Pipeline',
    summary: 'CI pipeline action that surfaces PII exposure risks to AI code reviewers automatically.',
    detail: 'Built a GitHub Actions pipeline action using Microsoft Presidio to scan PRs for PII before code ships. Integrates with SAST/DAST and surfaces findings to AI code review tools. Part of a broader STRIDE threat modeling and GDPR-compliant logging initiative.',
    tags: ['Presidio', 'GitHub Actions', 'Python', 'GDPR', 'Security'],
    categories: ['security', 'platform'],
    status: 'shipped',
    impact: 'Automated PII risk surface in CI across all repos',
  },
  {
    name: 'GDS Performance Benchmark',
    summary: 'Deterministic load testing framework for GDS API performance using Hoverfly.',
    detail: 'Built a mock/replay framework using Hoverfly to benchmark GDS response times deterministically, independent of live GDS variability. Enables consistent performance regression testing across Sabre, Amadeus, and Travelport.',
    tags: ['Go', 'Hoverfly', 'Kubernetes', 'Prometheus'],
    categories: ['travel', 'platform'],
    status: 'shipped',
  },
  {
    name: 'OpenEVLN',
    summary: 'Open source EV charging network library and CLI.',
    detail: 'An open source library and CLI for interacting with EV charging networks. Built in Go.',
    tags: ['Go', 'Open Source', 'CLI'],
    categories: ['oss'],
    status: 'oss',
    github: 'https://github.com/kindcli/openevln',
  },
  {
    name: 'VeriFlow',
    summary: 'AI browser extension for automated UI testing.',
    detail: 'An AI-powered browser extension that automatically generates and runs UI tests by observing user interactions. Work in progress.',
    tags: ['TypeScript', 'AI', 'Browser Extension', 'Testing'],
    categories: ['ai'],
    status: 'wip',
  },
  {
    name: 'Graph Agent',
    summary: 'Knowledge graph agent that maps any input to structured graph output.',
    detail: 'An agentic system that converts unstructured text, docs, or code into a clustered knowledge graph with HTML and JSON output. Work in progress.',
    tags: ['Python', 'LlamaIndex', 'Qdrant', 'AI'],
    categories: ['ai'],
    status: 'wip',
  },
];
