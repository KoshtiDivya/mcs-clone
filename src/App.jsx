import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutFounder from './components/AboutFounder';
import Services from './components/Services';
import Projects from './components/Projects';
import TrackRecord from './components/TrackRecord';
import Credentials from './components/Credentials';
import AmcPlans from './components/AmcPlans';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import ContactQuote from './components/ContactQuote';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  // Default to system theme, or restore user preference if saved
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Keep DOM, color-scheme meta and documentElement in sync
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);

    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.content = theme;
    }
  }, [theme]);

  // Listen to OS system theme changes if user hasn't explicitly overridden it
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      const stored = localStorage.getItem('theme');
      if (!stored) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setQuoteModalOpen(true);
    }
  };

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setQuoteModalOpen(true);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden w-full max-w-full transition-colors duration-200">
      {/* Fixed Header with Navigation and Theme Toggle */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenQuoteModal={() => setQuoteModalOpen(true)}
        onSelectService={handleSelectService}
      />

      {/* Main Page Flow with top offset for fixed navbar */}
      <main className="flex-1 pt-20">
        {/* Hero Section with Live Stats */}
        <Hero onOpenQuoteModal={() => setQuoteModalOpen(true)} />

        {/* Services & Capabilities */}
        <Services onSelectServiceForQuote={handleSelectService} />

        {/* Selected Projects Showcase with Interactive Lightbox */}
        <Projects />

        {/* Annual Maintenance Plans (AMC) */}
        <AmcPlans onSelectPlan={handleSelectPlan} />

        {/* Leadership & Eng. Rafiqul Islam Spotlight */}
        <AboutFounder />

        {/* Direct Track Record & Maintenance Portfolio */}
        <TrackRecord />

        {/* How We Work 4-Step Process */}
        <Process />

        {/* Credentials, Compliance, Chamber of Commerce, CR, Tax Card */}
        <Credentials />

        {/* Verified Client Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Interactive Quote Request & Direct Contact */}
        <ContactQuote
          preselectedService={selectedService}
          preselectedPlan={selectedPlan}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp and Back to Top Buttons */}
      <FloatingActions />

      {/* Quick Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}
