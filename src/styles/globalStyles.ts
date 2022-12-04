import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      button {
        cursor: pointer;
      }

      ul , ol {
        list-style: none;
      }

      a {
        text-decoration: none;
      }
    
`
