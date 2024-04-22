import Link from 'next/link';
import React from 'react';

const PostDetails = async ({params}) => {
    const {id} = params;
    // console.log(params.id)
    const res = await fetch(`http://localhost:5000/posts/${id}`);
    const post = await res.json();
    // console.log(post)
    return (
        <div>
            <h2>post details page {id}</h2>
            <div className="card bg-gray-100 shadow-xl w-[50%] mx-auto my-7">
          <div className="card-body">
            <h2 className="card-title">{post.name}</h2>
            <p>{post.description}</p>
            <p>Likes : {post.likes_count}</p>
            <div className="card-actions justify-end">
              <Link href={`/blogs/posts`}><button className="btn btn-primary">Back</button></Link>
            </div>
          </div>
        </div>
        </div>
    );
};

export default PostDetails;