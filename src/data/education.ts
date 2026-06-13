export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  schoolUrl?: string;
  affiliateUrl?: string;
  affiliateName?: string;
  description: string;
}

export const education: EducationItem[] = [
  {
    degree: 'M.S. Electrical & Computer Engineering',
    school: 'Illinois Institute of Technology',
    location: 'Chicago, IL',
    period: '2018 – 2020',
    schoolUrl: 'https://www.iit.edu/engineering',
    description: 'Graduate research in embedded systems, IoT, and applied ML. Built hardware and software projects including fall detection, weather monitoring, and motion sensing systems.',
  },
  {
    degree: 'B.E. Electrical & Electronics Engineering',
    school: 'BMS Institute of Technology',
    location: 'Bengaluru, Karnataka, India',
    period: '2012 – 2016',
    schoolUrl: 'https://bmsit.ac.in',
    affiliateUrl: 'https://vtu.ac.in',
    affiliateName: 'VTU',
    description: 'Undergraduate engineering focused on electronics, embedded systems, and hardware design.',
  },
];
