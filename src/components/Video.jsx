import React from 'react'

const Video = () => {
  return (
    <>
    <div className = 'fullscreen-velo'>
    </div>
    <div className='fullscreen-container'>
     <video  className='fullscreen-video' muted loop autoPlay src='./fondoWeb.mp4'/>   
        
    </div>
    </> 
  )
}

export default Video