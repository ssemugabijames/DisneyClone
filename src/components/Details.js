import React,{useEffect,useState} from "react";
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import playIcon from '../components/Images/play-icon-black.png';
import trailIcon from '../components/Images/play-icon-white.png';
import groupIcon from '../components/Images/group-icon.png';
import dbConfig from "../firebase";

 const Details = () => {
   const { id } = useParams();
  const [state, setState] = useState();
  useEffect(() =>{
    dbConfig.collection("Movies").doc(id).get().then((doc) =>{
      if(doc.exists){
         setState(doc.data())
      }else{
         console.log("Detail can not be Fetched!");
      }
    })
  },[id])
    return (
        <>

        {
         state && (
            <>
      <Background style={{background: `url(${state.BackgroundImg})`,BackgroundSize: 'cover',
         backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat'}}>
            <Container>
               <Content>
                  <ImageTitle>
                     <img src={state.TitleImg} alt="detil/imgtitle"/>
                  </ImageTitle>
                  <h2>{state.Genres}</h2>
                  <p>{state.Description}</p>
               <ButtonGroup>
                  <PlayBtn>
                  <img src={playIcon} alt="play/icon" /><span>Play</span>
                  </PlayBtn>
                  <TrailerBtn>
                  <img src={trailIcon} alt="trail/icon" /><span>Trailer</span>
                  </TrailerBtn>

                  <AddtoPlaylistBtn>
                    <span>+</span>
                  </AddtoPlaylistBtn>

                  <GroupWatchBtn>
                  <img src={groupIcon} alt="group/icon" /><span></span>
                  </GroupWatchBtn>
               </ButtonGroup>
               </Content>
            </Container>

         </Background>
            </>
         )
        }
        
        </>
    );
 };
 const Background = styled.main`
min-height: 95vh;
@media screen and (min-width: 991px) and (max-width: 1200px){
   min-height: 72vh;
}
@media screen and (min-width: 550px) and (max-width: 991px){
   min-height: 65vh;
}
@media screen and (min-width: 280px) and (max-width: 550px){
   min-height: 55vh;
   object-fit: fill;
}

 `;
 const Container = styled.div`
 min-height: calc(100vh - 70px);
 padding: 0 calc(3.5vw + 5px);
 position: relative;
 `;
 const Content = styled.div`
 display: flex;
 align-items: flex-start;
 justify-content: center;
 overflow: hidden;
 flex-direction: column;
 min-height: 95vh;
 position: relative;
 @media screen and (min-width: 991px) and (max-width: 1200px){
   min-height: 72vh;
}
@media screen and (min-width: 550px) and (max-width: 991px){
   min-height: 65vh;
}
@media screen and (min-width: 280px) and (max-width: 550px){
   min-height: 55vh;
   object-fit: fill;
}
 h1{
   color: #fff;
   font-size: 1.2rem;
   font-weight: 500 !important;
   @media screen and (min-width: 550px) and (max-width: 1200px){
      font-size: 1rem;
      max-width: 550px;
   }
   @media screen and (min-width: 375px) and (max-width: 767px){
      font-size: 0.75rem;
      max-width: 400px;
      padding: 0.5rem 0;
   }
   @media screen and (min-width: 280px) and (max-width: 375px){
      font-size: 0.75rem;
      padding: 0.3rem 0;
      max-width: 400px;
   }
 }
 p{
   line-height: 1.4;
   font-size: 20px;
   padding: 1rem 0;
   color: #f9f9f9;
   max-with: 650px;
   width: 100%;
   height: auto;
 }
 `;
 const ImageTitle = styled.div`
 margin-top:60px;
 height: 30vh;
 min-height: 170px;
 width: 35vw;
 min-width: 200px;
 img {
   width: 100%;
   height: 100%;
   object-fit: contain;
 }

 @media screen and (min-width: 550px) and (max-width: 1200px){
   max-width: 325px;
}
@media screen and (min-width: 375px) and (max-width: 550px){
   max-width: 250px;
}
@media screen and (min-width: 280px) and (max-width: 375px){
   max-width: 150px;
}
 img{
   width: 10%;
   height: auto;
   object-fit: contain;
 }
 `;
const ButtonGroup = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
`;
const PlayBtn = styled.button`
cursor: pointer;
outline: none;
border: 1px solid rgba(249,249,249, 1 );
background: rgba(249,249,249 ,1);
font-size: 1.2rem;
border-radius: 0.345rem;
padding: 0.5rem 1.5rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-right: 22px;

img{
   width: 32px;
   height: auto;
   opacity: 1;
   z-index: 1500;
   object-fit: contain;
   @media screen and (min-width: 550px) and (max-width: 1200px){
      width: 25px;
   }
   @media screen and (min-width: 280px) and (max-width: 550px){
      width: 19px;
   }
}
span{
   color: #000;
   font-size: 1.2rem;
   font-weight: 400 !important;
   text-transform: uppercase;
   line-height: 1.08;
   letter-spacing: 1px;
   @media screen and (min-width: 550px) and (max-width: 1200px){
      font-size: 1rem;
   }
   @media screen and (min-width: 375px) and (max-width: 550px){
      font-size: 0.8rem;
   }
   @media screen and (min-width: 280px) and (max-width: 375px){
     font-size: 0.8rem;
   }
}

&:hover {
   background: rgb(198, 198, 198);
}
`;
const TrailerBtn = styled(PlayBtn)`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
span{
   color: #fff !important;
}
&:hover {
   color: #000 !important;
   background: rgb(198,198, 198, 1)
}
`;
const AddtoPlaylistBtn = styled.button`
margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
align-items: center;
justify-content: center; 
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
cursor: pointer;
span {
   font-size: 30px;
   color: white;

}

@media screen and (min-width: 550px) and (max-width: 1200px) {
   height: 35px;
   width: 35px;
}
@media screen and (min-width: 280px) and (max-width: 550px) {
   height: 29px;
   width: 29px;
   margin-right: 13px;
}

`;
const GroupWatchBtn = styled(AddtoPlaylistBtn)`
background: rgb(0, 0, 0); 
`;
 export default Details;