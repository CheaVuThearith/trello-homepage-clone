import { motion } from "framer-motion";

const MovingUnderline = () => {
  return (
    <motion.div
      layoutId="underline"
      initial={{ opacity: "50%" }} // initial state of the animation
      animate={{ opacity: "100%" }} // final state of the animation
      exit={{ width: "0%" }} // initial state of the animation
      transition={{
        layout: { duration: 0.4, ease: [0.88, 0.2, 0.2, 0.85], bounce: 0.4 },
        duration: 0.3,
      }}
      className=" absolute top-14 mt-1 h-[3px] w-[70%] rounded-full bg-blue-600"
    ></motion.div>
  );
};

export default MovingUnderline;
