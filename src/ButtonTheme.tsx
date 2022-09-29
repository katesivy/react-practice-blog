import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        contained: {
            color: string;
            fontSize: string
      };
      outlined: {
            fontSize: string
      }
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        contained?: {
            color?: string;
            fontSize?: string
      },
      outlined?: {
            fontSize?: string
      }
    }
  }

export const ButtonTheme = 
    createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    contained: {
                        fontSize: '.975rem',
                        // color: '#e5989b'
                        color: 'danger'
                    },
                    outlined: {
                        fontSize: '.875rem'
                    }
                },
            },
        },
})


