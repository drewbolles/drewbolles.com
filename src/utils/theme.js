const theme = {
  baseSpacingUnit: 24,
  colors: {
    primary: '#2e7d32',
  },
  breakpoints: {
    sm: 576,
    m: 768,
    l: 992,
    xl: 1200,
  },
  columns: 12,
};

export const queries = {
  sm: `(min-width: ${theme.breakpoints.sm}px)`,
  m: `(min-width: ${theme.breakpoints.m}px)`,
  l: `(min-width: ${theme.breakpoints.l}px)`,
  xl: `(min-width: ${theme.breakpoints.xl}px)`,
};

export default theme;
