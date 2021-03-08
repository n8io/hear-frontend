import { route } from 'constants/route';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Subreddit } from 'modules/subreddit';

const Routes = () => (
  <Router>
    <Switch>
      <Route component={Subreddit} exact path={route.SUBREDDIT} />
      <Redirect to={route.SUBREDDIT} />
    </Switch>
  </Router>
);

export { Routes };
