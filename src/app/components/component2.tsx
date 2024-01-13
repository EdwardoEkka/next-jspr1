

import React from 'react';

/*An interface named MyComponentProps is declared, 
specifying the expected properties and their 
types that can be passed as props to the MyComponent component.*/
interface MyComponentProps {
  name: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default MyComponent;
