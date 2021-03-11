import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyles = createGlobalStyle`
  :root {
    ${colors}
  }

  html,
  body,
  #root {
    font-family: 'IBM Plex Sans', sans-serif;;
    font-size: 16px;
    min-height: 100vh;
    min-width: 100vw;
  }

  body {
    background: var(--color-gray-100, #f9f9f9);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul,ol {
    list-style: none;
  }
`;

export { GlobalStyles };
