import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Posts from './components/Posts';
import './App.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = ()=>{
    return(
        <div>
            <BrowserRouter>
                <Nav />
                <Switch> 
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route path='/:stuff' component={Posts} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App