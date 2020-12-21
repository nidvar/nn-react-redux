import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';

import {BrowserRouter, Route} from 'react-router-dom';

const App = ()=>{
    return(
        <div>
            <BrowserRouter>
                <Nav />
                <Route exact path='' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
            </BrowserRouter>
        </div>
    )
}

export default App