"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";

type CardProps = {
  cardTitle: string;
  cardText: string;
  cardVariants: {
    hidden: { opacity: number; translateY: number };
    show: { opacity: number; translateY: number };
  };
  className?: string;
};

export default function InfoCard({
  cardTitle,
  cardText,
  cardVariants,
  className,
}: CardProps) {
  return (
    <motion.div
      className={`border-y border-l-2 border-primary-gold-light p-6 py-[4rem] flex flex-col justify-start bg-white shadow-xl sm:border sm:border-primary-gold-dark lg:border-0 lg:border-l-2 ${className}`}
      variants={cardVariants}
      viewport={{ once: true }}
    >
      <h3 className='mb-2 font-medium text-xl'>{cardTitle}</h3>
      <p className='text-base'>{cardText}</p>
    </motion.div>
  );
}
