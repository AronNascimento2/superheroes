import { useState } from "react";
import { Modal } from "../Modal";
import CharacterProgressBar from "../CharacterProgressBar";
import { Card } from "../Card";
import { Tabs } from "../../../Tabs";
import { Biography } from "../Biography";
import { HeroConnections } from "../HeroConnections";
import { Appearance } from "../Appearance";

type Powerstats = {
  [key: string]: number;
};

type Biography = {
  [key: string]: string;
};

type CardProps = {
  image?: { url?: string };
  name?: string;
  description?: string;
  powerstats?: Powerstats;
  biography?: Biography;
  connections?: Biography;
  appearance?: Biography;
};

export const ContentCharacter: React.FC<CardProps> = ({
  image,
  name,
  powerstats,
  biography,
  connections,
  appearance,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const tabs = [
    {
      id: "biography",
      label: "BIOGRAPHY",
      content: (
        <div>
          <Biography biography={biography ?? {}} />
        </div>
      ),
    },
    {
      id: "powerstats",
      label: "POWERSTATS",
      content: (
        <div>
          <CharacterProgressBar attributes={powerstats ?? {}} />
        </div>
      ),
    },
    {
      id: "appearance",
      label: "APPEARANCE",
      content: (
        <div>
          <Appearance appearance={appearance ?? {}} />
        </div>
      ),
    },
    {
      id: "connections",
      label: "CONNECTIONS",
      content: (
        <div>
          <HeroConnections connections={connections ?? {}} />
        </div>
      ),
    },
  ];

  return (
    <>
      <div onClick={handleOpen}>
        <Card name={name} image={image?.url} />
      </div>
      {isOpen && (
        <Modal open={isOpen} handleClose={handleClose}>
          <div className="flex gap-2 w-full">
            <img src={image?.url} style={{ width: "400px", height: "500px" }} />
            <Tabs tabs={tabs} />
          </div>
        </Modal>
      )}
    </>
  );
};
