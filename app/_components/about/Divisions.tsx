"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../global/SectionTitle";

const divisions: string[] = [
  "Drones and General Aviation",
  "Rocketry",
  "Automated Guided Vehicles",
  "Robotics",
  "Software Engineering",
  "Business Development",
  "Geographic Information Systems (GIS)",
  "Computer-Aided Design (CAD)",
  "Machine Design",
  "Core Space Science and Technology",
  "Arts, Poetry and Illustrations around Space Science",
];

export default function Divisions() {
  return (
    <section className='p-4 py-20 bg-black text-white xl:py-28'>
      <div className='max-w-[70.5rem] mx-auto'>
        <SectionTitle title='Divisions in Space Club OAU' />

        <div className='mt-12 md:mt-16'>
          <ul className='pl-8 list-disc flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-6 sm:gap-x-10'>
            {divisions.map((division, i) => (
              <motion.li
                key={division}
                initial={{ opacity: 0, translateY: 25 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {division}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
