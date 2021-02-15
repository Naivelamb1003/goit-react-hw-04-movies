function fetchImage(searchQuery,pageNumber) {
    const URL = "https://pixabay.com/api/";
    const APIKEY = "19280898-6ce77fd5c708cfadb8184ec4d";
  
    return fetch(
      `${URL}?q=${searchQuery}&page=1&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=${pageNumber *12}`
    ).then((response) => {
      if(response.ok){
          return response.json();
      }
      return Promise.reject(new Error(`Не найдено изображение с таким именем ${searchQuery}`));
      
    });
  }
  
  const api = {
    fetchImage,
  };
  
  export default api;















































  