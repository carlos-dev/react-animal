import styled from 'styled-components';

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  position: relative;
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a, button {
    background: #eee;
    border-radius: .2rem;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    background: #fff;
    box-shadow: 0 0 0 3px #333;
    border-color: #333;
    outline: none;
  }

  a.active {
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }

  a.active svg > * {
    fill: #fb1;
  }
`;

export const Container = styled.div`
  
`;
