import React from "react";

function Projects() {
  const projects = [
    {
      title: "Road Lane Detection System",
      description:
        "Developed a lane detection system for autonomous driving applications using computer vision techniques. Implemented lane boundary detection and direction analysis to improve road safety.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200",
      tech: ["Python", "OpenCV", "NumPy"],
      github:
        "https://github.com/PrakashSelvadurai006/Road-lane-detection",
      live: "#",
    },

    {
      title: "Classroom Security Monitor",
      description:
        "Built a real-time classroom security monitoring system using facial recognition to detect unauthorized individuals through image processing and deep learning techniques.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
      tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
      github:
        "https://github.com/PrakashSelvadurai006/Classroom-Security-Monitor-Unauthorised-Person-Detection",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Projects
          </h2>

          <p className="text-gray-400 mt-4">
            A showcase of my academic and personal projects.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
