import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    min-height: 100vh;
    min-width: 100vw;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export { GlobalStyles };
