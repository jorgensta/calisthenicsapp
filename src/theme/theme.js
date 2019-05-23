import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import yellow from "@material-ui/core/colors/yellow";

const rawTheme = createMuiTheme({
  palette: {
    black: {
      light: grey[100],
      main: grey[700],
      dark: "rgba(0,0,0,0.2)",
      semiDark: 'rgba(5,5,5,1)',
      semi: "#191919",

      opacity: `rgba(0, 0, 0, 0.6)`
    },
    green: {
      main: "#026736"
    },
    yellow: {
      light: yellow[200],
      main: yellow[500],
      dark: yellow[1000]
    },
    primary: {
      main: "#191919"
    },
    secondary: {
      main: "#ffff31",
    },
    action: {
      main: grey[100]
    }
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
    useNextVariants: true
  }
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontWeight: rawTheme.typography.fontWeightLight,
      fontSize: 36
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 24,
      fontWeight: rawTheme.typography.fontWeightLight
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14
    }
  }
};

export default theme;
