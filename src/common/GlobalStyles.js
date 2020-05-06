import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    #root {
    display: grid;
    grid-template-rows: 48px auto 48px; 
    height: 100vh;
}

    body {
        margin: 0;
        font-family: sans-serif;
        font-size: 18px;
        line-height: 1.4;
        height: 100vh;
        overflow: hidden;  
    }

    input, button, textarea {
    font-size: 1em;
  }

  p {
      color: var( --primary);
  }

  main {
      overflow: hidden;
  }


    :root {
    --background: #FCF9F9; 
    --primary: #352426;
    --secondary: #A17377;
    --tertiary: #B79699;
    --quaternary: #D1B9BB;
    --cta: #476B64
    }
`
