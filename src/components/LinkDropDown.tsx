import { linkContext } from "@/Navbar";
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
  PlaceHolder,
  PlaceHolder2,
} from "@/components/DropDown/DropDown";
import { AnimatePresence } from "framer-motion";
//
//
//
const LinkDropDown = () => {
  const componentMap = {
    placeholder: PlaceHolder,
    features: Features,
    solutions: Solutions,
    plans: Plans,
    resources: Resources,
  };
  const componentMap2 = {
    placeholder: PlaceHolder2,
    features: Features2,
    solutions: Solutions2,
    plans: Plans2,
    resources: Resources2,
  };
  const linkClicked = useContext(linkContext).linkClicked;
  const TopComponent = componentMap[linkClicked];
  const BottomComponent = componentMap2[linkClicked];

  return (
    <>
      <div className="flex justify-center">
        <div className="flex grow justify-end p-6">
          <AnimatePresence mode="wait">
            <TopComponent key={linkClicked} />
          </AnimatePresence>
        </div>
        <div className="flex grow justify-start bg-[#f7f5ff] p-6">
          <AnimatePresence mode="wait">
            <BottomComponent key={linkClicked} />
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default LinkDropDown;
