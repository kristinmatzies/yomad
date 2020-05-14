import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

    html {
    height: 100%;
    }

    * {
        box-sizing: border-box;
    }

    #root {
    display: grid;
    grid-template-rows: 48px auto 52px; 
    height: 100%;
}

    body {
        margin: 0;
        font-family: sans-serif;
        font-size: 18px;
        line-height: 1.4;
        overflow: hidden;
        height: 100%;
    }

    input, textarea {
    font-size: 1em;
    font-family: sans-serif;
  }

  p {
      color: var(--primary);
  }


    :root {
    --background: #FCF9F9; 
    --primary: #352426;
    --secondary: #A17377;
    --tertiary: #B79699;
    --quaternary: #E7E2E3;
    --cta: #476B64;
    }
`
