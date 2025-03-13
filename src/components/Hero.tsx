import { motion } from 'framer-motion';
import profilePic from "../assets/Daniel.webp";

function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            {/* Motion per l'immagine */}
            <motion.img
              src={profilePic}
              alt="Daniel"
              className="border border-stone-900 rounded-3xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            {/* Motion per il nome con una transizione più dolce */}
            <motion.h2
              className="pb-2 text-4xl lg:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{
                scale: 1.05,    // Aumento lieve della dimensione
                color: "rgba(255, 255, 255, 1)",   // Cambia in bianco per il passaggio
                transition: { duration: 0.3 },  // Transizione più leggera
              }}
            >
              Daniel Goeloe Guzman
            </motion.h2>
            {/* Motion per la posizione lavorativa */}
            <motion.span
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{
                scale: 1.05,    // Aumento lieve della dimensione
                color: "rgba(255, 255, 255, 1)",   // Cambia in bianco per il passaggio
                transition: { duration: 0.3 },  // Transizione più leggera
              }}
            >
              IT SPECIALIST/SALES SERVICE
            </motion.span>
            {/* Descrizione con un'animazione più forte */}
            <motion.p
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              // Animazione di hover sulla descrizione
              whileHover={{
                scale: 1.15,    // Aumenta la dimensione del testo in modo significativo
                color: "rgba(255, 255, 255, 1)",  // Cambia colore per evidenziare
                y: -10,         // Muove il testo verso l'alto
                opacity: 1,     // Aumenta l'opacità
                transition: { duration: 0.3 },  // Anima l'effetto velocemente
              }}
            >
              I am a highly curious and ambitious individual looking to grow in the IT field and Service Sales...
            </motion.p>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
