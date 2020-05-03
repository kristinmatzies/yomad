import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    #root {
    display: grid;
    grid-template-rows: 52px auto;
    
 
}

    body {
        margin: 0;
        font-family: sans-serif;
        font-size: 18px;
        line-height: 1.4;
        height: 100vh;
        overflow-y: hidden;
    }

    input, button, textarea {
    font-size: 1em;
  }

  p {
      color: var( --primary);
  }


    :root {
    --primary: #352426;
    --secondary: #A17377;
    }
`
