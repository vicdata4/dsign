import { LitElement, html, css } from 'lit-element';

class TestComponent extends LitElement {
  static get styles() {
    return css`
      `;
  }

  render() {
    return html`
    `;
  }
}

window.customElements.define('test-component', TestComponent);
