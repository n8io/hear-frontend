import { ErrorBoundary } from 'components/ErrorBoundary';
import { GlobalStyles } from './GlobalStyles';
import { Providers } from './Providers';
import { Routes } from './Routes';

const App = () => (
  <ErrorBoundary>
    <Providers>
      <GlobalStyles />
      <Routes />
    </Providers>
  </ErrorBoundary>
);

export { App };
