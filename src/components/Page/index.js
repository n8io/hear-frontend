import { Header, Layout, Main } from 'components/Layout';
import { useSnood } from 'hooks/useSnood';
import { node } from 'prop-types';
import { Helmet } from 'react-helmet-async';

const Page = ({ children }) => {
  const snood = useSnood();

  return (
    <Layout>
      <Helmet>
        <link href={snood} rel="icon" sizes="32x32" type="image/png" />
      </Helmet>
      <Header />
      <Main>{children}</Main>
    </Layout>
  );
};

Page.propTypes = {
  children: node.isRequired,
};

export { Page };
