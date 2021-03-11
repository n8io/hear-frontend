import { PageTitle } from 'components/PageTitle';
import { route } from 'constants/route';
import { Link, useParams } from 'react-router-dom';
import { hydrateRoute } from 'utils/hydrateRoute';

const Post = () => {
  const { subredditId, postId } = useParams();

  return (
    <>
      <PageTitle
        title={`${hydrateRoute(route.SUBREDDIT, { subredditId })} [${postId}]`}
      >
        {hydrateRoute(route.SUBREDDIT, { subredditId })}
      </PageTitle>
      <p>
        <Link to={hydrateRoute(route.SUBREDDIT_POSTS, { subredditId })}>
          {`r/${subredditId}`}
        </Link>
      </p>
      Current route:&nbsp;
      {hydrateRoute(route.SUBREDDIT_POSTS_POST, { postId, subredditId })}
    </>
  );
};

export { Post };
