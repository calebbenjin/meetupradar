import LoginForm from '@/components/LoginForm';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/public/meetupradar-logo.png';

const SigninPage = () => {
  return (
    <div className="h-screen grid sm:grid-cols-2 grid-rows-1">
      <div className="bg-[url('/loginbg.png')] sm:block hidden bg-center bg-cover"></div>
      <div className="flex items-center justify-center  relative">
        <div className="container mx-auto px-4 sm:w-4/6 w-11/12">
          <div className="absolute right-0 left-0 bg-grey-100 sm:top-4 top-2 w-full">
            <div className="container mx-auto px-4 sm:w-5/6 w-6/6 text-center flex items-center container justify-between ">
              <div className="flex items-center ">
                <Image src={logoImg} alt="LogoImage" width={20} height={20} />
                <h2 className="sm:font-semibold font-bold sm:text-lg text-sm text-sky-600">
                  MeetupRadar
                </h2>
              </div>
              <p>
                <Link
                  href="/signup"
                  className="link text-underline text-sky-600"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          <h2 className="text-center sm:text-3xl text-xl sm:mb-8 mb-4 font-semibold text-sky-600">
            Hello Again!
          </h2>
          <LoginForm />
        </div>
        <footer className="text-center absolute sm:bottom-7 bottom-6 flex items-center justify-center w-full">
          <p>
            Don&apos;t have an account yet?{` `}
            <Link href="/signup" className="link text-sky-600">
              Sign Up
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SigninPage;
