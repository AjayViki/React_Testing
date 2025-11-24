import React from "react";
import { ButtonProps } from "./ButtonProps.types";
const ButtonProp = ({ onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick}></button>
    </div>
  );
};

export default ButtonProp;
