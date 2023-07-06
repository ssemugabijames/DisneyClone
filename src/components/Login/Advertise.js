import React from "react";
import styled from "styled-components";
import logo from '../Images/cta-logo-one.svg';
 
const Advertise = () => {
    return (
        <>
        <Section>
            <Container>
                <ImgInfo>
                <img src={logo} alt="disney/logo" />
                </ImgInfo>
                <TextInfo>
                    <p>Get The Disney Bundle to Stream the  best Movies,shows, and sports with disney+,HULU and ESPN+.Term Apply </p>
                    <button type="button" className="btn-theme-disney">GET THIS DISNEY BUNDLE</button>
                </TextInfo>
            
            </Container>
        </Section>
        
        </>
    );
};
const Section = styled.section`
position: relative; 
padding: 50px 5%;
background: transparent;
`;
const Container = styled.div`
text-align: center; 
display: flex;
align-items: center;
flex-direction: row;
padding: 50px 5%;
justfy-content: space-between;
border: 1px solid #f9f9f9;
@media screen and (max-width: 991px){
    flex-direction: column;
    padding: 25px 35px;
    justfy-content: center;
  }
  @media screen and (max-width: 767px){
    padding: 25px 15px;
    
  }
`;
const ImgInfo = styled.div`
width: 48%;
flex: 0 auto;
opacity: 1;
z-index: 1500;
@media screen and (max-width: 991px){
    width: 100%;
    
  }
  img{
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
    max-width: 600px;
  }
`;
const TextInfo = styled.div`
width: 48%;
flex: 0 auto;
opacity: 1;
z-index: 1500;
@media screen and (max-width: 991px){
    width: 100%;
    text-align: center;
    
  }
  p{
    font-size: 1rem;
    @media screen and (max-width: 550px){
        font-size: .95rem;
        text-align: center;
        
      }
  }

`; 

export default Advertise;