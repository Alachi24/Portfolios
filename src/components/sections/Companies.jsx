import React from "react";

export default function Companies() {
  const companies = [
    {
      name: "PlainEnglish",
      link: "https://plainenglish.io/blog/leveraging-innerhtml-textcontent-and-innertext-in-javascript",
      image: "/plainenglish.png",
    },
    {
      name: "LetsBuild DAO",
      link: "https://www.lbdao.xyz/",
      image: "/LetsBuildDAO.png",
    },
    {
      name: "MyZerah",
      link: "https://myzerah.com/",
      image: "/MyZerah.jpg",
    },
    // {
    //   name: "Semaphore",
    //   link: "https://semaphoreci.com/author/prince-onyeanuna",
    //   image: "/semaphore.png",
    // },
    // {
    //   name: "Earthly",
    //   link: "https://earthly.dev/blog/debugging-docker-containers/",
    //   image: "/earthly.png",
    // },
    // {
    //   name: "Medusa",
    //   link: "https://medusajs.com/blog/nodejs-ecommerce/",
    //   image: "/medusa.png",
    // },
    // {
    //   name: "OpenReplay",
    //   link: "https://blog.openreplay.com/authors/onyeanuna-prince/",
    //   image: "/openreplay.png",
    // },
  ];

  return (
    <section className="py-20 px-6 bg-eerieBlack">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Companies I've worked with 🤝
          </h2>
          <p className="text-gray-400 text-lg">
            Collaborating with amazing teams around the world
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {/* First Row - 4 items */}
          <div className="flex justify-center gap-12 flex-wrap">
            {companies.slice(0, 4).map((company) => (
              <a
                key={company.name}
                href={company.link}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white/10 hover:bg-white/15 rounded-xl p-6 transition-all duration-300 hover:scale-105">
                  <img
                    src={company.image}
                    alt={`${company.name} logo`}
                    className="w-32 h-12 object-contain mix-blend-luminosity brightness-100"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Second Row - 3 items, centered */}
          <div className="flex justify-center gap-12 w-full flex-wrap">
            {companies.slice(4).map((company) => (
              <a
                key={company.name}
                href={company.link}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white/10 hover:bg-white/15 rounded-xl p-6 transition-all duration-300 hover:scale-105">
                  <img
                    src={company.image}
                    alt={`${company.name} logo`}
                    className="w-32 h-12 object-contain mix-blend-luminosity brightness-100"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
