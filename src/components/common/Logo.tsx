import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/public/meetupradar-logo.png';

const Logo = () => {
  return (
    <div className="flex items-center sticky top-0 py-7">
      <Image src={logoImg} alt="LogoImage" width={30} height={30} />
      <h2 className="sm:font-semibold font-bold sm:text-lg text-sm text-sky-600">
        MeetupRadar
      </h2>
    </div>
  );
};

export default Logo;
