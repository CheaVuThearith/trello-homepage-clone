import { motion } from "framer-motion";

const MovingUnderline = () => {
  return (
    <motion.div
      layoutId="underline"
      initial={{ opacity:"90%"}} // initial state of the animation
      animate={{ opacity:"100%" }} // final state of the animation
      exit={{ width:"0%"}} // initial state of the animation

      transition={{
       layout:{ duration: 0.5,
        ease: [0.7, 0.44, 0.34, 0.85],
        type:"spring",
        
        bounce:0.4},
        duration:0.2
      }}
      className=" absolute top-9 mt-1 h-[3px] w-[100%] rounded-full bg-blue-600"
    ></motion.div>
  );
};

export default MovingUnderline;
