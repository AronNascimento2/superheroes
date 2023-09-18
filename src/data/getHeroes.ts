import axios from "axios";
import { Hero } from "../domain/model";

const apiUrl = `https://superheroapi.com/api/5903141623089276/search/A`;

const corsProxyUrl = "https://thingproxy.freeboard.io/fetch/";

export const getHeroes = (): Promise<Hero[]> => {
  return axios
    .get(corsProxyUrl + apiUrl)
    .then((response) => response.data.results);
};
