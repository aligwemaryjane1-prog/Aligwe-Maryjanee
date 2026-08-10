import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { FeaturedProjects } from './components/FeaturedProjects';
import { IndustryStorySection } from './components/IndustryStorySection';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { TechStack } from './components/TechStack';
import { Statistics } from './components/Statistics';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { BookingModal } from './components/BookingModal';
import { CustomCursor } from './components/CustomCursor';
import { Project } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefilledScope, setPrefilledScope] = useState<string[]>([]);
  const [prefilledBudget, setPrefilledBudget] = useState<number | undefined>(undefined);

  const handleSelectScopeForBooking = (services: string[], estimatedPrice: number) => {
    setPrefilledScope(services);
    setPrefilledBudget(estimatedPrice);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111111] font-sans relative selection:bg-[#0A66FF] selection:text-white">
      {/* Custom Follower Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navigation onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Agency Experience */}
      <main>
        {/* 1. Hero Statement & Interactive Showcase */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 2. Core Capabilities & Specialization Trust Bar */}
        <TrustBar />

        {/* 3. Selected Transformations (Case Studies) */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Every Business Has A Story (Industry Transformations) */}
        <IndustryStorySection />

        {/* 5. How I Help Businesses Grow (Outcome Cards & Estimator) */}
        <Services onSelectScopeForBooking={handleSelectScopeForBooking} />

        {/* 6. 7-Stage Process Timeline */}
        <Process />

        {/* 7. About & Philosophy */}
        <About />

        {/* 8. Tech Stack Capsules */}
        <TechStack />

        {/* 9. Key Impact Metrics */}
        <Statistics />

        {/* 10. Client Testimonials Slider */}
        <Testimonials />

        {/* 11. Thought Leadership & Blog Insights */}
        <Blog />

        {/* 12. Contact & Inquiry Form */}
        <Contact prefilledScope={prefilledScope} prefilledBudget={prefilledBudget} />
      </main>

      {/* Agency Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={() => {
          setSelectedProject(null);
          setIsBookingOpen(true);
        }}
      />

      {/* Discovery Call Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
