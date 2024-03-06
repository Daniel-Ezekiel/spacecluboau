"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, translateY: 25 },
    show: { opacity: 1, translateY: 0 },
  };

  return (
    <section className='bg-primary-dark text-white'>
      <motion.div
        className='max-w-[77.5rem] mx-auto p-4 py-[5.5rem] grid gap-6 text-base sm:grid-cols-2 xl:grid-cols-4'
        variants={container}
        initial='hidden'
        whileInView='show'
      >
        <motion.p
          className='my-4 text-2xl text-center sm:col-span-full'
          variants={item}
        >
          not just space enthusiasts, we are{" "}
          <span className='font-bold'>THE</span> Commmunity!
        </motion.p>

        <motion.div
          className='flex flex-col items-center gap-3 border border-primary-gold-light p-10 xl:px-7'
          variants={item}
        >
          <h3 className='font-bold text-center text-5xl'>
            11 <span className='block text-lg'>Divisions</span>
          </h3>
          <p className='text-center'>
            From Rocketry, Space Policy and Law to Software Engineering, Drones
            and General Aviation Systems, there are multiple divisions you could
            join depending on your interests.
          </p>
        </motion.div>

        <motion.div
          className='flex flex-col items-center gap-3 border border-primary-gold-light p-10 xl:px-7'
          variants={item}
        >
          <h3 className='font-bold text-center text-5xl'>
            50+ <span className='block text-lg'>Intellectuals</span>
          </h3>
          <p className='text-center'>
            With over 50 Intellectuals from different fields, knowledge
            acquisition and exchange happens consistently in a relaxed and
            fulfilling atmosphere.
          </p>
        </motion.div>

        <motion.div
          className='flex flex-col items-center gap-3 border border-primary-gold-light p-10 xl:px-7'
          variants={item}
        >
          <h3 className='font-bold text-center text-5xl'>
            5+ <span className='block text-lg'>Disciplines</span>
          </h3>
          <p className='text-center'>
            In Space Club, there is space for everyone. We are spread out across
            different disciplines, from STEM to Social Sciences and even the
            Arts. There is definitely enough space for you.
          </p>
        </motion.div>

        <motion.div
          className='flex flex-col items-center gap-3 border border-primary-gold-light p-10 xl:px-7'
          variants={item}
        >
          <h3 className='font-bold text-center text-5xl'>
            75+ <span className='block text-lg'>Professionals</span>
          </h3>
          <p className='text-center'>
            Space Club members possess a variety of professional skillsets
            through which many have built and are building a career. There are
            no idle hands in Space Club as we are a focused and committed group
            on individuals.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
