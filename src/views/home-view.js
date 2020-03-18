import { LitElement, html, css } from 'lit-element';
import '../components/cube-component';

class HomeView extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          --header-height: 120px;
          --nav-height: 50px;
          --main-height: calc(100% - (var(--header-height) + var(--nav-height)));
          --technologies-height: auto;
          --information-height: 200px;
          --footer-height: 300px;

          --nav-background: rgba(0, 0, 0, 0.07);
          --header-background: rgb(50, 50, 50);

          font-family: 'Sen', sans-serif;
          display: grid;
          position: relative;
          grid-template-rows:
            var(--header-height)
            var(--nav-height)
            var(--main-height)
            var(--technologies-height)
            var(--information-height)
            var(--footer-height);

          width: 100%;
          height: 100%;
        }

        header {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--header-background);
        }

        nav {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-items: center;
          background-color: var(--nav-background);
        }

        nav > a {
          margin: 0 15px 0 15px;
          color: #424242;
          text-decoration: none;
        }

        nav > a:hover {
          border-bottom: 1px solid #59868c;
        }

        footer {
          background-color: var(--header-background);
        }

        .logo {
          width: 115px;
          height: auto;
        }

        cube-component {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .technologies {
            display: grid;
            grid-template-columns: 1fr;
            column-gap: 2px;
            row-gap: 2px;
            padding: 0 15px 0 15px;
        }

        .technologies > .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 30px;
          height: auto;
          background-color: var(--nav-background);
        }

        .card-text {
          text-align: center;
          font-size: 14px;
          letter-spacing: .5px;
        }

        .separator {
          border-color: #dc6260;
          width: 50px;
          margin: 0;
        }

        .separator.blue {
          border-color: #60c8dc;
        }

        .separator.green {
          border-color: #c0dc60;
        }

        @media (min-width: 768px) {
          .technologies {
            grid-template-columns: repeat(3, 1fr);
            padding: 0;
          }

          .technologies > .card {
            min-height: 200px;
          }

          .card-text {
            font-size: 14.5px;
          }

          .column {
            position: absolute;
            top: 0;
            width: 150px;
            height: 100%;
            background-color: var(--nav-background);
          }

          .right {
            right: 0;
          }
        }
      `
    ];
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
      <main>
        <cube-component></cube-component>
        <div class="column"></div>
        <div class="column right"></div>
      </main>
      <section class="technologies">
        <div class="card">
          <h3>HTML5</h3>
          <hr class="separator">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum tortor accumsan, malesuada ligula eu, efficitur massa.</p>
        </div>
        <div class="card">
          <h3>CSS3</h3>
          <hr class="separator blue">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum tortor accumsan, malesuada ligula eu, efficitur massa.</p>
        </div>
        <div class="card">
          <h3>Javascript</h3>
          <hr class="separator green">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum tortor accumsan, malesuada ligula eu, efficitur massa.</p>
        </div>
      </section>
      <section class="information">
        Section 4
      </section>
      <footer>
        Footer
      </footer>
 
    `;
  }
}

window.customElements.define('home-view', HomeView);
