import React from 'react';

import * as S from './styles';

const FeedPhotosItem = ({photo}) => {
  return (
    <S.Photo>
      <img src={photo.src} alt={photo.title} />
      <S.Views>{photo.acessos}</S.Views>
    </S.Photo>
  );
}

export default FeedPhotosItem;
