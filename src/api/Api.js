import React from 'react';
import PhotoGet from './endpoints/PhotoGet';
import PhotoPost from './endpoints/PhotoPost';
import TokenPost from './endpoints/TokenPost';
import UserPost from './endpoints/UserPost';

const Api = () => {
  return (
    <div>
      <h2>user post</h2>
      <UserPost />

      <h2>token post</h2>
      <TokenPost />

      <h2>photo post</h2>
      <PhotoPost />
   
      <h2>photo get</h2>
      <PhotoGet />
    </div>
  );
}

export default Api;
