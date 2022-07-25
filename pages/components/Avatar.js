import React from 'react'

function Avatar({url,className}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img loading='lazy'
    src={url}
    alt='profile pic'
    className={`h-10 rounded-full cursor-pointer transition duration-100 transform hover:scale-110 ${className}`}/>
  )
}

export default Avatar