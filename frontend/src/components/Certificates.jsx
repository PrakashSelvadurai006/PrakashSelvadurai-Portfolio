import React, { useState } from "react";

function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      image: "/NPTEL.jpeg",
      link: "/NPTEL.jpeg",
    },
    {
      title: "Machine Learning with Python",
      issuer: "Certification",
      image: "/machine-learning.jpg",
      link: "/machine-learning.jpg",
    },
    {
      title: "IBM Certificate",
      issuer: "IBM",
      image: "/ibm.jpg",
      link: "/ibm.jpg",
    },
    {
      title: "PowerBI Workshop",
      issuer: "Certification",
      image: "/powerBI.jpg",
      link: "/powerBI.jpg",
    },
    {
      title: "AI Tools Workshop",
      issuer: "Certificate",
      image: "/ai-tool-workshop.png",
      link: "ai-tool-workshop.png",
    },
    {
      title: "National Conference",
      issuer: "Certificate",
      image: "/national-conference.jpg",
      link: "/national-conference.jpg",
    },
  ];

  const displayedCertificates = showAll
    ? certificates
    : certificates.slice(0, 3);

  return (
    <section id="certificates" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Certificates & Achievements
          </h2>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            A collection of certifications, workshops, and achievements
            that showcase my commitment to continuous learning and
            professional growth.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCertificates.map((certificate, index) => (
            <div
              key={index}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {certificate.title}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  {certificate.issuer}
                </p>

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-5 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-sm font-medium text-white transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {certificates.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default Certificates;
