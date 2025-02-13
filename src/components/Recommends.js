import React from 'react' ;
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice"

function Recommends() {
 const movies = useSelector(selectRecommend)
  return (
    <Container>
      <h4> Recommended for You</h4>
      <Content>
        { movies && movies.map((movie) =>(
          <Wrap key ={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={movie.cardImg} />
            </Link>
        </Wrap>
        ))}
        
      
      </Content>
    </Container>
  );
}

export default Recommends


const Container = styled.div`
 padding: 0 0 26px;
`;

const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
    

`;

const Wrap =styled.div`
    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 10px;
    overflow: hidden;
    box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    cursor:pointer;
    

    img{
     width: 100%;
     height: 100%;
     object-fit: cover;
        
    }

    &:hover{
     box-shadow:rgb(0 0 0/80%) 0px 40px 58px -16px,
     rgb(0 0 0/72%) 0px 30px 22px -10px;
     border-color:rgba(249,249,249,0.8);
     transform:scale(1.05);
    }



`