import React from "react";
import styled  from "styled-components";
import img1 from '../Images/Disney_MLP_GridItem_SWRiseofSkywalker.jpg';
import img2 from '../Images/ForkyAsksAQuestion_en-US.jpg';
import img3 from '../Images/Poster_InfinityWar_EN.jpg';
import img4 from '../Images/cardImg.jpg';
import img5 from '../Images/Mickey_Mouse_Clubhouse_Grid_Item_052820.jpg';
import img6 from '../Images/Disney_MLP_GridItem_TS4_AUNZ.jpg';
const GridTheme = () => {
    const API_IMG = [
        {imgsrc: img1},{imgsrc: img2},{imgsrc: img3},{imgsrc: img4},{imgsrc: img5},{imgsrc: img6}
                    ]
    return (
        <>
        <Section>
            <Container>
                <Title>
                    <h1 className="disney-titles">Stream Exclusive Disney+ Orignals</h1>
                    <p>New Stories from our incredible family of studios</p>
                </Title>
                <GridImg>
                    {
                        API_IMG && API_IMG.map((value,index) => (
                            <Image key={index}>
                            <img src={value.imgsrc} alt="grid/img" />
                        </Image> 
                        ))
                    }
                </GridImg>
                <GetBundleBtn><button type="button" className="btn-theme-disney">Get The Disney Bundles</button></GetBundleBtn>
            </Container>

        </Section>
        </>
    );
}; 
const Section = styled.section`
 padding: 5vh 0;
 position: relative;
`;
const Container = styled.div`
width: 95%;
margin: 0 auto;
`;
const Title = styled.div`
text-align: center;
margin-bottom: 3vh;
p{
    font-size: 1rem;
    @media screen and (max-width: 550px){
        font-size: .8rem;
    }
}
`;
const GridImg = styled.div`
display: grid; 
gap: 15px;
grid-template-columns: repeat(3, minmax(0, 1fr));
@media screen and (max-width: 991px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
`;
const Image = styled.div`
border-radius: 10px;
         cursor: pointer;
         overflow: hidden;
         border: 3px solid rgba(249, 249, 249, 0.1); 
         box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
         trasition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      
   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
   
   &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
}

`;
const GetBundleBtn = styled.div`
display: flex;
align-item: center;
justify-content: center;
padding: 1vh 0;
flex-direction: row;
`
export default GridTheme;