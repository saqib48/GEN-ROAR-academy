import React from 'react'

function Box({icon ,Heading ,p}) {
  return (
    <div className='h-[280px] w-[250px] flex-col gap-[30px] text-center justify-center items-center flex bg-[rgb(240,251,252)] my-[70px]'>
      <div className='text-5xl text-[rgb(6,187,204)]'>
       {icon}
      </div>
      <div className=' text-2xl'>
        {Heading}
      </div>
      <div>
        <p>{p}</p>
      </div>
    </div>
  )
}

export default Box
