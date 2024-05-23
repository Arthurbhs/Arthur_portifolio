import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: "#830ba1",
      },
      secondary: {
        main: "#b2edd3",
      },
    },
    typography: {
        fontFamily: [
          // '-apple-system',
          'BlinkMacSystemFont',
         // '"Segoe UI"',
         // 'Roboto',
          //'"Helvetica Neue"',
          //'Arial',
          //'sans-serif',
          //'"Apple Color Emoji"',
         // '"Segoe UI Emoji"',
         // '"Segoe UI Symbol"',
        ].join(','),
      },
  });

  theme = responsiveFontSizes(theme);

  export default theme;