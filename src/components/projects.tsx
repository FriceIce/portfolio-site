import allProjects from "../../public/database/projects.json";
import { motion } from "framer-motion";

const projects = () => {
  return (
    <div
      id="projects"
      className="w-screen px-4 flex flex-col space-y-24 py-10 bg-zinc-50"
    >
      <h2 className="text-6xl md:text-6xl font-bold w-max mx-auto pt-10">
        Projects
      </h2>

      <section>
        <ul className={`mx-auto flex flex-col gap-32 lg:gap-64 items-center`}>
          {allProjects.map((project) => {
            return (
              <motion.li
                initial={{ opacity: 0, y: 50, scaleY: 0.9, scaleX: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scaleY: 1, scaleX: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                key={project.id}
                className="flex flex-col gap-6 lg:gap-10 lg:flex-row mx-auto"
              >
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className="object-contain my-auto h-[243px] lg:h-[350px]"
                />

                <div className="space-y-5 max-w-[500px]">
                  <h3 className="text-3xl lg:text-5xl mx-auto lg:mx-0 w-max font-extrabold">
                    {project.title}
                  </h3>
                  <section className="space-y-2">
                    <h4 className="text-xl lg:text-2xl font-bold text-yellow-400">
                      Technologies used
                    </h4>
                    <ul className="flex gap-2 flex-wrap">
                      {project.technologies.map((tech, index) => {
                        return (
                          <li
                            key={index}
                            className={`flex items-center bg-[#f0f0f0] py-2 px-3 rounded shadow
                          ${
                            tech.name === "MongoDB"
                              ? "gap-0 flex-row-reverse"
                              : "gap-1"
                          }`}
                          >
                            <p className="text-xs font-semibold">{tech.name}</p>
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
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                  <p className="text-sm lg:text-base leading-relaxed lg:leading-loose">
                    {project.description}
                  </p>
                  <div className="space-x-4">
                    {project.external_links.map((obj, index) => {
                      return (
                        <button
                          key={index}
                          className={`px-3 py-2 rounded-md border-2 bg-[#f9fafb] lg:hover:bg-yellow-400 border-yellow-400 lg:hover:scale-105 lg:hover:shadow transition-all`}
                        >
                          <a href={obj.href} target="_blank">
                            {obj.value}
                          </a>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default projects;
