import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import SolutionSection from './components/SolutionSection';
import SupportSection from './components/SupportSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';  // Import the new ContactForm component
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <SolutionSection />
      <SupportSection />
      <Testimonials />
      <ContactForm /> 
      <Footer />
    </div>
  );
}

export default App;
