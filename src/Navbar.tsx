import LinkDropDown from "./components/LinkDropDown";
import { createContext, useContext, useState } from "react";
import linkClickedType from "./components/types";
import { overlayContext } from "./App";
import { AnimatePresence, motion } from "framer-motion";
import BaseNav from "./components/BaseNav";
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
const Navbar = () => {
  const setDarken = useContext(overlayContext).setDarken;

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
      <showContext.Provider value={show}>
        <linkContext.Provider value={{ linkClicked, setLinkClicked }}>
          <nav>
            {window.innerWidth < 1280 ? (
              <AnimatePresence>
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
                      stiffness: 100,
                      damping: 14,
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
          </nav>
        </linkContext.Provider>
      </showContext.Provider>
    </>
  );
};

export default Navbar;
