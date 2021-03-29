class userCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 'John Doe'
    }
}
window.customElements.define('user-card', userCard)