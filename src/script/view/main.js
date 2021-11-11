import "../component/movie-list.js"
import "../component/main-bar.js";
import {DataSource} from '../data/movie-data.js';

const main = () => {
    const searchInput = document.querySelector("main-bar");
    const list = document.querySelector("movie-list");

    const onButtonClick = async() => {
        try{
            const result = await DataSource.movieSearch(searchInput.value);
            renderResult(result);
        }
        catch(message) {
            fallbackResult(message);
        }
    };

    const renderResult = (results) => {
        list.movies = results;
    };

    const fallbackResult = (message) => {
        list.renderError(message);
    };

    searchInput.clickEvent = onButtonClick;
}

export default main;