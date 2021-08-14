import styled from 'styled-components';

import views from '../../assets/visualizacao.svg';

export const Feed = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Photo = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  :nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;

    @media (max-width: 40rem) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  img {
    grid-area: 1 / 1; 
  }
  
  :hover span {
    display: flex;
  }
`;

export const Views = styled.span`
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  grid-area: 1 / 1; 
  display: none;

  ::before {
    width: 16px;
    height: 10px;
    content: '';
    display: inline-block;
    margin-right: .25rem;
    background: url(${views}) no-repeat;
  }
`;

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, .4);
  z-index: 1000;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;

  @media (max-width: 40rem) {
    padding: 2rem calc(2rem + 15px) 2rem 2rem;

  }
`;