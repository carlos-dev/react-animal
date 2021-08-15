import styled, {keyframes} from 'styled-components';

import views from '../../assets/visualizacao-black.svg';

import { typeFirst } from '../../styles/GlobalStyles';

const scaleUp = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

const latir = keyframes`
  from {
    opacity: 0;  
  }

  to {
    opacity: 1;
  }
`;

export const Photo = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: .2rem;
  background: #fff;
  display: grid;
  grid-template-columns: 36rem 20rem;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: ${scaleUp} .3s forwards;

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }

  .img {
    grid-row: 1;
  }
`;

export const ImgPhoto = styled.div`
  grid-row: 1 / 4;
`;

export const Details = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const Views = styled.div`
  ::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: .5rem;
    background: url(${views}) bottom no-repeat;
  }
`;

export const Attributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin: 1rem 0 2rem 0;

  li {
    margin-right: 2rem;

    ::before {
      content: '';
      display: inline-block;
      height: 20px;
      margin-right: .5rem;
      position: relative;
      top: 3px;
      width: 2px;
      background: #333;
      margin-top: 5px;
    }
  }
`;

export const Author = styled.p`
  opacity: 0.6;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Comments = styled.ul`
  overflow-y: auto;
  word-break: break-word; 
  padding: 0 2rem;

  li {
    margin-bottom: .5rem;
    line-height: 1.2;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-end;
  margin: 1rem;
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: ${typeFirst};
  resize: none;
  border: 1px solid #eee;
  padding: .5rem;
  border-radius: .2rem;
  background: #eee;
  transition: 0.2s;

  :focus,
  :hover {
    outline: none;
    border-color: #fb1;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;

  :focus svg path,
  :hover svg path {
    fill: #fea;
    stroke: #fb1;
  }

  :focus svg g,
  :hover svg g {
    animation: ${latir} 0.6s infinite alternate;
  }
`;

export const Delete = styled.button`
  background: #ddd;
  padding: .3rem .6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: .875rem;
  font-family: ${typeFirst};
  cursor: pointer;
  border-radius: .4rem;
  transition: .1s;

  :focus,
  :hover {
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`;