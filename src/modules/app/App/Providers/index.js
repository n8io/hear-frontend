import { node } from 'prop-types';
import { Provider as HelmetProvider } from './Helmet';
import { Provider as SnoodProvider } from './Snood';

const Providers = ({ children }) => (
  <HelmetProvider>
    <SnoodProvider>{children}</SnoodProvider>
  </HelmetProvider>
);

Providers.propTypes = {
  children: node.isRequired,
};

export { Providers };
