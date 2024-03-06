"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className='max-w-[77.5rem] mx-auto p-4 py-20 lg:px-20'>
      <div className='mt-6 lg:flex gap-4'>
        <motion.div
          className='border-l-2 border-l-primary-gold-light flex items-center'
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='w-full pl-2 font-bold text-2xl capitalize lg:w-[13rem] lg:text-3xl'>
            The Space Club Vision
          </h2>
        </motion.div>
        <motion.p
          className='mt-4'
          initial={{ opacity: 0, translateX: 40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          Space Club OAU, a Non-Profit established by a group of visionary
          students to promote awareness around Space, Science and
          Technology(SST) and to also build STEM capacity in Nigerian
          Universities particularly Obafemi Awolowo University(OAU).
        </motion.p>
      </div>

      <motion.div
        className='hidden lg:block mt-12 mx-auto h-1 w-20  border-t-8 border-dotted border-primary-gold-dark'
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <div className='mt-6 lg:flex lg:flex-row-reverse gap-6'>
        <motion.div
          className='max-w-[20rem] border-l-2 border-l-primary-gold-light flex items-center lg:pr-8 lg:border-l-0 lg:border-r-2 lg:border-r-primary-gold-light lg:text-right'
          initial={{ opacity: 0, translateX: 50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='w-fit pl-2 font-bold text-2xl capitalize lg:text-3xl'>
            Our mission
          </h2>
        </motion.div>
        <motion.p
          className='mt-4'
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          Space Club OAU, as the brain-child of the African Regional Center for
          Space Science and Technology Education (ARCSSTE), was conceived with
          the purpose of achieving the &lsquo;Catching them Young&rsquo;
          Initiative. Based on this, we are driven to continuously indulge in a
          sustained effort to sensitize, educate, inform and create awareness
          for students in tetiary institutions in all aspects of Space, Science
          Technology and Research and its benefits to mankind.
        </motion.p>
      </div>
    </section>
  );
}
