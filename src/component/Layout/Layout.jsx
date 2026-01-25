import React from 'react';
import Manu from '../Manu';

const Layout = ({ children }) => {
    return (
        <div>
             <Manu/>
            {children}
        </div>
    );
};

export default Layout;