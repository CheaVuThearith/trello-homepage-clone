import { showContext } from "@/Navbar";
import { motion } from "framer-motion";
import { useContext } from "react";

const MovingUnderline = () => {
  const show = useContext(showContext);
  return (
    <motion.div
      layoutId="underline"
      initial={{ opacity: 0.8, x: -10 }} // initial state of the animation
      animate={{ opacity: 1, x: 0 }} // final state of the animation
      transition={{ duration: 0.5, ease: [0.7, 0.44, 0.34, 0.85] }}
      className=" absolute top-9 mt-1 h-[3px] w-[100%] rounded-full bg-blue-600"
    ></motion.div>
  );
};

export default MovingUnderline;
