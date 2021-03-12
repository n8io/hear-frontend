import { arrayOf } from 'prop-types';
import styled from 'styled-components';
import { Comment, propTypes as commentPropTypes } from './Comment';
import { VerticalRule } from './VerticalRule';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-content: start;
  margin-top: 0.5rem;
  row-gap: 0.25rem;
  width: 100%;
`;

const ChildComments = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1rem 1fr;
`;

const RecursiveComment = ({ comments, comment }) => {
  const childComments = comments.filter(
    ({ parent_id }) => parent_id === comment.id
  );

  if (childComments.length === 0) {
    return <Comment {...comment} />;
  }

  return (
    <Container>
      <Comment {...comment} />
      <ChildComments>
        <VerticalRule />
        <div>
          {childComments.map((comment) => (
            <RecursiveComment
              comment={comment}
              comments={comments}
              key={comment.id}
            />
          ))}
        </div>
      </ChildComments>
    </Container>
  );
};

RecursiveComment.propTypes = {
  comment: commentPropTypes.isRequired,
  comments: arrayOf(commentPropTypes.isRequired),
};

export { RecursiveComment };
