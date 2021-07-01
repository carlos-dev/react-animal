import React, {useState, useEffect} from 'react';

import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import Error from '../Helper/Error';

import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';

import * as S from './stylesUserPhoto';
import { PHOTO_POST } from '../api';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = useState({})
  const {data, error, loading, request} = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);
  
  function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);
    
    const token = window.localStorage.getItem('token');
    const {url, options} = PHOTO_POST(formData, token);

    console.log(formData);

    request(url, options)
  }

  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <Input type="file" name="img" id="img" onChange={handleImgChange} />

        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}

        <Error error={error} />
      </form>

      <div>
        {img.preview && <S.Preview style={{backgroundImage:`url(${img.preview})`}} />}
      </div>
    </S.Container>
  );
}

export default UserPhotoPost;
