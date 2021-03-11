import { Link } from 'components/Link';
import { PageContent } from 'components/PageContent';
import { PageTitle } from 'components/PageTitle';
import { route } from 'constants/route';
import { useParams } from 'react-router-dom';
import { hydrateRoute } from 'utils/hydrateRoute';

const Post = () => {
  const { subredditId, postId } = useParams();

  return (
    <PageContent>
      <PageTitle
        title={`${hydrateRoute(route.SUBREDDIT, { subredditId })} [${postId}]`}
      >
        <Link to={hydrateRoute(route.SUBREDDIT, { subredditId })}>
          {hydrateRoute(route.SUBREDDIT, { subredditId })}
        </Link>
      </PageTitle>
      {hydrateRoute(route.SUBREDDIT_POSTS_POST, { postId, subredditId })}
    </PageContent>
  );
};

export { Post };
