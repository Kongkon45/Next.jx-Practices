"use client"
import { useGetAllPostQuery } from '@/redux/features/posts/postsApi';
import Link from 'next/link';
import React from 'react';

const Posts = () => {
    const {data : posts, error, isLoading} = useGetAllPostQuery();
    // console.log(posts)
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 m-10">{
            posts?.map((post)=>{
                return <div key={post.id} className="text-center border-2 p-5 rounded-lg shadow-lg">
                    <h2 className="text-blue-500"><Link href={`/posts/${post.id}`}>{post.name}</Link></h2>
                    <p>{post.description}</p>
                </div>
            })
        }

        </div>
    );
};

export default Posts;