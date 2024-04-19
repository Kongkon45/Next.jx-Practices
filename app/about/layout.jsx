import React from 'react'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


const AboutLayout = ({children}) => {
  return (
    <div className={poppins.className}>
        <nav className="my-6 ">
            <ul className="flex gap-10 justify-center items-center h-12 bg-blue-500">
                <li className="text-2xl font-bold text-white "><Link href="/about/mission">Mission</Link></li>
                <li className="text-2xl font-bold text-white "><Link href="/about/vision">Vision</Link></li>
            </ul>
        </nav>
        {children}
    </div>
  )
}

export default AboutLayout