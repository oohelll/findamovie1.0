import movies from "./movie.js"
import moviesApi from "./movie-api.js";

class DataSource {
    // static getMovieList() {
    //     return fetch(`${moviesApi.nowPlaying}`)
    //         .then(res => res.json())
    //         .then(resJson => {
    //             if (resJson.results) {
    //                 return Promise.resolve(resJson.results)
    //             }
    //         })
    // }
    // static movieSearch(keyword){
    //     return fetch(`${moviesApi.search}${keyword}`)
    //     .then(res => res.json())
    //     .then(resJson => {
    //         if(resJson.total_results > 0) {
    //             return Promise.resolve(resJson.results);
    //         }else {
    //             return Promise.reject(`${keyword} is Not Found`);
    //         }
    //     });
    // }
    static movieSearch(keyword) {
        return new Promise((resolve, reject) => {
            const filteredMovies = movies.filter(movie => movie.name.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredMovies.length) {
                resolve(filteredMovies);
            } else {
                reject(`${keyword} is not found`);
            }
        });
    }
}

export {DataSource};