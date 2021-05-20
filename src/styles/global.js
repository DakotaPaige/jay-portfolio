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

  h1 {
    font-family: ${theme.font.family};
    font-weight: 600;
    font-size: ${vw(24)};
    letter-spacing: ${vw(0.5)};
    text-transform: uppercase;
    color: black;
    @media ${media.tablet} {
      font-size: ${vwTablet(24)};
      letter-spacing: ${vwTablet(1)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(36)};
      letter-spacing: ${vwDesktop(1.2)};
    }
  }

  h3 {
    font-family: ${theme.font.family};
    font-weight: 600;
    font-size: ${vw(12)};
    letter-spacing: ${vw(0.3)};
    text-transform: uppercase;
    color: black;
    @media ${media.tablet} {
      font-size: ${vwTablet(14)};
      letter-spacing: ${vwTablet(0.5)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(14)};
      letter-spacing: ${vwDesktop(0.5)};
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

  p, a, li {
      font-family: ${theme.font.family};
      font-size: ${vw(14)};
      letter-spacing: ${vw(0.5)};
      font-weight: 300;
      letter-spacing: normal;
      color: black;
      @media ${media.tablet} {
        font-size: ${vwTablet(16)};
        letter-spacing: ${vwTablet(0.5)};
      }
      @media ${media.desktop} {
        font-size: ${vwDesktop(18)};
        letter-spacing: ${vwDesktop(0.5)};
      }
    &.disclaimer {
      font-family: ${theme.font.family};
      font-size: ${vw(10)};
      font-weight: 300;
      letter-spacing: normal;
      color: black;
      @media ${media.tablet} {
        font-size: ${vwTablet(11)};
      }
      @media ${media.desktop} {
        font-size: ${vwDesktop(11)};
      }
    }
  }

  .button {
    font-family: ${theme.font.family};
    font-size: ${vw(14)};
    font-weight: 600;
    line-height: normal;
    letter-spacing: ${vw(2)};
    text-transform: uppercase;
    @media ${media.tablet} {
      font-size: ${vwTablet(16)};
      letter-spacing: ${vwTablet(2)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(18)};
      letter-spacing: ${vwDesktop(2)};
    }
  }

  .form-label {
    font-family: ${theme.font.family};
    font-size: ${vw(14)};
    line-height: normal;
    font-weight: normal;
    letter-spacing: ${vw(0.5)};
    @media ${media.tablet} {
      font-size: ${vwTablet(16)};
      letter-spacing: ${vwTablet(0.5)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(18)};
      letter-spacing: ${vwDesktop(0.5)};
    }
  }

  .form-input {
    font-family: ${theme.font.family};
    font-size: ${vw(14)};
    line-height: normal;
    font-weight: normal;
    letter-spacing: ${vw(0.7)};
    @media ${media.tablet} {
      font-size: ${vwTablet(16)};
      letter-spacing: ${vwTablet(0.9)};
    }
    @media ${media.desktop} {
      font-size: ${vwDesktop(18)};
      letter-spacing: ${vwDesktop(1.2)};
    }
  }
`;
