import { Link } from 'components/Link';
import { PageContent } from 'components/PageContent';
import { PageTitle } from 'components/PageTitle';
import { route } from 'constants/route';
import { useParams } from 'react-router-dom';
import { hydrateRoute } from 'utils/hydrateRoute';

const Posts = () => {
  const { subredditId, viewType } = useParams();
  const baseParams = { subredditId, viewType };

  const postLink = hydrateRoute(route.SUBREDDIT_POSTS_POST, {
    ...baseParams,
    postId: 'abc123',
  });

  return (
    <PageContent>
      <PageTitle title={hydrateRoute(route.SUBREDDIT, { subredditId })} />
      <Link to={postLink}>{postLink}</Link>
    </PageContent>
  );
};

export { Posts };
