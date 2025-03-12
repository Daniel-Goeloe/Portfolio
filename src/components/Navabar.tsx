import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from "../assets/LogoTest.webp";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-4 sm:px-6 md:px-8 overflow-x-hidden" data-aos="fade-down">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <a href="/" aria-label="Home">
            <img src={logo} className="mx-2 w-24 sm:w-32 md:w-36" alt="Logo" />
          </a>
        </div>

        <div className="flex items-center gap-4 text-lg sm:text-xl">
          <a href="https://www.linkedin.com/in/daniel-goeloe-guzman-026b8a245/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} className="text-blue-700 hover:text-blue-500" />
          </a>
          <a href="https://github.com/Daniel-Goeloe/Portfolio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={20} className="text-white hover:text-gray-300" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
