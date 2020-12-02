import styled from "styled-components";

export const LogoSVG = styled.svg`
  .logo-background {
    fill: ${({ theme }) => theme.logoBackground};
  }

  .triangle {
    fill: ${({ theme }) => theme.background};
  }
`;
