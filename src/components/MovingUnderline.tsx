import { motion } from "framer-motion";

const MovingUnderline = () => {
  return (
    <motion.div
      layoutId="underline"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit="exit"
      variants={{
        exit: (custom) => ({ width: custom ? 0 : "70%" }),
      }}
      transition={{
        layout: { duration: 0.4, type:"spring", stiffness:140, damping:16 },
        duration: 0.3,

      }}
      className=" absolute top-14 mt-1 h-[3px] rounded-full w-[70%] bg-blue-600"
    ></motion.div>
  );
};

export default MovingUnderline;
