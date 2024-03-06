"use client";
import React from "react";
import { motion } from "framer-motion";
import InfoCard from "./InfoCard";
import { aimsProps } from "@/app/_types/types";

export default function AimsAndObjectives({
  aimsAndObjectives,
}: {
  aimsAndObjectives: aimsProps[];
}) {
  const container = {
    show: {
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
    <motion.section
      className='mb-28'
      variants={container}
      initial='hidden'
      whileInView='show'
    >
      <div
        style={{ backgroundImage: "url(/bg-aims.webp)" }}
        className='bg-no-repeat bg-cover bg-center py-[10rem]'
      >
        <div className='max-w-[50rem] mx-auto p-4 text-center text-white'>
          <motion.span variants={item}>What do we hope to achieve?</motion.span>
          <motion.h2 className='mt-4 mb-2 text-3xl' variants={item}>
            Our Aims and Objectives
          </motion.h2>
          <motion.p variants={item}>
            At Space Club, we are continuously driven to deliver impactful
            experiences that facilitate growth and development to all concerned.
          </motion.p>
        </div>
      </div>

      <div className='max-w-[77.5rem] mx-auto -mt-[10rem] p-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-6'>
        {aimsAndObjectives.map((aim: aimsProps, i: number) => (
          <InfoCard
            key={i}
            cardTitle={aim.title}
            cardText={aim.desc}
            cardVariants={item}
            className={i > 2 ? "lg:col-span-3" : "lg:col-span-2"}
          />
        ))}
      </div>
    </motion.section>
  );
}
