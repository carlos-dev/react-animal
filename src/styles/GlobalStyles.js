import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const typeFirst = 'Helvetica, Arial, sans-serif';
export const typeSecond = '"Spectral", Georgia';


const animeLeft = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: #333;
    font-family: ${typeFirst};
    padding-top: 4rem;

    .animeLeft {
      opacity: 0;
      transform: translateX(-20px);
      animation: ${animeLeft} 0.3s forwards;
    }
  }

  input {
    display: block;
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: ${typeFirst};
    color: #333;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

export const Contanier = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto
`;

export const Title = styled.h1`
  font-family: ${typeSecond};
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  ::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const mainContanier = styled.div`
  margin-top: 4rem;
`;

export default GlobalStyles;