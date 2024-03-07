"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <motion.h2
      className={`${className} font-semibold text-center text-2xl relative after:absolute after:h-1 after:w-[10rem] after:left-1/2 after:top-10 after:-translate-x-1/2 after:bg-primary-gold-light after:rounded-full md:col-span-full md:mb-4 md:text-4xl md:after:top-12`}
      initial={{ opacity: 0, translateY: -25 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  );
}
