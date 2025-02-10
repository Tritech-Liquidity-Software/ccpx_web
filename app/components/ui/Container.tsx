import React, { FC } from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ className = "", children }) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};

export default Container;
