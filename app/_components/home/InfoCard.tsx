"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";

type CardProps = {
  cardTitle: string;
  cardText: string;
  cardIndex: number;
  className?: string;
};

export default function InfoCard({
  cardTitle,
  cardText,
  cardIndex,
  className,
}: CardProps) {
  return (
    <motion.div
      className={`border-y border-l-2 border-primary-gold-light p-6 py-[4rem] flex flex-col justify-start bg-white shadow-xl sm:border sm:border-primary-gold-dark lg:border-0 lg:border-l-2 ${className}`}
      initial={{ opacity: 0, translateY: 25 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, ease: easeInOut, delay: cardIndex * 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className='mb-2 font-medium text-xl'>{cardTitle}</h3>
      <p className='text-base'>{cardText}</p>
    </motion.div>
  );
}
