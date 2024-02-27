import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section className='max-w-[65rem] mx-auto py-28 px-5 flex flex-col gap-2 items-center justify-center bg-primary-dark text-white md:mb-28 md:py-20 md:px-10'>
      <p className='mb-6 p-5 border-y border-y-primary-gold-dark text-3xl text-center leading-10 md:px-10 md:max-w-[70%] md:mx-auto'>
        Ready to join? <br />
        Become a member of Space Club OAU today.
      </p>

      <Link
        href='/contact'
        className='w-[10rem] h-12 flex items-center justify-center bg-primary-gold-light uppercase font-medium text-center'
      >
        Reach Out
      </Link>
    </section>
  );
}
