import { motion } from "framer-motion";
import technologies from "../database/technologies.json";

const paraph = [
  [`I am a Full-stack Developer driven by a deep passion for technology and an innate curiosity for how things work. I thrive on solving complex problems and am constantly refining my craft to build efficient, creative solutions. I’m never afraid to ask the hard questions or dive deep into new technologies to ensure the best possible outcome for every project.`],
  
  [`What I take the most pride in is not just the code I write, but the courage and determination I’ve shown in pivoting my career. Transitioning from a technical, hands-on role as a tire technician into the world of software development has been an incredibly rewarding journey. This background has gifted me with a unique perspective on troubleshooting and a relentless "get-it-done" attitude.`],
  [ `I’ve learned that my greatest strengths are my adaptability and my willingness to embrace the unknown. I don't just write code; I apply a lifelong habit of technical problem-solving to create impactful digital experiences.`],
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
  return (
    <section id="about" className="space-y-10 lg:px-10 pt-20 px-4">
      <h2 className="text-6xl font-bold text-center">About</h2>

      <article className="space-y-4">
        <h3 className="text-3xl lg:text-4xl font bold text-yellow-400 font-bold">
          A bit about me
        </h3>
        <div className="space-y-2">
          {paraph.map((text, index) => {
            return (
              <p key={index} className="text-sm lg:text-lg">
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
