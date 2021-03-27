import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Menu = (props) => {
  const { isOpen, closeMenu, data } = props;
  const location = useLocation();

  return (
    <Root
      active={isOpen}
    >
      <Wrapper>
      {data.map((item, index) => (
        <StyledLink
          key={index}
          active={location.pathname.includes(item.to) || (!item.text && location.pathname.includes(item.toLowerCase()))}
          className='nav'
          to={item.to ? item.to : `/work/${item.toLowerCase()}`}
          onClick={closeMenu}
        >
          {item.text ? item.text : item}
        </StyledLink>
      ))}
      <Social>
        <p>social links here</p>
      </Social>
      </Wrapper>
      <Line />
    </Root>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  closeMenu: PropTypes.func,
  data: PropTypes.array,
};

const Root = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightGrey};
  opacity: ${props => props.active ? 1 : 0};
  pointer-events: ${props => props.active ? 'all' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.4s ease-out;
  z-index: 5;
  padding: ${vw(60)} ${vw(16)};
  a {
    margin-bottom: ${vw(12)};
    color: black;
  }
  @media ${media.tablet} {
    padding: ${vwTablet(60)} ${vwTablet(16)};
    a {
      margin-bottom: ${vwTablet(20)};
    }
  }
  @media ${media.desktop} {
    height: auto;
    top: ${vwDesktop(80)};
    opacity: 1;
    pointer-events: all;
    padding: ${vwDesktop(20)} ${vwDesktop(60)};
    a {
      margin-bottom: 0;
      margin-right: ${vwDesktop(20)};
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${media.desktop} {
    flex-direction: row;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${vw(40)};
  @media ${media.tablet} {
    margin-top: ${vwTablet(80)};
  }
  @media ${media.desktop} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  width: fit-content;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: ${`calc(100% + ${vw(3)})`};
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({theme}) => theme.color.spaceSparkle};
    transform: ${props => props.active ? 'scaleX(1)': 'scaleX(0)'};
    transition: 0.3s ease;
  }
  @media ${media.tablet} {
    &::after {
      top: ${`calc(100% + ${vwTablet(3)})`};
    }
  }
  @media ${media.desktop} {
    &::after {
      top: ${`calc(100% + ${vwDesktop(3)})`};
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

const Line = styled.div`
  display: none;
  @media ${media.desktop} {
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({theme}) => theme.color.spaceSparkle};
    margin-top: ${vwDesktop(20)};
  }
`;

export default Menu;
