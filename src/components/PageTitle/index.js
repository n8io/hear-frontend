import { node, string } from 'prop-types';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ children, title }) => (
  <>
    <Helmet>
      <title>Reddit :: {title}</title>
    </Helmet>
    <h1>{children ?? title}</h1>
  </>
);

PageTitle.propTypes = {
  children: node,
  title: string.isRequired,
};

export { PageTitle };
