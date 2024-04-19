import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <main>
      <h2>This is Home page</h2>
      <Image src="https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:eco%2Cw_620/MTkyNjQ4MjkwMzM1NDY2OTMy/react-photo-gallery-list.jpg" alt="my-image" width={400} height={400}/>
      <button className='btn btn-primary m-3'>Click Me</button>

      <h2>This is img tag</h2>
      <img src="https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:eco%2Cw_620/MTkyNjQ4MjkwMzM1NDY2OTMy/react-photo-gallery-list.jpg" alt="my-image" width="400px" height="400px"/>
    </main>
  )
}

export default Home