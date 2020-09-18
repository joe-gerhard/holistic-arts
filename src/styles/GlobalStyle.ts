import { createGlobalStyle } from "styled-components";
import OpenSansRegular from "../fonts/Open_Sans/OpenSans-Regular.ttf";
import OpenSansBold from "../fonts/Open_Sans/OpenSans-Bold.ttf";
import LibreCaslonTextRegular from "../fonts/Libre_Caslon_Text/LibreCaslonText-Regular.ttf";
import LibreCaslonTextBold from "../fonts/Libre_Caslon_Text/LibreCaslonText-Bold.ttf";
import LibreCaslonTextItalic from "../fonts/Libre_Caslon_Text/LibreCaslonText-Italic.ttf";

export default createGlobalStyle`

@font-face {
    font-family: "Open Sans";
    font-weight: 400;
    src: url(${OpenSansRegular});
}

@font-face {
    font-family: "Open Sans";
    font-weight: 800;
    src: url(${OpenSansBold});
}

@font-face {
  font-family: "Libre Caslon Text";
  font-weight: 400;
  src: url(${LibreCaslonTextRegular});
}

@font-face {
  font-family: "Libre Caslon Text";
  font-weight: 800;
  src: url(${LibreCaslonTextBold});
}

@font-face {
  font-family: "Libre Caslon Text";
  font-style: italic;
  src: url(${LibreCaslonTextItalic});
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
`;
