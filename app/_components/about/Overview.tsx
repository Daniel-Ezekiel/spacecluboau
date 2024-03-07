"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../global/SectionTitle";

export default function Overview() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item1 = {
    hidden: { opacity: 0, translateX: -25 },
    show: { opacity: 1, translateX: 0 },
  };

  const item2 = {
    hidden: { opacity: 0, translateX: 25 },
    show: { opacity: 1, translateX: 0 },
  };

  return (
    <motion.section
      className='max-w-[70rem] mx-auto p-4 py-20 grid gap-5 md:grid-cols-2 md:gap-x-8 place-items-center lg:gap-x-12 xl:py-28'
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
    >
      <SectionTitle title='We are Space Club OAU' />
      <motion.p
        className='text-justify md:mt-6'
        variants={item1}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Space Club OAU was established by a set of visionary students who had a
        passion to build awareness around Space Science and Technology. Their
        aim was to build STEM capacity in African Universities, particularly
        Obafemi Awolowo University.
        <br />
        <br />
        Space Club OAU is affiliated with the African Regional Centre for Space
        Science and Technology Education in Africa (ARCSSTE). We are also the
        Nigerian Headquarters of Students for the Exploration and Development of
        Space in Nigeria (seds.org). Also, as a member of the Space Generation
        Advisory Council (SGAC), we are the most active student club in Nigeria
        with respect to Space Science and Technology.
        <br />
        <br />
        At Space Club OAU, we are driven and focused to deliver quality Space
        Education to the University and its environs thereby boosting Space
        research and its application for the growth of all involved.
      </motion.p>
      <motion.div
        className='row-start-2 mt-6 aspect-video flex items-center justify-center w-full h-[8rem] bg-black py-8 rounded-md md:col-start-2 md:h-full lg:rounded-tr-full lg:rounded-br-full'
        variants={item2}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src={"/logo-white.webp"}
          width={100}
          height={100}
          alt='Space Club OAU logo'
          className='md:w-64 md:h-64'
        />
      </motion.div>
    </motion.section>
  );
}
