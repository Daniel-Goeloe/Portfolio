import profilePic from "../assets/Daniel.webp";

function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse" data-aos="fade-left" data-aos-duration="1000">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8" data-aos="fade-up" data-aos-delay="300">
            <img src={profilePic} alt="Daniel" className="border border-stone-900 rounded-3xl transition-transform transform hover:scale-105" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10" data-aos="fade-up" data-aos-delay="500">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">Daniel Goeloe Guzman</h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              IT SPECIALIST/SALES SERVICE
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              I am a highly curious and ambitious individual looking to grow in the IT field. I have attended one of the top schools in the country for IT and I aim to continue my journey in this sector. I excel at problem-solving in the workplace, always striving to find every possible solution.
              My main goal is to leverage my knowledge across various aspects of technology and to find a domain that simultaneously captures my enthusiasm and helps me enhance my skills.
            </p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
