import { createGlobalStyle } from 'styled-components'
import dimensions from './dimensions'
import colors from './colors'

const GlobalStyles = createGlobalStyle`
	html,
  body,
  #root {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }

  body {
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.5;
    color: ${colors.grey900};
    -webkit-font-smoothing: antialiased;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 14px;
    }

    * {
      box-sizing: border-box;
      font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

      &::selection {
        background: ${colors.blue500};
        color: white;
      }
		}
  }
  
  h1 {
    font-size: 2.8em;
    line-height: 1.45;
    font-weight: 800;

    @media(max-width:${dimensions.maxwidthTablet}px) {
      font-size: 2.25em;
    }

    @media(max-width:${dimensions.maxwidthMobile}px) {
      font-size: 2em;
    }
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.9em;
    line-height: 1.1;
  }

  h3 {
    line-height: 1.2;
    font-size: 1.5em;
  }

  h5 {
    margin-bottom: 1.45rem;
    font-weight: 500;
    line-height: 20px;
    font-size: 0.95em;
  }

  h6 {
    font-size: 0.9em;
    font-weight: 500;
    margin: 0;
  }

  p {
    line-height: 1.9;
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }
`

export { GlobalStyles }
