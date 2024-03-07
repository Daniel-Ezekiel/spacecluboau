"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../global/SectionTitle";
import Image from "next/image";

export default function Affiliations() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const items = {
    hidden: { opacity: 0, translateY: -25 },
    show: { opacity: 1, translateY: 0 },
  };

  return (
    <section className='p-4 py-20 xl:py-28'>
      <div className='max-w-[77.5rem] mx-auto'>
        <SectionTitle title='Our Affiliations' />

        <motion.div
          className='mt-12 md:mt-16 px-10 grid place-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 md:px-0'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          <motion.div
            className='aspect-video flex items-center justify-center'
            variants={items}
          >
            <Image
              src='/sgac.webp'
              height={300}
              width={300}
              alt='SGAC logo'
              className='w-full'
            />
          </motion.div>
          <motion.div
            className='aspect-video flex items-center justify-center'
            variants={items}
          >
            <Image
              src='/seds.webp'
              height={300}
              width={300}
              alt='SGAC logo'
              className='w-full'
            />
          </motion.div>
          <motion.div
            className='aspect-video flex items-center justify-center sm:col-span-full md:col-span-1'
            variants={items}
          >
            <Image
              src='/arcsste.gif'
              height={300}
              width={300}
              alt='SGAC logo'
              className='w-full'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
