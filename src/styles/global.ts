import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 16px Nunito, sans-serif;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.background};
  }

  button, input {
    font: 16px Roboto, sans-serif;
    font-weight: 300;
  }

  button {
    cursor: pointer;
  }
`;
