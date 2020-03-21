import { LitElement, html, css } from 'lit-element';

import { material } from '../../utils/fonts';
import { styles } from './home-styles.js';

import { html5_svg, css3_svg, js_svg } from '../../utils/icons';
import '../../components/cube-component';

class HomeView extends LitElement {
  static get styles() {
    return [material, styles];
  }

  mobileMenuSwitch() {
    const mobileMenu = this.shadowRoot.querySelector('.nav-list').classList;
    const mobileMenuIcon = this.shadowRoot.querySelector('.menu-icon').classList;
    const mobileMenuBtn = this.shadowRoot.querySelector('.menu-btn');

    mobileMenuBtn.disabled = true;

    if (!mobileMenu.contains('opened')) {
      mobileMenu.add('opened');
      mobileMenuIcon.add('rotate');
    } else {
      mobileMenu.remove('opened');
      mobileMenuIcon.remove('rotate');
    }

    setTimeout(() => {
      mobileMenuBtn.disabled = false;
    }, 1000);
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
          <i class="material-icons menu-icon">expand_more</i>
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
