import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Footer = () => {
  let date = new Date();
  return (
    <Container>
      <Root>
        <h3>Logo here</h3>
        <Flex>
          <Wrapper>
            <h3>Contact</h3>
            <p>
              <a href="mailto:jay@jaypegsphoto.com">Jay@jaypegsphoto.com</a>
            </p>
          </Wrapper>
          <Wrapper right>
            <h3>Social</h3>
            <a
              href="https://www.instagram.com/jaypegsphoto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                src={require('src/assets/images/icons/instagram.svg')}
                alt="Instagram"
              />
            </a>
          </Wrapper>
        </Flex>
        <p className="disclaimer">&copy; {date.getFullYear()} JayPegs Photo</p>
      </Root>
    </Container>
  );
};

const Root = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 0 ${vw(20)};
  h3 {
    margin-bottom: ${vw(5)};
  }
  @media ${media.tablet} {
    padding: 0 0 ${vwTablet(40)};
    h3 {
      margin-bottom: ${vwTablet(8)};
    }
  }
  @media ${media.desktop} {
    padding: 0 0 ${vwDesktop(40)};
    h3 {
      margin-bottom: ${vwDesktop(8)};
    }
  }
`;

const Wrapper = styled.div`
  margin-bottom: ${vw(20)};
  @media ${media.tablet} {
    text-align: ${(props) => (props.right ? 'right' : 'left')};
  }
  @media ${media.desktop} {
    p a {
      display: block;
      position: relative;
      &::after {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        top: ${`calc(100% + ${vwDesktop(2)})`};
        background-color: black;
        transform: scaleX(0);
        transition: 0.4s ease;
      }
      &:hover::after {
        transform: scaleX(1);
      }
    }
  }
`;

const Flex = styled.div`
  @media ${media.tablet} {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Icon = styled.img`
  width: ${vw(20)};
  @media ${media.tablet} {
    width: ${vwTablet(25)};
  }
  @media ${media.desktop} {
    width: ${vwDesktop(25)};
  }
`;

export default Footer;
