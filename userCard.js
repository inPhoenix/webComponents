class userCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<h3>${this.getAttribute('name')}</h3>`
    }
}
window.customElements.define('user-card', userCard)