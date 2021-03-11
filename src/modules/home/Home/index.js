import { PageTitle } from 'components/PageTitle';
import { route } from 'constants/route';
import { Link } from 'react-router-dom';
import { hydrateRoute } from 'utils/hydrateRoute';

const paths = ['meme', 'technology', 'tesla', 'unpopularopinion'];

const toLink = (subredditId) => hydrateRoute(route.SUBREDDIT, { subredditId });

const Home = () => (
  <>
    <PageTitle title="Subreddits" />
    {paths.map((subredditId) => (
      <p key={subredditId}>
        <Link to={toLink(subredditId)}>{toLink(subredditId)}</Link>
      </p>
    ))}
  </>
);

export { Home };
