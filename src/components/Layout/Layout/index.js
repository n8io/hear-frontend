import { node } from 'prop-types';

const Layout = ({ children }) => <div>{children}</div>;

Layout.propTypes = {
  children: node.isRequired,
};

export { Layout };
