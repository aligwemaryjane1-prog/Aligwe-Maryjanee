import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { FaqSection } from '../components/FaqSection';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-16">
      <ContactSection onOpenBooking={onOpenBooking} />
      <FaqSection />
    </div>
  );
};
