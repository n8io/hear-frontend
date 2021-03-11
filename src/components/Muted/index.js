import { node } from 'prop-types';
import styled from 'styled-components';

const StyledSpan = styled.span`
  color: var(--color-gray-500, #b1b1b1);

  &:before {
    content: '/';
  }
`;

const Muted = ({ children }) => <StyledSpan>{children}</StyledSpan>;

Muted.propTypes = {
  children: node.isRequired,
};

export { Muted };
