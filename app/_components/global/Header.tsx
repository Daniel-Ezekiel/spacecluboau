"use client";
import { Button } from "@/components/ui/button";
import { NavContext } from "@/context/navContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

export default function Header() {
  const showNav = useContext(NavContext);

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
            showNav?.navState
              ? "top-[4.2rem] right-0 z-30"
              : "-top-full right-0 -z-10"
          } p-4 py-[2.5rem] pl-8 flex flex-col gap-4 w-[100dvw] h-fit bg-black bg-opacity-20 backdrop-blur transition-all ease-in-out duration-300 shadow-2xl lg:static lg:w-fit lg:h-fit lg:ml-auto lg:flex-row lg:gap-12 lg:bg-transparent lg:shadow-none lg:p-0 lg:z-30`}
        >
          <li className='py-2 text-right'>
            <Link href='/'>Home</Link>
          </li>
          <li className='py-2 text-right'>
            <Link href='/about'>About</Link>
          </li>
          <li className='py-2 text-right'>
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
            onClick={() => showNav?.updateShowNav()}
            className={`w-8 h-8 p-0 z-30 active:scale-90 lg:hidden transition-all ease duration-300`}
            aria-label='menu'
          >
            {!showNav?.navState ? (
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
