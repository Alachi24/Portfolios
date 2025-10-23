import React, { useState } from "react";
import { ExternalLink, FileText, Coffee } from "lucide-react";

const ProfileShowcase = () => {
  const [activeCard, setActiveCard] = useState(null);

  const profiles = [
    {
      platform: "Plainenglish.io",
      username: "@Chisaneme",
      link: "https://plainenglish.io/",
      description:
        "Join and be part of my journey of life through my articles!",
      color: "from-purple-500 to-blue-500",
      icon: "✍️📘",
    },
    {
      platform: "Hashnode.com",
      username: "@Chisaneme",
      link: "https://hashnode.com/@Chisaneme",
      description: "Best practices, and insights",
      color: "from-purple-500 to-blue-500",
      icon: "💻🌌",
    },
    {
      platform: "Differ.blog",
      username: "@Chisaneme Aloni",
      link: "https://differ.blog/me",
      description: "Web development articles and coding tutorials",
      color: "from-black to-gray-800",
      icon: "🌐📝",
    },
    // {
    //   platform: "Hackernoon",
    //   username: "@aahil",
    //   link: "https://hackernoon.com/u/aahil",
    //   description: "Deep tutorials on tech trends and programming",
    //   color: "from-green-500 to-emerald-700",
    //   icon: "🚀"
    // },
    {
      platform: "Medium.com",
      username: "@Chisanemealoni",
      link: "https://medium.com/@chisanemealoni",
      description: "Programming practices, tools, and automation guides",
      color: "from-blue-600 to-cyan-500",
      icon: "📰✒️",
    },
    {
      platform: "Resume",
      username: "Download PDF",
      link: "/Technical_Writer_Resume.pdf",
      description: "View my full professional experience and skills",
      color: "from-red-500 to-orange-500",
      icon: "📄",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#1a1f2e] overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Digital Presence ✨ </h2>
          <p className="text-gray-400 text-lg">
            Find my content across the web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`
                transform transition-all duration-300 
                ${activeCard === index ? "scale-105" : "hover:scale-102"}
              `}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative group">
                {/* Card Background with gradient */}
                <div
                  className={`
                  absolute inset-0 rounded-xl bg-gradient-to-r ${profile.color} 
                  opacity-20 group-hover:opacity-30 transition-opacity
                `}
                />

                <div className="relative bg-[#0d1117] p-6 rounded-xl border border-gray-800 group-hover:border-opacity-50">
                  {/* Platform Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                    {profile.icon}
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400">
                    {profile.platform}
                  </h3>

                  {/* Username */}
                  <p className="text-gray-400 mb-3">{profile.username}</p>

                  {/* Description */}
                  <p className="text-gray-500 mb-4">{profile.description}</p>

                  {/* Visit Link */}
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center text-sm font-semibold
                      text-purple-400 hover:text-purple-300 transition-colors
                    `}
                  >
                    {profile.platform === "Resume" ? (
                      <>
                        <FileText className="w-4 h-4 mr-2" />
                        Download Resume
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Profile
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileShowcase;
