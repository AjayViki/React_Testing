import React from "react";
import { UnionProps } from "./UnionProp.types";

const Union = ({ types }: UnionProps) => {
  return (
    <div>
      If Type :{" "}
      {typeof types === "string"
        ? `Hii ${types} Welcome to Our Channel`
        : `Hi My age is ${types}`}{" "}
    </div>
  );
};

export default Union;
