export interface Project {
  title: string;
  tech: string[];
  description: string;
  github: string;
  points: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  score: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}