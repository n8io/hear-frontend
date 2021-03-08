import { Layout, Main } from 'components/Layout';
import { node } from 'prop-types';

const Page = ({ children }) => (
  <Layout>
    <Main>{children}</Main>
  </Layout>
);

Page.propTypes = {
  children: node.isRequired,
};

export { Page };
