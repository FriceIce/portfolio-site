import { motion } from "framer-motion";
import technologies from "../database/technologies.json";
import { useRef } from "react";

// GSAP
import { gsap } from "gsap"; 
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const paraph = [
  `I am a Fullstack Developer who simply loves figuring out how things work and building technology that solves real problems. I thrive on solving complex problems and am constantly refining my craft to build efficient, creative solutions. I’m never afraid to ask the hard questions or dive deep into new technologies to ensure the best possible outcome for every project.`,
  
  `What I take the most pride in is the courage I’ve shown in deciding to pivot my career. I am currently transitioning from a technical, hands-on role as a tire technician into software development. While I am now actively seeking my first role in the industry, I carry with me a unique perspective on troubleshooting and a relentless 'get-it-done' attitude that defines my approach to every line of code I write.`,
];

const techVariant = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const About = () => {
  const paraphContRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if(!paraphContRef.current) return; 

    const targets = gsap.utils.toArray<HTMLDivElement>(paraphContRef.current); 

    targets.forEach((element) => {
      const text = element.querySelectorAll(".text"); 

      if(text.length === 0) return; 

      const timeline =gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        }
      }); 

      text.forEach((paraph) => {
        timeline.from(paraph, {
          y: 50,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out"
        }, "<0.2")
      })
    })

  }, {scope: paraphContRef})

  return (
    <section id="about" className="space-y-10 lg:px-10 pt-20 px-4">
      <h2 className="text-6xl font-bold text-center">About</h2>

      <article className="space-y-4">
        <h3 className="text-3xl lg:text-4xl font bold text-yellow-400 font-bold">
          A bit about me
        </h3>
        <div ref={paraphContRef} className="space-y-2">
          {paraph.map((text, index) => {
            return (
              <p key={index} className="text text-sm lg:text-lg">
                {text}
              </p>
            );
          })}
        </div>
      </article>

      <div className="space-y-4">
        <h3 className="text-3xl lg:text-4xl text-yellow-400 font-bold">
          Technologies and Tools
        </h3>

        <motion.ul className="tech-grid gap-[10px] lg:gap-4 mt-4">
          {technologies.map((tech, index) => {
            return (
              <motion.li
                variants={techVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                key={index}
                className="z-[-1] flex items-center gap-2 bg-[#f9fafb] px-4 py-2 rounded shadow-md"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="size-12 object-cover object-center"
                />
                <p className="">{tech.name}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default About;
