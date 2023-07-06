import React, { useState, UseEffect } from "react";
import  styled  from "styled-components";
import { NavLink } from 'react-router-dom';
import logo from '../components/Images/logo.svg';
import homeIcon from '../components/Images/home-icon.svg';
import searchIcon from '../components/Images/search-icon.svg';
import watchIcon from '../components/Images/watchlist-icon.svg';
import origIcon from '../components/Images/original-icon.svg';
import movieIcon from '../components/Images/movie-icon.svg';
import shutdown from '../components/Images/shutdown.svg';
import seriesIcon from '../components/Images/series-icon.svg';
import { useSelector , useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUserName, selectUserPhoto, setLogOutState, setLoginState } from "./Redux/Reducers/UserReducer";
import { auth, provider } from '../firebase'
const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto)
    const [Toggler, setToggler] = useState(false); ///false...notactive
    const ifPopupOpen = () => setToggler(!Toggler);//true ---active state

   
    const SignIn =()=>{
        auth.signInWithPopup(provider).then ((response) =>{
            //console.log(response)
            let user = response.user;
            dispatch(setLoginState({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }));

            history.push("/home");//user navigate into home
        })
    }

   const SignOut = () =>{
   auth.signOut().then(() =>{
      dispatch(setLogOutState())
      
      history.push("/");//user navigate into login screen
   })
   }



    return (
        <>
     <Nav>
        <Navbrand>
      <img src={logo} alt="disney/logo" />
        </Navbrand>
{
    !userName ? (
        <LoginButton onClick={SignIn}>
            Login
        </LoginButton>
    ): <>
       <MenuLinks>
      <li><NavLink className="nav-link" to="/home"><img style={{width: '0.8rem',height: '0.8rem'}}src={homeIcon} alt="{homeIcon}" /><span>HOME</span></NavLink></li>
      <li><NavLink className="nav-link" to="#"><img src={searchIcon} alt="{searchIcon}" /><span>SEARCH</span></NavLink></li>
      <li><NavLink className="nav-link" to="#"><img src={watchIcon} alt="{watchIcon}" /><span>WATCHLIST</span></NavLink></li>
      <li><NavLink className="nav-link" to="#"><img src={origIcon} alt="{origIcon}" /><span>ORIGNALS</span></NavLink></li>
      <li><NavLink className="nav-link" to="#"><img src={movieIcon} alt="{movieIcon}" /><span>MOVIES</span></NavLink></li>
      <li><NavLink className="nav-link" to="#"><img src={seriesIcon} alt="{seriesIcon}" /><span>SERIES</span></NavLink></li>
        </MenuLinks>
        <UserAuth>
          <img src={userPhoto}alt="{image}" onClick={ifPopupOpen}/>
        </UserAuth>
        <PopupMenu activeState={Toggler}> 
        <li><NavLink className="nav-link" to="/home"><img style={{width: '0.8rem',height: '0.8rem'}}src={homeIcon} alt="{homeIcon}" /><span>HOME</span></NavLink></li>
        <li><NavLink  onClick={SignOut} className="nav-link" to="#"><img style={{width: '0.8rem',height: '0.8rem'}}src={shutdown} alt="{shutdown}" /><span>Sign Out</span></NavLink></li>
        </PopupMenu> 
       </>
}

     </Nav>
        </>
    );
};
const LoginButton = styled.button`
color: #fff;
font-size: 1.2rem;
cursor: pointer;
padding: 5px 16px;
border-radius: 4px;
letter-spacing: 1.5px;
text-transform: uppercase;
border: 1px solid #f9f9f9;
transition: all 0.2s ease 0s;
background-color: rgba(0,0,0,0.6);
@media screen and (min-width: 280px) and (max-width: 550px){
    font-size: 0.8rem;
    padding: 4px 13px;
}
&:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
}
`;
const Nav = styled.nav`
display: flex;
align-items: center;
min-height: 7vh;
justify-content: space-between;
flex-direction: row;
padding: 0 3rem;
opacity: 1;
z-index:2500;
`;
const Navbrand = styled.div`
width: 101px;
height: auto;
object-position: center;

img{
    width: 100%;
    height: auto;
    object-fit: fill;
}
`;
const MenuLinks = styled.div`
@media screen and (min-width: 280px) and (max-width: 991px){
    display: none;
}
display: flex;
align-items: center;
flex-direction: row;
flex-wrap: row wrap;
flex-shrink: 0;
justify-content: flex-start;
margin-right: auto;
margin-left: 3rem;
  
li{
    list-style: none;
    > .nav-link{
        display: flex;
        align-items: center;
        text-decoration: none;
        position: relative;

        img{
            width: 1.3rem;
            height: 1.3rem;
            object-fit: contain;
        }
        span{
            color: #fff;
           font-size: 1rem;
           font-weight: 300;
           letter-spacing: 1px;
           line-height: 1.08;
           padding: 0.5rem;
           margin-top: 5px;
           position: relative;

           &::before{
          position: absolute; 
          content: "";
          top: 100%;
          left: 0;
          right: 0;
          height: 2px;
          width: 0%;
          background: #f9f9f9;
          transition: all 0.7s cubic-bezier(0.45, 0.05, 0.55, 0.95);
          
           }
        }
    }
    &:hover{
        span::before{
        width: 100%;
        }
    }
}
`;
const UserAuth = styled.div`
width: 50px;
height: 50px;
object-position: center;
position: relative;
img{
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 100px; 
}
`;
const PopupMenu = styled.div`
position: absolute;
opacity: 1;
z-index:2500;
top: 7vh;
right: 3.5rem;
padding: 0.5rem 1rem;
background-color: #040714;
border-radius: 0.345rem;
border: 1.3px solid rgba(151, 151, 151, 1);
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
display: ${event => event.activeState ? "flex" : "none"};
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
li{
    width: 100%;
    display: flex;
    align-items: flex-start;
    border-bottom: 1.3px solid rgba(151, 151, 151, 1);
    list-style: none;
    > .nav-link{
        display: flex;
        align-items: center;
        text-decoration: none;
        position: relative;

        img{
            width: 1.3rem;
            height: 1.3rem;
            object-fit: contain;
        }
        span{
            color: #fff;
           font-size: 1rem;
           font-weight: 300;
           letter-spacing: 1px;
           line-height: 1.08;
           padding: 0.5rem;
           margin-top: 5px;
           position: relative;

         
        }
    }
`;

export default Navbar;