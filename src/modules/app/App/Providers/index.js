import { node } from 'prop-types';
import { Provider as Helmet } from './Helmet';
import { Provider as ReactQuery } from './ReactQuery';
import { Provider as Recoil } from './Recoil';
import { Provider as Snood } from './Snood';

const Providers = ({ children }) => (
  <ReactQuery>
    <Recoil>
      <Helmet>
        <Snood>{children}</Snood>
      </Helmet>
    </Recoil>
  </ReactQuery>
);

Providers.propTypes = {
  children: node.isRequired,
};

export { Providers };
