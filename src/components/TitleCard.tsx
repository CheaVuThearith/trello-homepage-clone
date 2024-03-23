import { motion } from "framer-motion";

interface Prop {
  children: React.ReactNode;
  title: string;
  className?: string;
  classList?: string;
  opacity?: number;
}
const TitleCard = ({
  children,
  title,
  className,
  classList,
  opacity = 1,
}: Prop) => {
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
      <h1 className="border-b py-5 text-lg font-semibold text-[#172b4d] xl:border-b-0 xl:p-0 xl:pb-5">
        {title}{" "}
      </h1>
      <div
        className={`border-b-0 border-[#172b4d41] xl:border-t xl:pt-7 ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default TitleCard;
