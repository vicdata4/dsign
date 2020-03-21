import { LitElement, html, css } from 'lit-element';

import { material } from '../utils/fonts'
import { html5_svg, css3_svg, js_svg } from '../utils/icons';
import '../components/cube-component';

class HomeView extends LitElement {
  static get styles() {
    return [
      material,
      css`
        :host {
          --header-height: 120px;
          --nav-height: 50px;
          --main-height: calc(100% - (var(--header-height) + var(--nav-height)));
          --technologies-height: auto;
          --information-height: auto;
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
          background-color: var(--nav-background);
        }

        

        .nav-link:hover {
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
          line-height: 21px;
        }

        .separator {
          margin: 0;
          border: 0;
          border-bottom: 1px solid #b9b7b7;
          border-bottom-left-radius: 100%;
          border-top-right-radius: 100%;
        }

        .separator.sm {
          width: 80px;
          border-bottom-width: 1.4px;
        }

        .separator.red {
          border-bottom-color: #dc6260;
        }

        .separator.blue {
          border-bottom-color: #60c8dc;
        }

        .separator.green {
          border-bottom-color: #c0dc60;
        }

        .separator.centered {
          width: 300px;
          align-self: center;
          margin: 30px 0px;
          border-bottom-width: 2px;
        }

        .information {
          display: flex;
          flex-direction: column;
          padding: 50px 40px;
        }

        .info-text {
          color: #232323;
          font-size: 16px;
        }

        .info-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .icons > i {
          margin: 0 5px;
          font-size: 30px;
        }

        .favourite-red {
          color: #ca6b33;
        }

        .share-purple {
          color: #5e5ea5;
        }

        .card-decorator {
          color: #066e8e;
          font-weight: bolder;
        }

        svg {
          width: 130px;
        }

        .menu-btn {
          width: 100%;
          height: 100%;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .menu-btn > i {
          font-size: 40px;
          color: #716a6f;
        }

        .nav-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          position: absolute;
          top: calc(var(--header-height) + var(--nav-height));
          width: 100%;
          height: 0;
          overflow: hidden;
          margin: 0;
          padding: 0;

          list-style: none;
          background-color: rgba(0,0,0,.9);
          z-index: 1;
          transition: height 1s ease;
        }

        .opened {
          height: var(--main-height);
        }

        .nav-list > li {
          margin: 20px 0;
        }

        .nav-link {
          text-decoration: none;
          color: #fff;
        }

        @media (min-width: 414px) {
          .card-text {
            font-size: 16px;
          }

          .info-text {
            font-size: 18px;
          }
        }

        @media (min-width: 600px) {
          
        }

        @media (min-width: 768px) {

          .nav-list {
            all: unset;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
            height: 100%;
            list-style: none;
          }

          .nav-list > li {
            margin: 0 15px 0 15px;
          }

          .nav-link {
            color: #424242;
          }

          .menu-btn {
            display: none;
          }

          .technologies {
            grid-template-columns: repeat(3, 1fr);
            padding: 0;
          }

          .technologies > .card {
            min-height: 200px;
          }

          .information {
            padding: 50px 20%;
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

  mobileMenuSwitch() {
    const mobileMenu = this.shadowRoot.querySelector('.nav-list').classList;

    if (!mobileMenu.contains('opened')) {
      mobileMenu.add('opened');
    } else {
      mobileMenu.remove('opened');
    }
  }

  render() {
    return html`
      <header>
        <img class="logo" src="assets/images/dsign_logosub.png" alt="logo">
      </header>
      <nav>
        <ul class="nav-list">
          <li><a href="/africa" class="nav-link">Africa</a></li>
          <li><a href="#" class="nav-link">Europe</a></li>
          <li><a href="#" class="nav-link">Asia</a></li>
          <li><a href="#" class="nav-link">America</a></li>
          <li><a href="#" class="nav-link">Antarctica</a></li>
          <li><a href="#" class="nav-link">Oceania</a></li>
        </ul>
        <button type="button" class="menu-btn" @click="${this.mobileMenuSwitch}">
          <i class="material-icons">expand_more</i>
        </button>
      </nav>
      <main>
        <cube-component></cube-component>
        <div class="column"></div>
        <div class="column right"></div>
      </main>
      <section class="technologies">
        <div class="card">
          ${html5_svg}
          <p class="card-text"><span class="card-decorator">HTML5</span> is a software solution stack that defines the properties and behaviors of web page content by implementing a <span class="card-decorator">markup-based pattern</span> to it</p>
          <hr class="separator sm red">
        </div>
        <div class="card">
          ${css3_svg}
          <p class="card-text"><span class="card-decorator">Cascading Style Sheets</span> (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
          <hr class="separator sm blue">
        </div>
        <div class="card">
          ${js_svg}
          <p class="card-text"><span class="card-decorator">JavaScript</span>, often abbreviated as JS, is a programming language that conforms to the <span class="card-decorator">ECMAScript specification</span>. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.</p>
          <hr class="separator sm green">
        </div>
      </section>
      <section class="information">
          <div class="info-header">
            <h2>Dsign project</h2>
            <div class="icons">
              <i class="material-icons favourite-red">favorite_border</i>
              <i class="material-icons share-purple">share</i>
            </div>
          </div>
          <hr class="separator sm green">
          <p class="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dolor at diam sagittis blandit in ac nulla. Pellentesque tristique tellus orci, a tincidunt quam sagittis at. Maecenas ac ultricies diam. Maecenas quis lectus magna. Morbi volutpat, felis vel scelerisque imperdiet, nisl mauris tempus lacus, nec tristique ipsum purus sed neque. Donec quis convallis tellus, et fringilla purus. Curabitur condimentum lacus id massa placerat, ac facilisis quam tempus. Sed id dignissim est.</p>
          <hr class="separator centered">
      </section>
      <footer>
        Footer
      </footer>
    `;
  }
}

window.customElements.define('home-view', HomeView);
