import React from 'react';
import Login from './components/Login/Login.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Details from './components/Details.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 



const App = () => {
    return (
        <div>
           <Router>
            <Navbar />
            <Switch>
                <Route  exact path="/" component={Login} /> 
                <Route  exact path="/home" component={Home} />
                <Route  exact path="/details/:id" component={Details} />
                <Redirect to="/" />
            </Switch>
            <Footer />
    </Router>
    
        </div>
    );
};

export default App;