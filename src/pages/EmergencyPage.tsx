import React from 'react';
import { EmergencyPage as EmergencyComponent } from '../components/EmergencyPage';

interface EmergencyPageProps {
  onOpenBooking: () => void;
}

export const EmergencyPage: React.FC<EmergencyPageProps> = ({ onOpenBooking }) => {
  return <EmergencyComponent onOpenBooking={onOpenBooking} />;
};
