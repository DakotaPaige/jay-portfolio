import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Menu = (props) => {
  const { isOpen, closeMenu } = props;
  return (
    <Root
      style={{
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none',
      }}
    >
      <h1>Menu</h1>
    </Root>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  closeMenu: PropTypes.func,
};

const Root = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightGrey};
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.4s ease-out;
  z-index: 5;
  padding: ${vw(60)} ${vw(16)};
`;

export default Menu;
