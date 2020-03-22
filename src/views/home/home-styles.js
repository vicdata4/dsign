import { css } from 'lit-element';

export const styles = css`
    :host {
        --header-height: 120px;
        --nav-height: 50px;
        --header-nav-height: calc(var(--header-height) + var(--nav-height));
        --main-height: calc(100% - var(--header-nav-height));
        --technologies-height: auto;
        --information-height: auto;
        --footer-height: auto;

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
        overflow: hidden;
        cursor: pointer;
    }

    .menu-icon {
        font-size: 40px;
        color: #716a6f;
        transition: transform 1s;
    }

    .menu-icon.rotate {
        transform: rotate(180deg);
    }

    .nav-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: var(--header-nav-height);

        width: 100%;
        height: 0;

        margin: 0;
        padding: 0;

        background-color: rgba(0,0,0,.9);
        overflow: hidden;
        list-style: none;
        z-index: 1;
    }


    .opened {
        height: var(--main-height);
    }

    .closed {
        height: 0;
    }
    .nav-list.opened, .nav-list.closed {
        transition: height 1s;
    }

    .nav-list > li {
        margin: 20px 0;
    }

    .nav-link {
        text-decoration: none;
        color: #fff;
    }

    footer {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 30px 40px;
        background-color: var(--header-background);
    }

    .footer-list {
        color: #fff;
        list-style: none;
        margin: 0;
        padding: 0;
        margin: 0 20px;
    }

    .footer-list > li {
        margin: 5px 0;
    }

    .footer-link {
        color: #fff;
        text-decoration: none;
    }

    .footer-link.title {
        color: #f9ba02;
        margin: 15px 0;
    }

    .footer-line {
        width: 100%;
        text-align: center;
        padding: 60px 0px 40px 0px;
    }

    .footer-line > a {
        margin: 0 20px;
    }

    .github_link {
        text-align: center;
    }

    @media (min-width: 414px) {
        .card-text {
            font-size: 16px;
        }

        .info-text {
            font-size: 18px;
        }
    }

    @media (min-width: 540px) {
        footer {
            justify-content: space-around;
        }
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

        .nav-list.opened {
            transition: unset;
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

        footer {
            padding: 30px 100px;
        }
    }

    @media (min-width: 1136px) {
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

        footer {
            padding: 30px 200px;
        }
    }
`;