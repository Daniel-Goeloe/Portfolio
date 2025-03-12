import React from 'react';
import { FaBriefcase, FaPhoneAlt, FaLaptopCode } from 'react-icons/fa';

function Experience() {
  return (
    <div className="min-h-screen bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          My Professional Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Experience 1 */}
          <div
            className="flex flex-col items-start bg-gray-700 p-6 rounded-lg shadow-lg transition-all transform hover:scale-110 hover:shadow-3xl hover:bg-gray-600 duration-500 ease-in-out"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBriefcase size={40} className="text-blue-500" />
              <h3 className="text-2xl font-semibold text-white">IT/Help Desk Support</h3>
            </div>
            <p className="text-lg text-gray-300 mb-2">REPLICA SISTEMI | Feb 2024 - Feb 2025</p>
            <p className="text-gray-300">
              Responsible for providing technical support and troubleshooting back-end management systems. Worked with various systems and scripts to resolve client issues, improving company performance.
            </p>
          </div>
          
          {/* Experience 2 */}
          <div
            className="flex flex-col items-start bg-gray-700 p-6 rounded-lg shadow-lg transition-all transform hover:scale-110 hover:shadow-3xl hover:bg-gray-600 duration-500 ease-in-out"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt size={40} className="text-blue-500" />
              <h3 className="text-2xl font-semibold text-white">Customer Support Specialist</h3>
            </div>
            <p className="text-lg text-gray-300 mb-2">Company Name | June 2023 - Dec 2023</p>
            <p className="text-gray-300">
              Provided direct customer service, solving complex queries related to system errors, system backups, and slow performance. Communicated through tickets and phone calls to deliver effective solutions.
            </p>
          </div>

          {/* Experience 3 */}
          <div
            className="flex flex-col items-start bg-gray-700 p-6 rounded-lg shadow-lg transition-all transform hover:scale-110 hover:shadow-3xl hover:bg-gray-600 duration-500 ease-in-out"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaLaptopCode size={40} className="text-blue-500" />
              <h3 className="text-2xl font-semibold text-white">IT Technical Support</h3>
            </div>
            <p className="text-lg text-gray-300 mb-2">IT Support Co. | Jan 2022 - June 2023</p>
            <p className="text-gray-300">
              Assisted with troubleshooting back-end issues and maintaining system performance. Developed solutions that helped streamline internal processes and improve response time to client inquiries.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experience;
