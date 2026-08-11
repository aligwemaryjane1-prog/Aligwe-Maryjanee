export type PageRoute = 
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'technology'
  | 'patient-info'
  | 'gallery'
  | 'testimonials'
  | 'blog'
  | 'blog-post'
  | 'contact'
  | 'book'
  | 'emergency'
  | 'privacy'
  | 'terms';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'general' | 'cosmetic' | 'restorative' | 'orthodontics' | 'emergency' | 'preventive';
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  candidateFor: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  iconName: string;
  imageUrl: string;
  duration?: string;
  disclaimer?: string;
}

export interface DentistProfile {
  id: string;
  name: string;
  title: string;
  credentials: string;
  specializations: string[];
  experienceYears: number;
  bio: string;
  quote: string;
  imageUrl: string;
  education: string[];
  memberships: string[];
}

export interface SmileCase {
  id: string;
  title: string;
  category: 'whitening' | 'veneers' | 'implants' | 'orthodontics' | 'restorative';
  description: string;
  treatmentTime: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  patientAgeGroup?: string;
}

export interface ReviewItem {
  id: string;
  patientName: string;
  rating: number;
  date: string;
  serviceCategory: string;
  reviewText: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface TechItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  patientBenefits: string[];
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  tags: string[];
}

export interface AppointmentRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  patientStatus: 'new' | 'existing';
  serviceReason: string;
  preferredDentist: string;
  insuranceProvider: string;
  notes: string;
}
