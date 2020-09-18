export interface Theme {
  primary: string;
  secondary: string;
  ternary: string;
  highlight: string;
  gray: string;
  lightGray: string;
  light: string;
  dark: string;
}

export interface PropsWithTheme {
  theme: Theme;
}

const theme: Theme = {
  primary: "#591A66",
  secondary: "#F6F8E8",
  ternary: "#A9B9A2",
  highlight: "#497CAC",
  gray: "#666666",
  lightGray: "#E5E5E5",
  light: "#FFFFFF",
  dark: "#000000",
};

export default theme;
