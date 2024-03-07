"use client";
import React from "react";
import { motion } from "framer-motion";
import InfoCard from "../home/InfoCard";

const visions: { id: number; title: string; desc: string }[] = [
  {
    id: 1,
    title: "Capacity Building",
    desc: "Space Club OAU is driven to equip you with skills and knowledge in Space Science and Technology, STEM and other relevant fields to enhance your capacity for personal and professional growth.",
  },
  {
    id: 2,
    title: "Community Engagement",
    desc: "At Space Club OAU, we are a vibrant community where you can connect with like-minded peers, industry professionals and prospective mentors. Thus fostering a sense of belonging, collaboration and support.",
  },

  {
    id: 3,
    title: "Education and Awareness",
    desc: "Space Club OAU is committed to empowering you in knowledge about Space Science and Technology through educational events, informational campaign and outreaches.",
  },
  {
    id: 4,
    title: "Skill Development",
    desc: "As a member, you will find opportunities to develop your skillset in STEM disciplines in preparation for future academic and professional endeavors by building problem-solving, critical thinking and technical expertise skills.",
  },
  {
    id: 5,
    title: "Innovation and Research",
    desc: "By being a member of  this prestigious student community, you will have access to opportunites to engage in innovative research project encouraging your curiosity and creativity, ultimately empowering you to contribute the advancements in Space Science and Technology.",
  },
];

export default function VisionForYou() {
  const container = {
    hidden: {
      opacity: 0,
    },
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
    <section className='mb-28'>
      <div
        style={{ backgroundImage: "url(/bg-vision.webp)" }}
        className='bg-no-repeat bg-cover bg-center py-[10rem]'
      >
        <motion.div
          className='max-w-[50rem] mx-auto p-4 text-center text-white'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          <motion.span variants={item} viewport={{ once: true }}>
            What are our plans for you?
          </motion.span>
          <motion.h2
            className='mt-4 mb-2 text-3xl'
            variants={item}
            viewport={{ once: true }}
          >
            Our Vision for You
          </motion.h2>
          <motion.p variants={item} viewport={{ once: true }}>
            As a Space Club Member, your growth is our top priority. Space Club
            OAU is ready to help you reach your potential and achieve your
            goals.
          </motion.p>
        </motion.div>
      </div>

      <div className='max-w-[77.5rem] mx-auto -mt-[10rem] p-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-6'>
        {visions.map((vision, i) => (
          <InfoCard
            key={vision.id}
            cardTitle={vision.title}
            cardText={vision.desc}
            cardIndex={i}
            className={vision.id > 3 ? "lg:col-span-3" : "lg:col-span-2"}
          />
        ))}
      </div>
    </section>
  );
}
