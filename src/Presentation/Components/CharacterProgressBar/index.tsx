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
    <div className=" flex  flex-col gap-1 w-full">
      {Object.entries(attributes).map(([attribute, value]) => (
        <div
          key={value}
          className="flex gap-1 w-full justify-between items-center "
        >
          <span className="w-32 attribute-label">{attribute}</span>
          <div className="w-full flex justify-center items-center ">
            <div
              className="w-full h-2 bg-neutral-300 relative flex  rounded-xl"
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
          <span className="attribute-label w-10 text-end">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default CharacterProgressBar;
