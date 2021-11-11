import movies from "../data/movie";

class fullMovie extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="movie-img">
            <img class="movie-poster" src="${this._movie.moviePoster}" alt="Movie List">
        </div>
        <div class="movieInfo">
            <h2>${this._movie.name}</h2>
            <p>${this._movie.description}</p>
        </div>`;
    }
}

customElements.define("movie-item", fullMovie);