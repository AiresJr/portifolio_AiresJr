import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: var(--color-white);
  opacity: 0.7;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
  box-shadow: 0 8px 6px -6px #000;
  border: none;
  position: fixed;
  z-index: 1;

  h1 {
    width: 159px;
    height: 49px;
    font-size: 32px;
    font-weight: 700;
    color: #061645;
  }

  button,
  img {
    cursor: pointer;
  }

  a {
    cursor: pointer;
    font-weight: 500;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 600px;
  height: 50px;
  max-width: 100%;
  color: var(--color-black);
  font-size: 18px;
  font-weight: 500;
`;
