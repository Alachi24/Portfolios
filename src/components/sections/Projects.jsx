import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Eye, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TMDB API Reference",
      description:
        "Created a comprehensive API reference for The Movie Database using Postman. Including authentication, rate limiting, and endpoint usage guides.",
      tags: ["Mintlify", "OpenAPI", "Markdown"],
      links: {
        preview: "https://chisa.mintlify.app/introduction",
        code: "https://github.com/Alachi24/docs",
      },
    },
    {
      title: "Spotify API Reference",
      description:
        "Documented the API reference for Spotify, the largest music database. Covering detailed endpoint descriptions and integration examples.",
      tags: ["Docusaurus", "API", "Markdown"],
      links: {
        preview: "https://alachi24.github.io/spotify-docs/",
        code: "https://github.com/Alachi24/spotify-docs/tree/main",
      },
    },
    {
      title: "Claude API Reference",
      description:
        "Created a comprehensive API reference for Claude, an AI language model. Including Messages API, system prompts, multi-turn conversations.",
      tags: ["Vscode", "Postman-extension", "Mintlify", "OpenAPI", "Git"],
      links: {
        preview: "https://claude-api-docs.vercel.app/introduction",
        code: "https://github.com/Alachi24/claude-api-docs",
      },
    },
    {
      title: "PostgreSQL on Ubuntu(WSL2) for MySQL Users",
      description:
        "Created a comprehensive guide for setting up and using PostgreSQL on Ubuntu within WSL2. Including installation steps, configuration, and basic usage examples.",
      tags: ["PostgreSQL", "Ubuntu", "WSL2", "Database", "Docs-as-code"],
      links: {
        code: "https://github.com/Alachi24/postgresql-for-mysql-users",
      },
    },
    // {
    //   title: "The JavaScript Guide",
    //   description:
    //     "Documented an interactive resource for learning and mastering JavaScript programming. This documentation aims at fostering good Information architecture for better accessibility.",
    //   tags: ["Docsify", "Node.js", "JavaScript"],
    //   links: {
    //     preview: "https://the-js-guide.netlify.app/#/",
    //     code: "https://github.com/Aahil13/The-JS-Guide",
    //   },
    // },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    className: "gap-6",
    dotsClass: "slick-dots !bottom-[-2rem]",
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-thistle">
        Projects 💼
      </h2>

      <div className="relative px-4">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-3">
              <div className="bg-[#1a1f2e] text-thistle p-8 rounded-lg shadow-xl h-full">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#2a303c] text-gray-300 px-3 py-1 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a
                    href={project.links.preview}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Eye size={16} />
                    <span>Preview</span>
                  </a>
                  <a
                    href={project.links.code}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Code size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
