import React from "react";
import TitleCard from "../TitleCard";
//
//
//
type Props = {
  children: React.ReactNode;
  title:string
  className?:string
};
//
//
//
const DropDownLeft = ({ children, title, className }: Props) => {
  return (
    <TitleCard
      classList="w-[64rem]"
      title={title}
className={`max-w-5xl" ${className}`}
    >
      {children}
    </TitleCard>
  );
};

export default DropDownLeft;
