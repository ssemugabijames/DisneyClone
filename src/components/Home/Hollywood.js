import React from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectHolloywood, selectOrignal } from '../Redux/Reducers/MovieReducer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const Hollywood = () => { 

    const Movies = useSelector(selectHolloywood);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 991, settings: { slidesToShow: 3 } },
            { breakpoint: 767, settings: { slidesToShow: 2 } },
            { breakpoint: 425, settings: { slidesToShow: 1 } },
        ]
      };
    return (
        <>
         <Section>
            <h1>Hollywood</h1>
            <Carousel {...settings}>

                {
                    Movies && Movies.map((value, index) =>(
                        <Wrap key={index}>
                        <div><NavLink to={`/details/${value.id}`}>
                        <img src={value.CardImg} alt={value.id} />
                            </NavLink></div>
                        </Wrap> 
                    ))
                    }
                
            </Carousel>
         </Section>
        </>
    );
};
const Section = styled.section`
 padding: 0.5rem 0;
 h1{
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: 300 !important;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(255,255,255,0.1);
    margin: 2vh 0 1vh 2rem;

    @media screen and (max-width: 991px){
    font-size: 1.7rem;
    }
    
    @media screen and (max-width: 550px){
        font-size: 0.95rem;
        }
 }
`;
const Carousel = styled(Slider)`
ul li button{
    &::before{
        font-size: 11px;
        color: rgb(150, 158, 171);
    } 
}
ul li.slick-active button{
    &::before{
        color: #fff !important
    }
} 
       & > button{
        opacity: 0;
        z-index: 1500;
        width: 5vw;
        height: 100%;

        &:hover{
            opacity: 1;
            z-index: 2000;
            transition: opacity 0.2s ease 0s;
        }
       }
       .slick-prev{
         left: -75px;
       }
       .slick-next{
        right: -75px;
       }
       /* slick-list */
       .slick-list{
         overflow: initial !important;  
       }
`;
const Wrap = styled.section`
position: relative;

div{
border-radius: 4px;
padding: 5px;
display: block;
opacity: 1;
z-index: 2000;
cursor: default;
object-position: center;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
}



   img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 5px;
    opacity: 1;
    z-index: 1500;
    @media screen and (max-width: 991px){
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
   }
   
   &:hover {
    opacity: 1;
    z-index: 2000;
   padding: 1px;
   border: 4px solid rgba(249, 249, 0.8);
   transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  
`;

export default Hollywood;