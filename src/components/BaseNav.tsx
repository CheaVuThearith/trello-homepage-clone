import { useContext } from "react";
import Link from "./Link";
import MovingUnderline from "./MovingUnderline";
import { AnimatePresence, motion } from "framer-motion";
import { linkContext, showContext } from "@/Navbar";

const BaseNav = () => {
  const Links = [
    "Features expand",
    "Solutions expand",
    "Pricing",
    "Plans expand",
    "Resources expand",
  ];
  const show = useContext(showContext).show;
  const linkClicked = useContext(linkContext).linkClicked;
  return (
    <>
      
        <motion.ul
          initial={window.innerWidth < 1280 ? "hidden" : undefined}
          animate="visible"
          exit="exit"
          variants={{
            hidden: { x: -window.innerWidth, opacity: 1 },
            visible: { x: 0, opacity: 1 },
            exit: {
              x: -window.innerWidth,
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            },
          }}
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 18,
          }}
          className="absolute z-10 flex w-full select-none flex-col items-center gap-x-6 bg-white py-3 xl:relative xl:h-auto xl:w-auto xl:flex-row xl:justify-center xl:py-0"
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="relative flex h-[4rem] w-[97%] cursor-pointer flex-col items-center justify-center border-b px-0 xl:w-auto xl:border-b-0 xl:px-2"
            >
              <Link
                key={link}
                expand={link.includes("expand") ? true : undefined}
                name={link}
              />
              <AnimatePresence custom={linkClicked === ""} mode="sync">
                {linkClicked ===
                  link.replace(" ", "").replace("expand", "").toLowerCase() &&
                  window.innerWidth >= 1280 && <MovingUnderline />}
              </AnimatePresence>
            </li>
          ))}
        </motion.ul>
    </>
  );
};

export default BaseNav;
