import { FaBriefcase, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <div className="min-h-screen bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          My Professional Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Experience 1 - TRANSFILM */}
          <motion.div
            className="flex flex-col items-start bg-gray-700 p-6 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gray-600 duration-500 ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#2D3748", // Darker shade on hover
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBriefcase size={40} className="text-blue-500" />
              <h3 className="text-2xl font-semibold text-white">Shipping Office Assistant/Help Desk Support</h3>
            </div>
            <p className="text-lg text-gray-300 mb-2">TRANSFILM | July 2022 - December 2023</p>
            <p className="text-gray-300">
              Performed various tasks, including managing pickup and delivery points and troubleshooting daily workflow issues via calls, emails, and chats. Conducted checks to identify and correct errors in the company's systems. Assisted customers and managed the company's pricing system, handling 50-100 calls per day. Worked in a team of 8-10 colleagues, learning effective communication with customers and supporting one another in a stimulating, friendly, and professional environment.
            </p>
          </motion.div>
          
          {/* Experience 2 - REPLICA SISTEMI */}
          <motion.div
            className="flex flex-col items-start bg-gray-700 p-6 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gray-600 duration-500 ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#2D3748", // Darker shade on hover
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt size={40} className="text-blue-500" />
              <h3 className="text-2xl font-semibold text-white">IT/Help Desk Support</h3>
            </div>
            <p className="text-lg text-gray-300 mb-2">REPLICA SISTEMI | February 2024 - February 2025</p>
            <p className="text-gray-300">
              Responsible for technical support, addressing issues related to back-end management systems. Managed customer requests through tickets, troubleshooting issues with scripts, code, logs, backups, system errors, slow performance, and freezes. I identified problems and proposed solutions to improve the company’s performance. In the second part of my role, after being promoted, I directly interacted with customers, providing IT support and fulfilling their needs. Developed strong skills in IT management systems and support.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Experience;
