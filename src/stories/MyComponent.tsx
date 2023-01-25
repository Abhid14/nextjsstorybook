import React from 'react';


interface MyComponentProps {
    customProp?: string;
}

const MyComponent: React.FC<MyComponentProps> = (props) => {
  return <div>Hello World, customProp: {props.customProp}</div>;
}

// const MyComponent = (props) => {
//   return <div>Hello World, customProp: {props.customProp}</div>;
// }

export default MyComponent;
