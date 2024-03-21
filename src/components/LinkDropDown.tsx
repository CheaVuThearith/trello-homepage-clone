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
} from "@/components/Dropdowns/Dropdowns";
import { AnimatePresence } from "framer-motion";
const LinkDropDown = (props: Props) => {
  const linkClicked = useContext(linkContext).linkClicked;

  return (
    <>
      <div className="flex justify-center">
        <div className="flex grow justify-end p-6">
          <AnimatePresence>
            {linkClicked === "features" && <Features></Features>}
          </AnimatePresence>
          <AnimatePresence>
            {linkClicked === "solutions" && <Solutions></Solutions>}
          </AnimatePresence>
          <AnimatePresence>
            {linkClicked === "plans" && <Plans></Plans>}
          </AnimatePresence>
          <AnimatePresence>
            {linkClicked === "resources" && <Resources></Resources>}
          </AnimatePresence>
        </div>
        <div className="flex grow justify-start bg-[#f7f5ff] p-6">
          <AnimatePresence>
            {linkClicked === "features" && <Features2></Features2>}
          </AnimatePresence>
          <AnimatePresence>
            {linkClicked === "solutions" && <Solutions2></Solutions2>}
          </AnimatePresence>
          <AnimatePresence>
            {" "}
            {linkClicked === "plans" && <Plans2></Plans2>}
          </AnimatePresence>
          <AnimatePresence>
            {linkClicked === "resources" && <Resources2></Resources2>}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default LinkDropDown;
