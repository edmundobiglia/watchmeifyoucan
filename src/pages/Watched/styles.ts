import styled from "styled-components";

import { colors } from "../../themes/theme";

export const Container = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 15px;

  h1 {
    color: ${colors.purple};
    margin-bottom: 30px;
  }
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${colors.red};
    font-size: 15px;
    font-style: italic;
  }

  img {
    width: 18px;
    margin-right: 9px;
  }
`;

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
  }
`;
