import React, {useEffect} from 'react';

import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../api';

import * as S from './styles';

const FeedModal = ({photo, setModalPhoto}) => {
  const {data, error, loading, request} = useFetch();

  console.log('photo', photo);

  useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null)
    }
  }

  return (
    <S.Modal onClick={handleOutsideClick}>
      {error && <Error error={error} />}

      {loading && <Loading />}

      {data && <PhotoContent data={data} />}
    </S.Modal>
  );
}

export default FeedModal;
