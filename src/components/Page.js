import React from 'react';
import styled from 'styled-components';

const Page = (props) => {
  const { children } = props;
  return (
    <Root>
      {children}
    </Root>
  );
};

const Root = styled.main``;

export default Page;