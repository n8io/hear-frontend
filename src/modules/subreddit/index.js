import { lazy } from 'react';

const Lazy = lazy(() =>
  import(
    /* webpackChunkName: "subreddit" */
    './Routing'
  ).then(({ Routing }) => ({ default: Routing }))
);

export { Lazy as Subreddit };
