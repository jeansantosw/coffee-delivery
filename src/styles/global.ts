import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.colors['base-text']};
    background: ${(props) => props.theme.colors['base-white']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textearea, button {
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${(props) => props.theme.textSizes['text-regular-m']};
    font-weight: 400;
  }
`
