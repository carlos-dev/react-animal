import React, {useContext} from 'react';
import { Navigate, Route, Routes } from 'react-router';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';

import * as S from './styles';

const Login = () => {
  const {login} = useContext(UserContext)

  if(login) return <Navigate to="/conta" />

  return (
    <S.WrapperLogin>
      <div className="forms">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/create" element={<LoginCreate />} />
          <Route path="/lost" element={<LoginPasswordLost />} />
          <Route path="/lost" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </S.WrapperLogin>
  );
}

export default Login;
