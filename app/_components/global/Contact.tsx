"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const elementVariant = {
    hidden: {
      opacity: 0,
      translateY: -50,
    },
    show: {
      opacity: 1,
      translateY: 0,
    },
  };

  return (
    <section className='max-w-[65rem] mx-auto py-28 px-5 flex flex-col gap-2 items-center justify-center bg-primary-dark text-white md:mb-28 md:py-20 md:px-10'>
      <p className='mb-6 p-5 border-y border-y-primary-gold-dark text-3xl text-center leading-10 md:px-10 md:max-w-[70%] md:mx-auto'>
        <motion.span
          initial='hidden'
          whileInView='show'
          variants={elementVariant}
        >
          Ready to join? <br />
          Become a member of Space Club OAU today.
        </motion.span>
      </p>

      <motion.div initial='hidden' whileInView='show' variants={elementVariant}>
        <Link
          href='/contact'
          className='w-[10rem] h-12 flex items-center justify-center bg-primary-gold-light uppercase font-medium text-center'
        >
          Reach Out
        </Link>
      </motion.div>
    </section>
  );
}
