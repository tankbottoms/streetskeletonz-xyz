// ----------------------------------------------------------------------

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ xs, sm, md, lg }) {
  return {
    "@media (min-width:0px)": {
      fontSize: pxToRem(xs),
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = "Poppins, sans-serif"; // Google Font
const FONT_SECONDARY = "Poppins, sans-serif"; // Local Font
// const FONT_SECONDARY = "Raleway, sans-serif"; // Local Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 900,
    lineHeight: '100px',
    color: '#fff',
    letterSpacing: '2px',
    fontSize: pxToRem(84),
    ...responsiveFontSizes({ xs: 40, sm: 32, md: 42, lg: 86 }),
  },
  h2: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 48 / 40,
    fontSize: pxToRem(40),
    letterSpacing: '2px',
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '46px',
    lineHeight: '50px',
    letterSpacing: '0.06em',
    ...responsiveFontSizes({ xs: 40, sm: 40, md: 40, lg: 40 }),
  },
  h3: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(30),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 30 }),
  },
  h4: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(25),
    ...responsiveFontSizes({ xs: 16, sm: 20, md: 24, lg: 25 }),
  },
  h5: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 500,
    color: '#fff',
    letterSpacing: '-0.05em',
    lineHeight: 25 / 20,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 14, md: 20, lg: 20 }),
  },
  h6: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 24 / 16,
    fontSize: pxToRem(16),
    letterSpacing: '1px',
    color: '#fff',
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 25 / 16,
    fontWeight: 400,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ xs: 16, md: 16, lg: 16 }),
  },
  body2: {
    lineHeight: 20 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 12,
    fontSize: pxToRem(12),
    textTransform: "capitalize",
  },
};

export default typography;
