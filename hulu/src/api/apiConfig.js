const apiKey = "e5152183575e585ae2ba56a3af82ebb0"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    baseUrl:`https://api.themoviedb.org/3/`,
    imgUrl:`https://image.tmdb.org/t/p/original/`,      
    fetchTrending: `trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchTopRated: `movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchMystery: `discover/movie?api_key=${apiKey}&with_genres=9648`,
    fetchScifi: `discover/movie?api_key=${apiKey}&with_genres=878`,
    fetchWestern: `discover/movie?api_key=${apiKey}&with_genres=37`,
    fetchAnimation: `discover/movie?api_key=${apiKey}&with_genres=16`,
    fetchTV: `discover/movie?api_key=${apiKey}&with_genres=10770`,    
}
