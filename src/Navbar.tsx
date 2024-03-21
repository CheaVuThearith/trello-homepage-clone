import { AcademicCapIcon } from "@heroicons/react/16/solid";
import CardLink from "./components/CardLink";
import LinkDropDown from "./components/LinkDropDown";
import { createContext, useState } from "react";
import Link from "./components/Link";
interface linkContextType {
  linkClicked: string;
  setLinkClicked: (value: string) => void;
}
export const linkContext = createContext<linkContextType>({
  linkClicked: "",
  setLinkClicked: () => {},
});

interface NavbarProps {
  className?: string;
}
const Navbar = ({ className }: NavbarProps) => {
  const expandableLinks = ["Features", "Solutions", "Plans", "Resources"];
  const [linkClicked, setLinkClicked] = useState<string>("");
  return (
    <nav className={className}>
      <linkContext.Provider value={{ linkClicked, setLinkClicked }}>
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
