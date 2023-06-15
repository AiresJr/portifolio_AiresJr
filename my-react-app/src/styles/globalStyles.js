import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
:root{
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-grey:  #161616CF;
    --color-grey-2: #827C7C;

}

*
{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }
  body,html{
    width: 100vw;
    height: 100vh;
 
  }
  body {
    overflow-x: hidden;
    background: #061645;
  }

  button{
    cursor: pointer;
    background: transparent;
    border: 0;
   }

`;
