import { createTheme } from '@mui/material/styles';

const buttonTheme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: 'rgb(46, 3, 132)',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: 'rgb(115, 171, 120)',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#FFFFFF',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 20,
    fontFamily: [
      'Big Shoulders Display',
      'cursive',
    ].join(','),
  },
});

export default buttonTheme;