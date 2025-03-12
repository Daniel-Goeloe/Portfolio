import project1 from '../projects/icon1.webp'; 
import project2 from '../projects/icon2.webp';
import project3 from '../projects/icon3.webp';
import project4 from '../projects/icon4.webp';

function Projects() {
  const projects = [
    {
      img: project1,
      title: 'E-Commerce Website',
      description:
        'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
      skills: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
    },
    {
      img: project2,
      title: 'Task Management App',
      description:
        'An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.',
      skills: ['HTML', 'CSS', 'Angular', 'Firebase'],
    },
    {
      img: project3,
      title: 'Portfolio Website',
      description:
        'A personal portfolio website showcasing projects, skills, and contact information.',
      skills: ['HTML', 'CSS', 'React', 'Bootstrap'],
    },
    {
      img: project4,
      title: 'Blogging Platform',
      description:
        'A platform for creating and publishing blog posts with features like rich text editing, commenting, and user profiles.',
      skills: ['HTML', 'CSS', 'Vue.js', 'Express', 'MySQL'],
    },
  ];

  return (
    <div className="py-20">
      <h2 className="text-4xl text-center mb-10" data-aos="fade-up">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 p-5 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-4 hover:border-blue-500"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-5" />
            <h3 className="text-2xl text-white mb-3">{project.title}</h3>
            <p className="text-white mb-4">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-500 text-white py-1 px-3 rounded-lg text-sm transition-transform transform hover:scale-110 hover:bg-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
