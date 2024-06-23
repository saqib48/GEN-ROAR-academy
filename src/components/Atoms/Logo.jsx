import React from 'react'
import Image from 'next/image'

function Logo({ src, alt }) {
  return (
    <div className='Logo'>
      <Image src={src} alt={alt} width={120} height={50} />
    </div>
  )
}

export default Logo
