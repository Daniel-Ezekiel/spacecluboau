import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  IoLocate,
  IoLocation,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className='bg-primary-dark py-12 leading-6 xl:leading-8'>
      <div className='max-w-[77.5rem] mx-auto p-4 py-10 grid gap-10 text-white md:grid-cols-2 lg:grid-cols-6'>
        <section className='flex flex-col gap-3'>
          <h2 className='text-primary-gold-light font-raleway font-medium text-xl'>
            Quick Links
          </h2>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </section>

        <section className='row-start-1 flex flex-col gap-3 md:col-span-full lg:col-span-3 lg:col-start-2 lg:items-center'>
          <h2 className='flex items-center gap-4'>
            <Image src={"/logo-white.webp"} width={32} height={32} alt='Logo' />
            <span className='uppercase font-bold tracking-wider'>
              spacecluboau
            </span>
          </h2>
          <p className='lg:text-justify'>
            Space Club OAU was established to provide space education to the
            university students and its entire environment and to further help
            in space research and its application for the growth of students,
            the school and our country at large.
          </p>
        </section>

        <section className='flex flex-col gap-3 lg:col-span-2 lg:items-end'>
          <h2 className='text-primary-gold-light font-raleway font-medium text-xl'>
            Contact Us
          </h2>
          <ul className='flex flex-col gap-3 lg:items-end'>
            <li>
              <a
                href='https://maps.app.goo.gl/FXDHDGXfLnL2AdM96'
                className='flex items-center gap-2'
                target='_blank'
              >
                <IoLocation size={24} color='#bc9159' /> Opposite Ajose Lecture
                Theatre, OAU, Ife.
              </a>
            </li>

            <li>
              <a
                href='mailto:official.spacecluboau@gmail.com'
                className='flex items-center gap-2'
              >
                <IoMail size={24} color='#bc9159' />{" "}
                official.spacecluboau@gmail.com
              </a>
            </li>

            <li className='mt-6 flex items-center gap-4 md:justify-start'>
              <a
                href='https://www.linkedin.com/in/spaceclub-oau?trk=contact-info'
                target='_blank'
                className='hover:animate-pulse'
                aria-label='space-club-linkedin'
              >
                <IoLogoLinkedin size={28} />
              </a>
              <a
                href='https://instagram.com/spaceclub_oau'
                target='_blank'
                className='hover:animate-pulse'
                aria-label='space-club-instagram'
              >
                <IoLogoInstagram size={28} />
              </a>
              <a
                href='https://x.com/spaceclub_oau'
                target='_blank'
                className='hover:animate-pulse'
                aria-label='space-club-t'
              >
                <IoLogoTwitter size={28} />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
