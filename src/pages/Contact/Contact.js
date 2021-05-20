import React from 'react';
import styled from 'styled-components';

import Page from 'components/Page';
import Container from 'components/Container';
import Form from './sections/Form';
import Content from './sections/Content';

import media from 'src/styles/media';

const Contact = () => {
  return (
    <Page>
      <Container>
        <Root>
          <Content />
          <Form />
        </Root>
      </Container>
    </Page>
  );
};

const Root = styled.div`
  @media ${media.desktop} {
    display: flex;
    justify-content: space-between;
  }
`;

export default Contact;
