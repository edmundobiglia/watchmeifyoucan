import styled from "styled-components";

export const AppHeader = styled.header`
  padding: 12px 15px 13px 15px;
  background-color: ${({ theme }) => theme.foreground};

  transition: background-color 200ms linear;

  .wrapper {
    max-width: 842px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin-top: -2px;
  }
`;
