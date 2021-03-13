import { AuthorLink } from 'components/AuthorLink';
import { RelativeTimeLink } from 'components/RelativeTimeLink';
import { deleted } from 'constants/deleted';
import { bool, number, shape, string } from 'prop-types';
import { useRecoilState } from 'recoil';
import { atoms } from 'store';
import styled from 'styled-components';
import { DeleteButton } from './DeleteButton';
import { commentToHtml } from './utils/commentToHtml';

const Container = styled.div`
  display: grid;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

const Spacer = styled.div`
  height: 0.5rem;
`;

const Meta = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.75rem;
  gap: 0.25rem;
  justify-content: start;
`;

const Comment = ({ author, body_html, created_utc, id, isDeleted }) => {
  const [comments, setComments] = useRecoilState(atoms.POST_COMMENTS);
  const commentId = `comment-${id}`;

  const onDeleteClick = () => {
    const index = comments.findIndex(({ id: commentId }) => commentId === id);

    if (index === -1) return;

    const newComment = {
      ...comments[index],
      author: deleted.AUTHOR,
      body_html: deleted.COMMENT,
      isDeleted: true,
    };

    const newComments = [
      ...comments.slice(0, index),
      newComment,
      ...comments.slice(index + 1),
    ];

    setComments(newComments);
  };

  const html = commentToHtml(body_html);
  const hasCommentBeenDeleted = isDeleted || html === deleted.COMMENT;

  return (
    <Container
      data-html={html}
      data-is-deleted={hasCommentBeenDeleted}
      id={commentId}
    >
      <Meta>
        <AuthorLink author={author} />{' '}
        <RelativeTimeLink
          secondsSinceEpoch={created_utc}
          to={`#${commentId}`}
        />
        {!hasCommentBeenDeleted && <DeleteButton onDelete={onDeleteClick} />}
      </Meta>
      <Spacer />
      <span
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </Container>
  );
};

const commentPropTypes = shape({
  author: string.isRequired,
  body_html: string.isRequired,
  created_utc: number.isRequired,
  id: string.isRequired,
  isDeleted: bool,
});

Comment.propTypes = commentPropTypes.isRequired;

export { Comment, commentPropTypes as propTypes };
