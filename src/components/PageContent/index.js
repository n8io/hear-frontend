import { node } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  row-gap: 0.5rem;
`;

const PageContent = ({ children }) => <Container>{children}</Container>;

PageContent.propTypes = {
  children: node.isRequired,
};

export { PageContent };
