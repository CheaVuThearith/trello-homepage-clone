import LinkDropDown from "./components/LinkDropDown";
import { createContext, useContext, useState } from "react";
import Link from "./components/Link";
import linkClickedType from "./components/types";
import { overlayContext } from "./App";
//
//
//
interface linkContextType {
  linkClicked: linkClickedType;
  setLinkClicked: (value: linkClickedType) => void;
}
interface NavbarProps {
  className?: string;
}
//
//
//
export const linkContext = createContext<linkContextType>({
  linkClicked: "",
  setLinkClicked: () => {},
});
export const showContext = createContext<boolean>(false);
//
//
//
const Navbar = ({ className }: NavbarProps) => {
  const setDarken = useContext(overlayContext).setDarken;
  const Links = [
    "Features expand",
    "Solutions expand",
    "Pricing",
    "Plans expand",
    "Resources expand",
  ];
  const [linkClicked, setLinkClickedU] = useState<linkClickedType>("");
  const [show, setShow] = useState(false);
  const setLinkClicked = (value: linkClickedType) => {
    if (show === false || value !== linkClicked) {
      setLinkClickedU(value);
      setShow(true);
      setDarken(true);
    } else {
      setLinkClickedU("");
      setShow((s) => !s);
      setDarken(false);
    }
  };
  //
  //
  //
  return (
    <>
      <nav className={className}>
          <showContext.Provider value={show}>
            <linkContext.Provider value={{ linkClicked, setLinkClicked }}>
              <div className="relative z-50 flex justify-center gap-x-6 bg-white py-3 shadow-lg">
                {Links.map((link) => (
                  <Link
                    key={link}
                    expand={link.includes("expand") ? true : undefined}
                    name={link}
                  />
                ))}
              </div>
              <LinkDropDown></LinkDropDown>
            </linkContext.Provider>
          </showContext.Provider>
      </nav>
      <div></div>
    </>
  );
};

export default Navbar;
