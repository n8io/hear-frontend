import { route } from 'constants/route';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Post } from '../Post';
import { Posts } from '../Posts';

const Routing = () => (
  <Switch>
    <Route component={Post} exact path={route.SUBREDDIT_POSTS_POST} />
    <Route component={Posts} exact path={route.SUBREDDIT_POSTS_VIEW} />
    <Redirect to={`${route.SUBREDDIT_POSTS}/new`} />
  </Switch>
);

export { Routing };
