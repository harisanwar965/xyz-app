import { DefaultTheme } from "react-native-paper";

/*  APP SPECIFIC COLORS  */
export const Colors = {
  // Common
  transparent: "rgba(0,0,0,0)",
  text: "#171717",
  tintGrey: "#777b",
  foreground: "#FFFFFF",
  background: "#450A0D",
  success: "#28a745",
  error: "#dc3545",
  border: "#E8EAED",
  primary: "teal",
  secondary: "green",
  grey: "#83899B",
};

/*  APP SPECIFIC FONTS  */
export const FontFamily = {
  Bold: "Lato-Bold",
  SemiBold: "Lato-SemiBold",
  Medium: "Lato-Medium",
  Regular: "Lato-Regular",
  Light: "Lato-Light",
};

/*  REACT NATIVE PAPER THEME  */
const fontConfig = {
  regular: { fontFamily: FontFamily.Regular },
  medium: { fontFamily: FontFamily.Medium },
  light: { fontFamily: FontFamily.Light },
  thin: { fontFamily: FontFamily.Light },
};

const colorsConfig = {
  ...DefaultTheme.colors,
  primary: Colors.primary,
  accent: Colors.secondary,
  text: Colors.text,
};

export const theme = {
  ...DefaultTheme,
  roundness: 6,
  fonts: fontConfig,
  colors: colorsConfig,
};
