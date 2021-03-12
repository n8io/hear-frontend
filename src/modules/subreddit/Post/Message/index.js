import { usePost } from 'hooks/usePost';
import styled from 'styled-components';
import { CommentsCounter } from './CommentsCounter';
import { OriginalPoster } from './OriginalPoster';

const Container = styled.section`
  background-color: var(--color-gray-300);
  border-radius: 0.5rem;
  display: grid;
  font-size: 0.85rem;
  padding: 1rem;
  row-gap: 1rem;
`;

const Message = () => {
  const { post } = usePost();

  const { selftext: tmpMessage = '' } = post;
  const message = tmpMessage.replace(/\n/giu, '<br/>');

  return (
    <Container title="Original post message">
      <OriginalPoster />
      <div dangerouslySetInnerHTML={{ __html: message }} />
      <CommentsCounter />
    </Container>
  );
};

export { Message };
