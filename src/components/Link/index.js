import { Link as RrdLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(RrdLink)`
  color: var(--color-black, #000);
  text-decoration: none;

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

const Link = (props) => <StyledLink {...props} />;

export { Link };
