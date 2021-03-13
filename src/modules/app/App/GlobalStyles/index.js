import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyles = createGlobalStyle`
  :root {
    ${colors}
  }

  html,
  body,
  #root {
    font-family: 'IBM Plex Sans', sans-serif;
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

  a {
    color: var(--color-blue-300);
  }

  button {
    place-items: center;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.125rem;
    cursor: pointer;
    display: flex;
    margin: 0;
    padding: 0;
    transition: 200ms opacity ease-in;
  }
`;

export { GlobalStyles };
