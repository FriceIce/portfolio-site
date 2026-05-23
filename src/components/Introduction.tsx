import { Dispatch, useRef } from "react";
import { MenuOption } from "../App";

// GSAP
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText)


const Introduction = ({
  setMenuOption,
}: {
  setMenuOption: Dispatch<React.SetStateAction<MenuOption>>;
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subTitleRef = useRef<HTMLSpanElement>(null)
  const miniContainerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!titleRef.current) return;
    
    const split = new SplitText(subTitleRef.current, { type: "chars, words" }); 
    const timeline = gsap.timeline();

    timeline.from(titleRef.current, {
      y: 100,  
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    })
    .from(split.chars, {
      y: 100,            
      opacity: 0,
      scale: 0.5,
      stagger: 0.02,      
      duration: 1.2,
      ease: "power4.out",
    }, "<0.1")
    .from(miniContainerRef.current, {
      y: 100,
      opacity: 0, 
      scale: 0.2,
      duration: 1.2,
      ease:"power4.out"
    }, "<0.1")
    
  },{ scope: titleRef }); 

  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12 pt-20 px-4"
    >
      <div className="space-y-4 flex flex-col items-center">
        <article className="text-center overflow-hidden">
          <h1 ref={titleRef} className="font-bold">
            Hi, I'm Isak, a
            <span ref={subTitleRef} className="block font-bold text-yellow-400">
              Fullstack Developer
            </span>
          </h1>
        </article>
        <div className="space-y-4 w-[265px]">
          <div ref={miniContainerRef} className="group flex flex-row-reverse gap-4 font-semibold text-sm w-max mx-auto">
            <button className="border border-transparent transition-all bg-yellow-400 md:hover:scale-105 px-4 py-3 rounded-full"
             onClick={() => setMenuOption("contact")}>
              Contact me
            </button>
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
