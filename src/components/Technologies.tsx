import { FaDatabase, FaCode, FaShippingFast, FaHeadphones, FaJira } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Technologies() {
  const techItems = [
    { icon: <FaCode size={60} />, name: 'T-SQL', color: 'text-blue-500', hoverColor: 'hover:border-blue-500' },
    { icon: <FaDatabase size={60} />, name: 'Database', color: 'text-green-500', hoverColor: 'hover:border-green-500' },
    { icon: <FaJira size={60} />, name: 'Jira', color: 'text-blue-700', hoverColor: 'hover:border-blue-700' },
    { icon: <FaShippingFast size={60} />, name: 'Sales Shipping', color: 'text-orange-500', hoverColor: 'hover:border-orange-500' },
    { icon: <FaHeadphones size={60} />, name: 'Customer Service', color: 'text-gray-400', hoverColor: 'hover:border-gray-400' },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12 max-w-screen-lg">
        {/* Titolo migliorato con ombra e gradiente animato */}
        <h1
          className="text-5xl sm:text-6xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/50 tracking-wider"
          data-aos="fade-up"
          style={{ letterSpacing: '2px' }}
        >
          Technologies and Skills
        </h1>

        {/* Descrizione migliorata */}
        <p
          className="text-xl sm:text-2xl text-center mb-16 max-w-3xl mx-auto leading-relaxed text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Here are some of the technologies and skills I worked with over the years. I’m always seeking to improve my skills, and these tools allow me to build and innovate with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {techItems.map((item, index) => (
            <motion.div
              key={index}
              className="text-center tech-icon"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className={`border-2 border-transparent p-6 rounded-xl transition-all duration-300 transform ${item.hoverColor}`}
                whileHover={{ scale: 1.15, rotate: 15, translateY: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`text-4xl ${item.color}`}>{item.icon}</div>
              </motion.div>
              <motion.p
                className="mt-4 text-lg font-semibold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {item.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
