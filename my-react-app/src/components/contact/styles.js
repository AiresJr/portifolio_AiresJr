import { styled } from "styled-components";

export const TotalDiv = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
  gap: 30px;
  h1 {
    color: var(--color-white);
    font-size: 36px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 600px;
  background-color: var(--color-white);
  gap: 100px;
  border: 1px solid var(--color-black);
  border-radius: 8px;
  p {
    width: 260px;
    height: 60px;
    font-size: 18px;
  }
`;
export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  a {
    font-size: 18px;
    color: var(--color-black);
  }
  a:hover {
    text-decoration: underline;
  }
  nav:hover {
    font-size: 18px;
    text-decoration: underline;
    cursor: pointer;
  }
`;
