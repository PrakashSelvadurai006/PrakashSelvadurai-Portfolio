import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-cyan-400">
              Prakash S
            </h1>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-8 text-white font-medium">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-cyan-400 transition duration-300">
                About
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-cyan-400 transition duration-300">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-cyan-400 transition duration-300">
                Projects
              </a>
            </li>

            <li>
              <a href="#education" className="hover:text-cyan-400 transition duration-300">
                Education
              </a>
            </li>

            <li>
              <a href="#certificates" className="hover:text-cyan-400 transition duration-300">
                Certificates
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-cyan-400 transition duration-300">
                Contact
              </a>
            </li>
          </ul>

          {/* Resume Button */}
          <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download
    className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-white font-medium"
  >
    Resume
  </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;