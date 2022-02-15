import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(241,152,40)'
    },
    secondary: {
      main: 'rgb(166,255,226)'
    }
  },
  spacing: 10,
  typography: {
    h4: {
      fontSize: 40
    }
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          borderRadius: 0
        }
      }
    }
  }
});
