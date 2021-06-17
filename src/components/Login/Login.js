import React, {useContext} from 'react';
import { Navigate, Route, Routes } from 'react-router';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';

const Login = () => {
  const {login} = useContext(UserContext)

  if(login) return <Navigate to="/conta" />

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/create" element={<LoginCreate />} />
        <Route path="/lost" element={<LoginPasswordLost />} />
        <Route path="/lost" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
