import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <main
      style={{
        padding: '2rem',
        fontFamily: 'sans-serif',
        background: '#f5f6fa',
        minHeight: '100vh',
      }}
    >
      <header
        style={{
          marginBottom: '2rem',
          borderBottom: '1px solid #ddd',
          paddingBottom: '1rem',
        }}
      >
        <h1 style={{ margin: 0 }}>Dashboard</h1>
        <nav>
          <Link
            href="/admin"
            style={{
              marginRight: '1rem',
              color: '#0070f3',
              textDecoration: 'none',
            }}
          >
            Admin Panel
          </Link>
          <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>
            Home
          </Link>
        </nav>
      </header>
      <section>
        <p>Welcome to the dashboard!</p>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
          <div
            style={{
              background: '#fff',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 1px 4px #ddd',
              flex: 1,
            }}
          >
            <h2>Users</h2>
            <p>Manage users and permissions.</p>
          </div>
          <div
            style={{
              background: '#fff',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 1px 4px #ddd',
              flex: 1,
            }}
          >
            <h2>Orders</h2>
            <p>View and process recent orders.</p>
          </div>
          <div
            style={{
              background: '#fff',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 1px 4px #ddd',
              flex: 1,
            }}
          >
            <h2>Products</h2>
            <p>Update and add new products.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
