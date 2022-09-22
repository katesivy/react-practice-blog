import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        contained: {
            color: string;
            fontSize: string
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        contained?: {
            color?: string;
            fontSize?: string
      },
    }
  }

export const ButtonTheme = 
    createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    contained: {
                        fontSize: '0.875rem',
                        color: '#006d77'
                    },
                },
            },
        },
})


