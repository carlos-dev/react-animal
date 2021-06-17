import styled from 'styled-components';

export const typeSecond = '"Spectral", Georgia';

export const Section = styled.section`
  .lostPass {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;
  }

  .lostPass::after {
    content: '';
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const Register = styled.div`
  margin-top: 4rem;

  p {
    margin: 2rem 0;
  }
`;

export const Subtitle = styled.h2`
  font-family: ${typeSecond};
  line-height: 1;
  font-size: 2rem;

  ::after {
    content: '';
    display: block;
    background: #ddd;
    height: .5rem;
    width: 3rem;
  }
`;
