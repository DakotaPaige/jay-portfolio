import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Divide as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const TopBar = (props) => {
  const { isOpen, handleMenu, closeMenu } = props;
  return (
    <Root>
      <Link to="/" onClick={closeMenu}>
      <Logo
        src={require('src/assets/images/logos/jay-logo.png')}
        alt="JaypegsPhoto"
      />
      </Link>
      <Wrapper>
        <Hamburger toggled={isOpen} toggle={handleMenu} />
      </Wrapper>
    </Root>
  );
};

TopBar.propTypes = {
  isOpen: PropTypes.bool,
  handleMenu: PropTypes.func,
  closeMenu: PropTypes.func,
};

const Root = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${vw(60)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 ${vw(16)};
  z-index: 10;
  background-color: ${({theme}) => theme.color.lightGrey};
  @media ${media.tablet} {
    height: ${vwTablet(80)};
    padding: 0 ${vwTablet(30)};
  }
  @media ${media.desktop} {
    height: ${vwDesktop(80)};
    padding: 0 ${vwDesktop(60)};
  }
`;

const Logo = styled.img`
  width: ${vw(160)};
  height: auto;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media ${media.tablet} {
    width: ${vwTablet(300)};
  }
  @media ${media.desktop} {
    width: ${vwTablet(200)};
  }
`;

const Wrapper = styled.div`
  @media ${media.desktop} {
    display: none;
  }
`;

export default TopBar;
