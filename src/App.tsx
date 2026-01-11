import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/projects";

export type MenuOption = "home" | "projects" | "about" | "contact" | null;
function App() {
  const [menuOption, setMenuOption] = useState<MenuOption>(null);

  useEffect(() => {
    if (!menuOption) return;

    const scrollToElement = () => {
      const element = document.getElementById(menuOption);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        
      }
    };

    // Wait 100 ms before scrolling to element
    const timeoutId = setTimeout(scrollToElement, 100);
    return () => clearTimeout(timeoutId);
  }, [menuOption]);

  return (
    <div className="relative lg:space-y-20 text-pretty">
      <Header setMenuOption={setMenuOption} />
      <main className="flex flex-col items-center gap-64 lg:gap-[500px] w-full">
        <Introduction setMenuOption={setMenuOption} />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
