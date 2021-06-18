import React, {useState, useEffect} from 'react';

import UserHeaderNav from './UserHeaderNav';

import * as G from '../../styles/GlobalStyles';
import * as S from './styles'
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const location = useLocation()

  useEffect(() => {
    const {pathname} = location;

    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break;
      case '/conta/postar':
        setTitle('Poste sua foto')
        break;
    
      default:
        setTitle('Minha conta')
        break;
    }

  }, [location]);

  return (
    <S.Header>
      <G.Title>{title}</G.Title>
      <UserHeaderNav />
    </S.Header>
  );
}

export default UserHeader;
