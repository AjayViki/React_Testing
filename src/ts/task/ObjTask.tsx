import React from "react";
import { ObjProps } from "./Obj.types";
const ObjTask = (props: ObjProps) => {
  return (
    <div>
      {props.title} {props.year} {props.author && props.author}
    </div>
  );
};

export default ObjTask;
