import { styled } from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  height: 600px;
  width: 100%;
  background-color: #fffdfd;
  margin-top: 300px;

  h1 {
    font-weight: 700;
    font-size: 36px;
  }
  nav {
    font-weight: 600;
    font-size: 32px;
    color: var(--color-grey);
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  max-width: 910px;
  width: 100%;
`;

export const StyldLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
