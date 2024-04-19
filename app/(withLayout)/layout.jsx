import React from 'react';
import Navbar from '../shared/Navbar';

const Layout = ({children}) => {
    return (
        <div>
            {/* <h2>Header</h2> */}
            <Navbar/>
            {children}
            <h1>Footer</h1>
        </div>
    );
};

export default Layout;