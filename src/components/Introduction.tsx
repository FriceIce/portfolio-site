import { Dispatch } from "react";
import { ReactTyped } from "react-typed";
import { MenuOption } from "../App";

const Introduction = ({
  setMenuOption,
}: {
  setMenuOption: Dispatch<React.SetStateAction<MenuOption>>;
}) => {
  const subtitle = ["Web Developer"];

  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12 pt-20"
    >
      <img
        src="/portfolio-site/portfolio-pp.jfif"
        alt="profile image"
        className="size-48 md:size-64 rounded-full md:mb-9 object-cover"
      />
      <div className="space-y-4">
        <article className="w-[300px] sm:w-[490px] md:w-[600px]">
          <h1 className="font-bold text-xl sm:text-3xl md:text-4xl">
            Hi, I'm Isak, an aspiring
          </h1>
          <h2 className="font-bold text-4xl sm:text-6xl md:text-7xl text-yellow-400">
            <ReactTyped strings={subtitle} typeSpeed={100} />
          </h2>
        </article>
        <div className="space-y-4 w-[265px]">
          <div className="group flex flex-row-reverse gap-4 font-semibold text-sm w-max mx-auto">
            <a
              href="./CV-Isak-Tilahun.pdf"
              download
              className="border border-transparent transition-all bg-yellow-400 md:hover:scale-105 px-4 py-3 rounded-full cursor-pointer"
            >
              Download CV
            </a>
            <button
              className="border border-black transition-all px-4 py-3 rounded-full md:hover:scale-105 cursor-pointer"
              onClick={() => setMenuOption("projects")}
            >
              My projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
