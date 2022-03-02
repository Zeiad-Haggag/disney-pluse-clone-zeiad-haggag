import React from 'react';
import styled from 'styled-components';
  

function Viewers(props) {
  return(
  <Container>
   <Wrap>
     <img src="/images/viewers-disney.png"  />
     <video loop muted autoPlay playsInline>
        <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
     </video>
   </Wrap>
   <Wrap>
     <img src="/images/viewers-pixar.png"  />
      <video loop muted autoPlay playsInline>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
   </Wrap>
   <Wrap>
     <img src="/images/viewers-marvel.png"  />
      <video loop muted autoPlay playsInline>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
   </Wrap>
   <Wrap>
     <img src="/images/viewers-starwars.png"  />
     <video loop muted autoPlay playsInline>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
   </Wrap>
   <Wrap>
     <img src="/images/viewers-national.png"  />
      <video loop muted autoPlay playsInline>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
   </Wrap>
  </Container>

  );
}

export default Viewers;

const Container = styled.div`
margin-top:30px;
display:grid;
grid-gap:25px;
grid-template-columns:repeat(5,minmax(0,1fr));
padding:30px 0px 26px;

`
const Wrap = styled.div`
padding-top: 56.25%;
border: 3px solid rgba(249,249,249,0.1);
border-radius:10px;
box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px,
rgb(0 0 0/73%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
cursor:pointer;
position:relative;
overflow:hidden;

img{
  inset:0px;
  display:block;
  height:100%;
  width: 100%;
  position:absolute;
  transition: opacity 500ms ease-in-out 0s;
  object-fit:cover;
  opacity:1;
  z-index:1;
  top:0;

}

video{
  position:absolute;
  width:100%;
  height:100%;
  top:0px;
  opacity:0;
  z-index:0;
  object-fit:cover;

}

&:hover{
  box-shadow:rgb(0 0 0/80%) 0px 40px 58px -16px,
  rgb(0 0 0/72%) 0px 30px 22px -10px;
  border-color:rgba(249,249,249,0.8);
  transform:scale(1.05);
  video{
    opacity:1;
  }
}

`

