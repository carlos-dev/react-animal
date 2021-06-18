import React from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as MyPhotos} from '../../assets/feed.svg';
import {ReactComponent as Stats} from '../../assets/estatisticas.svg';
import {ReactComponent as AddPhoto} from '../../assets/adicionar.svg';
import {ReactComponent as Exit} from '../../assets/sair.svg';

import { UserContext } from '../../UserContext';

import * as S from './styles'

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const {userLogout} = React.useContext(UserContext);

  return (
    <S.Nav>
      <NavLink to="/conta" end activeClassName="active"><MyPhotos />{mobile && 'Minhas Fotos'}</NavLink>
      <NavLink to="/conta/estatisticas" activeClassName="active"><Stats />{mobile && 'Estatisticas'}</NavLink>
      <NavLink to="/conta/postar" activeClassName="active"><AddPhoto />{mobile && 'Adicionar foto'}</NavLink>

      <button onClick={userLogout}><Exit />{mobile && 'Sair'}</button>
    </S.Nav>
  );
}

export default UserHeaderNav;
