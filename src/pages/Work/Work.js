import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Page from 'components/Page';
import Gallery from 'components/Gallery/Gallery'; 

const Work = () => {

  const photos = useSelector(state => state.photos.categories);
  const { id } = useParams();

  return (
    <Page>
      <Root>
        {Object.keys(photos).length > 0 && <Gallery data={photos[id.toLowerCase()]}/>}
      </Root>
    </Page>
  );
};

const Root = styled.div``;

export default Work;