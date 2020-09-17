import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
    font-family: "Open Sans";
    font-weight: 400;
    src: url('/fonts/Open_Sans/OpenSans-Regular.ttf');
}

@font-face {
    font-family: "Open Sans";
    font-weight: 800;
    src: url('/fonts/Open_Sans/OpenSans-Bold.ttf');
}

@font-face {
  font-family: "Libre Caslon Text";
  font-weight: 400;
  src: url('/fonts/Libre_Caslon_Text/LibreCaslonText-Regular.ttf');
}

@font-face {
  font-family: "Libre Caslon Text";
  font-weight: 800;
  src: url('/fonts/Libre_Caslon_Text/LibreCaslonText-Bold.ttf');
}

@font-face {
  font-family: "Libre Caslon Text";
  font-style: italic;
  src: url('/fonts/Libre_Caslon_Text/LibreCaslonText-Italic.ttf');
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
`;
