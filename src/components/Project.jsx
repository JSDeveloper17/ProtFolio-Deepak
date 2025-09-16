
import { projects } from "./constant/index.js";

export const Project = () => {
  return (
    <section className="py-1">
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full"></div>
      </div>

      {/* Project List */}
      <div className="space-y-20 max-w-5xl mx-auto px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            {/* Project Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-48 h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-gray-800 px-3 py-1 text-sm font-medium text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

