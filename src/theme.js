// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#65FF00',
        },
        secondary: {
            main: '#65FFFF',
        },
    },
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
            // '-apple-system',
            // 'BlinkMacSystemFont',
            // '"Segoe UI"',
            // 'Roboto',
            // '"Helvetica Neue"',
            // 'Arial',
            // 'sans-serif',
            // '"Apple Color Emoji"',
            // '"Segoe UI Emoji"',
            // '"Segoe UI Symbol"',
        ].join(','),
    }
});

export default theme; // Certifique-se de que está exportando corretamente
