import { usePost } from 'hooks/usePost';
import styled from 'styled-components';
import { Score } from './Score';

const Container = styled.div`
  font-size: 1.5rem;
`;

const StyledH2 = styled.h2`
  display: inline;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Title = () => {
  const { post } = usePost();

  return (
    <Container>
      <Score score={post?.score} /> <StyledH2>{post?.title}</StyledH2>
    </Container>
  );
};

export { Title };
