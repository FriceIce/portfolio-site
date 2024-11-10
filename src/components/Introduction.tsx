import { ReactTyped } from "react-typed";

const Introduction = () => {
  const subtitle = ["Web Developer"];
  const url_paths = [
    {
      src: "/portfolio-site/icons/linkedin-icon.png",
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/isak-tilahun-27b242280/",
      alt: "LinkedIn icon",
    },
    {
      src: "/portfolio-site/icons/github.svg",
      title: "GitHub",
      href: "https://github.com/friceice",
      alt: "GitHub icon",
    },
  ];

  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12 pt-20"
    >
      <img
        src="/portfolio-site/porfolio-pp.jfif"
        alt="profile image"
        className="size-48 md:size-64 rounded-full md:mb-9"
      />
      <div className="space-y-4">
        <article className="w-[300px] sm:w-[490px] md:w-[600px]">
          <h1 className="font-bold text-xl sm:text-3xl md:text-4xl">
            Hi, I'm Isak, a striving
          </h1>
          <h2 className="font-bold text-4xl sm:text-6xl md:text-7xl text-yellow-400">
            <ReactTyped strings={subtitle} typeSpeed={100} />
          </h2>
        </article>
        <div className="space-y-4 w-[265px]">
          <div className="group flex gap-4 font-semibold text-sm w-max">
            <a
              href="./CV-Isak-Tilahun.pdf"
              download
              className="border border-transparent transition-all bg-yellow-400 md:hover:scale-105 px-4 py-3 rounded-full cursor-pointer"
            >
              Download CV
            </a>
            <a
              href="mailto: Isak.Tilahun@chasacademy.se"
              className="border border-black transition-all px-4 py-3 rounded-full md:hover:scale-105 cursor-pointer"
            >
              Contact me
            </a>
          </div>

          <div className="flex gap-4 justify-center">
            {url_paths.map((icon, index) => {
              return (
                <a
                  key={index}
                  href={icon.href}
                  title={`Visit my ${icon.title} page.`}
                  rel="noreferrer"
                  className="md:hover:cursor-pointer md:hover:scale-105 transition-all"
                  target="_blank"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="size-10 md:size-11"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
