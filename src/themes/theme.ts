import { DefaultTheme } from "styled-components";

export const colors = {
  purple: "#5d71ff",
  blue: "#16eaef",
  darkBlue: "#142a5b",
  white: "#fff",
  lightPurple: "#f0f2ff",
  darkGrey: "#6f798f",
  black: "#22262e",
  darkPurple: "#2c3352",
  lightGrey: "#8590ab",
};

export const light: DefaultTheme = {
  background: colors.white,
  foreground: colors.lightPurple,
  hightlightText: colors.darkBlue,
  regularText: colors.darkGrey,
  logoBackground: colors.darkBlue,
};

export const dark: DefaultTheme = {
  background: colors.black,
  foreground: colors.darkPurple,
  hightlightText: colors.lightPurple,
  regularText: colors.lightGrey,
  logoBackground: colors.lightPurple,
};
