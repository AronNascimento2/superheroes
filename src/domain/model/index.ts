export type Hero = {
  id: number; // Adicione a propriedade id se necessário
  name: string;
  image: {
    url: string;
  };
  description: string;
  powerstats: {
    intelligence: number; // Atualize para number
    strength: number; // Atualize para number
    speed: number; // Atualize para number
    durability: number; // Atualize para number
    power: number; // Atualize para number
    combat: number; // Atualize para number
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyecolor: string[];
    haircolor: string[];
  };
};
