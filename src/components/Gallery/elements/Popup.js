import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Popup = (props) => {
  const { data, active, handleClose, activeImage, handleNext, handlePrev } = props;
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
      <Wrapper>
        {data.map((item, index) => (
          <Image key={index}>
            <img src={data[activeImage].url} alt="" />
          </Image>
        ))}
      </Wrapper>
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
  height: 70vh;
  position: relative;
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
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default Popup;