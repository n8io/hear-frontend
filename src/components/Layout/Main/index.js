import { node } from 'prop-types';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin: 1rem;
`;

const Main = ({ children }) => <StyledMain>{children}</StyledMain>;

Main.propTypes = {
  children: node.isRequired,
};

export { Main };
