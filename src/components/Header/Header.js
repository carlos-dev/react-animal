import React from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../../UserContext';

import * as S from './styles';
import * as G from '../../styles/GlobalStyles';

import {ReactComponent as Dogs} from '../../assets/dogs.svg';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext)

  return (
    <G.Contanier>
      <S.Header>
        <S.Nav>
          <Link className="logo" to="/" aria-label="Dogs - Home">
            <Dogs />
          </Link>
          {data ? (
              <Link  className="login" to="/conta">
                {data.nome}
                <button onClick={userLogout}>sair</button>
              </Link>
          ) : (
            <Link  className="login" to="/login">
              Login/Criar
            </Link>
          )}

        </S.Nav>
      </S.Header>
    </G.Contanier>
  );
}

export default Header;
