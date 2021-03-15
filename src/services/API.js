const URL = "https://api.themoviedb.org/3/";
const APIKEY = "51b343e5ab428fce05c272eacf93961e";

const errorWrap = async (fetchResult) => {
  const result = await fetchResult;
  try {
    if (!result.ok) {
      throw Error(result.statusText);
    }
    return await result.json();
  } catch (error) {
    console.log(error);
  }
};

const fetchTrending = () => {
  return errorWrap(fetch(`${URL}trending/movie/day?api_key=${APIKEY}`));
};

const fetchSearch = (query) => {
  return errorWrap(
    fetch(
      `${URL}search/movie?api_key=${APIKEY}&language=en-US&page=1&query=${query}`
    )
  );
};

const fetchMovieId = (movieId) => {
  return errorWrap(
    fetch(`${URL}movie/${movieId}?api_key=${APIKEY}&language=en-US`)
  );
};

const fetchСredits = (movieId) => {
  return errorWrap(
    fetch(`${URL}movie/${movieId}/credits?api_key=${APIKEY}&language=en-US`)
  );
};

const fetchReviews = (movieId) => {
  return errorWrap(
    fetch(
      `${URL}movie/${movieId}/reviews?api_key=${APIKEY}&language=en-US&page=1`
    )
  );
};

const fetchAPI = {
  fetchTrending,
  fetchSearch,
  fetchMovieId,
  fetchСredits,
  fetchReviews,
};

export default fetchAPI;
