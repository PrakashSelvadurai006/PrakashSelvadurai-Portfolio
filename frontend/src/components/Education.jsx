import React from "react";

function Education() {
  const education = [
    {
      degree: "B.Tech Information Technology",
      institution:
        "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
      year: "2023 - 2027",
      score: "CGPA: 7.67",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Tagore Matric Hr. Sec. School",
      year: "2022 - 2023",
      score: "74%",
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-cyan-400">
            EDUCATION
          </h2>

          <p className="text-gray-400 mt-3">
            My academic journey and qualifications.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-[#071229] border border-cyan-500/20 rounded-2xl p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                <div>
                  <h3 className="text-xl font-semibold">
                    {item.degree}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {item.institution}
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-cyan-400 font-medium">
                    {item.year}
                  </p>

                  <p className="text-gray-300 mt-1">
                    {item.score}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;