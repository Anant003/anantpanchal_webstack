import React, { useState } from "react";

const Parent = () => {
  const [dataFromChild, setDataFromChild] = useState("");
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {dataFromChild}</p>
      <Child senDateToParent={handleDataFromChild} />
    </div>
  );
};

export default Parent;

export const Child = ({ senDateToParent }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={() => senDateToParent("Hello from Child!")}>
        Send Data to Parent
      </button>
    </div>
  );
};
