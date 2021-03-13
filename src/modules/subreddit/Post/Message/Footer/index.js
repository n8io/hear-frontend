import styled from 'styled-components';
import { CommentsCounter } from './CommentsCounter';
import { SortOrder } from './SortOrder';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = () => (
  <Container>
    <CommentsCounter />
    <SortOrder />
  </Container>
);

export { Footer };
