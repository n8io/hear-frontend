import { node } from 'prop-types';
import { Provider as Helmet } from './Helmet';
import { Provider as Recoil } from './Recoil';
import { Provider as Snood } from './Snood';

const Providers = ({ children }) => (
  <Recoil>
    <Helmet>
      <Snood>{children}</Snood>
    </Helmet>
  </Recoil>
);

Providers.propTypes = {
  children: node.isRequired,
};

export { Providers };
