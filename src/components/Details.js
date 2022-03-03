import React ,{useEffect ,useState} from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import FsLightbox from 'fslightbox-react';
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";


function Details() {
  const { id } = useParams();
  const[ movie,setMovie ] = useState();
  const [toggler, setToggler] = useState(false);
  useEffect(async () => { 
   const docRef =  doc(db, "movies", id);
   const docSnap =await getDoc(docRef);
   if (docSnap.exists()) {
    setMovie(docSnap.data());
    console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
  },[]) 
  return(
 <Container>
   {movie && (
     <>
   <Background>
    <img src={movie.backgroundImg} alt="" />
  </Background>
  <ImageTitle>
    <img src={movie.titleImg} alt="" />
  </ImageTitle>
  <Controls>
    <PlayButton onClick={() => setToggler(!toggler)}>
      <img src="/images/play-icon-black.png" alt="" />
      <span>PLAY</span>
      <FsLightbox
          toggler={toggler}
          sources={[
         movie.trailer
          
          ]}
          
          disableThumbs={true}
          />
    </PlayButton>
    <TrailerButton onClick={() => setToggler(!toggler)}>
      <img src="/images/play-icon-white.png" alt="" />
      <span>Trailer</span>
      <FsLightbox
          toggler={toggler}
          sources={[
          movie.trailer
          ]}
          disableThumbs={true}
          />
    </TrailerButton>
    <AddButton>
      <span> + </span>
    </AddButton>
    <GroupWatchButton>
      <img src="/images/group-icon.png" alt="" />
    </GroupWatchButton>

  </Controls>
  <SubTitle>
         {movie.subTitle}
  </SubTitle>
  <Description>
          {movie.title}
  </Description>
  </>
  )}
  
 </Container>

  );
}

export default Details;

const Container = styled.div` 
min-height: calc(100vh - 250px);
padding:0 calc(3.5vw + 5px);
position: relative;
display: block;



`

const Background = styled.div`
position: fixed ;
top: 0;
right: 0;
left: 0;
z-index:-1;
opacity:0.8;
padding-top: 70px;

img {
    width: 100vw;
    height: 100vh;
    

    @media (max-width: 768px) {
      width: initial;
    }
  }

`

const ImageTitle = styled.div`
    height: 30vh;
    align-items: flex-end;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;
    margin-bottom:20px;
    display:flex;
    justify-content:left;
    
    
    img {
        width: 80%;
        height: 100%;
        object-fit: contain;
    }
    `

const Controls = styled.div`
display:flex;
align-items:center;

`

const PlayButton = styled.button`
border-radius:4px;
font-size: 15px;
padding:0 24px;
margin-right: 22px;
display:flex;
align-items:center;
height: 56px;
background: rgb(249,249,249);
border:none;
letter-spacing: 1.8px;
cursor:pointer;

&:hover{
  background: rgb(198,198,198);
}

`

const TrailerButton = styled(PlayButton)`
  background: rgba(0,0,0,0.3);
  border: 1px solid rgb(249,249,249);
  color:rgb(249,249,249);
  text-transform:uppercase;
`

const AddButton = styled.button`
    width: 44px;
    height: 44px;
    margin-right: 16px;
    display: flex;
    align-items:center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);

    span{
      font-size: 30px;
      color: white;
    }


`

const GroupWatchButton = styled(AddButton)`
background: rgb(0,0,0);

`

const SubTitle = styled.div`
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;

`

const Description = styled.div`
color: rgb(249,249,249);
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
max-width:760px;


`





