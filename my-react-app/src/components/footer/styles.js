import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 270px;
  background: var(--color-black);
  color: var(--color-white);
  span{
    color: var( --color-grey-2)
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  gap: 25px;
  p {
    width: 220px;
    height: 60px;
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
    color: var(--color-white);
  }
  a:hover {
    text-decoration: underline;
  }
  nav:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
