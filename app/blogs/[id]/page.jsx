import React from 'react'
import {notFound} from "next/navigation"

const Blog = ({params, searchParams}) => {
  // console.log(searchParams)
    const {id} = params;
    if(id == "3"){
        notFound();
    }
  return (
    <div>
        <h2>Blog page {id}</h2>
        <h1>My name is : {searchParams.name}</h1>
        <p>Age : {searchParams.age}</p>
    </div>
  )
}

export default Blog