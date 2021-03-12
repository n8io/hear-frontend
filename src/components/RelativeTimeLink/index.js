import { number, string } from 'prop-types';
import styled from 'styled-components';
import { Link } from '../Link';
import { RelativeTime } from '../RelativeTime';

const StyledLink = styled(Link)`
  color: var(--color-gray-500);

  &:hover {
    color: inherit;
  }
`;

const RelativeTimeLink = ({ secondsSinceEpoch, to }) => (
  <StyledLink to={to}>
    <RelativeTime secondsSinceEpoch={secondsSinceEpoch} />
  </StyledLink>
);

RelativeTimeLink.propTypes = {
  secondsSinceEpoch: number.isRequired,
  to: string.isRequired,
};

export { RelativeTimeLink };
