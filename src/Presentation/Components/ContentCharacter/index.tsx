import { useState } from "react";
import { Modal } from "../Modal";
import CharacterProgressBar from "../CharacterProgressBar";
import { Card } from "../Card";
import { Tabs } from "../../../Tabs";
import { Biography } from "../TabsContents/Biography";
import { Appearance } from "../TabsContents/Appearance";
import { HeroConnections } from "../TabsContents/HeroConnections";

type Powerstats = {
  [key: string]: number;
};

type Biography = {
  [key: string]: string;
};

type CardProps = {
  images?: {
    xl: string;
    lg:string;
    sm:string;
    md:string
  };
  name?: string;
  description?: string;
  powerstats?: Powerstats;
  biography?: Biography;
  connections?: Biography;
  appearance?: Biography;
};

export const ContentCharacter: React.FC<CardProps> = ({
  images,
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
        <Card name={name} image={images?.lg} />
      </div>
      {isOpen && (
       <Modal open={isOpen} handleClose={handleClose}>
       <div className="flex flex-col items-center lg:flex-row lg:items-stretch gap-2 overflow-auto">
         <img src={images?.lg}   className="w-56 h-96  lg:w-xlw h-full" alt={name} />
         <Tabs tabs={tabs}  />
       </div>
     </Modal>
      )}
    </>
  );
};
