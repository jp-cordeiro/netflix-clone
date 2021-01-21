const API_KEY = process.env.REACT_APP_API_TMDB_KEY;
const addLanguage = '&language=pt-BR';

let requests = {
  fetchTrendings: `/trending/all/week?api_key=${API_KEY}${addLanguage}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213${addLanguage}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}${addLanguage}`,
  fecthActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28${addLanguage}`,
  fecthComedyMovies: `/discover/movie?api_key=${API_KEY}with_genres=35${addLanguage}`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}with_genres=27${addLanguage}`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}with_genres=10749${addLanguage}`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99${addLanguage}`,
};

export default requests;
