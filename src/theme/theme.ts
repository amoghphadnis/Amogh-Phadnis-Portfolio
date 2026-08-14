import { createTheme, type ThemeOptions } from '@mui/material/styles';
import { tokens } from './tokens';

export type PaletteMode = 'dark' | 'light';

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    background: {
      default: mode === 'dark' ? tokens.colors.dark.background : tokens.colors.light.background,
      paper: mode === 'dark' ? tokens.colors.dark.surface : tokens.colors.light.surface,
    },
    text: {
      primary: mode === 'dark' ? tokens.colors.dark.text : tokens.colors.light.text,
      secondary: mode === 'dark' ? tokens.colors.dark.muted : tokens.colors.light.muted,
    },
    primary: {
      main: mode === 'dark' ? tokens.colors.dark.primary : tokens.colors.light.primary,
      contrastText: tokens.colors.accent.black,
    },
  },
  typography: {
    fontFamily: tokens.typography.fontFamily,
    h1: { ...tokens.typography.h1, lineHeight: 1.2 },
    h2: { ...tokens.typography.h2, lineHeight: 1.3 },
    h3: { ...tokens.typography.h3, lineHeight: 1.3 },
    h4: { ...tokens.typography.h4, lineHeight: 1.4 },
    body1: { ...tokens.typography.body, lineHeight: 1.6 },
    body2: { ...tokens.typography.small, lineHeight: 1.6 },
    button: { fontWeight: 600, textTransform: 'none' as const },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: '10px',
        },
        '::-webkit-scrollbar-track': {
          background: '#2c3f50',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#59ebcb',
          borderRadius: '6px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#ffffff',
        },
        body: {
          minHeight: '100vh',
          transition: `background-color ${tokens.motion.normal} ease`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.button,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.card,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius.chip,
        },
      },
    },
  },
});

export const createAppTheme = (mode: PaletteMode) => createTheme(getDesignTokens(mode));
