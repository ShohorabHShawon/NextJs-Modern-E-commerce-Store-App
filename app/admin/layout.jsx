'use client';

import AuthContextProvider, { useAuth } from '@/contexts/AuthContext';
import React from 'react';
import AdminLayout from './components/AdminLayout';
import { useRouter } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';

export default function layout({ children }) {
  return (
    <AuthContextProvider>
      <AdminCheck>{children}</AdminCheck>
    </AuthContextProvider>
  );
}

function AdminCheck({ children }) {
  const auth = useAuth();
  const router = useRouter();
  const user = auth?.user;
  const isLoading = auth?.isLoading;

  if (!user && !isLoading) {
    router.push('/login');
  }
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  if (!user) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Access Denied</h1>
          <p className="mt-2">You must be logged in to view this page.</p>
          <button
            onClick={() => router.push('/login')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return <AdminLayout>{children}</AdminLayout>;
}
