import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  height: 100%;
  justify-content: center;
  width: 0.5rem;

  button {
    &:focus {
      background-color: var(--color-orange-400);
      width: 0.5rem;
    }
  }

  &:hover,
  &:focus {
    button {
      background-color: var(--color-orange-400);
      width: 0.5rem;
    }
  }
`;

const LineButton = styled.button`
  background-color: var(--color-gray-200);
  height: 100%;
  transition: 50ms width ease-in-out, 200ms background-color ease-in-out;
  width: 0.125rem;
`;

const VerticalRule = () => (
  <Container>
    <LineButton />
  </Container>
);

export { VerticalRule };
