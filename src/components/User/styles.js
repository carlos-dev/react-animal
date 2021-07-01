import styled from 'styled-components';

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  position: relative;

  .mobileButtonActive::after {
    outline: none;
    background: currentColor;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
    transform: rotate(-90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }

  .navMobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0;
    margin-right: 1rem;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: .2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;

    button {
      border-bottom: none;
    }

    svg {
      margin-right: .5rem;
    }
  }

  .navMobileMobile {
    transition: .3s;
    transform: initial;
    opacity: 1;
    z-index: 100;
    pointer-events: initial;
  }

  .navMobile a,
  .navMobile button {
    width: 140px;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-bottom: 1px solid #eee;
    padding: .5rem 0;
    cursor: pointer;
  }

  .navMobile a:hover svg *,
  .navMobile button:hover svg * {
    fill: #fb1;
  }
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

export const MobileButton = styled.button`
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
  padding: 0;
  
  ::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;

  }

  :focus,
  :hover {
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }
`;
