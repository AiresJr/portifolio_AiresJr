import { styled } from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  height: 500px;
  width: 100%;
  background-color: #061645;

  .reveal {
    visibility: hidden;
  }

  h1 {
    font-weight: 700;
    font-size: 36px;
    color: var(--color-white);
  }
  nav {
    font-weight: 600;
    font-size: 32px;
    color: var(--color-white);
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 910px;
  width: 100%;
  gap: 25px;
  :hover {
    transform: scale3d(1.1, 1.1, 1);
    transition: 1s;
  }
`;

export const StyldLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-white);
  border-radius: 8px;
  margin-top: 25px;
`;
