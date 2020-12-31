import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
   box-sizing: border-box;
 }

 body{
   margin: 0;
   padding: 0;
   font-size: 62.5%;
  font-family: 'Raleway', sans-serif; }

  h1, h2, h3, h4, h5 {
    font-family: 'Kanit', sans-serif;
  }
`;
