import { LitElement, html, css } from 'lit-element';
import { routing } from './routing';

class AppShell extends LitElement {
  static get styles() {
    return [
      css`
        #root {
          width: 100%;
          height: 100%;
        }
      `
    ];
  }

  constructor() {
    super();
  }

  firstUpdated() {
    routing.call(this);
  }

  render() {
    return html`
      <div id="root"></div>
    `;
  }
}

window.customElements.define('app-shell', AppShell);
