'use client';
import { Menu } from 'lucide-react';
import React from 'react';

export default function Header({ toggleSidebar }) {
  return (
    <section className="flex item-center bg-white border-b px-4 py-4">
      <div className="flex justify-center items-center md:hidden">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md  hover:bg-gray-300 ease-in-out transition-all duration-400 cursor-pointer"
        >
          <Menu />
        </button>
      </div>
      <h1 className="text-xl font-semibold m-2">Dashboard</h1>
    </section>
  );
}
