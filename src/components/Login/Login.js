import React from 'react';
import Banner from './Banner';
import styled from 'styled-components';
import Stream from './Steam';
import DownloadNow from './DownloadNow';
import GroupWatch from './GroupWatch';
import MarvelStudio from './MarvelStudio';
import GridTheme from './GridTheme';
import Devices from './Devices';
import Advertise from './Advertise';
    


const Login = () => {
    return (
        <>
        <Main>
           <Banner />
           <Stream />
           <DownloadNow />
           <GroupWatch />
           <MarvelStudio />
           <GridTheme />
           <Advertise />
           <Devices />
           </Main> 
        </>
    );
};
 const Main = styled.main`
    width: auto;
    height: auto;
    overFlow: auto;
 `;
export default Login;