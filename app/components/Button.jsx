"use client"
import React from 'react'

const Button = () => {
  return (
    <div>
        <button onClick={()=>console.log("clicked me")} className="bg-blue-500 text-white py-1 px-4 rounded-lg ">Click me</button>
    </div>
  )
}

export default Button