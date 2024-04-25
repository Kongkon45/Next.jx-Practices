import React from 'react'
import Link from 'next/link'

const Blogs = () => {
    const blogs = [
        {
            id : 1,
            title : "blog 1",
            desc : "blog description 1"
        },
        {
            id : 2, 
            title : "blog 2",
            desc : "blog description 2"
        }
    ]
  return (
    <div>
        <h2>Blogs page</h2>
        {
            blogs && blogs?.map((blog)=>{
                return <ul key={blog.id}>
                    <li><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>
                    <li>{blog.desc}</li>
                </ul>
            })
        }
        
    </div>
  )
}

export default Blogs