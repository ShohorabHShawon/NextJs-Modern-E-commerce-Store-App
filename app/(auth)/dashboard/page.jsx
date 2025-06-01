import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <main>
      <h1>Dashboard</h1>
      <Link href="/admin">Admin Panel</Link>
    </main>
  );
}
