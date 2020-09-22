import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = createGlobalStyle`
    ${reset};
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button {
        margin: 0;
        padding: 0;
        border: 0;
        /* font-size: 100%; */
        font: inherit;
        vertical-align: baseline;
        font-family: "Noto Sans KR", sans-serif;
        color: #303030;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        /* padding-top: ${(props) => (props.paddingTop ? '90px' : '0')} */
        height: 100%;
        margin : 0 auto;
        line-height: 1;
        color: #303030;
        font-size: 16px;
    }
    ol, ul, li {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    /*
    */
    button {
        background: none;
        border:0;
        border-radius: 7px;
        padding: 10px 15px;
    }
    a {
        text-decoration: none;
        color: #000;
        &:active {
            color: none;
        }
        &:hover {
            color: none;
        }
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
    }
    img {
        border: none;
    }
    
    /* input {
        border: 1px solid #ededed;
        border-radius: 10px;
        margin: 2px auto;
        padding: 13px;
        &::placeholder {
            font-size: 1em;
            color: #8d8d8d;
        }
    } */
    hr {
        border-color: #8d8d8d;
    }
`;
export default globalStyle;
