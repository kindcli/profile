export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Go' }, { name: 'Kotlin' }, { name: 'TypeScript' },
      { name: 'Python' }, { name: 'Java' }, { name: 'Scala' },
      { name: 'C#' }, { name: 'C++' }, { name: 'SQL' }, { name: 'Bash' },
    ],
  },
  {
    category: 'Backend & APIs',
    icon: '⚙',
    skills: [
      { name: 'gRPC / ConnectRPC' }, { name: 'REST' }, { name: 'GraphQL' },
      { name: 'Spring Boot' }, { name: 'Akka' }, { name: 'Node.js' },
      { name: 'EDIFACT' }, { name: 'NDC' }, { name: 'Sabre' },
      { name: 'Amadeus' }, { name: 'Travelport' },
    ],
  },
  {
    category: 'AI & Agents',
    icon: '◈',
    skills: [
      { name: 'MCP' }, { name: 'A2A' }, { name: 'Claude' }, { name: 'OpenAI' },
      { name: 'Bedrock' }, { name: 'OpenRouter' }, { name: 'LlamaIndex' },
      { name: 'Ollama' }, { name: 'Chainlit' }, { name: 'Prompt Engineering' },
    ],
  },
  {
    category: 'Data & ML',
    icon: '◫',
    skills: [
      { name: 'Qdrant' }, { name: 'Elasticsearch' }, { name: 'DuckDB' },
      { name: 'Polars' }, { name: 'Apache Iceberg' }, { name: 'Snowflake' },
      { name: 'dbt' }, { name: 'ML Algorithms' }, { name: 'Diskcache' },
      { name: 'FSM' }, { name: 'uv' },
    ],
  },
  {
    category: 'Infrastructure & Cloud',
    icon: '☁',
    skills: [
      { name: 'AWS (EKS, ECS, Lambda, DynamoDB)' }, { name: 'Kubernetes' },
      { name: 'Helm' }, { name: 'Docker' }, { name: 'Terraform' },
      { name: 'OpenTofu' }, { name: 'Karpenter' }, { name: 'Cilium' },
      { name: 'Vault' }, { name: 'ArgoCD' }, { name: 'Dagger' },
    ],
  },
  {
    category: 'Observability & Security',
    icon: '◉',
    skills: [
      { name: 'OpenTelemetry' }, { name: 'Prometheus' }, { name: 'Grafana' },
      { name: 'ForgeRock IAM' }, { name: 'OpenFGA' }, { name: 'Semgrep' },
      { name: 'Trufflehog' }, { name: 'Presidio' }, { name: 'STRIDE' },
    ],
  },
  {
    category: 'Messaging & Streaming',
    icon: '⇄',
    skills: [
      { name: 'Kafka' }, { name: 'Redpanda' }, { name: 'NATS' },
      { name: 'EventBridge' }, { name: 'SNS / SQS' }, { name: 'Redis' },
    ],
  },
  {
    category: 'Frontend & Tools',
    icon: '▣',
    skills: [
      { name: 'React' }, { name: 'Next.js' }, { name: 'React Router' },
      { name: 'Vite' }, { name: 'Astro' }, { name: 'Tailwind CSS' },
      { name: 'Scalar' }, { name: 'Hoverfly' },
      { name: 'Git' }, { name: 'GitHub Actions' }, { name: 'Postman' }, { name: 'Figma' },
    ],
  },
];
