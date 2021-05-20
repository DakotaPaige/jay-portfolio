import React from 'react';
import styled from 'styled-components';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Content = () => {
  return (
    <Root>
      <h1>Contact</h1>
      <Social
        href="https://www.instagram.com/jaypegsphoto/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require('src/assets/images/icons/instagram.svg')}
          alt="Instagram"
        />
        <p className="button">@jaypegsphoto</p>
      </Social>
      <Social href="mailto:jay@jaypegsphoto.com">
        <img src={require('src/assets/images/icons/email.svg')} alt="Email" />
        <p className="button">jay@jaypegsphoto.com</p>
      </Social>
      <Services>
        <h1>Services</h1>
        <p>
          I offer the following services, but also cater to a variety of ___ so
          please reach out if you don't see what you're looking for
        </p>
        <ul>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </Services>
    </Root>
  );
};

const Root = styled.div`
  margin-bottom: ${vw(40)};
  h1 {
    margin-bottom: ${vw(20)};
  }
  @media ${media.tablet} {
    margin-bottom: ${vwTablet(60)};
    h1 {
      margin-bottom: ${vwTablet(20)};
    }
  }
  @media ${media.desktop} {
    margin-bottom: 0;
    h1 {
      margin-bottom: ${vwDesktop(40)};
    }
  }
`;

const Services = styled.div`
  margin-top: ${vw(20)};
  p {
    margin-bottom: ${vw(12)};
  }
  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    &::before {
      content: '∙';
      display: flex;
      color: black;
      margin-right: ${vw(10)};
    }
  }
  @media ${media.tablet} {
    margin-top: ${vwTablet(40)};
    p {
      margin-bottom: ${vwTablet(12)};
    }
    li {
      &::before {
        margin-right: ${vwTablet(10)};
      }
    }
  }
  @media ${media.desktop} {
    margin-top: ${vwDesktop(40)};
    p {
      max-width: 80%;
      margin-bottom: ${vwDesktop(20)};
    }
    li {
      &::before {
        margin-right: ${vwDesktop(10)};
      }
    }
  }
`;

const Social = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: ${vw(10)};
  width: fit-content;
  &:last-of-type {
    margin-bottom: 0;
  }
  img {
    width: ${vw(20)};
    display: block;
  }
  p {
    margin-left: ${vw(10)};
  }
  @media ${media.tablet} {
    margin-bottom: ${vwTablet(10)};
    img {
      width: ${vwTablet(25)};
    }
  }
  @media ${media.desktop} {
    margin-bottom: ${vwDesktop(10)};
    img {
      width: ${vwDesktop(25)};
    }
    p {
      position: relative;
      &::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: black;
        position: absolute;
        top: ${`calc(100% + ${vwDesktop(4)})`};
        left: 0;
        transition: 0.4s ease;
        transform: scaleX(0);
        transform-origin: left;
      }
    }
    &:hover p::after {
      transform: scaleX(1);
    }
  }
`;

export default Content;
