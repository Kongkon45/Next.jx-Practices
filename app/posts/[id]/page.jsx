import getPost from '@/lib/getPost';
import React from 'react'

export const generateMetadata = async ({params}) => {
    const {id} = params;
    const post = await getPost(id);
    return {
        title : post.title,
        description : post.body
    }
}
const Post = async ({params}) => {
    const {id} = params;
    const post = await getPost(id);
    // console.log(post)
  return (
    <div>
        <h2>single post page </h2>

        <div className="w-1/2 border-2 mx-auto p-5 rounded-lg shadow-lg">
        <h1 mt-6>{post.title}</h1>
        <p>{post.body}</p>
        </div>
    </div>
  )
}

export default Post