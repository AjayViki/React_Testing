import React from "react";
import RenderChild from "./RenderChild";
const ChildComp = () => {
  return (
    <div>
      <RenderChild title="ChildComp">
        <h1>Hey Buddy this is from Child Component</h1>
      </RenderChild>
    </div>
  );
};

export default ChildComp;
