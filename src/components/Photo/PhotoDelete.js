import React from 'react';
import * as S from './styles';

import useFetch from '../../hooks/useFetch';

import { PHOTO_DELETE } from '../api';


const PhotoDelete = ({id}) => {
  const {loading, request} = useFetch();

  const handleDelete = async (e) => {
    const confirm =  window.confirm('tem certeza que deseja deletar');

    if (confirm) {
      const {url, options} = PHOTO_DELETE(id);
      const {response} = await request(url, options);
  
      if (response.ok) window.location.reload();    
    }
  }
  
  return (
    <>
      {loading ?       
        <S.Delete disabled>Deletar</S.Delete> :
        <S.Delete onClick={handleDelete}>Deletar</S.Delete>
      } 
    </>
  );
}

export default PhotoDelete;
