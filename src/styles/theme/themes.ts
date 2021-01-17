import colors from './colors';
import fontWeights from './fontWeights';
import sizes from './sizes';

const lightTheme = {
  colors,
  fontWeights,
  sizes,
};

const darkTheme: Theme = {
  colors,
  fontWeights,
  sizes,
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
