import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import Container from 'components/Container';
import Popup from './elements/Popup';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Gallery = (props) => {
  const { data } = props;

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const handleClose = () => {
    setIsPopupOpen(false);
  }

  const handleImage = (index) => {
    setActiveImage(index);
    setIsPopupOpen(true);
  }

  return (
    <Container>
      <Root>
        <Masonry options={{ gutter: 20 }}>
          {data.map((item, index) => (
            <Image key={index} onClick={() => handleImage(index)}>
              <img src={item.url} alt={item.caption} />
            </Image>
          ))}
        </Masonry>
        <Popup 
          active={isPopupOpen} 
          handleClose={handleClose} 
          data={data} 
          activeImage={activeImage}
        />
      </Root>
    </Container>
  );
};

Gallery.propTypes = {
  data: PropTypes.array,
};

const Root = styled.div`
  padding-top: ${vw(20)};
  @media ${media.tablet} {
    padding-top: ${vwTablet(40)};
  }
  @media ${media.desktop} {
    padding-top: 0;
  }
`;

const Image = styled.div`
  margin-bottom: ${vw(10)};
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  @media ${media.tablet} {
    width: ${vwTablet(334)};
    margin-bottom: ${vwTablet(20)};
  }
  @media ${media.desktop} {
    width: ${vwDesktop(420)};
    margin-bottom: ${vwDesktop(20)};
    position: relative;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      opacity: 0;
      transition: 0.4s ease;
    }
    &:hover::after {
      opacity: 1;
    }
  }
  @media (min-width: 1250px) {
    width: ${vwDesktop(425)};
  }
`;

export default Gallery;