import LinkDropDown from "./components/LinkDropDown";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import linkClickedType from "./components/types";
import { overlayContext } from "./App";
import { AnimatePresence, motion } from "framer-motion";
import BaseNav from "./components/BaseNav";
import NavContainer from "./components/NavContainer";
//
//
//
interface linkContextType {
  linkClicked: linkClickedType;
  setLinkClicked: (value: linkClickedType) => void;
}
interface showContextType{
  show:boolean,
  setShow:(value:boolean)=>void
}
//
//
//
export const linkContext = createContext<linkContextType>({
  linkClicked: "",
  setLinkClicked: () => {},
});
export const showContext = createContext<showContextType>({
  show:false,
  setShow:()=>{}
});
//
//
//
const Navbar = () => {
  const handleWindowWidthChange = () => {
    setLinkClickedU("");
    setShow(false);
    setDarken(false);
  };
  
  const setDarken = useContext(overlayContext).setDarken;
  const [linkClicked, setLinkClickedU] = useState<linkClickedType>("");
  const [show, setShow] = useState(false);
  const setLinkClicked = (value: linkClickedType) => {
    if (show === false || value !== linkClicked) {
      setLinkClickedU(value);
      setShow(true);
      setDarken(true);
    } else {
      handleWindowWidthChange()
    }
  };

  //
  //
  //
  useEffect(() => {
    window.addEventListener("resize", handleWindowWidthChange);
    return () => {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  //
  //
  //
  return (
    <>
      <showContext.Provider value={{show, setShow}}>
        <linkContext.Provider value={{ linkClicked, setLinkClicked }}>
            <NavContainer/>
        </linkContext.Provider>
      </showContext.Provider>
    </>
  );
};

export default Navbar;
