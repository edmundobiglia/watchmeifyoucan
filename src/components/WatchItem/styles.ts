import styled from "styled-components";
import { lighten } from "polished";

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

      transition: color 200ms linear;
    }

    h4 {
      font-size: 15px;
      font-weight: 600;
      color: ${({ theme }) => theme.hightlightText};
      margin: 15px 0 3px 0;

      transition: color 200ms linear;
    }

    p {
      font-size: 16px;
      color: ${({ theme }) => theme.regularText};
      line-height: 1.5;

      transition: color 200ms linear;
    }

    small {
      color: ${({ theme }) => theme.regularText};
      font-size: 15px;

      transition: color 200ms linear;
    }
  }

  .watched-btn {
    position: absolute;
    top: 10px;
    right: 10px;
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

    transition: color 200ms linear;
  }
`;
