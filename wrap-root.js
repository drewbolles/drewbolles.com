import React from 'react';

import theme from './src/utils/theme';
import { ThemeContext } from './src/utils/context';

export default ({ element }) => (
  <ThemeContext.Provider value={theme}>{element}</ThemeContext.Provider>
);
