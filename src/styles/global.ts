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
    background-color: ${({ theme }) => theme.background};
    transition: background-color 200ms linear;
  }

  button, input {
    font: 16px Roboto, sans-serif;
    font-weight: 300;
  }

  button {
    cursor: pointer;
  }

  /* Mount animations */

  .fade-in-down-enter {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  .fade-in-down-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 200ms, transform 200ms;
  }

  .fade-in-down-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .fade-in-down-exit-active {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 200ms, transform 200ms;
  }
`;
