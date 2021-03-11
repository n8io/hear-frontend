import { GlobalStyles } from './GlobalStyles';
import { Providers } from './Providers';
import { Routes } from './Routes';

const App = () => (
  <Providers>
    <GlobalStyles />
    <Routes />
  </Providers>
);

export { App };
