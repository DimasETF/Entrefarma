import { createGlobalStyle } from "styled-components";
import { colors } from "../constants/colors";
export const GlobalStyle = createGlobalStyle`
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.white};
    color: ${colors.black};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }


::-webkit-scrollbar {
  width: 0.3rem;
}


::-webkit-scrollbar-track {
  background: ${colors.gray800};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${colors.green};
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${colors.blue};
}
  
  

  html {
    /* @media (min-width: 1920px) {
      font-size: 125%;
    }
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    } */
    scroll-behavior: smooth;
  }

  body, input, textarea, select, button{
  font: 400 1rem 'Roboto', sans-serif;
 } 

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
