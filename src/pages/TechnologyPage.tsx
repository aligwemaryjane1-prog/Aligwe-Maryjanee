import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TechnologyPage as TechnologyComponent } from '../components/TechnologyPage';

interface TechnologyPageProps {
  onOpenBooking: () => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  return (
    <TechnologyComponent
      onOpenBooking={onOpenBooking}
      onNavigate={(route) => {
        if (route === 'services') navigate('/services');
        if (route === 'contact') navigate('/contact');
      }}
    />
  );
};
