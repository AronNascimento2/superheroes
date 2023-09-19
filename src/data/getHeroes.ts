import axios from "axios";
import { Hero } from "../domain/model";

const apiUrl = "https://superheroapi.com/api/5903141623089276";

const corsProxyUrl = "https://thingproxy.freeboard.io/fetch/";

export const getHeroes = (searchTerm: string): Promise<Hero[]> => {
  const searchUrl = `${apiUrl}/search/${searchTerm}`;

  return axios
    .get(corsProxyUrl + searchUrl)
    .then((response) => response.data.results);
};
