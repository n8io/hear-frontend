import { number } from 'prop-types';
import styled from 'styled-components';

const Container = styled.span`
  font-family: Arial, sans-serif;
  font-size: 1.125rem;
`;

const { format } = Intl.NumberFormat('en', {
  maximumFractionDigits: 1,
  minimumFractionDigits: 0,
  notation: 'compact',
});

const Score = ({ score }) => <Container>{format(score)}</Container>;

Score.propTypes = {
  score: number.isRequired,
};

export { Score };
