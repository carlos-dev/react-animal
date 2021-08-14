import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import * as S from './styles';
import * as G from '../../styles/GlobalStyles';

const PhotoContent = ({data}) => {
  const {photo, comments} = data;

  return (
    <S.Photo>
      <S.ImgPhoto>
        <img src={photo.src} alt={photo.title} />
      </S.ImgPhoto>

      <S.Details>
        <S.Author>
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          <S.Views>{photo.acessos}</S.Views>
        </S.Author>

        <G.Title>
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </G.Title>

        <S.Attributes>
          <li>{photo.peso} kg</li>
          <li>{photo.idade === '1' ? photo.idade + ' ano' : photo.idade + ' anos'}</li>
        </S.Attributes>
      
      </S.Details>
        <PhotoComments id={photo.id} comments={comments} />

    </S.Photo>
  );
}

export default PhotoContent;
