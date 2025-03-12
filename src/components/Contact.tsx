import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Titolo centrale */}
        <h1 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
          GET IN TOUCH
        </h1>

        {/* Contenitore di contatto, più centrato e più a sinistra */}
        <div className="flex flex-col items-center bg-gray-800 text-white rounded-lg shadow-xl p-8 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
          {/* Casella residenza */}
          <div className="mb-6 w-full">
            <h3 className="text-2xl font-semibold mb-2">Where I live</h3>
            <div className="bg-gray-700 p-4 rounded-lg cursor-pointer transition-transform transform hover:scale-105">
              <p className="text-lg text-gray-300">Datford, England</p>
            </div>
          </div>

          {/* Casella telefono */}
          <div className="mb-6 w-full">
            <h3 className="text-2xl font-semibold mb-2">Phone Number</h3>
            <div className="bg-gray-700 p-4 rounded-lg cursor-pointer transition-transform transform hover:scale-105">
              <p className="text-lg text-gray-300">+39 327 4609659</p>
            </div>
          </div>

          {/* Casella email */}
          <div className="mb-6 w-full">
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <div className="bg-gray-700 p-4 rounded-lg cursor-pointer transition-transform transform hover:scale-105">
              <p className="text-lg text-gray-300">Goeloe.daniel@gmail.com</p>
            </div>
          </div>

          {/* Icone social in basso */}
          <div className="flex justify-center gap-8 mt-6">
            <a
              href="https://www.linkedin.com/in/daniel-goeloe-guzman-026b8a245/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://github.com/Daniel-Goeloe/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
