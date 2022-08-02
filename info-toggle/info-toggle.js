class InfoToggle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <button>Show</button>
            <p id="info-box">
                <slot></slot>
            </p>             
          `;
        this._toggleButton = this.shadowRoot.querySelector('button');
        this._infoBox = this.shadowRoot.querySelector('#info-box');;
        this._isVisible = false;
        this._toggleButton.addEventListener('click', this._toggleInfoBox.bind(this));
    }

    connectedCallback() {
        if (this.hasAttribute('is-visible')) {
            if (this.getAttribute('is-visible') === 'true') {
                this._isVisible = true;
            } else {
                this._isVisible = false;
            }
        }
        this._toggleInfoBox();
    }

    _toggleInfoBox() {
        this._infoBox.style.display = this._isVisible ? 'block' : 'none';
        this._toggleButton.textContent = this._isVisible ? 'Hide' : 'Show';
        this._isVisible = !this._isVisible;
    }
}

customElements.define('uc-info-toggle', InfoToggle);
