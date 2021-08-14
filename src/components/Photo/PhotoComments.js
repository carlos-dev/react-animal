import React, {useEffect, useContext, useState, useRef} from 'react';
import {UserContext} from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

import * as S from './styles';

const PhotoComments = ({id, comments}) => {
  const [comment, setComments] = useState(() => comments);
  const commentsSection = useRef(null);

  const {login} = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comment]);

  return (
    <>
      <S.Comments ref={commentsSection}>
        {comment.map(item => <li key={item.comment_ID}>
          <strong>{item.comment_author}: </strong>
          <span>{item.comment_content}</span>
        </li>)}
      </S.Comments>
      {login && <PhotoCommentsForm id={id} setComments={setComments} />}
    </>
  );
}

export default PhotoComments;
