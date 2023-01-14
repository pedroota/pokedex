import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    // Reset REM metrics
    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }

  li,
  a {
    list-style: none;
    text-decoration: none;
    color: inherit;
  }
`;
