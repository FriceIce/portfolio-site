import { motion } from "framer-motion";
import technologies from "../../public/database/technologies.json";

const paraph = [
  "I’m currently studying to become a full-stack developer at Chas Academy, with the goal of becoming a professional web developer. My passion for technology, combined with my strong curiosity, drives me to constantly learn and improve. I'm not afraid to ask questions, and my natural problem-solving skills, honed through my current role as a tire technician, help me tackle challenges with determination and creativity.",
  "What I'm most proud of isn't just the projects I’ve chosen to showcase here, but the courage I’ve shown in taking the leap into a completely new career field. Making the switch from a hands-on, technical job to the world of coding has been both exciting and rewarding. Through this journey, I’ve learned that my curiosity and willingness to dive into the unknown are my greatest strengths.",
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
    <section id="about" className="space-y-10 lg:px-10 pt-20">
      <h2 className="text-6xl font-bold text-center">About</h2>

      <article className="space-y-4">
        <h3 className="text-3xl lg:text-4xl font bold text-yellow-400 font-bold">
          A bit about me
        </h3>
        <div className="space-y-2">
          {paraph.map((text, index) => {
            return (
              <p key={index} className="text-sm lg:text-lg leading-relaxed">
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
                className="flex items-center gap-2 bg-[#f9fafb] px-4 py-2 rounded shadow-md"
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
