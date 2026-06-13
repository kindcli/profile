export interface Cert {
  name: string;
  issuer: string;
  year: string;
  type: 'hf' | 'fr' | 'gcp' | 'sap' | 'li';
}

export const certs: Cert[] = [
  { name: 'Hugging Face Agents Course', issuer: 'Hugging Face', year: '2025', type: 'hf' },
  { name: 'Hugging Face MCP Course', issuer: 'Hugging Face', year: '2025', type: 'hf' },
  { name: 'ForgeRock Certified Access Management Specialist', issuer: 'ForgeRock', year: '2021', type: 'fr' },
  { name: 'ForgeRock Certified Identity Management Specialist', issuer: 'ForgeRock', year: '2021', type: 'fr' },
  { name: 'ForgeRock Certified Directory Services Specialist', issuer: 'ForgeRock', year: '2020', type: 'fr' },
  { name: 'Google Cloud Associate Cloud Engineer', issuer: 'Google Cloud', year: '2019', type: 'gcp' },
  { name: 'Google Cloud Professional Data Engineer', issuer: 'Google Cloud', year: '2018', type: 'gcp' },
  { name: 'SAP Concur Travel & Expense', issuer: 'SAP', year: '2022', type: 'sap' },
  { name: 'LinkedIn Learning: Kubernetes', issuer: 'LinkedIn', year: '2020', type: 'li' },
  { name: 'LinkedIn Learning: Distributed Systems', issuer: 'LinkedIn', year: '2020', type: 'li' },
  { name: 'LinkedIn Learning: Go Essential Training', issuer: 'LinkedIn', year: '2021', type: 'li' },
];
