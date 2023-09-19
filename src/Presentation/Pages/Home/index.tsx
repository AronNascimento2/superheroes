import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { getHeroes } from "../../../data/getHeroes";
import { Hero } from "../../../domain/model";
import { ContentCharacter } from "../../Components/ContentCharacter";
import { Loader } from "../../Components/Loader";

export const Home: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("A");
  useEffect(() => {
    setLoading(true);
    // Verificar se o searchTerm está vazio e definir para "A" se for o caso
    const term = searchTerm.trim() === "" ? "A" : searchTerm;

    getHeroes(term).then((response) => {
      setHeroes(response);
      setLoading(false);
    });
  }, [searchTerm]);

  return (
    <div className="flex flex-wrap  items-center justify-center ">
      <Header onSearch={(term) => setSearchTerm(term)} />
      {loading ? (
        <Loader />
      ) : (
        <div className="items-center justify-center flex flex-wrap gap-4 m-7">
          {heroes?.map((hero) => (
            <ContentCharacter {...hero} />
          ))}
        </div>
      )}
    </div>
  );
};
