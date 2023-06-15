import { styled } from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 875px;
  width: 100%;

  align-items: center;
`;

export const StyledInfos = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 500px;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
 
`;

export const StyledText = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 500px;
`;

export const StyledIntroducion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 50%;
  justify-content: center;

  p {
    color: #ffffff;
    height: 100px;
    width: 400px;
    font-size: 18px;
  }
`;

export const StyledDivMedias = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  align-items: center;
  height: 50%;
`;

export const StyledMedias = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 55px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.div`
  width: 100%;
  max-width: 340px;
`;
