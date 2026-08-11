import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PatientInfoPage as PatientInfoComponent } from '../components/PatientInfoPage';

interface PatientInfoPageProps {
  onOpenBooking: () => void;
}

export const PatientInfoPage: React.FC<PatientInfoPageProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  return (
    <PatientInfoComponent
      onOpenBooking={onOpenBooking}
      onNavigate={(route) => {
        if (route === 'contact') navigate('/contact');
      }}
    />
  );
};
