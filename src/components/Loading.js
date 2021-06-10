import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Loading = (props) => {
  const { isLoading } = props;
  return (
    <Root style={{ opacity: isLoading ? 1 : 0 }}>
      <img
        src={require('src/assets/images/icons/ajax-loader.gif')}
        alt="Loading..."
      />
    </Root>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

const Root = styled.div`
  width: 100%;
  height: ${`calc(100% - ${vw(60)})`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: ${vw(60)};
  left: 0;
  pointer-events: none;
  background-color: ${({ theme }) => theme.color.lightGrey};
  transition: 0.4s ease;
  z-index: 999;
  img {
    display: block;
    width: ${vw(40)};
  }
  @media ${media.tablet} {
    top: ${vwTablet(80)};
    height: ${`calc(100% - ${vwTablet(80)})`};
    img {
      width: ${vwTablet(40)};
    }
  }
  @media ${media.desktop} {
    top: ${vwDesktop(80)};
    height: ${`calc(100% - ${vwDesktop(80)})`};
    img {
      width: ${vwDesktop(40)};
    }
  }
`;

export default Loading;
