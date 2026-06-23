import React from "react";

function About() {
  const skillCategories = [
    {
      title: "FRONTEND",
      color: "🔵",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Bootstrap",
        "UI & UX Design",
        "Spring Boot"
      ],
    },
    {
      title: "PROGRAMMING",
      color: "🟠",
      skills: ["Java", "Python", "SQL"],
    },
    {
      title: "DATABASE",
      color: "🟢",
      skills: ["MySQL"],
    },
    {
      title: "TOOLS",
      color: "🔹",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Eclipse IDE"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* About Card */}
          <div className="bg-[#071229] border border-cyan-500/20 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              ABOUT ME
            </h2>

            <p className="text-gray-300 text-base leading-7 mb-6">
              I am a B.Tech Information Technology student with a strong
              passion for UI & UX Design and Software Engineering.
            </p>

            <p className="text-gray-300 text-base leading-7 mb-6">
              I enjoy building responsive web applications that are simple,
              efficient, and user-focused using modern web technologies.
            </p>

            <p className="text-gray-300 text-base leading-7">
              My goal is to continuously improve my development skills,
              solve real-world problems, and contribute to impactful
              software products.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 mt-14 text-center">
              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  100+
                </h3>
                <p className="text-gray-400 mt-2">
                  Problems Solved
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  2+
                </h3>
                <p className="text-gray-400 mt-2">
                  Projects Built
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  7.67
                </h3>
                <p className="text-gray-400 mt-2">
                  CGPA
                </p>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-[#071229] border border-cyan-500/20 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">
              SKILLS
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h3 className="text-sm text-gray-400 font-semibold mb-6">
                    {category.title}
                  </h3>

                  <ul className="space-y-5">
                    {category.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span>{category.color}</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;