import { PageTitle } from 'components/PageTitle';
import { route } from 'constants/route';
import { Link, useParams } from 'react-router-dom';
import { hydrateRoute } from 'utils/hydrateRoute';

const Posts = () => {
  const { subredditId, viewType } = useParams();
  const baseParams = { subredditId, viewType };
  const postLink = hydrateRoute(route.SUBREDDIT_POSTS_POST, {
    ...baseParams,
    postId: 'abc123',
  });

  return (
    <>
      <PageTitle title={hydrateRoute(route.SUBREDDIT, { subredditId })} />
      <p>
        <Link to={route.ROOT}>Home</Link>
      </p>
      Current route:&nbsp;
      {hydrateRoute(route.SUBREDDIT_POSTS_VIEW, baseParams)}
      <p>
        <Link to={postLink}>{postLink}</Link>
      </p>
    </>
  );
};

export { Posts };
