
const URL = "https://api.themoviedb.org/3/";
const APIKEY = "51b343e5ab428fce05c272eacf93961e";
    

 const fetchTrending = () => {
   return fetch (
    `${URL}trending/movie/day?api_key=${APIKEY}`,
    
   );
  
 }

 const fetchSearch = query => {
  return fetch (
   `${URL}/search/movie?api_key=${APIKEY}&language=en-US&page=1&query=${query}`,
   
  )
 
}

const fetchMovieId = async movieId =>{
  return fetch (
    `${URL}/movie/${movieId}?api_key=${APIKEY}&language=en-US`,
  )
}

const fetchСredits = async movieId =>{
  return fetch (
    `${URL}/movie/${movieId}/credits?api_key=${APIKEY}&language=en-US`
  )
}
    
const fetchReviews = async movieId =>{
  return fetch (
    `${URL}/movie/${movieId}/reviews?api_key=${APIKEY}&language=en-US&page=1`
  )
}

const fetchAPI = {
  fetchTrending,
  fetchSearch,
  fetchMovieId,
  fetchСredits,
  fetchReviews,
}


    
  
  export default api;















































  