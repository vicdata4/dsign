import { LitElement, html } from 'lit-element';

import { material } from '../../utils/fonts';
import { styles } from './home-styles.js';

import { html5_svg, css3_svg, js_svg, githubSvg } from '../../utils/icons';
import '../../components/cube-component';

const navList = [
  {
    name: 'Africa',
    path: '#'
  },
  {
    name: 'Europe',
    path: '#'
  },
  {
    name: 'Asia',
    path: '#'
  },
  {
    name: 'America',
    path: '#'
  },
  {
    name: 'Antarctica',
    path: '#'
  },
  {
    name: 'Oceania',
    path: '#'
  }
];

class HomeView extends LitElement {
  static get styles() {
    return [material, styles];
  }

  constructor() {
    super();

    window.addEventListener('scroll', () => {
      const arrowBtn = this.shadowRoot.querySelector('.scrolltop-arrow');
      const scrollMenu = this.shadowRoot.querySelector('.scroll-menu');

      arrowBtn.style.opacity = (window.scrollY > window.innerHeight) ? '1' : '0';

      if (window.scrollY > 170) {
        scrollMenu.style.top = '0';
      } else {
        scrollMenu.style.top = '-70px';
      }
    })
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  mobileMenuSwitch() {
    const menu = this.shadowRoot.querySelector('.nav-list').classList;
    const menuIcon = this.shadowRoot.querySelector('.menu-icon').classList;
    const menuButton = this.shadowRoot.querySelector('.menu-btn');
    const isClosed = !menu.contains('opened');

    menuButton.disabled = true;

    if (isClosed) {
      menu.add('opened');
      menuIcon.add('rotate');
    } else {
      menu.remove('opened');
      menu.add('closed');
      menuIcon.remove('rotate');
    }

    setTimeout(() => {
      menuButton.disabled = false;
      if (!isClosed) menu.remove('closed');

    }, 1000);
  }

  render() {
    return html`
      <header>
        <img class="logo" src="assets/images/dsign_logosub.png" alt="logo">
      </header>
      <nav>
        <ul class="nav-list">
          ${navList.map(info => html`<li><a href="${info.path}" class="nav-link">${info.name}</a></li>`)}
        </ul>
        <div class="scroll-menu">
          <img class="logo" src="assets/images/dsign_logo.png" alt="logo">
          <ul class="nav-list">
            ${navList.map(info => html`<li><a href="${info.path}" class="nav-link fixed" tabindex="-1">${info.name}</a></li>`)}
          </ul>
        </div>
        <button type="button" class="menu-btn" @click="${this.mobileMenuSwitch}">
          <i class="material-icons menu-icon">expand_more</i>
        </button>
      </nav>
      <main aria-label="Web design best practices" tabindex="0">
        <div class="main-container">
          <h1 class="main-title">WEB DESIGN<br>BEST PRACTICES</h1>
          <hr class="separator separator-main">
          <div class="main-icons-container">
            <i class="material-icons main-icon">sentiment_satisfied_alt</i>
            <i class="material-icons main-icon">touch_app</i>
            <i class="material-icons main-icon">favorite_border</i>
          </div>
        </div>
        <div class="column"></div>
        <div class="column right"></div>
        <div class="column-bottom"></div>
      </main>
      <section class="technologies" aria-label="Technologies section" tabindex="0">
        <div class="tech-card" aria-label="HTML5" tabindex="0">
          ${html5_svg}
          <p class="card-text" tabindex="0">
            <span class="card-decorator">HTML5</span> is a software solution stack that defines the properties and behaviors of web page 
            content by implementing a <span class="card-decorator">markup-based pattern</span> to it
          </p>
          <hr class="separator sm red">
        </div>
        <div class="tech-card" aria-label="CSS3" tabindex="0">
          ${css3_svg}
          <p class="card-text" tabindex="0">
            <span class="card-decorator">Cascading Style Sheets</span> (CSS) is a style sheet language used for describing the presentation 
            of a document written in a markup language like HTML
          </p>
          <hr class="separator sm blue">
        </div>
        <div class="tech-card" aria-label="Javascript" tabindex="0">
          ${js_svg}
          <p class="card-text" tabindex="0">
            <span class="card-decorator">JavaScript</span>, often abbreviated as JS, is a programming language that conforms to 
            the <span class="card-decorator">ECMAScript specification</span>. JavaScript is high-level, often just-in-time compiled, 
            and multi-paradigm
          </p>
          <hr class="separator sm green">
        </div>
      </section>
      <section class="information" aria-label="About dsign project" tabindex="0">
        <div class="info-header">
          <h2>Dsign project</h2>
          <div class="info-icons">
            <button type="button"><i class="material-icons favourite-red">favorite_border</i></button>
            <button type="button"><i class="material-icons share-purple">share</i></button>
          </div>
        </div>
        <hr class="separator sm green">
        <p class="info-text" tabindex="0">
            Dsign project includes different responsive web designs following best practices about presentation, 
            layout and accessibility using HTML5 and CSS3 features. <br><br>Maecenas ac ultricies diam. Maecenas 
            quis lectus magna. Morbi volutpat, felis vel scelerisque imperdiet, nisl mauris tempus lacus, nec tristique 
            ipsum purus sed neque. Donec quis convallis tellus, et fringilla purus. Curabitur condimentum lacus id 
            massa placerat, ac facilisis quam tempus. Sed id dignissim est.
          </p>
          <hr class="separator centered">
          <a href="https://github.com/vicdata4/dsign" class="github_link" target="_blank">${githubSvg}</a>
      </section>
      <section class="areas" aria-label="Web design sections" tabindex="0">
        <div class="area-card">
          <h2 class="area-title" tabindex="0">User experience / UX</h2>
          <p class="info-text" tabindex="0">
            User experience (UX) is a person's emotions and attitudes about using a particular product, system or service. 
            It includes the practical, experiential, affective, meaningful and valuable aspects of human–computer interaction 
            and product ownership. <br><br>Additionally, it includes a person's perceptions of system aspects such as utility, ease of use and efficiency. </p>
        </div>
        <div class="area-card center">
          <h2 class="area-title" tabindex="0">Accesibility</h2>
          <p class="info-text" tabindex="0">Web accessibility is the inclusive practice of ensuring there are no barriers that prevent interaction with, 
            or access to, websites on the World Wide Web by people with physical disabilities, situational disabilities, and socio-economic 
            restrictions on bandwidth and speed. <br><br>When sites are correctly designed, developed and edited, generally all users have equal 
            access to information and functionality.</p>
        </div>
        <div class="area-card">
          <h2 class="area-title" tabindex="0">User interface / UI</h2>
          <p class="info-text" tabindex="0">The user interface (UI), in the industrial design field of human-computer interaction, is the space where 
            interactions between humans and machines occur. <br><br>The goal of this interaction is to allow effective operation and control of 
            the machine from the human end, whilst the machine simultaneously feeds back information that aids the operators' decision-making 
            process. </p>
        </div>
      </section>
      <footer aria-label="Footer section" tabindex="0">
        <ul class="footer-list">
          <li class="footer-link title" aria-label="Menu links" tabindex="0">CONTINENTS</li>
          <li><a href="#" class="footer-link">Africa</a></li>
          <li><a href="#" class="footer-link">Europe</a></li>
          <li><a href="#" class="footer-link">Asia</a></li>
          <li><a href="#" class="footer-link">America</a></li>
          <li><a href="#" class="footer-link">Antarctica</a></li>
          <li><a href="#" class="footer-link">Oceania</a></li>
        </ul>
        <ul class="footer-list">
          <li class="footer-link title" aria-label="Technologies links" tabindex="0">TECHNOLOGIES</li>
          <li><a href="#" class="footer-link">HTML5</a></li>
          <li><a href="#" class="footer-link">CSS3</a></li>
          <li><a href="#" class="footer-link">Javascript</a></li>
        </ul>
        <ul class="footer-list">
          <li class="footer-link title" aria-label="Dependencies links" tabindex="0">DEPENDENCIES</li>
          <li><a href="#" class="footer-link">LitElement</a></li>
          <li><a href="#" class="footer-link">Vaadin</a></li>
        </ul>
        <ul class="footer-list">
          <li class="footer-link title" aria-label="Recomendations links" tabindex="0">RECOMMENDATIONS</li>
          <li><a href="#" class="footer-link">Git</a></li>
          <li><a href="#" class="footer-link">Flex-box</a></li>
          <li><a href="#" class="footer-link">Grid Layout</a></li>
          <li><a href="#" class="footer-link">ES6</a></li>
          <li><a href="#" class="footer-link">Web Components</a></li>
          <li><a href="#" class="footer-link">Npm</a></li>
        </ul>
        <div class="footer-line" aria-label="Website links" tabindex="0">
          <a href="#" class="footer-link">dsign.website</a>
          <a href="#" class="footer-link">OpenSource</a>
          <a href="#" class="footer-link">github.com/vicdata4</a>
        </div>
      </footer>
      <button aria-label="Scroll to top" class="scrolltop-arrow" @click="${this.scrollToTop}">
        <i class="material-icons">arrow_upward</i>
      </button>
    `;
  }
}

window.customElements.define('home-view', HomeView);
