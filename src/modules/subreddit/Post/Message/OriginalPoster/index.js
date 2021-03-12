import { AuthorLink } from 'components/AuthorLink';
import { Muted } from 'components/Muted';
import { RelativeTime } from 'components/RelativeTime';
import { usePost } from 'hooks/usePost';
import styled from 'styled-components';

const Container = styled(Muted)`
  grid-auto-flow: column;
  justify-content: space-between;
`;

const OriginalPoster = () => {
  const { post } = usePost();

  return (
    <Container level={7}>
      Posted <RelativeTime secondsSinceEpoch={post.created_utc} /> by{' '}
      <AuthorLink author={post.author} />
    </Container>
  );
};

export { OriginalPoster };
