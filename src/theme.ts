import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b636ff', // Purple from the template
    },
    secondary: {
      main: '#43485c', // Dark text color from template
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme; 