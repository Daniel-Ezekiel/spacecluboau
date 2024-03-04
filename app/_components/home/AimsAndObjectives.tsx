import React from "react";
import InfoCard from "./InfoCard";
import { aimsProps } from "@/app/_types/types";

export default function AimsAndObjectives({
  aimsAndObjectives,
}: {
  aimsAndObjectives: aimsProps[];
}) {
  return (
    <section className='mb-28'>
      <div
        style={{ backgroundImage: "url(/bg-aims.webp)" }}
        className='bg-no-repeat bg-cover bg-center py-[10rem]'
      >
        <div className='max-w-[50rem] mx-auto p-4 text-center text-white'>
          <span>What do we hope to achieve?</span>
          <h2 className='mt-4 mb-2 text-3xl'>Our Aims and Objectives</h2>
          <p>
            At Space Club, we are continuously driven to deliver impactful
            experiences that facilitate growth and development to all concerned.
          </p>
        </div>
      </div>

      <div className='max-w-[77.5rem] mx-auto -mt-[10rem] p-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-6'>
        {aimsAndObjectives.map((aim: aimsProps, i: number) => (
          <InfoCard
            key={i}
            cardTitle={aim.title}
            cardText={aim.desc}
            className={i > 2 ? "lg:col-span-3" : "lg:col-span-2"}
          />
        ))}
      </div>
    </section>
  );
}
