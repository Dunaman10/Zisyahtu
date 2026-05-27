import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import CostEstimator from './components/CostEstimator';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-brand-deep text-[#F9FAFB] relative overflow-hidden select-none selection:bg-brand-teal/30 selection:text-brand-teal">
      {/* Sticky Navigation Header */}
      <Navbar />

      <main>
        {/* Hero Section with Live IDE graphics */}
        <Hero />

        {/* Services Showcase */}
        <Services />

        {/* Tech Stack monochrome grid */}
        <TechStack />

        {/* Dynamic Horizontal Timeline Workflow */}
        <Process />

        {/* Feature Cost Calculator Estimator */}
        <CostEstimator />

        {/* Brief Capture Form & Footer & Floating WhatsApp Widget */}
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
