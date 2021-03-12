import { Link } from 'components/Link';
import { route } from 'constants/route';
import { string } from 'prop-types';
import styled from 'styled-components';
import { hydrateRoute } from 'utils/hydrateRoute';

const StyledLink = styled(Link)`
  color: var(--color-blue-300, #3fa6ef);
`;

const DELETED_AUTHOR = '[deleted]';

const AuthorLink = ({ author }) => {
  if (author === DELETED_AUTHOR) {
    return author;
  }

  const profileLink = hydrateRoute(route.USER_PROFILE, { userId: author });

  return <StyledLink to={profileLink}>{author}</StyledLink>;
};

AuthorLink.propTypes = {
  author: string.isRequired,
};

export { AuthorLink };
