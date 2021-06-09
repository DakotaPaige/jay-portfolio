import React from 'react';
import styled from 'styled-components';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Container = (props) => {
  return <Root>{props.children}</Root>;
};

const Root = styled.div`
  padding: 0 ${vw(10)};
  margin-top: ${vw(60)};
  width: 100%;
  @media ${media.tablet} {
    padding: 0 ${vwTablet(40)};
    margin-top: ${vwTablet(80)};
  }
  @media ${media.desktop} {
    padding: 0 ${vwDesktop(60)};
    margin-top: 0;
  }
`;

export default Container;
