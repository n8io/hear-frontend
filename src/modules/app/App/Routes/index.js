import { Page } from 'components/Page';
import { route } from 'constants/route';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from 'modules/home';
import { NotFound } from 'modules/notFound';
import { Subreddit } from 'modules/subreddit';

const Routes = () => (
  <Router>
    <Page>
      <Switch>
        <Route component={Home} exact path={route.ROOT} />
        <Route component={Subreddit} path={route.SUBREDDIT} />
        <Route component={NotFound} path="*" />
      </Switch>
    </Page>
  </Router>
);

export { Routes };
