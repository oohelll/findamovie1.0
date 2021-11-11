import movies from "../data/movie";

class MainBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#inputSearch").value;
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron">
            <div class="list">
                <img src="${movies[0].moviePoster}" alt="Justice League">
                <img src="${movies[1].moviePoster}" alt="Titanic">
                <img src="${movies[2].moviePoster}" alt="Jaws">
                <img src="${movies[3].moviePoster}" alt="Insidious">
                <img src="${movies[4].moviePoster}" alt="Mortal Kombat">
            </div>

            <div id="search" class="search-input">
                <input placeholder="Lets Find A Movie" type="search" id="inputSearch">
                <button id="buttonSearch" type="submit">find It</button>
            </div>
        </div>
        `;

        this.querySelector("#buttonSearch").addEventListener("click", this._clickEvent);
    }
}

customElements.define('main-bar', MainBar);