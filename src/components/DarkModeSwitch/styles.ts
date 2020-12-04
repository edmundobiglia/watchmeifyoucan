import styled from "styled-components";

export const Switch = styled.button`
  background-color: ${({ theme }) => theme.background};
  height: 19px;
  width: 38px;
  position: relative;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.hightlightText};
  box-sizing: content-box;

  transition: background-color 200ms linear;

  .dark-mode-indicator {
    background-color: ${({ theme }) => theme.hightlightText};
    border-radius: 50%;
    height: 19px;
    width: 19px;
    position: absolute;
    top: 0;
    left: 0;

    transition: transform 200ms linear, background-color 200ms linear;

    &.dark-mode-on {
      transform: translateX(19px);
    }
  }
`;
