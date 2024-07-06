import { Kurale } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

//npm install --save react-top-loading-bar : install this package


const Top = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const effect = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 20))
    }, 500)
    return () => clearInterval(effect)
  }, [])

  return (
    // <div className='relative'>
    <>
      <LoadingBar
        color={"red"}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        // className='h-1 fixed top-0 left-0 w-full z-50'
      />
      </>
      
    //   <br />
    // </div>
  )
}

export default Top
