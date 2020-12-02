import styled from "styled-components";

export const AppHeader = styled.header`
  padding: 12px 15px;
  background: ${({ theme }) => theme.foreground};

  .wrapper {
    max-width: 842px;
    margin: 0 auto;
  }
`;
