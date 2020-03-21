import { LitElement, html, css } from 'lit-element';

class AfricaView extends LitElement {
    static get styles() {
        return [
            css`
      `
        ];
    }

    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <h5>Africa</h5>
            <a href="/">Home</a>
        `;
    }
}

window.customElements.define('africa-view', AfricaView);
