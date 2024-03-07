"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../global/SectionTitle";

const moments: { id: number; info: string }[] = [
  {
    id: 1,
    info: "We hosted the first SpaceVision Conference in Africa in affiliation with SEDS.",
  },
  {
    id: 2,
    info: "Our team won the NASA Space Apps Nigeria hackathon in Lagos, 2018.",
  },
  {
    id: 3,
    info: "Three start-up companies have originated from Space Club OAU including Flux(Blueloop) and AirSync. ",
  },
  {
    id: 4,
    info: "Space Club OAU has some of best CAD developers in OAU and Nigeria.",
  },
  {
    id: 5,
    info: "Space Club OAU has also budded exceptional Software Engineers and Product Designers, arguably the best in OAU and Nigeria.",
  },
  {
    id: 6,
    info: "Here at Space Club, we have built over 10 drones with over 150 successful flights.",
  },
  {
    id: 7,
    info: "We are affiliated with several overseas Universities through SEDS and SGAC where we collaborate on projects.",
  },
  {
    id: 8,
    info: "As a member of the SGAC, we are proudly Nigeria's most active Student Club on Space Science and Technology.",
  },
];

export default function Moments() {
  return (
    <section className='mb-28 p-4 py-20 bg-black text-white'>
      <div className='max-w-[70.5rem] mx-auto'>
        <div>
          <SectionTitle title='Notable Moments in our History' />
          <motion.p
            className='max-w-[45rem] mt-10 mx-auto text-center'
            initial={{ opacity: 0, translateY: -25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Here at Space Club OAU, we have built up quite a reputation. Here
            are some of the moments we have garnered over the years
          </motion.p>
        </div>

        <div className='mt-12 md:mt-16'>
          <ul className='pl-8 list-disc flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-6 sm:gap-x-10 xl:gap-x-24'>
            {moments.map((moment) => (
              <motion.li
                key={moment.id}
                initial={{ opacity: 0, translateY: 25 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: moment.id * 0.1 }}
                viewport={{ once: true }}
              >
                {moment.info}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
