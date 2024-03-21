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
const LinkDropDown = (props: Props) => {
  const linkClicked = useContext(linkContext).linkClicked;

  return (
    <>
      <div className="flex justify-center">
        <div className="flex grow justify-end p-6">
          {linkClicked === "features" && <Features></Features>}
          {linkClicked === "solutions" && <Solutions></Solutions>}
          {linkClicked === "plans" && <Plans></Plans>}
          {linkClicked === "resources" && <Resources></Resources>}
        </div>
        <div className="flex grow justify-start bg-[#f7f5ff] p-6">
          {linkClicked === "features" && <Features2></Features2>}
          {linkClicked === "solutions" && <Solutions2></Solutions2>}
          {linkClicked === "plans" && <Plans2></Plans2>}
          {linkClicked === "resources" && <Resources2></Resources2>}
        </div>
      </div>
    </>
  );
};

export default LinkDropDown;
