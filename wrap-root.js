import React from 'react';

import { ThemeContext } from './src/utils/context';

import theme from './src/utils/theme';

export default ({ element }) => (
  <ThemeContext.Provider value={theme}>{element}</ThemeContext.Provider>
);
