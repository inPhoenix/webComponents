const template = document.createElement('template')
template.innerHTML = `
<style>
 h3 {
 color: red;
 }
</style>
<div class="user-card">
<div>
    <img />
    <h3>
    
    </h3>
</div>

</div>

`
class userCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')
    }
}
window.customElements.define('user-card', userCard)