import React, { useState } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

export default function Services() {
  const initialState = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free drinks",
        info:
          "A cocktail is an alcoholic mixed drink, which is either a combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream. ",
      },
      {
        icon: <FaHiking />,
        title: "Free hiking",
        info:
          "Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle van",
        info: "The shuttle van makes any trip feel like a first-class ride.",
      },
      {
        icon: <FaBeer />,
        title: "Free snacks",
        info:
          "Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea. ",
      },
    ],
  };
  const [services, setservices] = useState(initialState);

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon} </span>
              <h6>{item.title} </h6>
              <p>{item.info} </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
