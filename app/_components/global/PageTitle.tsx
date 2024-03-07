"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PageTitle({ title }: { title: string }) {
  return (
    <section className='p-4 py-12 bg-black text-white'>
      <motion.h1
        className='font-raleway font-bold text-center text-3xl leading-relaxed md:text-4xl'
        initial={{ opacity: 0, translateY: -25 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
    </section>
  );
}
