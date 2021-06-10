import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Intro = () => {
  return (
    <Container>
      <Root>
        <Image />
        <Content>
          <h1>Welcome!</h1>
          <p>
            Hello, this is a little intro blurb about me that needs to be filled
            out. But this a general idea of the length it can be to introduce
            the website and give some good feels at the start.
          </p>
        </Content>
      </Root>
    </Container>
  );
};

const Root = styled.div`
  width: 100%;
  margin-top: ${vw(20)};
  h1 {
    margin-bottom: ${vw(10)};
  }
  @media ${media.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${vwTablet(40)};
    h1 {
      margin-bottom: ${vwTablet(15)};
    }
  }
  @media ${media.desktop} {
    justify-content: flex-start;
    width: 80%;
    margin: ${vwDesktop(40)} auto ${vwDesktop(120)};
    h1 {
      margin-bottom: ${vwDesktop(15)};
    }
  }
`;

const Image = styled.div`
  background-color: purple;
  width: 100%;
  height: ${vw(400)};
  margin-bottom: ${vw(20)};
  @media ${media.tablet} {
    width: 50%;
    height: ${vwTablet(400)};
    margin-bottom: 0;
  }
  @media ${media.desktop} {
    width: 50%;
    height: ${vwDesktop(500)};
    margin-right: ${vwDesktop(60)};
  }
`;

const Content = styled.div`
  @media ${media.tablet} {
    width: 45%;
  }
`;

export default Intro;
