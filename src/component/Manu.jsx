import React from 'react';
import {NavLink } from 'react-router-dom';
import '../assets/css/style.css';

const Manu = () => {
    return (
        <div>
            <ul>
             <li id='navbar'><NavLink className={(isActive)=> isActive && "active-item" } to="/">Home</NavLink></li>
             <li><NavLink className={(isActive)=> isActive && "active-item" }  to="/product">Product</NavLink></li>
             <li><NavLink className={(isActive)=> isActive && "active-item" } to="/about">About</NavLink></li>
            <li><NavLink className={(isActive)=> isActive && "active-item" } to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    );
};

export default Manu;