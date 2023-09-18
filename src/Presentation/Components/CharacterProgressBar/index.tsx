import React from "react";
import "./st.css";

interface AttributeColors {
  [key: string]: string;
}

interface CharacterProgressBarProps {
  attributes: {
    [key: string]: number;
  };
}

const CharacterProgressBar: React.FC<CharacterProgressBarProps> = ({
  attributes,
}) => {
  const attributeColors: AttributeColors = {
    intelligence: "red",
    strength: "blue",
    speed: "yellow",
    durability: "green",
    power: "purple",
    combat: "orange",
  };

  return (
    <div className=" flex max-w-md flex-col gap-1 w-full">
      {Object.entries(attributes).map(([attribute, value]) => (
        <div className="flex items-center gap-1 w-full justify-between">
          <span className="attribute-label">{attribute}</span>
          <div>
            <div
              className="w-80 h-2 bg-neutral-300 relative flex items-center rounded-xl"
              key={attribute}
            >
              <div
                className="rounded-xl h-full"
                style={{
                  width: `${value}%`,
                  backgroundColor: attributeColors[attribute],
                }}
              />
            </div>
          </div>
          <span className="attribute-label">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default CharacterProgressBar;
