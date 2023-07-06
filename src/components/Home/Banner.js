 import React from 'react';
 import Slider from "react-slick";
 import styled from 'styled-components';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import slide1 from '../Images/slide1.jpg';
 import slide2 from '../Images/slide2.jpg';
 import slide3 from '../Images/slide3.jpg';
 import slide4 from '../Images/slide4.jpg';
 import slide5 from '../Images/slide5.jpg';
 import slide6 from '../Images/slide6.jpg';
 import slide7 from '../Images/slide7.jpg';

 
const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
    return (
        <>
        <CarsouselImgs {...settings}>
         <Wrap>
            <div><img src={slide1} alt="slide/img" /> </div>
         </Wrap>
         <Wrap>
            <div><img src={slide2} alt="slide/img" /> </div>
         </Wrap>
         <Wrap>
            <div><img src={slide3} alt="slide/img" /> </div>
         </Wrap>
         <Wrap>
            <div><img src={slide4} alt="slide/img" /> </div>
         </Wrap>
         <Wrap>
            <div><img src={slide5} alt="slide/img" /> </div>
         </Wrap>
         <Wrap>
            <div><img src={slide6} alt="slide/img" /> </div>
         </Wrap>
         <Wrap>
            <div><img src={slide7} alt="slide/img" /> </div>
         </Wrap>
         
        </CarsouselImgs>
        </>
    );
};
const CarsouselImgs = styled(Slider)`
opacity: 1;
z-index:1500;
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
const Wrap = styled.div`
    position: relative;

    div{
        border-radius: 4px;
        padding: 4px;
        display: block;
        opacity: 1;
        z-index: 2000;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: default;
        object-position: cover;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 7px;
            cursor: pointer;
            @media screen and (min-width: 375px) and (max-width: 550px){
                width: 100%;
                height: 15vh;
                object-fit: fill;
            }
            @media screen and (min-width: 280px) and (max-width: 375px){
                width: 100%;
                height: 17vh;
                object-fit: fill;
            }
        }
        &:hover{
            padding: 1px;
            border: 4px solid #fff;
            transition-duration: 300ms;
        }
    }
`;
export default Banner;