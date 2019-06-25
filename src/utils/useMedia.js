import { useState, useEffect, useReducer } from 'react';

import { queries } from './theme';

export default media => {
  if (typeof window === 'undefined') return;
  const [matches, setMatches] = useState(window.matchMedia(media).matches);

  useEffect(() => {
    const handleResize = () => {
      setMatches(window.matchMedia(media).matches);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [media]);

  return matches;
};

export const useAllMedia = () => {
  if (typeof window === 'undefined') return;
  const initialState = Object.keys(queries).reduce((acc, curr) => {
    acc[curr] = false;
    return acc;
  }, {});

  const [state, setState] = useReducer(
    (state, nextState) => ({ ...state, ...nextState }),
    initialState,
  );

  useEffect(() => {
    const handleResize = () => {
      let nextState = {};
      Object.keys(queries).forEach(key => {
        const query = queries[key];
        nextState[key] = window.matchMedia(query).matches;
      });
      setState(nextState);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [queries]);

  return state;
};
