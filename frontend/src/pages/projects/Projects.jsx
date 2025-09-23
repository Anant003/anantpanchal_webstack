import React from "react";
import { Provider } from "@adobe/react-spectrum";
import { defaultTheme } from "@adobe/react-spectrum";
import Card from "../../components/Card";
import { cardData } from "../../data/CardData";
import "./Projects.css";

export default function Projects() {
  return (
    <Provider
      theme={defaultTheme}
      backgroundColor="Blue-700"
      padding="size-200"
    >
      <h1>Projects</h1>
      <p>
        Here are some of the key projects I’ve built to demonstrate my skills in
        frontend development, UI design, and accessibility. Each project
        reflects my ability to create responsive, user-friendly, and accessible
        web applications using modern web technologies.
      </p>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            link={card.link}
            icon={card.icon}
          />
        ))}
      </div>
    </Provider>
  );
}
