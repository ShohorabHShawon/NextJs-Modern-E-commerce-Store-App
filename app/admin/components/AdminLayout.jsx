'use client';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Header from './Header';

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <main className="relative flex">
        <div className="hidden md:block" ref={sidebarRef}>
          <Sidebar />
        </div>
        <div
          className={`fixed md:hidden ease-in-out transition-all duration-500 ${
            isOpen ? '' : '-translate-x-64'
          }`}
          ref={sidebarRef}
        >
          <Sidebar />
        </div>
        <section className="flex-1 flex flex-col min-h-screen">
          <Header toggleSidebar={toggleSidebar} />
          <section className="flex-1 bg-gray-200">
            {children}
            <section />
          </section>
        </section>
      </main>
    </>
  );
}
