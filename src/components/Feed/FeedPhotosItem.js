import React from 'react';

import Image from '../Helper/Image';

import * as S from './styles';

const FeedPhotosItem = ({photo, setModalPhoto}) => {
  function handleModal() {
    setModalPhoto(photo);
  }

  return (
    <S.Photo onClick={handleModal}>
      <Image src={photo.src} alt={photo.title}/>

      <S.Views>{photo.acessos}</S.Views>
    </S.Photo>
  );
}

export default FeedPhotosItem;
