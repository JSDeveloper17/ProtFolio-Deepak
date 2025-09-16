
import { skills } from "./constant/index.js";

export const Skills = () => {
  return (
    <section className="py-20  text-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
          Essential Tools I Use
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-14 text-lg leading-relaxed skills-description">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center border border-gray-700 rounded-xl p-6 bg-gray-800/50 hover:bg-gray-800 hover:border-purple-500 hover:shadow-lg transition"
            >
              <figure className="mb-3">
                <img
                  src={skill.image}
                  alt={skill.label}
                  className="w-12 h-12 object-contain"
                />
              </figure>
              <h3 className="text-lg font-semibold">{skill.label}</h3>
              <p className="text-gray-400 text-sm mt-1">{skill.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};