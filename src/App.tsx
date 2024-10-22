import Header from "./components/Header";
import Introduction from "./components/Introduktion";
import Projects from "./components/projects";

function App() {
  return (
    <div className="space-y-36 px-4 w-full">
      <Header />
      <div className="flex flex-col items-center gap-64 lg:gap-[500px]">
        <Introduction />
        <Projects />
      </div>
    </div>
  );
}

export default App;
