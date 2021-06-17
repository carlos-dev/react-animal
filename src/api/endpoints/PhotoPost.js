import React, {useState} from 'react';

const PhotoPost = () => {
  const [token, setToken] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [img, setImg] = useState('')
  const [weight, setWeight] = useState('')

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img)
    formData.append('nome', name)
    formData.append('peso', weight)
    formData.append('idade', age)

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      body: formData,
    }).then(response => {
      console.log(response);
      return response.json()
    }).then(json => {
      console.log(json);
      return json;
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} placeholder="Name" onChange={({target}) => setName(target.value)}/>
      <input type="text" value={token} placeholder="token" onChange={({target}) => setToken(target.value)}/>
      <input type="text" value={weight} placeholder="Weight" onChange={({target}) => setWeight(target.value)}/>
      <input type="text" value={age} placeholder="Age" onChange={({target}) => setAge(target.value)}/>
      <input type="file" onChange={({target}) => setImg(target.files[0])}/>

      <button>Enviar</button>
    </form>
  );
}

export default PhotoPost;
