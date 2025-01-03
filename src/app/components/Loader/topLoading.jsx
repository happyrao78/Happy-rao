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
        color={"yellow"}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        className='font-bold top-2 left-0 w-full z-5'
      />
      </>
      
    //   <br />
    // </div>
  )
}

export default Top
