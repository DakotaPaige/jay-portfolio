import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Page from 'components/Page';
import Gallery from 'components/Gallery/Gallery';

// https://jaypegsphoto.ca/wp/wp-json/wp/v2/photos?_embed

const Home = () => {
  const photos = useSelector((state) => state.photos.categories);

  return (
    <Page>
      <Root>
        {Object.keys(photos).length > 0 && (
          <Gallery data={photos['featured']} />
        )}
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
