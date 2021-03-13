import { useRecoilValue } from 'recoil';
import { atoms } from 'store';
import styled from 'styled-components';
import { RecursiveComment } from './RecursiveComment';

const Container = styled.section`
  display: grid;
  grid-auto-columns: 1fr;
  margin: 0 1rem;
`;

const sortByCreatedDate = (isAscending) => (a, b) => {
  const { created_utc: aCreatedUtc } = a;
  const { created_utc: bCreatedUtc } = b;

  return isAscending ? aCreatedUtc - bCreatedUtc : bCreatedUtc - aCreatedUtc;
};

const Comments = () => {
  const isAscending = useRecoilValue(atoms.POST_COMMENTS_SORT_ORDER_ASC);
  const comments = useRecoilValue(atoms.POST_COMMENTS);
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

export { Comments };
