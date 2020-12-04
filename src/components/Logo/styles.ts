import styled from "styled-components";

export const LogoSVG = styled.svg`
  .logo-background {
    fill: ${({ theme }) => theme.logoBackground};

    transition: fill 200ms linear;
  }

  .triangle {
    fill: ${({ theme }) => theme.background};

    transition: fill 200ms linear;
  }
`;
