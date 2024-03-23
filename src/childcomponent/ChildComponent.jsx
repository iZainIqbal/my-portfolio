import React from 'react'

const  ChildComponent = (props) =>{
    const message = props.message || 'Default message';
  return (
    <div>{message}</div>
  );
};

export default ChildComponent;
