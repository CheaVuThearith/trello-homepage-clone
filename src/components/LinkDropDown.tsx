import { linkContext, showContext } from "@/Navbar";
import { useContext } from "react";
import {
  Features,
  Features2,
  Solutions,
  Solutions2,
  Plans,
  Plans2,
  Resources,
  Resources2,
} from "@/components/DropDown/DropDown";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
//
//
//
const LinkDropDown = () => {
  const componentMap = {
    features: Features,
    solutions: Solutions,
    plans: Plans,
    resources: Resources,
  };
  const componentMap2 = {
    features: Features2,
    solutions: Solutions2,
    plans: Plans2,
    resources: Resources2,
  };
  const { linkClicked, setLinkClicked } = useContext(linkContext);
  const show = useContext(showContext);
  const TopComponent = componentMap[linkClicked];
  const BottomComponent = componentMap2[linkClicked];
  return (
    <>
      <AnimatePresence initial={window.innerWidth >= 1280}>
        {show && (
          <LayoutGroup>
            {window.innerWidth >= 1280 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { height: 0 },
                  visible: { height: 160 },
                }}
                transition={{
                  duration: 0.2,
                }}
                className="absolute left-0 right-0 top-0 z-20 bg-white"
              ></motion.div>
            )}
            <motion.div
              layout
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { y: -400, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 14,
                    opacity: { duration: 0.1 },
                  },
                },
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 14,
                opacity: { duration: 1 },
              }}
              className="absolute left-0 right-0 z-20 flex h-[100vh] flex-col gap-y-2 bg-white shadow-lg xl:h-auto xl:flex-row xl:justify-center"
            >
              <div className="flex flex-col bg-white px-6 xl:grow xl:flex-row xl:justify-end xl:p-6">
                {window.innerWidth < 1280 && (
                  <button
                    onClick={() => {
                      setLinkClicked("");
                    }}
                    className="w-full border-b py-4 text-left text-xl text-[#172b4d]"
                  >
                    <span className="flex items-center">
                      <ChevronLeftIcon className="size-6" />
                      Back
                    </span>
                  </button>
                )}{" "}
                <AnimatePresence mode="wait">
                  {linkClicked !== "" && <TopComponent key={linkClicked} />}
                </AnimatePresence>
              </div>
              <div className="flex bg-[#f7f5ff] px-6 xl:grow xl:justify-start xl:p-6">
                <AnimatePresence mode="wait">
                  {linkClicked !== "" && <BottomComponent key={linkClicked} />}
                </AnimatePresence>
              </div>
            </motion.div>
          </LayoutGroup>
        )}
      </AnimatePresence>
    </>
  );
};

export default LinkDropDown;
