import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/projects";
import useIsMounted from "./hooks/useIsMounted";

export type MenuOption = "home" | "projects" | "about" | "contact" | null;
function App() {
  const [menuOption, setMenuOption] = useState<MenuOption>(null);

  useIsMounted(() => {
    if (!menuOption) return;

    const selectedMenuOptionElement = document.getElementById(
      `${menuOption}`
    ) as HTMLButtonElement;

    selectedMenuOptionElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [menuOption]);

  return (
    <div className="relative lg:space-y-20 w-full text-pretty">
      <Header setMenuOption={setMenuOption} />
      <div className="flex flex-col items-center gap-64 lg:gap-[500px] px-4">
        <Introduction setMenuOption={setMenuOption} />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
