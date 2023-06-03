import { styled } from "styled-components";

export const StyledDiv = styled.div`
  height: 500px;
  width: 100%;
`;

export const StyledIntroducion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-height: 230px;
  max-width: 400px;
  margin-left: 300px;
  margin-top: 80px;
  gap: 5px;
  h1 {
    color: #ffffff;
    height: 100px;
    width: 100%;
    max-width: 215px;
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
`;

export const StyledMedias = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 55px;
  margin-top: 110px;
  margin-left: 180px;
`;

export const StyledImg = styled.div`
  width: 100%;
  max-width: 340px;
`;
