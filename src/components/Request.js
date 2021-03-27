import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { addPhotos } from 'src/redux/photos';
import request from 'src/utils/request';
import { categorySort } from 'src/utils/functions';

const usePhotos = () => {
  const { isLoading, isError, data, error } = useQuery('photos', () => request('photos?_embed'));
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('running');
    // Sort data and move into redux when ready
    if (data) {
      const categories = categorySort(data);
      console.log(categories);
      dispatch(addPhotos(categories));
    }
  }, [data, dispatch]);

  console.log(data);

  return { isLoading, isError, error, data };
};

export default usePhotos;