"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../global/SectionTitle";

export default function TopSection() {
  return (
    <section className='max-w-[70rem] mx-auto py-24'>
      <SectionTitle title='Get in Touch' />
      <motion.p
        className='max-w-[45rem] mx-auto mt-12 p-4 text-center'
        initial={{ opacity: 0, translateY: -25 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        If you want to learn about Space, its exploration, current news about
        Space or even Drones, General Aviation and Rocketry.
        <br />
        <br />
        We at Space Club are available to discuss these subjects, including your
        growth goals as a member.
      </motion.p>
    </section>
  );
}
