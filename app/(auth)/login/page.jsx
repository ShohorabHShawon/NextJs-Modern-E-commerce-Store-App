'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { auth } from '@/app/lib/firebase';
import { Loader2 as Loader2Icon } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function page() {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user]);
  return (
    <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 p-10 min-h-screen">
      <section className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 bg-white md:p-10 p-4 rounded-xl md:min-w-96 min-w-72">
          <div className="flex justify-center">
            <Image
              className="m-2 hover:cursor-pointer"
              src="/logo.png"
              alt="Logo"
              onClick={() => router.push('/')}
              width={120}
              height={40}
            />
          </div>
          <h1 className="font-bold text-xl">Login With Email</h1>
          <form className="flex flex-col gap-3">
            <input
              placeholder="Enter Your Email"
              type="email"
              name="user-email"
              id="user-email"
              className="bg-gray-200 px-3 py-1.5 rounded-md focus:outline-none w-full"
            />
            <input
              placeholder="Enter Your Password"
              type="password"
              name="user-password"
              id="user-password"
              className="bg-gray-200 px-3 py-1.5 rounded-md focus:outline-none w-full"
            />
            <Button variant="default">Login</Button>
          </form>
          <div className="flex justify-between text-sm mt-2">
            <Link
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>

            <Link href="/register" className="text-blue-600 hover:underline">
              Create account
            </Link>
          </div>
          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500 font-medium">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <SingInWIthGoogleComponent />
        </div>
      </section>
    </main>
  );
}

function SingInWIthGoogleComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      toast.success('Login successful!');
    } catch (error) {
      toast.error(error?.message);
    }
    setIsLoading(false);
  };

  return (
    <Button
      disabled={isLoading}
      type="button"
      onClick={handleLogin}
      variant="outline"
      className="flex items-center justify-center gap-2"
    >
      <Image
        src="/google-logo.png"
        alt="Google"
        width={20}
        height={20}
        className="inline-block"
      />
      {isLoading ? (
        <>
          Logging In...
          <Loader2Icon className="animate-spin" />
        </>
      ) : (
        'Continue with Google'
      )}
    </Button>
  );
}
