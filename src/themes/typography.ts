import colors from "./colors";

export const fontSize = {
  text: {
    xxs: "6px",
    xs: "8px",
    sm: "10px",
    md: "12px",
    lg: "14px",
    xl: "16px",
    xxl: "20px",
    xxxl: "26px",
    xxxxl: "36px",
  },
};

export const fontFamily = {
  title: "Montserrat",
  text: "Poppins",
};

const typography = {
  h1: {
    fontSize: { desktop: fontSize.text.xxxxl, mobile: fontSize.text.xxl },
    fontFamily: { desktop: fontFamily.title, mobile: fontFamily.text },
    color: { desktop: colors.text.primary, mobile: colors.text.primary },
  },
  h2: {
    fontSize: { desktop: fontSize.text.xxxl, mobile: fontSize.text.lg },
    fontFamily: { desktop: fontFamily.text, mobile: fontFamily.text },
    color: { desktop: colors.text.secondary, mobile: colors.text.secondary },
  },
  h3: {
    fontSize: { desktop: fontSize.text.xl, mobile: fontSize.text.lg },
    fontFamily: { desktop: fontFamily.text, mobile: fontFamily.text },
    color: { desktop: colors.text.secondary, mobile: colors.text.secondary },
  },
  h4: {
    fontSize: { desktop: fontSize.text.md, mobile: fontSize.text.sm },
    fontFamily: { desktop: fontFamily.text, mobile: fontFamily.text },
    color: { desktop: colors.text.secondary, mobile: colors.text.secondary },
  },
  h5: {
    fontSize: { desktop: fontSize.text.sm, mobile: fontSize.text.sm },
    fontFamily: { desktop: fontFamily.text, mobile: fontFamily.text },
    color: { desktop: colors.text.secondary, mobile: colors.text.secondary },
  },
  paragraph: {
    fontSize: { desktop: fontSize.text.xs, mobile: fontSize.text.xs },
    fontFamily: { desktop: fontFamily.text, mobile: fontFamily.text },
    color: { desktop: colors.text.tertiary, mobile: colors.text.tertiary },
  },
  anchorHeader: {
    fontSize: { desktop: fontSize.text.xs, mobile: fontSize.text.sm },
    fontFamily: { desktop: fontFamily.text, mobile: fontFamily.text },
    color: { desktop: colors.text.primary, mobile: colors.text.primary },
  },
  anchorFooter: {
    fontSize: { desktop: fontSize.text.xs, mobile: fontSize.text.xs },
    fontFamily: { desktop: fontFamily.text, mobile: fontFamily.text },
    color: { desktop: colors.text.quarterly, mobile: colors.text.quarterly },
  },
};

export default typography;
