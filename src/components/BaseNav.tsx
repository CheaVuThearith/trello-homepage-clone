import { useContext } from "react";
import Link from "./Link";
import MovingUnderline from "./MovingUnderline";
import { AnimatePresence, motion } from "framer-motion";
import { linkContext } from "@/Navbar";

const BaseNav = () => {
  const Links = [
    "Features expand",
    "Solutions expand",
    "Pricing",
    "Plans expand",
    "Resources expand",
  ];
  const linkClicked = useContext(linkContext).linkClicked;
  return (
    <motion.div
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
      className="sticky z-50 w-[100vw]"
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 18,
      }}
    >
      <ul className="relative flex h-[100vh] select-none flex-col items-center gap-x-6 bg-white py-3 shadow-lg xl:h-auto xl:flex-row xl:justify-center xl:py-0">
        {Links.map((link) => (
          <li className="relative flex h-[4rem] w-[97%] cursor-pointer flex-col items-center justify-center border-b px-2 xl:w-auto xl:border-b-0">
            <Link
              key={link}
              expand={link.includes("expand") ? true : undefined}
              name={link}
            />
            <AnimatePresence custom={linkClicked===""} mode="sync" >
              {linkClicked ===
                link.replace(" ", "").replace("expand", "").toLowerCase() &&
                window.innerWidth >= 1280 && <MovingUnderline />}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default BaseNav;
