import { motion } from "framer-motion";

interface Prop {
  children: React.ReactNode;
  title: string;
  className?: string;
  classList?: string;
  opacity?: number
}
const TitleCard = ({ children, title, className, classList, opacity=1 }: Prop) => {
  return (
    <motion.div
    layout
      initial="hidden"      
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: opacity },
      }}
      transition={{
        duration: 0.2,
      }}
      className={`${classList}`}
    >
      <h1 className="pb-5 text-lg font-semibold text-[#172b4d]">{title} </h1>
      <div className={`border-t border-[#172b4d41] pt-7 ${className}`}>
        {children}
      </div>
    </motion.div>
  );
};

export default TitleCard;
