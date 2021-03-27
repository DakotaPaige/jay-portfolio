import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import { vw, vwTablet, vwDesktop } from './utils';
import media from 'src/styles/media';

// global style for styled-components. this should contain any font-related styles or other global styles related to the app.
export default createGlobalStyle`
  body {
    font-family: ${theme.font.family};
    background-color: ${theme.color.lightGrey};
  }

  a,
  button {
    outline: none;
    border: none;
    background: transparent;
    text-decoration: none;
    color: ${theme.color.primary};
  }

  main {
    @media ${media.desktop} {
      position: absolute;
      top: ${vwDesktop(167)};
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .nav {
    font-family: ${theme.font.family};
    font-size: ${vw(14)};
    font-weight: 300;
    letter-spacing: ${vw(1.5)};
    color: black;
    @media ${media.tablet} {
      font-size: ${vwTablet(20)};
      letter-spacing: ${vwTablet(2.5)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(20)};
      letter-spacing: ${vwDesktop(2.5)};
    }
  }
`;
