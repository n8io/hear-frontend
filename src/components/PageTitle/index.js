import { node, string } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 0.75rem;
`;

const PageTitle = ({ children, title }) => (
  <>
    <Helmet>
      <title>Reddit :: {title}</title>
    </Helmet>
    <StyledH1>{children ?? title}</StyledH1>
  </>
);

PageTitle.propTypes = {
  children: node,
  title: string.isRequired,
};

export { PageTitle };
