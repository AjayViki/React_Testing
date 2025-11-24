import React from "react";

type renderChildProp = {
  title: string;
  children: React.ReactNode;
};

const RenderChild = ({ title, children }: renderChildProp) => {
  return (
    <div>
      RenderChild
      {title} {children}
    </div>
  );
};

export default RenderChild;
