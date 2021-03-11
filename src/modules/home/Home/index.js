import { Link } from 'components/Link';
import { PageContent } from 'components/PageContent';
import { PageTitle } from 'components/PageTitle';
import { route } from 'constants/route';
import { hydrateRoute } from 'utils/hydrateRoute';

const paths = ['unpopularopinion'];

const toLink = (subredditId) => hydrateRoute(route.SUBREDDIT, { subredditId });

const Home = () => (
  <PageContent>
    <PageTitle title="My Subreddits" />
    {paths.map((subredditId) => (
      <p key={subredditId}>
        <Link to={toLink(subredditId)}>{toLink(subredditId)}</Link>
      </p>
    ))}
  </PageContent>
);

export { Home };
