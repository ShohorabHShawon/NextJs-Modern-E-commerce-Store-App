import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const menuList = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Contact Us',
      link: '/contact',
    },
  ];
  return (
    <nav className="py-4 px-14 border-b flex items-center justify-between">
      <Image
        className="m-2 hover:cursor-pointer"
        src="/logo.png"
        alt="Logo"
        width={120}
        height={40}
      />
      <div className="flex gap-4 items-center font-semibold">
        {menuList?.map((item) => {
          return (
            <Link
              key={item.name}
              href={item?.link}
              className="hover:cursor-pointer"
            >
              {item?.name}
            </Link>
          );
        })}
      </div>
      <Link href={'/login'}>
        <button className="bg-black p-5 py-2 font-bold rounded-full text-white">
          Login
        </button>
      </Link>
    </nav>
  );
}
