import { styled } from "styled-components";

export const StyledIntroducion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 230px;
  width: 400px;
  margin-left: 230px;
  margin-top: 80px;
  gap: 5px;
  h1 {
    color: #ffffff;
    height: 100px;
    width: 215px;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    color: #ffffff;
    height: 100px;
    width: 400px;
  }
`;

export const StyledDivMedias = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 315px;
  margin-left: 115px;
  margin-top: 100px;
`;

export const StyledMedias = styled.div`
  display: flex;
  width: 156px;
  gap: 20px;
`;

export const StyledImg = styled.div`
  width: 340px;
`;
