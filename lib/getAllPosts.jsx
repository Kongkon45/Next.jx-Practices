import React from 'react'

const getAllPosts = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts/?_limit=10")
  return result.json()
}

export default getAllPosts