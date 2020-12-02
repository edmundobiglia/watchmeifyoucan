import styled from "styled-components";

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
    background: ${({ theme }) => theme.foreground};
    border-radius: 12px;
    padding: 30px;
    padding-left: 60px;
    display: flex;
    flex-direction: column;
    margin-left: -30px;

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

  .watched-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
