import React from 'react';
import Link from "next/link";

const PostsLayout = ({children}) => {
    return (
        <div >
            <nav className="btn btn-primary btn-sm"><Link href='/blogs/posts'>Posts</Link></nav>
            {children}
        </div>
    );
};

export default PostsLayout;