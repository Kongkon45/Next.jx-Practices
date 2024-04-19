import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link';
import React from 'react'

const Posts = async () => {
    const posts = await getAllPosts();
    // console.log(posts)
  return (
    <div>
        <h2>Posts page</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 m-10">{
            posts && posts?.map((post)=>{
                return <div key={post.id} className="text-center border-2 p-5 rounded-lg shadow-lg">
                    <h2 className="text-blue-500"><Link href={`/posts/${post.id}`}>{post.title}</Link></h2>
                    <p>{post.body}</p>
                </div>
            })
        }

        </div>
    </div>
  )
}

export default Posts


