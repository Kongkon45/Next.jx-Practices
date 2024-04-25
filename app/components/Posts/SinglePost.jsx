"use client"
import { useGetPostQuery } from '@/redux/features/posts/postsApi';
import Link from 'next/link';
import React from 'react';

const SinglePost = ({id}) => {
    const {data : post, error, isLoading} = useGetPostQuery(id)
    return (
        <div className="w-1/2 border-2 mx-auto p-5 rounded-lg shadow-lg">
        <h1 mt-6>{post?.name}</h1>
        <p>{post?.description}</p>
        <p>Likes : {post?.likes_count}</p>
        <div className="flex justify-end mt-4">
        <Link href={`/posts`}>
            <button className="bg-blue-500 text-white py-1 px-4 rounded-lg">Back</button>
        </Link>
        </div>
        </div>
    );
};

export default SinglePost;