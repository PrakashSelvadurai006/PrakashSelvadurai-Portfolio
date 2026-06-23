import React from "react";

function Contact() {
  const contacts = [
    {
      icon: "📧",
      title: "Email",
      value: "prakashselvadurai26@gmail.com",
      link: "mailto:prakashselvadurai26@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 8668196642",
      link: "tel:+918668196642",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/prakashselvadurai",
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "View GitHub Profile",
      link: "https://github.com/PrakashSelvadurai006",
    },
    {
      icon: "⚡",
      title: "LeetCode",
      value: "View LeetCode Profile",
      link: "https://leetcode.com/u/Prakash-2006/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-3">
            Let's connect and build something amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={
                ["LinkedIn", "GitHub", "LeetCode"].includes(contact.title)
                  ? "_blank"
                  : "_self"
              }
              rel="noopener noreferrer"
              className="group bg-[#071229] border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <div className="text-4xl">{contact.icon}</div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {contact.title}
                  </h3>

                  <p className="text-gray-300 mt-1 group-hover:text-white transition">
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-medium transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;