import { createGlobalStyle } from "styled-components";

import OpenSansRegularEot from "../fonts/open-sans-v18-latin-regular.eot";
import OpenSansRegularWoff2 from "../fonts/open-sans-v18-latin-regular.woff2";
import OpenSansRegularWoff from "../fonts/open-sans-v18-latin-regular.woff";
import OpenSansRegularTtf from "../fonts/open-sans-v18-latin-regular.ttf";
import OpenSansRegularSvg from "../fonts/open-sans-v18-latin-regular.svg";
import OpenSansBoldEot from "../fonts/open-sans-v18-latin-700.eot";
import OpenSansBoldWoff2 from "../fonts/open-sans-v18-latin-700.woff2";
import OpenSansBoldWoff from "../fonts/open-sans-v18-latin-700.woff";
import OpenSansBoldTtf from "../fonts/open-sans-v18-latin-700.ttf";
import OpenSansBoldSvg from "../fonts/open-sans-v18-latin-700.svg";

import LibreCaslonTextRegularEot from "../fonts/libre-caslon-text-v2-latin-regular.eot";
import LibreCaslonTextRegularWoff2 from "../fonts/libre-caslon-text-v2-latin-regular.woff2";
import LibreCaslonTextRegularWoff from "../fonts/libre-caslon-text-v2-latin-regular.woff";
import LibreCaslonTextRegularTtf from "../fonts/libre-caslon-text-v2-latin-regular.ttf";
import LibreCaslonTextRegularSvg from "../fonts/libre-caslon-text-v2-latin-regular.svg";
import LibreCaslonTextBoldEot from "../fonts/libre-caslon-text-v2-latin-700.eot";
import LibreCaslonTextBoldWoff2 from "../fonts/libre-caslon-text-v2-latin-700.woff2";
import LibreCaslonTextBoldWoff from "../fonts/libre-caslon-text-v2-latin-700.woff";
import LibreCaslonTextBoldTtf from "../fonts/libre-caslon-text-v2-latin-700.ttf";
import LibreCaslonTextBoldSvg from "../fonts/libre-caslon-text-v2-latin-700.svg";
import LibreCaslonTextItalicEot from "../fonts/libre-caslon-text-v2-latin-italic.eot";
import LibreCaslonTextItalicWoff2 from "../fonts/libre-caslon-text-v2-latin-italic.woff2";
import LibreCaslonTextItalicWoff from "../fonts/libre-caslon-text-v2-latin-italic.woff";
import LibreCaslonTextItalicTtf from "../fonts/libre-caslon-text-v2-latin-italic.ttf";
import LibreCaslonTextItalicSvg from "../fonts/libre-caslon-text-v2-latin-italic.svg";

import theme from "./theme";

export default createGlobalStyle`
/* open-sans-regular - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url(${OpenSansRegularEot}); /* IE9 Compat Modes */
  src: local('Open Sans Regular'), local('OpenSans-Regular'),
       url(${OpenSansRegularWoff2}) format('woff2'), /* Super Modern Browsers */
       url(${OpenSansRegularWoff}) format('woff'), /* Modern Browsers */
       url(${OpenSansRegularTtf}) format('truetype'), /* Safari, Android, iOS */
       url(${OpenSansRegularSvg}) format('svg'); /* Legacy iOS */
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: url(${OpenSansBoldEot}); /* IE9 Compat Modes */
  src: local('Open Sans Bold'), local('OpenSans-Bold'),
       url(${OpenSansBoldWoff2}) format('woff2'), /* Super Modern Browsers */
       url(${OpenSansBoldWoff}) format('woff'), /* Modern Browsers */
       url(${OpenSansBoldTtf}) format('truetype'), /* Safari, Android, iOS */
       url(${OpenSansBoldSvg}) format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Libre Caslon Text';
  font-style: normal;
  font-weight: 400;
  src: url(${LibreCaslonTextRegularEot}); /* IE9 Compat Modes */
  src: local('Libre Caslon Text Regular'), local('LibreCaslonText-Regular'),
       url(${LibreCaslonTextRegularWoff2}) format('woff2'), /* Super Modern Browsers */
       url(${LibreCaslonTextRegularWoff}) format('woff'), /* Modern Browsers */
       url(${LibreCaslonTextRegularTtf}) format('truetype'), /* Safari, Android, iOS */
       url(${LibreCaslonTextRegularSvg}) format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Libre Caslon Text';
  font-style: normal;
  font-weight: 700;
  src: url(${LibreCaslonTextBoldEot}); /* IE9 Compat Modes */
  src: local('Libre Caslon Text Bold'), local('LibreCaslonText-Bold'),
       url(${LibreCaslonTextBoldWoff2}) format('woff2'), /* Super Modern Browsers */
       url(${LibreCaslonTextBoldWoff}) format('woff'), /* Modern Browsers */
       url(${LibreCaslonTextBoldTtf}) format('truetype'), /* Safari, Android, iOS */
       url(${LibreCaslonTextBoldSvg}) format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Libre Caslon Text';
  font-style: italic;
  font-weight: 400;
  src: url(${LibreCaslonTextItalicEot}); /* IE9 Compat Modes */
  src: local('Libre Caslon Text Italic'), local('LibreCaslonText-Italic'),
       url(${LibreCaslonTextItalicWoff2}) format('woff2'), /* Super Modern Browsers */
       url(${LibreCaslonTextItalicWoff}) format('woff'), /* Modern Browsers */
       url(${LibreCaslonTextItalicTtf}) format('truetype'), /* Safari, Android, iOS */
       url(${LibreCaslonTextItalicSvg}) format('svg'); /* Legacy iOS */
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    user-select: none;
}

html {
  background: ${theme.secondary};
}
`;
