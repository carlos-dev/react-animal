import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1rem;
  padding-bottom: 1rem;
`;

export const Input = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: 0.2s;

  :hover,
  :focus {
    outline: none;
    background: #fb1;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
  }
`;

export const Error = styled.p`
  color: #f21;
  font-size: .875rem;
  margin-top: .25rem
`;
