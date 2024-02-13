import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className='bg-primary-dark'>
      <nav className='max-w-[75rem] mx-auto p-4 flex justify-between items-center text-white'>
        <Link href='/' className='flex items-center font-manrope'>
          <Image src={"/logo-white.png"} width={32} height={32} alt='Logo' />
          <span className='uppercase font-bold tracking-wider'>
            spacecluboau
          </span>
        </Link>

        <ul className='hidden'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/'>About</Link>
          </li>
          <li>
            <Link href='/'>Contact</Link>
          </li>
          <li>
            <Button className='bg-primary-gold uppercase tracking-wider text-primary-dark font-semibold'>
              Join us!
            </Button>
          </li>
        </ul>

        <Button className='p-0'>
          {true ? <IoMenuOutline size={28} /> : <IoCloseOutline size={28} />}
        </Button>
      </nav>
    </header>
  );
}
