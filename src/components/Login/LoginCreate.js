import React from 'react';

import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';

import { UserContext } from '../../UserContext';
import useForm from '../../hooks/useForm';

import * as G from '../../styles/GlobalStyles';
import { USER_POST } from '../api';
import useFetch from '../../hooks/useFetch';
import Error from '../Helper/Error';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const {userLogin} = React.useContext(UserContext);
  const {loading, error, request} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const { response } = await request(url, options);
    const json = await response.json();

    if (response.ok) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <G.Title>Cadastre-se</G.Title>
      
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
          ) : (
            <Button>Cadastrar</Button>
          )
        }

        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginCreate;
