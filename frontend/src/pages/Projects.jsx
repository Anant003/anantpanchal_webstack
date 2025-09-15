import { Provider } from "@adobe/react-spectrum";
import React from "react";
import { Link } from "react-router-dom";
import { defaultTheme } from "@adobe/react-spectrum";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <h2>React Challenges</h2>
      <Provider
        theme={defaultTheme}
        backgroundColor="Blue-700"
        padding="size-200"
      >
        <div className="card-container">
          <div className="card">
            <h3>Counter</h3>
            {/* <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
            <Link to="/Counter">Counter</Link>
          </div>
          <div className="card">
            <h3>Counter with useEffect</h3>
            <Link to="/CounterWithuseEffect">Counter with useEffect</Link>
          </div>
          <div className="card">
            <h3>Passing Props from Child to Parent</h3>
            <Link to="/PassingPropsFromChildtoParent">
              Passing Props from Child to Parent
            </Link>
          </div>
          <div className="card">
            <h3>Displaying Data from API</h3>
            <Link to="/DisplayDataUsingAPI">Displaying Data from API</Link>
          </div>
          <div className="card">
            <h3>Toggle Switch</h3>
            <Link to="/toggleSwitch">click here</Link>
          </div>
        </div>
      </Provider>
    </div>
  );
}
