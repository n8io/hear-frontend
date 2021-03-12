import { Link } from 'components/Link';
import { Muted } from 'components/Muted';
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

  const pageTitle = hydrateRoute(route.SUBREDDIT, { subredditId });

  return (
    <PageContent>
      <PageTitle title={pageTitle}>
        {pageTitle}
        <Muted level={5}>
          {'/'}
          {viewType}
        </Muted>
      </PageTitle>
      <Link to={postLink}>{postLink}</Link>
    </PageContent>
  );
};

export { Posts };
