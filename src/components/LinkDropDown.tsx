import { linkContext, showContext } from "@/Navbar";
import { useContext, useEffect, useRef } from "react";
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
  const linkClicked = useContext(linkContext).linkClicked;
  const show = useContext(showContext);
  const TopComponent = componentMap[linkClicked];
  const BottomComponent = componentMap2[linkClicked];
  return (
    <>
      <AnimatePresence>
        {show && (
          <LayoutGroup>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { height: 0 },
                visible: { height: 160 },
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute left-0 right-0 top-0 z-20 bg-white"
            ></motion.div>
            <motion.div
              layout
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { y: -400 },
                visible: { y: 0 },
              }}
              transition={{
                duration: 0.2,
                type: "spring",
                bounce: 0.1,
                stiffness: 120,
                layout: {
                  duration: 0.1,
                  bounce: 0.1,
                  type: "spring",
                  stiffness: 80,
                },
              }}
              className="absolute left-0 right-0 z-20 flex justify-center"
            >
              <div className="flex grow justify-end bg-white p-6">
                <AnimatePresence mode="wait">
                  <TopComponent key={linkClicked} />
                </AnimatePresence>
              </div>
              <div className="flex grow justify-start bg-[#f7f5ff] p-6">
                <AnimatePresence mode="wait">
                  <BottomComponent key={linkClicked} />
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
