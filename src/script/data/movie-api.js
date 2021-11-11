const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = '?api_key=fafdb1e8704852a313f9e3eb8d881fb1';

const moviesApi = {
    nowPlaying: `${baseUrl}movie/now_playing${apiKey}`,
    Popular: `${baseUrl}movie/popular${apiKey}`,
    search: `${baseUrl}search/movie${apiKey}&query=`
};

export default moviesApi;