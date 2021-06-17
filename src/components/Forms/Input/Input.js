import React from 'react';
import * as S from './styles';

const Input = ({label, type, name, value, onChange, error, onBlur}) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input type={type} id={name} name={name} value={value} onChange={onChange} onBlur={onBlur}/>
      {error &&  <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
}

export default Input;
