import React from 'react';

const Manu = () => {
    return (
        <div>
            <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/product">Product</Link></li>
             <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Manu;