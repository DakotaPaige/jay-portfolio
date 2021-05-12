import React from 'react';
import styled from 'styled-components';

import Footer from 'components/Footer';

const Page = (props) => {
  const { children } = props;
  return (
    <Root>
      <Wrapper>
      {children}
      </Wrapper>
      <Footer />
    </Root>
  );
};

const Root = styled.main``;

const Wrapper = styled.div`
  min-height: 90vh;
`;

export default Page;