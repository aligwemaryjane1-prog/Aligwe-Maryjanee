import React from 'react';
import { SmileGallery } from '../components/SmileGallery';

interface SmileGalleryPageProps {
  onOpenBooking: () => void;
}

export const SmileGalleryPage: React.FC<SmileGalleryPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-16">
      <SmileGallery onOpenBooking={onOpenBooking} />
    </div>
  );
};
