import React from 'react';

import { ThemeContext } from './context';

export default WrappedComponent => {
  class ComponentWithTheme extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {theme => <WrappedComponent {...this.props} theme={theme} />}
        </ThemeContext.Consumer>
      );
    }
  }
  return ComponentWithTheme;
};
