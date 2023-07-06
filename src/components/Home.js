import React,{ useEffect } from 'react'; 
import styled from 'styled-components';
import dbConfig from "../firebase";
import { useDispatch } from "react-redux";
import { setDisneyMovies } from "./Redux/Reducers/MovieReducer";
import background from '../components/Images/home-background.png';
import Banner from './Home/Banner.js';
import Brand  from  './Home/Brand.js';
import Orignal from "./Home/Orignal";
import NewtoDisney from "./Home/NewtoDisney";
import Trending from "./Home/Trending";
import Hollywood from "./Home/Hollywood";
import Disneykids from "./Home/Disneykids";
import Popular from "./Home/Popular";


const Home = () => {
  const dispatch = useDispatch();
  
   let populars = [];
   let hollywoods = [];
   let newTos = [];
   let kidsTvs = [];
   let originals = [];
   let trending = [];

  useEffect(() =>{

      dbConfig.collection("Movies").onSnapshot((snapshot) =>{
        snapshot.docs.map((doc) =>{
          //console.log(doc.data().type)
          switch ((doc.data().type)) {
            case "popular":
              populars = [...populars, {id: doc.id, ...doc.data()}];
              break;
              case "hollywood":
                hollywoods = [...hollywoods, {id: doc.id, ...doc.data()}];
                break;
                case "newTo":
                  newTos = [...newTos, {id: doc.id, ...doc.data()}];
                  break;
                  case "kidsTv":
                    kidsTvs = [...kidsTvs, {id: doc.id, ...doc.data()}];
                    break;
                    case "original":
                      originals = [...originals, {id: doc.id, ...doc.data()}];
                      break;
                      case "trending":
                        trending = [...trending, {id: doc.id, ...doc.data()}];
                        break;
              default:
                break;
          }
        });
        dispatch(setDisneyMovies({
          popular: populars,
          hollywood: hollywoods,
          newTo: newTos,
          kidsTv: kidsTvs, 
          original: originals, 
          trending: trending
        }))
      })
  }, [])
    return (
    <>
        <Container>
          <Banner />
          <Brand />
          <Orignal />
          <NewtoDisney />
          <Trending />
          <Hollywood />
          <Disneykids />
          <Popular />
        </Container>
    </>
  );

};
const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x: hidden;
display: block; 

&:before {
   background: url(${background}) center center / cover 
   no-repeat fixed;
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: -1;
}
`;
export default Home;