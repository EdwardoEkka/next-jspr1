import React, { FC } from "react";

interface ComponentProps {
  data: string;
}

const FuncComponent: FC<ComponentProps> = (props) => {
  return (
    <div>
      <h1>{props.data}</h1>
    </div>
  );
};

export default FuncComponent;
