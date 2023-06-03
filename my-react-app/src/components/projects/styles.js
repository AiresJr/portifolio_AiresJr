import { styled } from "styled-components";

export const StyledDiv = styled.div`

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  .reveal {
    visibility: hidden;
  }
  img {
    width: 100%;
    height: 100%;
    max-height: 122px;
    max-width: 238px;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    color: #ffffff;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
  height: 100%;
  width: 60%;
  gap: 100px;
  margin-bottom: 50px;
  :hover {
    transform: scale3d(1.1, 1.1, 1);
    transition: 1s;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  background-color: #ffff;
  height: 255px;
  width: 100%;
  max-width: 385px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  border: solid 1px var(--color-black);
  border-radius: 3px;
  nav {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: var(--color-black);
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  a {
    color: var(--color-grey);
  }
  a:hover {
    text-decoration: underline;
    color: rgba(25, 0, 244, 0.726);
  }
`;
