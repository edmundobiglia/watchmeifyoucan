import styled from "styled-components";
import { transparentize, lighten } from "polished";

export const Container = styled.div`
  position: relative;
  margin-bottom: 60px;
  z-index: 1000;
  border-radius: 12px;
`;

export const SearchBox = styled.div`
  position: relative;

  input {
    flex: 1;
    width: 100%;
    border: none;
    padding: 18px;
    font-size: 15px;
    border-radius: 12px;
    background: ${({ theme }) => theme.foreground};
    color: ${({ theme }) => theme.hightlightText};
    font-weight: 300;
    padding-right: 57px;
    letter-spacing: 0.3px;
    transition: border 200ms;
    border: 1px solid transparent;

    &::placeholder {
      color: ${({ theme }) => transparentize("0.6", theme.hightlightText)};
      font-style: italic;
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.regularText};
    }
  }

  img {
    position: absolute;
    right: 18px;
    height: 24px;
    top: 50%;
    margin-top: -12px;
    cursor: pointer;
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  padding: 42px 30px 30px 30px;
  background: ${({ theme }) => lighten(0.3, theme.background)};
  width: 100%;
  top: 100%;
  margin-top: -12px;
  z-index: -1;
  border-radius: 0 0 12px 12px;
  box-shadow: 0px 0px 12px rgba(20, 42, 91, 0.2);
  transition: opacity 300ms, transform 300ms;
  min-height: 130px;
`;

export const NoResults = styled.div`
  color: ${({ theme }) => theme.regularText};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 27px;
    margin-bottom: 6px;
  }

  p {
    text-align: center;
  }
`;
