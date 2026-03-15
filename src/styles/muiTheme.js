import { createTheme } from '@mui/material/styles'

export const buildMuiTheme = (mode = 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#5a60ff',
      },
      secondary: {
        main: '#73a0ff',
      },
      background: {
        default: mode === 'dark' ? '#0b0d17' : '#f8fafc',
        paper: mode === 'dark' ? '#11162a' : '#ffffff',
      },
    },
    shape: {
      borderRadius: 18,
    },
    typography: {
      fontFamily: ['Inter', 'Poppins', 'system-ui', 'sans-serif'].join(','),
      h1: {
        fontFamily: 'Poppins, Inter, system-ui, sans-serif',
        fontWeight: 600,
      },
      h2: {
        fontFamily: 'Poppins, Inter, system-ui, sans-serif',
        fontWeight: 600,
      },
    },
  })

