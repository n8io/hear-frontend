import { usePost } from 'hooks/usePost';
import { MdModeComment } from 'react-icons/md';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  column-gap: 0.25rem;
  display: grid;
  font-weight: 500;
  grid-auto-flow: column;
  justify-content: start;
`;

const CommentsCounter = () => {
  const { post } = usePost();

  const { comments } = post;

  return (
    <Container>
      <MdModeComment alt="Comment icon" />
      <span>{comments.length} comments</span>
    </Container>
  );
};

export { CommentsCounter };
