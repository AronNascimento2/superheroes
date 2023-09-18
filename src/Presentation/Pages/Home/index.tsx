import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { getHeroes } from "../../../data/getHeroes";
import { Hero } from "../../../domain/model";
import { ContentCharacter } from "../../Components/ContentCharacter";

export const Home: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    getHeroes().then((response) => setHeroes(response));
  }, []);
  return (
    <div className="flex flex-wrap  items-center justify-center ">
      <Header />
      <div className="items-center justify-center flex flex-wrap gap-4 m-7">
        {heroes?.map((hero) => (
          <ContentCharacter {...hero} />
        ))}
      </div>
    </div>
  );
};
