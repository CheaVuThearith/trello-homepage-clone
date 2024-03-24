import { useContext } from "react";
import Link from "./Link";
import MovingUnderline from "./MovingUnderline";
import { AnimatePresence, motion } from "framer-motion";
import { linkContext, showContext } from "@/Navbar";
import { Bars3Icon, ChevronLeftIcon } from "@heroicons/react/16/solid";
import LinkDropDown from "./LinkDropDown";
import BaseNav from "./BaseNav";
import TrelloLogo from "@/assets/TrelloLogo";

const NavContainer = () => {
  const { show, setShow } = useContext(showContext);
  const { linkClicked, setLinkClicked } = useContext(linkContext);
  return (
    <motion.nav
    initial={{height:"64px"}}
    animate={(show&&window.innerWidth<1280)?{height:"100vh"}: undefined}
      className={`sticky z-50 flex w-[100vw] flex-col bg-white xl:h-[64px] xl:flex-row xl:items-center ${show ? "h-[100vh]" : "h-[64px]"}`}
    >
      {window.innerWidth >= 1280 && (
        <div className="absolute z-10 h-full w-full bg-white shadow-xl "></div>
      )}
      {/* back button and logo */}
      <div className="z-20 mx-3 flex h-[63px] w-[97%] shrink-0 items-center justify-between border-b bg-white py-3 xl:w-auto xl:border-b-0 xl:py-0">
        <AnimatePresence mode="wait">
          {(linkClicked === "" || window.innerWidth >= 1280) && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100, transition: { delay: 0.3 } }}
              transition={{}}
              key="logo"
            >
              <TrelloLogo />
            </motion.div>
          )}
          {window.innerWidth < 1280 && linkClicked !== "" && (
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100, transition: { delay: 0.3 } }}
              transition={{}}
              key="backButton"
              onClick={() => {
                setLinkClicked("");
              }}
              className="w-full text-left text-xl text-[#172b4d]"
            >
              <span className="flex items-center">
                <ChevronLeftIcon className="size-6" />
                Back
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {window.innerWidth < 1280 && (
          <motion.button
            // @ts-expect-error because
            onClick={() => setShow((s) => !s)}
          >
            <Bars3Icon className="size-8" />
          </motion.button>
        )}
      </div>
      {/* the rest of the nav */}
      <AnimatePresence >
        {(show || window.innerWidth >= 1280) && (
          <motion.div
            initial={{ y: -window.innerWidth }}
            animate={{ y: 0 }}
            exit={{ y: -window.innerWidth }}
            transition={{
                type: "spring",
                stiffness: 110,
                damping: 18,
              }}
            className="w-full xl:static xl:mx-auto xl:w-auto"
          >
            {window.innerWidth < 1280 ? (
              <AnimatePresence initial={false}>
                {linkClicked === "" ? (
                  <BaseNav key="next" />
                ) : (
                  <motion.div
                    key="first"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                      hidden: { x: window.innerWidth },
                      visible: { x: 0 },
                      exit: {
                        x: window.innerWidth,

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
                    className="h-[100vh]"
                  >
                    <LinkDropDown />
                  </motion.div>
                )}
              </AnimatePresence>
            ) : (
              <>
                <BaseNav />
                <LinkDropDown />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavContainer;
