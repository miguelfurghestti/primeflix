import axios from "axios";

//BASE DA API: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=ce887b5b04f11516853437fd193b9766&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
