import { route } from 'constants/route';
import { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const FALLBACK_VIEW_TYPE = 'trending';

const LazyPost = lazy(() =>
  import(
    /* webpackChunkName: "post`" */
    '../Post'
  ).then(({ Post }) => ({ default: Post }))
);

const LazyPosts = lazy(() =>
  import(
    /* webpackChunkName: "posts`" */
    '../Posts'
  ).then(({ Posts }) => ({ default: Posts }))
);
const Routing = () => (
  <Switch>
    <Route component={LazyPost} exact path={route.SUBREDDIT_POSTS_POST} />
    <Route component={LazyPosts} exact path={route.SUBREDDIT_POSTS_VIEW} />
    <Redirect to={`${route.SUBREDDIT_POSTS}/${FALLBACK_VIEW_TYPE}`} />
  </Switch>
);

export { Routing };
