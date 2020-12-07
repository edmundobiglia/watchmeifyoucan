import styled from "styled-components";

export const NoWatchList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 33px;
    margin-right: 21px;
    margin-bottom: 2px;
  }

  p {
    color: ${({ theme }) => theme.regularText};
    font-size: 16px;

    transition: color 200ms linear;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;

  button.filter {
    background: none;
    border: 0;
    color: ${({ theme }) => theme.regularText};
    padding: 3px 6px 3px 11px;
    border-radius: 3px;
    font-size: 16px;

    transition: color 200ms linear;

    &:not(:last-of-type) {
      margin-left: 15px;
    }

    &.active {
      position: relative;
      color: ${({ theme }) => theme.hightlightText};

      &:before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        top: 50%;
        margin-top: -6px;
        background: linear-gradient(
          90deg,
          rgba(93, 113, 255, 0.9) 0%,
          rgba(22, 234, 239, 0.9) 100%
        );
        left: 0;

        transition: background 200ms linear;
      }

      transition: color 200ms linear;
    }
  }

  button.sort {
    background: none;
    border: 0;
    width: 30px;
    height: 22px;
    margin-left: 26px;
  }
`;
