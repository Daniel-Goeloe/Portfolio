import { FaDatabase, FaCode, FaShippingFast, FaHeadphones, FaJira } from 'react-icons/fa';

function Technologies() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12 max-w-[17%]"> {/* Ridotto il contenitore esterno ancora di più */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8" data-aos="fade-up">
          Technologies and Skills
        </h1>
        <p className="text-lg text-center mb-4" data-aos="fade-up">
          Here are some of the technologies and skills I work with.
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {/* T-SQL */}
          <div className="text-center tech-icon" data-aos="fade-up" data-aos-delay="100">
            <div className="border-2 border-transparent hover:border-blue-500 p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-[15deg] hover:translate-x-[20px] hover:skew-x-[10deg]">
              <FaCode size={60} className="text-blue-500 mb-4" />
            </div>
            <p>T-SQL</p>
          </div>

          {/* Database */}
          <div className="text-center tech-icon" data-aos="fade-up" data-aos-delay="200">
            <div className="border-2 border-transparent hover:border-green-500 p-4 rounded-xl transition-all duration-300 transform hover:scale-125 hover:translate-y-[-15px] hover:rotate-[10deg]">
              <FaDatabase size={60} className="text-green-500 mb-4" />
            </div>
            <p>Database</p>
          </div>

          {/* Jira */}
          <div className="text-center tech-icon" data-aos="fade-up" data-aos-delay="300">
            <div className="border-2 border-transparent hover:border-blue-700 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-[-20px] hover:skew-y-[15deg]">
              <FaJira size={60} className="text-blue-700 mb-4" />
            </div>
            <p>Jira</p>
          </div>

          {/* Sales Shipping */}
          <div className="text-center tech-icon" data-aos="fade-up" data-aos-delay="400">
            <div className="border-2 border-transparent hover:border-orange-500 p-4 rounded-xl transition-all duration-300 transform hover:scale-115 hover:translate-y-[10px] hover:rotate-[-10deg]">
              <FaShippingFast size={60} className="text-orange-500 mb-4" />
            </div>
            <p>Sales Shipping</p>
          </div>

          {/* Customer Service */}
          <div className="text-center tech-icon" data-aos="fade-up" data-aos-delay="500">
            <div className="border-2 border-transparent hover:border-gray-400 p-4 rounded-xl transition-all duration-300 transform hover:scale-120 hover:translate-x-[10px] hover:skew-x-[-10deg]">
              <FaHeadphones size={60} className="text-gray-400 mb-4" />
            </div>
            <p>Customer Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
