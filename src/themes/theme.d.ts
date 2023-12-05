interface Item<T> {
  [key: string]: T;
}

export interface Colors {
  white: string;
  black: string;
  text: Item<string>;
  surfaces: Item<string>;
}

export interface Spacings {
  main: Item<string>;
}

export interface Sizes {
  main: Item<string>;
}

export interface Typography {
  h1: Item<Item<string>>;
  h2: Item<Item<string>>;
  h3: Item<Item<string>>;
  h4: Item<Item<string>>;
  h5: Item<Item<string>>;
  paragraph: Item<Item<string>>;
  anchorHeader: Item<Item<string>>;
  anchorFooter: Item<Item<string>>;
}

export interface Breakpoints {
  desktop: Item<string>;
  mobile: Item<string>;
}

export interface FontStyleProperties {
  text: string;
}

export interface FontStyleSizes {
  text: Item<string>;
}

export interface FontWeightProperties {
  regular: string;
  medium: string;
  bold: string;
  extraBold: string;
}

export interface LineHeightSizes {
  text: Item<string>;
}

export interface Themes {
  colors: Colors;
  spacings: Spacings;
  sizes: Sizes;
  typography: Typography;
  breakpoints: Breakpoints;
  fontFamily: FontStyleProperties;
  fontSize: FontStyleSizes;
}
