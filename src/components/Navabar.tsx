import { motion } from 'framer-motion';  // Importa framer-motion per animazioni
import logo from "../assets/LogoTest.webp";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-4 sm:px-6 md:px-8 overflow-x-hidden" data-aos="fade-down">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <a href="/" aria-label="Home">
            {/* Animazione del logo con framer-motion */}
            <motion.img 
              src={logo} 
              alt="Logo"
              className="mx-2 w-24 sm:w-32 md:w-36 filter invert" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: 5 }}  // Aggiungi effetto hover (zoom e rotazione)
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
