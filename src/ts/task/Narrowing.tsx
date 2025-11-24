import React, { useEffect, useState } from "react";
import { Shape } from "./NarrowingProp.types";
const Narrowing = (props: Shape) => {
  const [data, setData] = useState<number>(0);

  useEffect(() => {
    switch (props.kind) {
      case "circle":
        let findRadius = props.radius * 2 * 3; // I know this is not right i just follow the concept of Narrowing
        setData(findRadius);
        break;
      case "square":
        let square = props.size * 2;
        setData(square);
        break;

      default:
        break;
    }
  }, [props]);

  return <div>{data}</div>;
};

export default Narrowing;
