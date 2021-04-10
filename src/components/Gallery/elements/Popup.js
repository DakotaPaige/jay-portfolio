import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Popup = (props) => {
  const { data, active, handleClose, activeImage, handleNext, handlePrev, swiper} = props;
  return (
    <Root 
      style={{ 
        opacity: active ? 1 : 0, 
        pointerEvents: active ? 'all' : 'none' 
      }}
    >
      <Close 
        src={require('src/assets/images/icons/close-icon.svg')} 
        alt="Close" 
        onClick={handleClose}
      />
      <Wrapper {...swiper}>
        {data.map((item, index) => (
          <Image key={index} style={{ opacity: activeImage === index ? 1 : 0 }}>
            {console.log(item)}
            <img src={item.url} alt={item.mainTitle} />
          </Image>
        ))}
      </Wrapper>
      <Arrows>
          <Arrow 
            src={require('src/assets/images/icons/right-arrow.svg')} 
            alt="Previous" 
            left 
            onClick={handlePrev}/>
          <Arrow 
            src={require('src/assets/images/icons/right-arrow.svg')} 
            alt="Next" 
            onClick={handleNext}
          />
      </Arrows>
    </Root>
  );
};

Popup.propTypes = {
  data: PropTypes.array,
  active: PropTypes.bool,
  handleClose: PropTypes.func,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  activeImage: PropTypes.number,
  swiper: PropTypes.object,
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({theme}) => theme.color.lightGrey};
  z-index: 999;
  transition: 0.4s ease;
  display: flex;
  align-items: center;
`;

const Close = styled.img`
  width: ${vw(25)};
  height: ${vw(25)};
  position: absolute;
  top: ${vw(15)};
  right: ${vw(15)};
  @media ${media.tablet} {
    width: ${vwTablet(40)};
    height: ${vwTablet(40)};
    top: ${vwTablet(25)};
    right: ${vwTablet(25)};
  }
  @media ${media.desktop} {
    cursor: pointer;
    width: ${vwDesktop(40)};
    height: ${vwDesktop(40)};
    top: ${vwDesktop(25)};
    right: ${vwDesktop(25)};
  }
 `;

const Wrapper = styled.div`
  width: 100%;
  height: 65vh;
  position: relative;
  touch-action: none;
  @media ${media.desktop} {
    width: ${vwDesktop(1200)};
    height: 80vh;
    margin: 0 auto;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.4s ease;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: ${vw(20)};
  padding: 0 ${vw(80)};
  @media ${media.tablet} {
    bottom: ${vwTablet(60)};
    padding: 0 ${vwTablet(260)};
  }
  @media ${media.desktop} {
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    padding: 0 ${vwDesktop(25)};
  }
`;

const Arrow = styled.img`
  width: ${vw(20)};
  height: auto;
  display: block;
  transform: ${props => props.left ? 'scaleX(-1)' : 'scaleX(1)'};
  @media ${media.tablet} {
    width: ${vwTablet(30)};
  }
  @media ${media.desktop} {
    cursor: pointer;
    width: ${vwDesktop(40)};
  }
`;

export default Popup;