import React from 'react';

import { ThemeContext } from './src/utils/context';

export default ({ element }) => (
  <ThemeContext.Provider>{element}</ThemeContext.Provider>
);
