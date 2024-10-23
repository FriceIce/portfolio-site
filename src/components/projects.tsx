import allProjects from "../../public/database/projects.json";

const projects = () => {
  return (
    <div className="w-screen px-4 flex flex-col space-y-24 py-10 bg-zinc-50">
      <h2 className="text-6xl md:text-6xl font-bold w-max mx-auto border-b-4 border-black pb-4">
        Projects
      </h2>

      <section className="">
        <ul className={`mx-auto flex flex-col gap-32 lg:gap-64 items-center`}>
          {allProjects.map((project: Project) => {
            return (
              <li
                key={project.id}
                className="flex flex-col gap-6 lg:gap-10 lg:flex-row mx-auto"
              >
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className="object-contain my-auto h-[243px] lg:h-[350px]"
                />

                <div className="space-y-5 max-w-[500px]">
                  <h3 className="text-3xl font-bold text-center lg:text-start">
                    {project.title}
                  </h3>
                  <section className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech, index) => {
                      return (
                        <div
                          key={index}
                          className={`flex items-center bg-[#f0f0f0] py-2 px-3 rounded shadow
                        ${
                          tech.name === "MongoDB"
                            ? "gap-0 flex-row-reverse"
                            : "gap-1"
                        }`}
                        >
                          <p className="text-xs md:text-sm font-semibold">
                            {tech.name}
                          </p>
                          <div
                            className={`${
                              tech.background && "bg-black"
                            } rounded p-[1px]`}
                          >
                            <img
                              src={tech.src}
                              alt={tech.name}
                              className="size-5 object-contain"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </section>
                  <p className="text-sm lg:text-base leading-relaxed lg:leading-loose">
                    {project.description}
                  </p>
                  <div className="space-x-4">
                    {project.external_links.map((obj, index) => {
                      return (
                        <button
                          key={index}
                          className={`px-3 py-2 rounded-md border-2 border-transparent bg-yellow-400 lg:hover:bg-white lg:border-yellow-400 lg:hover:scale-105 lg:hover:shadow transition-all`}
                        >
                          <a href={obj.href} target="_blank">
                            {obj.value}
                          </a>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default projects;

interface Project {
  id: number;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  technologies: Array<{
    name: string;
    src: string;
    background: boolean;
  }>;
  description: string;
  external_links: Array<{
    value: string;
    href: string;
  }>;
}
