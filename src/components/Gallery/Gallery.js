import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { useSwipeable } from 'react-swipeable';

import Container from 'components/Container';
import Popup from './elements/Popup';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Gallery = (props) => {
  const { data } = props;

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const swiping = useSwipeable({
    onSwipedLeft: (e) => handleSwipe(e),
    onSwipedRight: (e) => handleSwipe(e),
  });

  const handleNext = useCallback(() => {
    if (activeImage === data.length - 1) {
      setActiveImage(0);
    } else {
      setActiveImage(activeImage + 1);
    }
  }, [activeImage, data.length]);

  const handlePrev = useCallback(() => {
    if (activeImage === 0) {
      setActiveImage(data.length - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  }, [activeImage, data.length]);

  const handleArrowClick = useCallback((e) => {
    if (e.key.toLowerCase() === 'arrowright' && isPopupOpen) {
      handleNext();
    } else if (e.key.toLowerCase() === 'arrowleft' && isPopupOpen) {
      handlePrev();
    }
  }, [handleNext, handlePrev, isPopupOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleArrowClick);
    return () => {
      document.removeEventListener('keydown', handleArrowClick);
    };
  }, [handleArrowClick]);

  const handleSwipe = (e) => {
    if (isPopupOpen) {
      if (e.dir.toLowerCase() === 'right') {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

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
          swiper={swiping}
          handlePrev={handlePrev}
          handleNext={handleNext}
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