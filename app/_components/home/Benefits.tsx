"use client";
import React from "react";
import { motion } from "framer-motion";
import InfoCard from "./InfoCard";
import { aimsProps } from "@/app/_types/types";

// interface benefitProps

export default function Benefits({ benefits }: { benefits: aimsProps[] }) {
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
      viewport={{ once: true }}
    >
      <div
        style={{ backgroundImage: "url(/bg-benefits.webp)" }}
        className='bg-no-repeat bg-cover bg-center py-[10rem]'
      >
        <div className='max-w-[50rem] mx-auto p-4 text-center text-white'>
          <motion.span variants={item} viewport={{ once: true }}>
            Why should you join Space Club? What do you gain?
          </motion.span>
          <motion.h2
            className='mt-4 mb-2 text-3xl'
            variants={item}
            viewport={{ once: true }}
          >
            The Benefits
          </motion.h2>
          <motion.p variants={item} viewport={{ once: true }}>
            By joining Space Club, you become a part of the family of visionary
            individuals interested in facilitating your growth and exploring
            your hidden potential.
          </motion.p>
        </div>
      </div>

      <div className='max-w-[77.5rem] mx-auto -mt-[10rem] p-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-6'>
        {benefits.map((aim, i) => (
          <InfoCard
            key={i}
            cardTitle={aim.title}
            cardText={aim.desc}
            cardIndex={i}
            className={i > 2 ? "lg:col-span-3" : "lg:col-span-2"}
          />
        ))}
      </div>
    </motion.section>
  );
}
