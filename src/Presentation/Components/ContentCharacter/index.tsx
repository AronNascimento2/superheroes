import { useState } from "react";
import { Modal } from "../Modal";
import CharacterProgressBar from "../CharacterProgressBar";
import { Card } from "../Card";
import { Tabs } from "../../../Tabs";

type Powerstats = {
  [key: string]: number;
};

type CardProps = {
  image?: { url?: string };
  name?: string;
  description?: string;
  powerstats?: Powerstats;
};

export const ContentCharacter: React.FC<CardProps> = ({
  image,
  name,
  powerstats,
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
      label: "Biografia",
      content: (
        <div>
          <h2>Conteúdo da Biografia</h2>
          <CharacterProgressBar attributes={powerstats || {}} />
        </div>
      ),
    },
    {
      id: "appearance",
      label: "Aparência",
      content: (
        <div>
          <h2>Conteúdo da Aparência</h2>
          {/* Conteúdo da aba de aparência */}
        </div>
      ),
    },
    {
      id: "others",
      label: "Outros",
      content: (
        <div>
          <h2>Conteúdo de Outros</h2>
          {/* Conteúdo da aba de outros */}
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