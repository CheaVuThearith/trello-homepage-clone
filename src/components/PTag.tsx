import React from "react";

type Props = {
  children: React.ReactNode;
};

const PTag = ({ children }: Props) => {
  return (
    <p className="text-sm font-medium leading-6 text-[#505f79]">{children}</p>
  );
};

export default PTag;
