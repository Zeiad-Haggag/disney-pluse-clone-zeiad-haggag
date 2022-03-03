import React, {useEffect} from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from "./Recommends";
import Originals from "./Originals";
import NewDisney from "./NewDisney";
import Trendings from "./Trendings";
import { colRef } from '../firebase';
import { onSnapshot } from 'firebase/firestore';
import { useDispatch } from "react-redux" ;
import {setMovies} from "../features/movie/movieSlice";




function Home() {
  const dispatch = useDispatch() ;

  let recommends =[];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    onSnapshot(colRef,(snapshot) => {
      snapshot.docs.map((doc)=>{

        switch(doc.data().type){
          case "recommend": 
          recommends =[...recommends ,{id:doc.id ,...doc.data()}]
          break;

          case "new": 
          newDisneys =[...newDisneys ,{id:doc.id ,...doc.data()}]
          break;

          case "original": 
          originals =[...originals ,{id:doc.id ,...doc.data()}]
          break;

          case "trending": 
          trendings =[...trendings ,{id:doc.id ,...doc.data()}]
          break;

        }
        return {id:doc.id , ...doc.data()}
      })
      dispatch(setMovies({
        recommend:recommends,
        newDisney:newDisneys,
        original:originals,
        trending:trendings

      }));
      
    });
  
  },[]);




  return ( 
  <Container>
   <ImgSlider />
   <Viewers />
   <Recommends/>
   <NewDisney/>
    <Originals/>
    <Trendings/>
  </Container>
  )
}

export default Home;

const Container = styled.main`
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
overflow-x:hidden;

&:before{
  content:"";
  background: url(/images/home-background.png) center center / cover
  no-repeat fixed ;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
}
`




