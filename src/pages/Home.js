import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { addPhotos } from 'src/redux/photos';

import request from 'src/utils/request';
import { categorySort } from 'src/utils/functions';

// https://jaypegsphoto.ca/wp/wp-json/wp/v2/photos?_embed

const Home = () => {
  const [isDataLoading, setIsLoading] = useState(false);
  const [isDataError, setIsError] = useState(false);

  const { isLoading, isError, data, error } = useQuery('photos', () => request('photos?_embed'));
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos.photos);

  useEffect(() => {
    // Set loading state of query call
    if (isLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    
    // Handle if any errors
    if (isError) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    // Sort data and move into redux when ready
    if (data) {
      const categories = categorySort(data);
      dispatch(addPhotos(categories));
    }
  }, [data, dispatch, isLoading, isError])

  console.log(photos);

  return (
    <Root>
      <h1>Home</h1>
    </Root>
  );
};

const Root = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
