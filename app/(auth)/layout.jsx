'use client';

import React from 'react';
import AuthContextProvider from '@/contexts/AuthContext';

export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
