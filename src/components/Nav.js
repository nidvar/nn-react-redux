import React from 'react';
import {Route, NavLink} from 'react-router-dom';

const Nav = ()=>{
    return(
        <div>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav