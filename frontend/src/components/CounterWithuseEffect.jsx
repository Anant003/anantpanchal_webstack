import React, { useEffect, useState } from "react";

const CounterWithuseEffect = () => {
  const [count, setCount] = useState(0);

  //useEffect effect to replicate componentDidMount and componentDidUpdate
  useEffect(() => {
    // This will run after the component mounts or update and whenever 'count' changes
    console.log(`Count has been updated to: ${count}`);

    return () => {
      // This will run when the component unmounts or before the next effect runs
      console.log(`Cleaning up... Last count was: ${count}`);
    };
  });
  return (
    <div>
      <h2>Counter with useEffect</h2>
      <p aria-live="polite">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterWithuseEffect;
