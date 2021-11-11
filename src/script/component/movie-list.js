import "./movie-item.js";

class MovieList extends HTMLElement {
    set movies(movies){
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._movies.forEach((movie) => {
            const MovieItem = document.createElement("movie-item");
            MovieItem.movie = movie;
            this.appendChild(MovieItem);
        })
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
    }
}

customElements.define('movie-list', MovieList);