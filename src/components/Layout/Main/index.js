import { Suspense } from 'components/Suspense';
import { node } from 'prop-types';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin: 1rem;

  @media screen and (min-width: 64rem) {
    max-width: 64rem;
    margin: 1rem auto;
  }
`;

const Main = ({ children }) => (
  <StyledMain>
    <Suspense>{children}</Suspense>
  </StyledMain>
);

Main.propTypes = {
  children: node.isRequired,
};

export { Main };
