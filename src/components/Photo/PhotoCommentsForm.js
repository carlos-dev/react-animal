import React, {useState} from 'react';

import Error from '../Helper/Error';

import useFetch from '../../hooks/useFetch';

import * as S from './styles';

import {ReactComponent as Send} from '../../assets/enviar.svg';

import { COMMENT_POST } from '../api';

const PhotoCommentsForm = ({id, setComments}) => {
  const [comment, setComment] = useState('');
  const {request, error} = useFetch();
  
  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = COMMENT_POST(id, {comment});
    
    const {response, json} = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <S.Form>
      <S.Textarea 
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
      />

      <S.Button onClick={handleSubmit}>
        <Send />
      </S.Button>

      <Error error={error} />
    </S.Form>
  );
}

export default PhotoCommentsForm;
