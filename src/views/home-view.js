import { LitElement, html, css } from 'lit-element';
import '../components/cube-component';

class HomeView extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: grid;
          position: relative;
          grid-template-rows: 120px 50px 1fr;
          width: 100%;
          height: 100%;
          /* overflow: hidden; */
          font-family: 'Sen', sans-serif;
        }

        header {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgb(50, 50, 50);
          color: #fff;
        }

        nav {
          background-color: rgba(0, 0, 0, 0.07);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: row wrap;
        }

        nav > a {
          margin: 0 15px 0 15px;
          color: #424242;
          text-decoration: none;
        }

        nav > a:hover {
          border-bottom: 1px solid #59868c;
        }

        .logo {
          width:115px;
          height: auto;
        }

        cube-component {
          display: flex;
          justify-content: center;
          margin-top: 200px;
        }

        h5 {
          height: 1000px;
        }

        @media (min-width: 768px) {
          .column {
            position: absolute;
            width: 150px;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.07);
          }

          .right {
            right: 0;
          }
        }
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
      <header>
        <img class="logo" src="assets/images/dsign_logosub.png" alt="logo">
      </header>
      <nav>
        <a href="/africa">Africa</a>
        <a href="#">Europe</a>
        <a href="#">Asia</a>
        <a href="#">America</a>
        <a href="#">Antarctica</a>
        <a href="#">Oceania</a>
      </nav>
      <div class="column"></div>
      <div class="column right"></div>
      <cube-component></cube-component>
      <h5></h5>
 
    `;
  }
}

window.customElements.define('home-view', HomeView);
