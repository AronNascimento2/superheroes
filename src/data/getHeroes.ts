import axios from "axios";
import { Hero } from "../domain/model";

const apiUrl = "https://akabab.github.io/superhero-api/api/all.json";

export const getHeroes = (searchTerm: string): Promise<Hero[]> => {

  return axios
    .get(apiUrl)
    .then((response) => {
      // Filtrar os heróis com base no searchTerm
      const filteredHeroes = response.data.filter((hero: Hero) =>
        hero.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return filteredHeroes;
    });
};
