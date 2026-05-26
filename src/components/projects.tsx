import allProjects from "../database/projects.json";

// GSAP
import { gsap } from "gsap"; 
import { useGSAP } from "@gsap/react"
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);

const projects = () => {
  const containerRef = useRef<HTMLUListElement>(null)
  const projectCardRef = useRef<HTMLLIElement>(null)
  
  useGSAP(() => {
    if(!containerRef.current) return;

    const targets = gsap.utils.toArray<HTMLElement>(".project-card");

    
    
    targets.forEach((card: HTMLElement, index: number) => {
      const img = card.querySelector(".project-img");
      const text = card.querySelector(".project-text");
      
      if(!img || !text) return; 
      
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: card, 
          start: "top center",
          end: "bottom center",
        }
      })

      timeline.from(img, {
        x: () => (index % 2 !== 0 ? 100 : -100),
        opacity: 0,
        duration: 1,
        scrollTrigger: {} ,
        ease: "power4.out",
      })
      .from(text, {
        y: 100,
        opacity: 0,
        duration: 1, 
        ease: "power4.out",
      }, "<0.2")

    })

  }, {scope: containerRef})

  return (
    <div
      id="projects"
      className="w-full px-4 flex flex-col space-y-24 py-10 bg-zinc-50 max-w-[1500px]"
    >
      <h2 className="text-6xl md:text-6xl font-bold w-max mx-auto pt-10">
        Projects
      </h2>

      <section>
        <ul ref={containerRef} className={`mx-auto flex flex-col gap-32 lg:gap-64 items-center overflow-hidden`}>
          {allProjects.map((project) => {
            return (
              <li
              ref={projectCardRef}
                key={project.id}
                className="project-card flex flex-col gap-6 lg:gap-6 lg:flex-row mx-auto"
              >

                <div className="project-img border-4 mx-auto rounded border-yellow-400 size-fit">
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    className="object-cover object-left size-[300px] lg:size-[400px] rounded"
                  />
                </div>

                <div className="project-text space-y-5 max-w-[500px]">
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
                            className={`flex items-center bg-[#f0f0f0ss] py-1 px-3 rounded-full border
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
                  {/* <p className="text-sm lg:text-base leading-relaxed lg:leading-loose">
                    {project.description}
                  </p> */}
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
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default projects;
