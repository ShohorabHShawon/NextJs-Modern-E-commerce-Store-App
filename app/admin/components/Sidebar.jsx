'use client';
import {
  Boxes,
  LayoutDashboard,
  LogOut,
  PackageOpen,
  Star,
  Tags,
  Truck,
  UserPen,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Sidebar() {
  const menuList = [
    {
      name: 'Dashboard',
      link: '/admin',
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: 'Products',
      link: '/admin/products',
      icon: <PackageOpen className="h-5 w-5" />,
    },
    {
      name: 'Categories',
      link: '/admin/categories',
      icon: <Tags className="h-5 w-5" />,
    },
    {
      name: 'Orders',
      link: '/admin/orders',
      icon: <Truck className="h-5 w-5" />,
    },
    {
      name: 'Customers',
      link: '/admin/customers',
      icon: <UserPen className="h-5 w-5" />,
    },
    {
      name: 'Reviews',
      link: '/admin/reviews',
      icon: <Star className="h-5 w-5" />,
    },
    {
      name: 'Collections',
      link: '/admin/collections',
      icon: <Boxes className="h-5 w-5" />,
    },
  ];
  return (
    <section className="flex flex-col gap-10 bg-gray-100 border-r px-5 py-3 h-screen overflow-hidden md:w-64">
      <div className="flex justify-center">
        <Image
          className="mt-5"
          src="/logo.png"
          alt="Logo"
          width={120}
          height={40}
        />
      </div>
      <ul className="flex-1 h-full overflow-y-auto flex flex-col gap-4">
        {menuList.map((item, key) => (
          <Tab item={item} key={key} />
        ))}
      </ul>

      <Button className={'cursor-pointer hover:bg-red-700'}>
        Logout <LogOut />
      </Button>
    </section>
  );
}

function Tab({ item }) {
  const pathName = usePathname();
  const isSelected = pathName === item.link;
  return (
    <Link href={item.link}>
      <li
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 font-semibold ${
          isSelected
            ? 'bg-red-700 text-white'
            : 'hover:bg-gray-300 ease-soft-spring transition-all duration-500'
        }`}
        key={item.name}
      >
        <span>{item.icon}</span>
        <span>{item.name}</span>
      </li>
    </Link>
  );
}
