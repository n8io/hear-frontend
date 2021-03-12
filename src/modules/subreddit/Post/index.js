import { Link } from 'components/Link';
import { PageContent } from 'components/PageContent';
import { PageTitle } from 'components/PageTitle';
import { route } from 'constants/route';
import { usePost } from 'hooks/usePost';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { hydrateRoute } from 'utils/hydrateRoute';
import { Comments } from './Comments';
import { Message } from './Message';
import { Title } from './Title';

const Container = styled.div`
  background-color: var(--color-white, #fff);
  border-radius: 1rem;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
  display: grid;
  padding: 1rem;
`;

const Post = () => {
  const { subredditId } = useParams();
  const { isError, post } = usePost();

  if (isError) {
    return 'Sorry, but an error occurred';
  }

  return (
    <PageContent>
      <PageTitle
        title={`${hydrateRoute(route.SUBREDDIT, { subredditId })} - ${
          post?.title
        }`}
      >
        <Link to={hydrateRoute(route.SUBREDDIT, { subredditId })}>
          {hydrateRoute(route.SUBREDDIT, { subredditId })}
        </Link>
      </PageTitle>
      {post && (
        <>
          <Title />
          <Container>
            <Message />
            <Comments />
          </Container>
        </>
      )}
    </PageContent>
  );
};

export { Post };
