import { useState } from "react";
import Navbar from "./Navbar";
import { createContext } from "react";
import Overlay from "./Overlay";
import { AnimatePresence } from "framer-motion";
//
//
//
interface overlayContextType {
  darken: boolean;
  setDarken: (value: boolean) => void;
}
//
//
//
export const overlayContext = createContext<overlayContextType>({
  darken: false,
  setDarken: () => {},
});
function App() {
  const [darken, setDarken] = useState(false);
  return (
    <>
      <overlayContext.Provider value={{ darken, setDarken }}>
        <Navbar />
        <AnimatePresence>{darken && <Overlay />}</AnimatePresence>
      </overlayContext.Provider>
    </>
  );
}
export default App;
