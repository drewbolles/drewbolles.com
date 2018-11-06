import React from 'react';
import { MediaQueryProvider } from 'react-media-query-hoc';
import { ThemeContext } from './src/utils/context';
import theme from './src/utils/theme';

const queries = {
  sm: `(min-width: ${theme.breakpoints.sm}px)`,
  m: `(min-width: ${theme.breakpoints.m}px)`,
  l: `(min-width: ${theme.breakpoints.l}px)`,
  xl: `(min-width: ${theme.breakpoints.xl}px)`,
};

export default ({ element }) => (
  <ThemeContext.Provider value={theme}>
    <MediaQueryProvider queries={queries}>{element}</MediaQueryProvider>
  </ThemeContext.Provider>
);
