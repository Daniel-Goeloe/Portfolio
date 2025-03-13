import React from 'react';
import './App.css';
import Navbar from './components/Navabar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
// Non serve importare AOS se non lo usi
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Non necessario

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div>
      </div>

      {/* Container responsivo */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
