import { AcademicCapIcon } from "@heroicons/react/16/solid";
import CardLink from "./components/CardLink";
import LinkDropDown from "./components/LinkDropDown";
import { createContext, useState } from "react";
import Link from "./components/Link";
//
//
//
interface linkContextType {
  linkClicked: linkClickedType;
  setLinkClicked: (value:linkClickedType)=>void}
interface NavbarProps {
  className?: string;
}
type linkClickedType =
  | "placeholder"
  | "features"
  | "solutions"
  | "plans"
  | "resources";
  //
  //
  //
export const linkContext = createContext<linkContextType>({
  linkClicked: "placeholder",
  setLinkClicked: () => {},
});

//
//
//
const Navbar = ({ className }: NavbarProps) => {
  const expandableLinks = ["Features", "Solutions", "Plans", "Resources"];
  const [linkClicked, setLinkClicked] =
    useState<linkClickedType>("placeholder");
  return (
    <nav className={className}>
      <linkContext.Provider value={{ linkClicked, setLinkClicked}}>
        <div className="flex justify-evenly">
          {expandableLinks.map((link) => (
            <Link key={link} name={link}></Link>
          ))}
        </div>
        <LinkDropDown></LinkDropDown>
      </linkContext.Provider>
    </nav>
  );
};

export default Navbar;
