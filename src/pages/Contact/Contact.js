import React from 'react';
import styled from 'styled-components';

import Page from 'components/Page';
import Container from 'components/Container';

const Contact = () => {
  return (
    <Page>
      <Root>
        <Container>
          <h1>Contact</h1>
        </Container>
      </Root>
    </Page>
  );
};

const Root = styled.div``;

export default Contact;
