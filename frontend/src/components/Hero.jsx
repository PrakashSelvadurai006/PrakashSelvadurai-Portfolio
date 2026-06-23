import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] bg-slate-950 text-white flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="text-cyan-400 font-medium text-sm md:text-base mb-3">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-cyan-400">
                Prakash S
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mt-3">
              UI & UX Designer
            </h2>

            <p className="text-base text-gray-400 max-w-xl mt-6 leading-7">
              I build modern, responsive, and user-friendly web applications
              with a focus on clean design and seamless user experiences.
              Passionate about creating digital products that are both
              functional and visually appealing.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 flex-wrap">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">100+</h3>
                <p className="text-sm text-gray-400">
                  Problems Solved
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400">2+</h3>
                <p className="text-sm text-gray-400">
                  Projects Built
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400">1+</h3>
                <p className="text-sm text-gray-400">
                  Internship
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/Prakash.png"
              alt="Prakash S"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-500 shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;