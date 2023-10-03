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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    // Verificar se o searchTerm está vazio e definir para "A" se for o caso
    const term = searchTerm.trim() === "" ? "A" : searchTerm;

    getHeroes(term)
      .then((response) => {
        setHeroes(response);
        setLoading(false);
      })
      .catch(() => {
        setError(
          "Ocorreu um erro ao carregar os heróis. Tente novamente mais tarde."
        );
        setLoading(false);
      });
  }, [searchTerm]);

  let content;

  if (loading) {
    content = <Loader />;
  } else if (error) {
    content = <div className="text-red-600 w-72 text-center pt-4">{error}</div>;
  } else {
    content = (
      <div className="m-0 gap-1 lg:items-center justify-center flex flex-wrap gap-4 m-7">
        {heroes?.map((hero) => (
          <ContentCharacter key={hero.id} {...hero} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center">
      <Header onSearch={(term) => setSearchTerm(term)} />
      {content}
    </div>
  );
};
