import { Provider as SnoodProvider } from 'hooks/useSnood';
import { node } from 'prop-types';
import { random } from 'utils/profileImage';

const Provider = ({ children }) => (
  <SnoodProvider value={random()}>{children}</SnoodProvider>
);

Provider.propTypes = {
  children: node.isRequired,
};

export { Provider };
