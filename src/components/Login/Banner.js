import React from "react";
import styled from 'styled-components';

import logo1 from '../Images/cta-logo-one.svg';
import logo2 from '../Images/cta-logo-two.png';
import background from '../Images/login-background.jpg';
const Banner = () => {
    return (
        <>
       <Background>
       
        <Container>
            <Content>
                 <img src={logo1} alt="logo/img" />
                 <button typle="button" className="get-bundle-btn">Get The Disney Bundle</button>
                 <h4>Stream Now: Terms Apply</h4>
                 <img src={logo2} alt="logo/img" />
                 <button type="button" className="links"> Sign Up for Disney+ Only</button>
                 <button type="button" className="links text-gray">$7.99/Month or $7.99/Year</button>
            </Content>
        </Container>
        </Background> 
        </>
    );
};
const Background = styled.section`
background:url(${background});
height: 95vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;  
@media screen and (min-width: 768px) and (max-width: 1200px){
    height:85vh;
} 
@media screen and (min-width: 280px) and (max-width: 767px){
    height:75vh;
} 
`;
const Container = styled.div`
width: 85%;
margin: 0 auto;
`;
const Content = styled.div`
width: 100%;
margin: 0 auto;
max-width: 650px;
display:  flex;
align-item: center;
justify-content: center;
flex-direction: column;

h4{
 color: #fff;
 margin-bottom: 1vh 0;
 align-item: center;
 text-align: center;
}
 img{
    width: 100%;
    height: auto;
    object-fit: contain;
    max-width: 600px;
    display: block;
    margin-bottom: 1vh;
 }
 > .get-bundle-btn{
    outline: none;
    border: none;
    padding: 11.5px 15px;
    width: 100%;
    align-items: center;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: #0063e5;
    cursor: pointer; 
    color: #f9f9f9;
    font-size: 18px;
    border-radius: 0.145rem;
    transition: all 0.7s ease-in-out;
    @media screen and (min-width: 550px) and (max-width: 1200px){
        padding:10px 0;
        font-size: 15px;
    } 
    @media screen and (min-width: 280px) and (max-width: 550px){
        padding:5px 0;
        font-size: 14px;
    }

    &:hover{
        background: #0085ff;   
    }

 } 

 > .links{
    outline: none;
    border: none;
    font-size: 19px;
    background: transparent;
    color: #f9f9f9;
    margin-top: 1vh;
    @media screen and (min-width: 280px) and (max-width: 550px){
        font-size: 15px;
    }
 }

 > .text-gray{
    color: gray;
 }
`;

export default Banner;