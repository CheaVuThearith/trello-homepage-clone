import { motion } from "framer-motion";
interface Prop{
  type:string
}
const Overlay = ({type}:Prop) => {
  return (
    <motion.div
      initial="hidden"
      animate={type}
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        opaqueBlack: { opacity: 0.2, backgroundColor: "black" },
        white: { opacity: 1, backgroundColor: "white" },
      }}
      className="absolute z-10 h-[100%] w-[100%]"
    ></motion.div>
  );
};

export default Overlay;
