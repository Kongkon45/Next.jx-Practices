import Link from "next/link";
import React from "react";



const Posts = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache : "no-store"
  });
  const posts = await res.json();
  // console.log(posts)

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold my-4 text-center">All Posts data</h2>
      {posts?.map((post) => (
        <div key={post.id} className="card bg-gray-100 shadow-xl w-[50%] mx-auto my-7">
          <div className="card-body">
            <h2 className="card-title">{post.name}</h2>
            <p>{post.description}</p>
            <p>Likes : {post.likes_count}</p>
            <div className="card-actions justify-end">
              <Link href={`/blogs/posts/${post.id}`}><button className="btn btn-primary">See More</button></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
