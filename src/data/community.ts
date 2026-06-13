export interface CommunityItem {
  role: string;
  org: string;
  description: string;
  icon: string;
}

export const community: CommunityItem[] = [
  {
    role: 'Hackathon Judge',
    org: 'HackNation',
    description: 'Evaluated technical projects across AI, systems, and web categories at university hackathons.',
    icon: '⚖',
  },
  {
    role: 'Technical Mentor',
    org: 'HackNation VC Club',
    description: 'Mentored junior and mid-level engineers on distributed systems, career growth, and system design.',
    icon: '◎',
  },
  {
    role: 'Peer Reviewer',
    org: 'Technical Articles & PRs',
    description: 'Regular peer reviewer for technical writing and open source contributions in the Go and travel tech communities.',
    icon: '✦',
  },
  {
    role: 'IndiSPENDsable Award',
    org: 'SAP America, Inc.',
    description: 'Recognised for outstanding performance and impact on the IndiSPENDsable initiative. "Sachin consistently delivers beyond expectations and elevates everyone around him." — Engineering Manager',
    icon: '★',
  },
  {
    role: 'PAT on the Back',
    org: 'Cognizant',
    description: 'Performance recognition award for exceptional delivery during the Harcourt Online Tracking System project.',
    icon: '✦',
  },
];
