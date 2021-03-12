import { node, oneOf } from 'prop-types';
import styled from 'styled-components';

const StyledSpan = styled.span`
  ${({ level }) => `color: var(--color-gray-${level}00);`}
`;

const Muted = (props) => <StyledSpan {...props} />;

Muted.defaultProps = {
  level: 3,
};

Muted.propTypes = {
  children: node.isRequired,
  level: oneOf([1, 2, 3, 4, 5, 6, 7]),
};

export { Muted };
