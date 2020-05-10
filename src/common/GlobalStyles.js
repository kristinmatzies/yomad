import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    #root {
    display: grid;
    grid-template-rows: 48px 32px auto 48px; 
    height: 100vh;
}

    body {
        margin: 0;
        font-family: sans-serif;
        font-size: 18px;
        line-height: 1.4;
        overflow: hidden;
        height: 100vh;
    }

    input, textarea {
    font-size: 1em;
    font-family: sans-serif;
  }

  p {
      color: var(--primary);
  }

/*main {
    overflow: hidden;

  @media (max-height: 650px) {
    overflow: scroll;
  }
}*/

    :root {
    --background: #FCF9F9; 
    --primary: #352426;
    --secondary: #A17377;
    --tertiary: #B79699;
    --quaternary: #E7E2E3;
    --cta: #476B64
    }
`
