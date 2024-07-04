import React from 'react';
import Logo from '../Atoms/Logo';
import AnchorTag from '../Atoms/AnchorTag';

function Header() {
  return (
    <div className="header h-[80px] w-full" data-aos="fade-down">
      <div className='flex items-center justify-between h-full px-4 mx-auto' >
        <div>
          <Logo src="/assets/image/logogen-removebg-preview.png" />
        </div>
        <div>
          <AnchorTag />
        </div>
      </div>
    </div>
  );
}

export default Header;
