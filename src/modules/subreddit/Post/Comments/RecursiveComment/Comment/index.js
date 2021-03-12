import { AuthorLink } from 'components/AuthorLink';
import { RelativeTimeLink } from 'components/RelativeTimeLink';
import { number, shape, string } from 'prop-types';
import { forwardRef, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

const Hidden = forwardRef((props, ref) => <span {...props} ref={ref} />);

Hidden.displayName = 'Hidden';

const StyledHidden = styled(Hidden)`
  display: none;
`;

const Spacer = styled.div`
  height: 0.5rem;
`;

const Meta = styled.div`
  font-size: 0.75rem;
`;

const Comment = ({ author, body_html, created_utc, id }) => {
  const ref = useRef();
  const commentId = `comment-${id}`;

  return (
    <Container id={commentId}>
      <StyledHidden dangerouslySetInnerHTML={{ __html: body_html }} ref={ref} />
      <Meta>
        <AuthorLink author={author} />{' '}
        <RelativeTimeLink
          secondsSinceEpoch={created_utc}
          to={`#${commentId}`}
        />
      </Meta>
      <Spacer />
      <span
        dangerouslySetInnerHTML={{
          __html: ref.current && ref.current.innerText,
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
});

Comment.propTypes = commentPropTypes.isRequired;

export { Comment, commentPropTypes as propTypes };
