import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Import modern fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
  
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${props => props.theme.fonts.body};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: ${props => props.theme.fontWeights.bold};
    line-height: 1.2;
  }
  
  h1 {
    font-size: 2.5rem;
    
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 3.5rem;
    }
  }
  
  h2 {
    font-size: 2rem;
    
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 1.75rem;
    }
  }
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button {
    cursor: pointer;
  }
  
  /* Utilities */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  main {
    min-height: calc(100vh - 300px);
  }
`;

export default GlobalStyle;