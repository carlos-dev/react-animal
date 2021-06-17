import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';

import * as S from './styles';
import * as G from '../../styles/GlobalStyles';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault()

    if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <S.Section className="animeLeft">
      <G.Title>Login</G.Title>

      <S.Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? <Button disabled>carregando...</Button> : <Button>Enviar</Button>}
        <Error error={error} />
      </S.Form>

      {/* <Link to='/login/create'>Cadastro</Link> */}
      <Link to='/login/perdeu' className='lostPass'>Perdeu a Senha?</Link>

      <S.Register>
        <S.Subtitle>Cadastre-se</S.Subtitle>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Button>
          <Link to='/login/create' className='btnSignup'>Cadastro</Link>
        </Button>
      </S.Register>
    </S.Section>
  );
}

export default LoginForm;
