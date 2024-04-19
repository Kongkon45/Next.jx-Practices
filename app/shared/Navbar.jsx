import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-orange-500 flex justify-center items-center h-12 gap-10">
                <Link className='text-2xl font-bold text-white' href='/'>Home</Link>
                <Link className='text-2xl font-bold text-white' href='/about'>About</Link>
                <Link className='text-2xl font-bold text-white' href='/blogs'>Blogs</Link>
                <Link className='text-2xl font-bold text-white' href='/posts'>Posts</Link>
            </nav>
        </div>
    );
};

export default Navbar;