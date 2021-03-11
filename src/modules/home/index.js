import { lazy } from 'react';

const Lazy = lazy(() =>
  import(
    /* webpackChunkName: "home" */
    './Home'
  ).then(({ Home }) => ({ default: Home }))
);

export { Lazy as Home };
