import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramHighlights from './components/ProgramHighlights';
import EligibilityAdmission from './components/EligibilityAdmission';
import JapanPathwayOverview from './components/JapanPathwayOverview';
import MentorProfiles from './components/MentorProfiles';
import OpportunityRationale from './components/OpportunityRationale';
import MilestoneJourney from './components/MilestoneJourney';
import WhatStudentsLearn from './components/WhatStudentsLearn';
import JapaneseProgression from './components/JapaneseProgression';
import SelfStudyComparison from './components/SelfStudyComparison';
import PartnerEcosystem from './components/PartnerEcosystem';
import PortfolioOutcomes from './components/PortfolioOutcomes';
import FinancialSupport from './components/FinancialSupport';
import PlacementAndFAQ from './components/PlacementAndFAQ';
import ClosingRegistration from './components/ClosingRegistration';
import Footer from './components/Footer';
import ShowreelModal from './components/ShowreelModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRouteId, setSelectedRouteId] = useState('route-a');

  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRoute = (routeId) => {
    setSelectedRouteId(routeId);
    scrollToRegister();
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-[#f1f3f9] font-sans antialiased selection:bg-[#ff2a4b] selection:text-white">
      {/* Top Sticky Header */}
      <Navbar onOpenModal={() => setModalOpen(true)} />

      {/* 15 Core Landing Page Sections in Strict Requested Order */}
      <main>
        {/* Section 1: Hero */}
        <Hero 
          onOpenModal={() => setModalOpen(true)}
          onScrollToRegister={scrollToRegister}
        />

        {/* Section 2: Program Highlights (Light / Cream Surface) */}
        <ProgramHighlights onScrollToRegister={scrollToRegister} />

        {/* Section 3: Eligibility and Admission (Dark Surface) */}
        <EligibilityAdmission onSelectRoute={handleSelectRoute} />

        {/* Section 4: Japan Pathway Overview (Light / Cream Surface) */}
        <JapanPathwayOverview onScrollToRegister={scrollToRegister} />

        {/* Section 5: Mentor Profiles (Dark Surface) */}
        <MentorProfiles />

        {/* Section 6: Opportunity and Program Rationale (Light / Cream Surface) */}
        <OpportunityRationale />

        {/* Section 7: Five-Stage Milestone Journey (Dark Surface) */}
        <MilestoneJourney />

        {/* Section 8: What Students Learn (Light / Cream Surface) */}
        <WhatStudentsLearn onScrollToRegister={scrollToRegister} />

        {/* Section 9: Japanese Language Progression (Dark Surface) */}
        <JapaneseProgression />

        {/* Section 10: Comparison (Self-Study vs Program) (Light / Cream Surface) */}
        <SelfStudyComparison />

        {/* Section 11: Partner Ecosystem (Dark Surface) */}
        <PartnerEcosystem />

        {/* Section 12: Portfolio Outcomes & Selection Process (Light / Cream Surface) */}
        <PortfolioOutcomes onScrollToRegister={scrollToRegister} />

        {/* Section 13: Financial Support Section (Dark Surface) */}
        <FinancialSupport onScrollToRegister={scrollToRegister} />

        {/* Section 14: Placement, Metrics, Campus, Testimonials & FAQ (Light / Cream Surface) */}
        <PlacementAndFAQ onOpenModal={() => setModalOpen(true)} />

        {/* Section 15: Closing CTA and Registration Section (Dark Surface) */}
        <ClosingRegistration selectedRouteId={selectedRouteId} />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Modals & Floating Utility Actions */}
      <ShowreelModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />

      <FloatingActions onScrollToRegister={scrollToRegister} />
    </div>
  );
}
