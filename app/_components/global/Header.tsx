"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

export default function Header() {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <header className='bg-primary-dark'>
      <nav className='max-w-[77.5rem] mx-auto p-4 flex justify-between items-center text-white'>
        <Link href='/' className='flex items-center font-manrope'>
          <Image src={"/logo-white.webp"} width={32} height={32} alt='Logo' />
          <span className='uppercase font-bold tracking-wider'>
            spacecluboau
          </span>
        </Link>

        <ul
          className={`fixed ${
            showNav ? "right-0" : "right-[-100%]"
          } top-[0] p-4 pt-[5rem] pl-8 z-30 flex flex-col gap-4 w-[65dvw] h-screen bg-black bg-opacity-20 backdrop-blur transition-all ease-in-out duration-300 shadow-2xl overflow-hidden lg:static lg:w-fit lg:h-fit lg:ml-auto lg:flex-row lg:gap-12 lg:bg-transparent lg:shadow-none lg:p-0`}
        >
          <li className='py-2'>
            <Link href='/'>Home</Link>
          </li>
          <li className='py-2'>
            <Link href='/about'>About</Link>
          </li>
          <li className='py-2'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='flex items-center gap-3 lg:ml-6'>
          <Link
            href={"/contact"}
            className='bg-primary-gold-light p-2 px-4 rounded-lg uppercase tracking-wider text-white font-semibold active:scale-90 transition-transform ease-in-out duration-100 text-sm max-[345px]:hidden'
          >
            Join us!
          </Link>

          <Button
            onClick={() => setShowNav(!showNav)}
            className={`w-8 h-8 p-0 z-30 active:scale-90 lg:hidden transition-transform ease-in-out duration-100 ${
              showNav && "fixed top-4 right-4 bg-none"
            } transition-all ease duration-300`}
          >
            {!showNav ? (
              <IoMenuOutline size={28} />
            ) : (
              <IoCloseOutline size={28} />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
}
