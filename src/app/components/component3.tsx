// FunctionComponent.js
import React, { FC } from "react";

interface FunctionComponentProps {
  onClick: () => void;
}

const FunctionComponent: FC<FunctionComponentProps> = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default FunctionComponent;
