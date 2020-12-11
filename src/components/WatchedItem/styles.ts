import styled from "styled-components";
import { lighten } from "polished";

import { colors } from "../../themes/theme";

export const Item = styled.div`
  display: flex;
  position: relative;

  & + div {
    margin-top: 30px;
  }

  .poster {
    height: 270px;
    border-radius: 12px;
    filter: drop-shadow(0px 0px 12px rgba(20, 42, 91, 0.3));
  }

  .info {
    flex: 1;
    background-color: ${({ theme }) => theme.foreground};
    border-radius: 12px;
    padding: 30px;
    padding-left: 60px;
    display: flex;
    flex-direction: column;
    margin-left: -30px;

    transition: background-color 200ms linear;

    h3 {
      font-size: 21px;
      font-weight: 600;
      color: ${({ theme }) => theme.hightlightText};
    }

    h4 {
      font-size: 15px;
      font-weight: 600;
      color: ${({ theme }) => theme.hightlightText};
      margin: 15px 0 3px 0;
    }

    p {
      font-size: 16px;
      color: ${({ theme }) => theme.regularText};
      line-height: 1.5;
    }

    small {
      color: ${({ theme }) => theme.regularText};
      font-size: 15px;
    }
  }

  .actions {
    position: absolute;
    top: 12px;
    right: 15px;
    display: flex;
    align-items: center;

    button {
      background: none;
      border: 0;
    }

    img {
      margin-left: 12px;
      height: 21px;
    }
  }
`;

export const DummyPoster = styled.div`
  background-color: ${({ theme }) => lighten(0.6, theme.hightlightText)};
  height: 270px;
  width: 180px;
  position: relative;
  z-index: 20;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  transition: background-color 200ms linear;

  p {
    text-align: center;
    color: ${({ theme }) => theme.foreground};
    font-size: 15px;
  }
`;

export const Warning = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  div,
  button {
    color: ${colors.red};
    font-size: 15px;
    font-style: italic;
  }

  img {
    width: 18px;
    margin-right: 9px;
    margin-top: -3px;
  }

  button {
    background: none;
    padding: 3px 0;
    width: 36px;
    border: 0;
    margin: 0 3px;
    color: ${({ theme }) => theme.foreground};
    background: ${colors.red};
    border-radius: 6px;
    font-size: 14px;

    &:first-child {
      margin-left: 14px;
      color: ${colors.red};
      border: 1px solid ${colors.red};
      background: none;
    }
  }
`;
