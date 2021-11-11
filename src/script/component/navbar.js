class NavBarr extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<h1>Welcome To Wovies</h1>`;
    }
}

customElements.define("nav-barr", NavBarr);