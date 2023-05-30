import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  padding-left: 110px;
  padding-right: 110px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
  button {
    width: 159px;
    height: 49px;
    font-size: 32px;
    font-weight: 700;
    color: var(--color-white);
    
  }

  button,img{
    cursor: pointer;
  }
`;
