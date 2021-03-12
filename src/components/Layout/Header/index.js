import { Logo } from 'components/Logo';
import { route } from 'constants/route';
import { useSnood } from 'hooks/useSnood';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  background: var(--color-white, #fff);
  box-shadow: 0 1px 0.25rem var(--color-gray-300, #dcdcdc);
  column-gap: 0.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  position: sticky;
  top: 0;

  @media screen and (min-width: 64rem) {
    border-radius: 0 0 0.5rem 0.5rem;
    max-width: 64rem;
    margin: 0 auto;
  }
`;

const StyledImg = styled.img`
  @media screen and (min-width: 64rem) {
    border-radius: 0 0 0 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  height: 3rem;
`;

const Header = () => {
  const snood = useSnood();

  return (
    <StyledHeader>
      <StyledLink to={route.ROOT}>
        <StyledImg
          alt="Reddit Snood character"
          height={48}
          src={snood}
          width={48}
        />
      </StyledLink>
      <Logo height={24} />
    </StyledHeader>
  );
};

export { Header };
