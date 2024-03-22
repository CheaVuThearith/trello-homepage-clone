import { motion } from "framer-motion";
const Overlay = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: .2 },
      }}
      className="absolute z-10 h-[100%] w-[100%] bg-black"
    ></motion.div>
  );
};

export default Overlay;
