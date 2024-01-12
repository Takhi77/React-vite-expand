import { createGlobalStyle } from "styled-components";
import BarricadaTTF from "./assets/fonts/BarricadaW01-Regular.ttf";
import MatterTTF from "./assets/fonts/Matter.ttf";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-gutter: stable;
}

#root {
    position: relative;
}

@font-face {
    font-family: 'BarricadaW01-Regular';
    src: url(${BarricadaTTF}) format('truetype');
    font-weight: 400;
    font-display: auto;
    font-style: normal;
}

@font-face {
    font-family: 'Matter';
    src: url(${MatterTTF}) format('truetype');
    font-display: auto;
    font-style: normal;
}
`;

export default GlobalStyle;
