// components/CustomCard.jsx
import React from "react";
import { PLASMIC } from "../../plasmic-init";

export default function CustomCard({
  title,
  description,
  buttonText,
  className,
}) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}

// Register the component
PLASMIC.registerComponent(CustomCard, {
  name: "CustomCard",
  props: {
    title: {
      type: "string",
      defaultValue: "Card Title",
    },
    description: {
      type: "string",
      defaultValue: "This is a description",
    },
    buttonText: {
      type: "string",
      defaultValue: "Click Me",
    },
  },
  displayName: "Custom Card",
  description: "A simple static card component",
  section: "My Components",
});
