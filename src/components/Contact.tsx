import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Titolo centrale con animazione di espansione e restringimento */}
        <motion.h1
          className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [1, 1.2, 1] }}  // Espansione e restringimento continuo
          transition={{
            duration: 2,        // Durata totale dell'animazione
            repeat: Infinity,   // Ripete all'infinito
            repeatType: "loop", // Ciclo continuo
            ease: "easeInOut"   // Per una transizione morbida
          }}
        >
          GET IN TOUCH
        </motion.h1>

        {/* Contenitore di contatto con animazione */}
        <motion.div
          className="flex flex-col items-center bg-gray-800 text-white rounded-lg shadow-xl p-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Casella residenza con animazione */}
          <motion.div
            className="mb-6 w-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Where I live</h3>
            <motion.div
              className="bg-gray-700 p-4 rounded-lg cursor-pointer transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <p className="text-lg text-gray-300">Datford, England</p>
            </motion.div>
          </motion.div>

          {/* Casella telefono con animazione */}
          <motion.div
            className="mb-6 w-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Phone Number</h3>
            <motion.div
              className="bg-gray-700 p-4 rounded-lg cursor-pointer transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <p className="text-lg text-gray-300">+39 327 4609659</p>
            </motion.div>
          </motion.div>

          {/* Casella email con animazione */}
          <motion.div
            className="mb-6 w-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <motion.div
              className="bg-gray-700 p-4 rounded-lg cursor-pointer transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <p className="text-lg text-gray-300">Goeloe.daniel@gmail.com</p>
            </motion.div>
          </motion.div>

          {/* Icone social in basso con animazione */}
          <motion.div
            className="flex justify-center gap-8 mt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="https://www.linkedin.com/in/daniel-goeloe-guzman-026b8a245/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <FaLinkedin size={40} />
              </motion.div>
            </a>
            <a
              href="https://github.com/Daniel-Goeloe/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <FaGithub size={40} />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
