import { LitElement, html, css } from 'lit-element';

class CubeComponent extends LitElement {
  static get styles() {
    return [
      css`
        .container {
          width: 200px;
          height: 200px;
          position: relative;
          -webkit-perspective: 1000px;
          -moz-perspective: 1000px;
        }

        #cube {
          width: 100%;
          height: 100%;
          position: absolute;
          -webkit-transform-style: preserve-3d;
          -webkit-animation: rotatecube 10s infinite ease;
          
          -moz-transform-style: preserve-3d;
          -moz-animation: rotatecube 10s infinite linear;
        }

        #cube div {
          width: 200px;
          height: 200px;
          display: block;
          position: absolute;
          border: none;
          line-height: 200px;
          text-align: center;
          font-size: 50px;
          font-weight: bold;
        }

        @-webkit-keyframes rotatecube {
          /*0% { -webkit-transform: rotateX(0deg) rotateY(360deg) rotateZ(90deg); }*/
          0% { -webkit-transform: rotateX(80deg) rotateY(80deg) rotateZ(360deg); }
          50% { -webkit-transform: rotateX(200deg) rotateY(200deg) rotateZ(80deg) }
          100% { -webkit-transform: rotateX(80deg) rotateY(80deg) rotateZ(360deg); }
        }
        /*
        @-moz-keyframes rotatecube {
          0% { -moz-transform: rotateX(0deg) rotateY(360deg) rotateZ(90deg); }
          25% { -moz-transform: rotateX(90deg) rotateY(270deg) rotateZ(180deg); }
          50% { -moz-transform: rotateX(180deg) rotateY(180deg) rotateZ(0deg); }
          75% { -moz-transform: rotateX(270deg) rotateY(90deg) rotateZ(360deg); }
          100% { -moz-transform: rotateX(360deg) rotateY(0deg) rotateZ(270deg); }
        }
        */
        .front {
          background: rgba(255,0,0,.5);
        }

        .back {
          background: rgba(0,255,0,.5);
        }

        .right {
          background: rgba(0,0,255,.5);
        }

        .left {
          background: rgba(0,255,255,.5);
        }

        .top {
          background: rgba(255,0,255,.5);
        }

        .bottom {
          background: rgba(255,255,0,.5);
        }

        #cube .front  {
          -webkit-transform: rotateY(0deg) translateZ( 100px );
          -moz-transform: rotateY(0deg) translateZ(100px);
        }
        #cube .back {
          -webkit-transform: rotateX( 180deg ) translateZ( 100px );
          -moz-transform: rotateX( 180deg ) translateZ( 100px );
        }
        #cube .right  {
          -webkit-transform: rotateY(  90deg ) translateZ( 100px );
          -moz-transform: rotateY(  90deg ) translateZ( 100px );
        }
        #cube .left   {
          -webkit-transform: rotateY( -90deg ) translateZ( 100px );
          -moz-transform: rotateY( -90deg ) translateZ( 100px );
        }
        #cube .top    {
          -webkit-transform: rotateX(  90deg ) translateZ( 100px );
          -moz-transform: rotateX(  90deg ) translateZ( 100px );
        }
        #cube .bottom {
          -webkit-transform: rotateX( -90deg ) translateZ( 100px );
          -moz-transform: rotateX( -90deg ) translateZ( 100px );
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
            <div class="container">
                <div id="cube">
                <div class="front"></div>
                <div class="back"></div>
                <div class="right"></div>
                <div class="left"></div>
                <div class="top"></div>
                <div class="bottom"></div>
                </div>
            </div>
    `;
  }
}

window.customElements.define('cube-component', CubeComponent);
