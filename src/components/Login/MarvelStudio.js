import React from "react";
import bgImg  from '../Images/BlackPanther.jpg';
import styled from "styled-components";
 const MarvelStudio = () => {
    return (
   <>
 <Section>
    <Container>
        <Content>
            <h1 className="disney-titles"> Endless Entertainment</h1>
            <p>Disney Classics, Pixar adventures,Marvel epics, Star Wars sagas, National Geographic explorations,and more.</p>
        </Content>
    </Container>
 </Section>
   </>
    );
 };
 const Section = styled.section`
 background: url(${bgImg})center/cover no-repeat;
 height: 71vh;
 display: flex;
 align-item: center;
 justify-content: center;
 flex-direction: column;
 @media screen and (min-width: 768px) and (max-width: 1200px){
  height: 61vh;
}
@media screen and (min-width: 280px) and (max-width: 767px){
  height: 55vh;
  object-fit: contain;
  object-position: center;
}
 `;
 const Container = styled.section`
 width: 91%;
 margin: 0 auto;
 @media screen and (min-width: 280px) and (max-width: 991px){
  width: 91%; 
}
 `;
 const Content = styled.section`
magin-top: 17vh;

display:flex;
text-align: end;
flex-direction: column; 
@media screen and (min-width: 280px) and (max-width: 1200px){
  margin-top: 13vh;
}
 `;
 export default MarvelStudio;