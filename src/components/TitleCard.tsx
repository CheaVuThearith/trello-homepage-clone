import { motion } from "framer-motion";

interface Prop {
  children: React.ReactNode;
  title: string;
  className?:string
  classList?:string
}
const TitleCard = ({children, title, className, classList}: Prop) => {
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    exit="hidden"
    variants={{
        hidden:{opacity:0,
        position:"absolute"},
        visible:{opacity:1},
    }}
    transition={{
        duration:1,
    }}
     className={`${classList}`}>
      <h1 className="pb-5 text-lg font-semibold text-[#172b4d]">{title} </h1>
      <div className={`border-[#172b4d41] pt-7 border-t ${className}`}>
      {children}
        </div>
    </motion.div>
  );
};

export default TitleCard;
