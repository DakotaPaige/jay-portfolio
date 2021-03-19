import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Divide as Hamburger } from 'hamburger-react';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const TopBar = (props) => {
  const { isOpen, handleMenu, closeMenu } = props;
  return (
    <Root>
      <Logo
        src={require('src/assets/images/logos/jay-logo.png')}
        alt="JaypegsPhoto"
      />
      <Hamburger toggled={isOpen} toggle={handleMenu} />
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
  @media ${media.tablet} {
    height: ${vwTablet(80)};
    padding: 0 ${vwTablet(30)};
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
`;

export default TopBar;
