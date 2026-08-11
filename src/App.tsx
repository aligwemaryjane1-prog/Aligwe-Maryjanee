import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { PatientInfoPage } from './pages/PatientInfoPage';
import { SmileGalleryPage } from './pages/SmileGalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { ContactPage } from './pages/ContactPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { EmergencyPage } from './pages/EmergencyPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (serviceId?: string) => {
    setSelectedServiceForModal(serviceId);
    setIsBookingModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans flex flex-col justify-between selection:bg-sky-200 selection:text-sky-900">
        {/* Navigation Bar */}
        <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* Dynamic Route View */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBookingModal} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={() => handleOpenBookingModal()} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBookingModal} />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage onOpenBooking={handleOpenBookingModal} />} />
            <Route path="/technology" element={<TechnologyPage onOpenBooking={() => handleOpenBookingModal()} />} />
            <Route path="/patient-information" element={<PatientInfoPage onOpenBooking={() => handleOpenBookingModal()} />} />
            <Route path="/smile-gallery" element={<SmileGalleryPage onOpenBooking={() => handleOpenBookingModal()} />} />
            <Route path="/testimonials" element={<TestimonialsPage onOpenBooking={() => handleOpenBookingModal()} />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:articleId" element={<BlogArticlePage />} />
            <Route path="/contact" element={<ContactPage onOpenBooking={() => handleOpenBookingModal()} />} />
            <Route path="/book-appointment" element={<BookAppointmentPage />} />
            <Route path="/emergency-dentistry" element={<EmergencyPage onOpenBooking={() => handleOpenBookingModal()} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Appointment Modal */}
        <AppointmentModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          initialServiceId={selectedServiceForModal}
        />

        {/* Global Footer */}
        <Footer onOpenBookingModal={() => handleOpenBookingModal()} />
      </div>
    </BrowserRouter>
  );
}

export default App;
