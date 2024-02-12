import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocate, IoLogoLinkedin, IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className='p-4 py-10 grid gap-10 bg-primary-dark text-white'>
      <section className='flex flex-col gap-3'>
        <h2 className='text-primary-gold font-raleway font-medium text-xl'>
          Quick Links
        </h2>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/'>About</Link>
          </li>
          <li>
            <Link href='/'>Contact</Link>
          </li>
        </ul>
      </section>

      <section className='row-start-1 flex flex-col gap-3'>
        <h2 className='flex items-center gap-4'>
          <Image src={"/logo-white.png"} width={32} height={32} alt='Logo' />
          <span className='uppercase font-bold tracking-wider'>
            spacecluboau
          </span>
        </h2>
        <p>
          Space Club OAU was established to provide space education to the
          university students and its entire environment and to further help in
          space research and its application for the growth of students, the
          school and our country at large.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-primary-gold font-raleway font-medium text-xl'>
          Contact Us
        </h2>
        <ul className='flex flex-col gap-3'>
          <li>
            <a href='http://' className='flex gap-2'>
              <IoLocate size={28} /> Opposite Ajose Lecture Theatre, OAU, Ife.
            </a>
          </li>

          <li>
            <a href='http://' className='flex gap-2'>
              <IoMail size={28} /> official.spacecluboau@gmail.com
            </a>
          </li>
        </ul>

        <div className='mt-4 flex items-center justify-center gap-4'>
          <IoLogoLinkedin size={28} />
          <IoLogoLinkedin size={28} />
          <IoLogoLinkedin size={28} />
        </div>
      </section>
    </footer>
  );
}
