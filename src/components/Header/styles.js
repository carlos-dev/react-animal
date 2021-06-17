import styled from 'styled-components';
import user from '../../assets/usuario.svg';

export const Header = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: #fff;
  top: 0;
  left: 0;
`;


export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 2rem;

  .logo {
    padding: 0.5rem 0;
  }

  .login {
    color: #333;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      display: inline-block;
      width: 14px;
      height: 17px;
      background: url(${user}) no-repeat center center;
      margin-left: 0.5rem;
      position: relative;
      top: -1px;
    }
  }
`;