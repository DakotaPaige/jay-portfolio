import React, { useState } from 'react';
import styled from 'styled-components';

import TopBar from './elements/TopBar';
import Menu from './elements/Menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Root>
      <TopBar isOpen={isOpen} handleMenu={handleMenu} closeMenu={closeMenu} />
      <Menu isOpen={isOpen} closeMenu={closeMenu} />
    </Root>
  );
};

const Root = styled.div``;

export default Header;
