import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import TopBar from './elements/TopBar';
import Menu from './elements/Menu';

import data from 'src/data/menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuData, setMenuData] = useState([...data])

  const categories = useSelector(state => state.photos.categories);

  useEffect(() => {
    // Grabbing extra categories from WP and adding them to the menu data
    if (Object.keys(categories).length > 0 && !(menuData.length > data.length)) {
      const copy = [...menuData];
      copy.unshift(...Object.keys(categories))
      setMenuData(copy);
    }
  }, [categories, menuData]);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Root>
      <TopBar isOpen={isOpen} handleMenu={handleMenu} closeMenu={closeMenu} />
      <Menu isOpen={isOpen} closeMenu={closeMenu} data={menuData}/>
    </Root>
  );
};

const Root = styled.div``;

export default Header;