import React from 'react';
import styled from 'styled-components';

import Page from 'components/Page';
import Container from 'components/Container';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const About = () => {
  return (
    <Page>
      <Container>
        <Root>
          <Image />
          <Wrapper>
            <h1>Hello!</h1>
            <p>
              Thank you so much for stopping by and since you asked, here’s a
              little about me.
            </p>
            <p>
              My name is Jay Simeone, the man behind the Jaypegsphoto lens. I am
              a professional photographer based in Vancouver, BC.
            </p>
            <p>
              I started my photography journey after I moved to Vancouver from
              London, UK. I quickly fell in love with the incredible beauty that
              surrounds this wonderful city I now call home. I wanted to capture
              every piece to keep forever, much like a visual diary. Quick phone
              pictures became sharp, well composed and vibrant photographs. It
              didn’t take me long to scratch that itch and buy my first DSLR.
            </p>
            <p>
              Jumping forward to today, I have built a huge passion for outdoor
              landscape photography. Combining this with my love of meeting and
              working with new people I can capture the most beautiful moments,
              emotions and memories in the most wonderful surroundings.
            </p>
          </Wrapper>
        </Root>
      </Container>
    </Page>
  );
};

const Root = styled.div`
  padding-top: ${vw(20)};
  h1 {
    margin-bottom: ${vw(20)};
  }
  p:not(:last-of-type) {
    margin-bottom: ${vw(10)};
  }
  @media ${media.tablet} {
    padding-top: ${vwTablet(40)};
    h1 {
      margin-bottom: ${vwTablet(20)};
    }
    p:not(:last-of-type) {
      margin-bottom: ${vwTablet(10)};
    }
  }
  @media ${media.desktop} {
    display: flex;
    justify-content: space-between;
    padding-top: 0;
    h1 {
      margin-bottom: ${vwDesktop(20)};
    }
    p:not(:last-of-type) {
      margin-bottom: ${vwDesktop(10)};
    }
  }
`;

const Image = styled.div`
  width: 100%;
  height: ${vw(400)};
  background-color: purple;
  margin-bottom: ${vw(20)};
  @media ${media.tablet} {
    width: 60%;
    height: ${vwTablet(500)};
    margin-bottom: ${vwTablet(40)};
  }
  @media ${media.desktop} {
    width: 40%;
    height: ${vwDesktop(600)};
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  @media ${media.tablet} {
    width: 80%;
  }
  @media ${media.desktop} {
    width: 50%;
    p {
      max-width: 75%;
    }
  }
`;

export default About;
