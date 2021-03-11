import { lazy } from 'react';

const Lazy = lazy(() =>
  import(
    /* webpackChunkName: "notFound" */
    './NotFound'
  ).then(({ NotFound }) => ({ default: NotFound }))
);

export { Lazy as NotFound };
