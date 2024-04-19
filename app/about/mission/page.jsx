import Image from 'next/image'
import React from 'react'
import myPic from "@/public/images/Kongkon1.jpg"
import Button from '@/app/components/Button'

const Mission = () => {
    // throw new Error("There was a huge error")
  return (
    <div>
        <h1>Mission page</h1>
        <Button/>
        <Image src={myPic} alt="my-pic" />
    </div>
  )
}

export default Mission