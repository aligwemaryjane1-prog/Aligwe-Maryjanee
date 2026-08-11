import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { ServicesOverview } from '../components/ServicesOverview';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { MeetDentists } from '../components/MeetDentists';
import { TechSection } from '../components/TechSection';
import { PatientJourney } from '../components/PatientJourney';
import { SmileGallery } from '../components/SmileGallery';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { InsurancePaymentSection } from '../components/InsurancePaymentSection';
import { EmergencyCallout } from '../components/EmergencyCallout';
import { FaqSection } from '../components/FaqSection';
import { BlogSection } from '../components/BlogSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  return (
    <>
      <Hero
        onNavigate={(route) => {
          if (route === 'services') navigate('/services');
          if (route === 'about') navigate('/about');
          if (route === 'contact') navigate('/contact');
        }}
        onOpenBooking={() => onOpenBooking()}
      />
      <TrustBar />
      <ServicesOverview onOpenBookingForService={(id) => onOpenBooking(id)} />
      <WhyChooseUs />
      <MeetDentists onOpenBooking={() => onOpenBooking()} />
      <TechSection onNavigate={(route) => navigate('/technology')} />
      <PatientJourney onOpenBooking={() => onOpenBooking()} />
      <SmileGallery onOpenBooking={() => onOpenBooking()} />
      <TestimonialsSection />
      <InsurancePaymentSection onOpenBooking={() => onOpenBooking()} />
      <EmergencyCallout onNavigate={() => navigate('/emergency-dentistry')} />
      <FaqSection />
      <BlogSection />
      <ContactSection onOpenBooking={() => onOpenBooking()} />
    </>
  );
};
