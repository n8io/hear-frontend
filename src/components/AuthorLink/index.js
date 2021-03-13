import { Link } from 'components/Link';
import { deleted } from 'constants/deleted';
import { route } from 'constants/route';
import { string } from 'prop-types';
import styled from 'styled-components';
import { hydrateRoute } from 'utils/hydrateRoute';

const StyledLink = styled(Link)`
  color: var(--color-blue-300, #3fa6ef);
`;

const AuthorLink = ({ author }) => {
  if (author === deleted.AUTHOR) {
    return author;
  }

  const profileLink = hydrateRoute(route.USER_PROFILE, { userId: author });

  return <StyledLink to={profileLink}>{author}</StyledLink>;
};

AuthorLink.propTypes = {
  author: string.isRequired,
};

export { AuthorLink };
