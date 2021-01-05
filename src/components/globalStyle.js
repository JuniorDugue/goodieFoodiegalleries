import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
   box-sizing: border-box;
 }

 body{
   margin: 0;
   padding: 0;
   font-size: 62.5%;
   font-family: 'Raleway', sans-serif;
   ${"" /* background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%); */}
   ${"" /* background-color: ${(props) => props.theme.body}; */}
   ${"" /* font-color: ${(props) => props.theme.fontColor}; */}
   }

  h1, h2, h3, h4, h5 {
    font-family: 'Kanit', sans-serif;
  }
`;

export const lightTheme = {
  // body: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
  body: "#fff",
  fontColor: "#434343",
  backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
};

export const darkTheme = {
  // body: "linear-gradient(to right, #434343 0%, black 100%)",
  body: "#000",
  fontColor: "#fdfbfb",
  backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)",
};
