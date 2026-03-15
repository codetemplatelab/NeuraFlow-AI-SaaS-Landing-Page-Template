import { createTheme } from '@mui/material/styles'

export const buildMuiTheme = (mode = 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#3b82f6',
      },
      secondary: {
        main: '#34f7a1',
      },
      background: {
        default: mode === 'dark' ? '#0b0617' : '#f7f5ff',
        paper: mode === 'dark' ? '#141026' : '#ffffff',
      },
    },
    shape: {
      borderRadius: 18,
    },
    typography: {
      fontFamily: ['Space Grotesk', 'Orbitron', 'system-ui', 'sans-serif'].join(
        ',',
      ),
      h1: {
        fontFamily: 'Orbitron, Space Grotesk, system-ui, sans-serif',
        fontWeight: 600,
      },
      h2: {
        fontFamily: 'Orbitron, Space Grotesk, system-ui, sans-serif',
        fontWeight: 600,
      },
    },
  })
