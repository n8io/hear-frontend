import { usePost } from 'hooks/usePost';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { RecursiveComment } from './RecursiveComment';

const Container = styled.section`
  display: grid;
  grid-auto-columns: 1fr;
  margin: 0 1rem;
`;

const sortByCreatedDate = (isAscending) => (a, b) => {
  const { created_utc: aCreatedUtc = 0 } = a;
  const { created_utc: bCreatedUtc = 0 } = b;

  return isAscending ? bCreatedUtc - aCreatedUtc : aCreatedUtc - bCreatedUtc;
};

const Comments = ({ isAscending }) => {
  const { post } = usePost();
  const { comments = [] } = post;
  const sorted = [...comments].sort(sortByCreatedDate(isAscending));

  return (
    <Container title="Comments">
      {sorted.map(
        (comment) =>
          comment.depth === 0 && (
            <RecursiveComment
              comment={comment}
              comments={comments}
              key={comment.id}
            />
          )
      )}
    </Container>
  );
};

Comments.propTypes = {
  isAscending: bool,
};

export { Comments };
