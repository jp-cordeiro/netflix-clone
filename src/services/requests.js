const API_KEY = process.env.API_TMDB_KEY;
const addLanguage = '&language=pt-BR';

let requestPack = {
  fetchTrendings: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fecthActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fecthComedyMovies: `/discover/movie?api_key=${API_KEY}with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const requests = Object.keys(requestPack).map((request) => {
  return (request += addLanguage);
});

export default requests;
