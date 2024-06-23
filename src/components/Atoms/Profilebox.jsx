import Image from 'next/image';
import React from 'react';
import CustomImage from './CustomImage';

function Profilebox({ image, Heading, p, icon, icon1, icon2 }) {
  return (
    <div className='h-[330px] w-[255px] text-center bg-[rgb(240,251,252)] '>
      <div className=''>
        <CustomImage variant='five' src={image}></CustomImage>
      </div>
      <div className='flex gap-[10px] justify-center mt-[-15px]'>
        <div className='bg-[rgb(6,187,204)] p-[10px] text-[white]'>{icon}</div>
        <div className='bg-[rgb(6,187,204)] p-[10px] text-[white]'>{icon1}</div>
        <div className='bg-[rgb(6,187,204)] p-[10px] text-[white]'>{icon2}</div>
      </div>
      <div className='text-2xl pt-[20px]'>
        {Heading}
      </div>
      <div>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default Profilebox;
