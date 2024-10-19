import { ReactTyped } from "react-typed";

const Introduction = () => {
  const subtitle = ["Web Develepor"];
  const url_paths = [
    {
      src: "/linkedin-icon.png",
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/isak-tilahun-27b242280/",
      alt: "LinkedIn icon",
    },
    {
      src: "/github.svg",
      title: "GitHub",
      href: "https://github.com/friceice",
      alt: "GitHub icon",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <img
          src="/porfolio-pp.jfif"
          alt=""
          className="size-48 rounded-full mb-9"
        />
        <article className="w-[300px] md:w-[600px]">
          <h1 className="font-bold text-xl sm:text-3xl md:text-4xl">
            Hi, I'm Isak, a striving
          </h1>
          <h2 className="font-bold text-4xl sm:text-6xl md:text-7xl text-yellow-400">
            <ReactTyped strings={subtitle} typeSpeed={100} />
          </h2>
        </article>

        <div className="group flex gap-4 font-semibold text-sm">
          <a
            href="/fakeStuff.pdf"
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
        <div className="flex gap-4">
          {url_paths.map((icon) => {
            return (
              <a
                href={icon.href}
                title={`Visit my ${icon.title} page.`}
                rel="noreferrer"
                className="md:hover:cursor-pointer"
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
  );
};

export default Introduction;
