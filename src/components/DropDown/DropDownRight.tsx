import React from "react";
import TitleCard from "../TitleCard";
//
//
//
type Props = {
  children: React.ReactNode;
  title: string;
  className?: string;
};
//
//
//
const DropDownRight = ({ children, title, className }: Props) => {
  return (
    <TitleCard
      classList="xl:w-[285px] w-[97%]"
      className={`border-[#998dd9] ${className}`}
      title={title}
    >
      {children}
    </TitleCard>
  );
};

export default DropDownRight;
