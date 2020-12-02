import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div``;

export const SearchBox = styled.div`
  position: relative;
  margin-bottom: 60px;

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
      border-color: ${({ theme }) => theme.regularText};
    }
  }

  .search-icon {
    position: absolute;
    right: 18px;
    height: 24px;
    top: 50%;
    margin-top: -12px;
  }
`;

export const SearchResults = styled.div`
  position: absolute;
`;
