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
const DropDownLeft = ({ children, title, className }: Props) => {
  return (
    <>
      <TitleCard
        classList="xl:w-[50rem] w-full"
        title={title}
        className={`w-full xl:max-w-5xl ${className}`}
      >
        {children}
      </TitleCard>
    </>
  );
};

export default DropDownLeft;
