import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, useEffect, useState } from "react";
import { MenuOption } from "../App";

const menuVarients = {
  initial: {
    scaleY: 0,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.3,
      delay: 0.5,
      easeOut: true,
    },
  },
};

const linkVarients = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0.37, 0, 0.63, 1],
      duration: 0.7,
    },
  },
};

const menuOptionsVarients = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const Header = ({
  setMenuOption,
}: {
  setMenuOption: Dispatch<React.SetStateAction<MenuOption>>;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const menuOptions: Array<{ name: string; value: MenuOption }> = [
    { name: "Home", value: "home" },
    { name: "Projects", value: "projects" },
    { name: "About", value: "about" },
    { name: "Contact", value: "contact" },
  ];

  //This useEffect is for mobile devices. It sets the bg color for the controls
  useEffect(() => {
    const body = document.body;
    setTimeout(
      () => (body.style.backgroundColor = isOpen ? "#facc15" : "white"),
      isOpen ? 0 : 500
    );
    console.log(isOpen);
  }, [isOpen]);

  return (
    <header
      className={`sticky inset-0 z-[2] flex items-center justify-between h-16 p-4
      ${isOpen ? "bg-yellow-400" : "bg-white"}`}
    >
      <div className="flex items-center gap-2">
        <div className="bg-yellow-400 rounded-full size-4" />
        <button className="text-xl" onClick={() => window.location.reload()}>
          Isak Tilahun
        </button>
      </div>

      <div>
        <button onClick={toggleMenu} className="md:hidden text-xl">
          Menu
        </button>

        {!isOpen && (
          <nav className="">
            <ul className="flex gap-4">
              {menuOptions.map((option, index) => {
                return (
                  <li key={index} className="">
                    <button
                      key={index}
                      className={`hidden md:block text-xl uppercase text-black`}
                      onClick={() => setMenuOption(option.value)}
                    >
                      {option.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              variants={menuVarients}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0 bg-yellow-400 flex flex-col gap-4 h-full origin-top"
            >
              <div className="flex justify-between items-center p-4 h-16">
                <h1 className="text-xl">Isak Tilahun</h1>
                <button onClick={toggleMenu} className="text-xl">
                  Close
                </button>
              </div>
              <motion.ul
                variants={menuOptionsVarients}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex-1 flex flex-col justify-center items-center gap-5"
              >
                {menuOptions.map((option, index) => {
                  return (
                    <div className="overflow-hidden">
                      <motion.div variants={linkVarients} className="">
                        <button
                          key={index}
                          className={`md:hidden text-5xl uppercase text-black`}
                          onClick={() => {
                            setMenuOption(option.value);
                            setIsOpen(false);
                          }}
                        >
                          {option.name}
                        </button>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
