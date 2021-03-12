import { node } from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const Provider = ({ children }) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
);

Provider.propTypes = {
  children: node.isRequired,
};

export { Provider };
