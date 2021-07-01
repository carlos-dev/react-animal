import React, {useContext, useState, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {ReactComponent as MyPhotos} from '../../assets/feed.svg';
import {ReactComponent as Stats} from '../../assets/estatisticas.svg';
import {ReactComponent as AddPhoto} from '../../assets/adicionar.svg';
import {ReactComponent as Exit} from '../../assets/sair.svg';

import { UserContext } from '../../UserContext';

import * as S from './styles'
import useMedia from '../../hooks/useMedia';

const UserHeaderNav = () => {
  const {userLogout} = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);
  const {pathname} = useLocation()

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname]);


  return (
    <>
      {mobile && <S.MobileButton className={mobileMenu && 'mobileButtonActive'} aria-label="Menu" onClick={() => setMobileMenu(!mobileMenu)}></S.MobileButton>}
      
      <S.Nav className={`${mobile && 'navMobile'} ${mobileMenu && 'navMobileMobile'}`}>
        <NavLink to="/conta" end activeClassName="active"><MyPhotos />{mobile && 'Minhas Fotos'}</NavLink>
        <NavLink to="/conta/estatisticas" activeClassName="active"><Stats />{mobile && 'Estatisticas'}</NavLink>
        <NavLink to="/conta/postar" activeClassName="active"><AddPhoto />{mobile && 'Adicionar foto'}</NavLink>

        <button onClick={userLogout}><Exit />{mobile && 'Sair'}</button>
      </S.Nav>
    </>
  );
}

export default UserHeaderNav;
