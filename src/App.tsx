import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navabar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa il CSS per AOS

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durata animazione
      once: true,     // Esegui solo una volta quando l'elemento entra nel viewport
    });

    // Funzione per gestire il refresh di AOS al cambio di scroll
    const handleScroll = () => {
      setTimeout(() => {
        AOS.refresh();  // Forza il refresh di AOS ogni volta che l'utente scorre
      }, 50); // Piccola pausa per garantire che il DOM sia aggiornato
    };

    // Aggiungi l'event listener per il scroll
    window.addEventListener('scroll', handleScroll);

    // Pulizia: rimuovi l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // [] per eseguire solo una volta all'inizio

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
