import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Page from 'components/Page';

// https://jaypegsphoto.ca/wp/wp-json/wp/v2/photos?_embed

const Home = () => {
  const photos = useSelector(state => state.photos.categories);

  console.log(photos);

  return (
    <Page>
      <Root>
        <h1>Home</h1>
      </Root>
    </Page>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
