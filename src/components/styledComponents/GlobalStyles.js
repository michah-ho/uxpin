import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    --pinline-grey: #e6e6e6;
    --light-grey: #777777;
    --button-blue: #006cff;
    --black: #373737;
    --disabled-grey: #c3c3c3;
    --font-size-base: 14px;
    --font-size-sm: 12px;
    --font-size-md: 18px;
    --font-size-lg: 24px;
    --font-size-xl: 36px;
    font-family: 'Lato', sans-serif;
  }
  * {
    box-sizing:border-box;
    font-family: 'Lato', sans-serif;
  }
  body {
    font-size: var(--font-size-base);
  }
  h1{
    font-size: var(--font-size-xl);
  }
  h3{
    font-size: var(--font-size-lg);
  }
  .span-button {
    &:hover{
      cursor:pointer;
    }
  }
`;

export default GlobalStyle;