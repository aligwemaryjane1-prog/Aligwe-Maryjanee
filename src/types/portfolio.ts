export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  technologies: string[];
  category: string;
  heroImage: string;
  desktopMockup: string;
  mobileMockup: string;
  beforeImage?: string;
  afterImage?: string;
  metrics: {
    label: string;
    value: string;
    trend: string;
  }[];
  liveUrl?: string;
  deliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  popular?: boolean;
  shortDescription: string;
  typicalDuration: string;
  deliverables: string[];
}

export interface PricingCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  packages: PricingPackage[];
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDescription: string;
  deliverables: string[];
  startingPrice: number;
  typicalDuration: string;
  popularFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatar: string;
  rating: number;
  projectType: string;
  verified: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  duration: string;
  deliverables: string[];
}

export interface TechItem {
  name: string;
  category: string;
  icon: string;
  experience: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Website Strategy' | 'UX' | 'SEO' | 'WordPress' | 'Shopify' | 'Business Growth';
  date: string;
  readTime: string;
  summary: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  featured?: boolean;
}
