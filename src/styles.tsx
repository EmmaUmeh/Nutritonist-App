import { createGlobalStyle } from "styled-components";


export const Globalstyling = createGlobalStyle`
    *{
      
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
    }

    body{
        
        font-family: 'Outfit', sans-serif;
    }

    img{
        width: 100%;
        pointer-events: none;
    }

    button{
    outline: none;
    border: none;
    font-family: 'Outfit', sans-serif;
    }
`