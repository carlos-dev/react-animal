import React, {useState} from 'react';
import styled, {keyframes}  from 'styled-components';

const Image = ({alt, ...props}) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({target}) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <Wrapper>
      {skeleton && <Skeleton />}
      <Img onLoad={handleLoad} alt={alt} {...props} />
    </Wrapper>
  );
}

const skeleton = keyframes`
  from {
    background-position: 0%;
  }

  to {
    background-position: -200%;
  }
`;

const Wrapper = styled.div`
  display: grid;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  grid-area: 1/1;
  opacity: 0;
  transition: .2s;
`;

const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${skeleton} 1.5s infinite linear;
`;

export default Image;
