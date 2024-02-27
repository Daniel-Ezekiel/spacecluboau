import React from "react";
import InfoCard from "./InfoCard";
import { aimsProps } from "@/app/_types/types";

// interface benefitProps

export default function Benefits({ benefits }: { benefits: aimsProps[] }) {
  return (
    <section className='mb-28'>
      <div
        style={{ backgroundImage: "url(/space1.jpg)" }}
        className='bg-no-repeat bg-cover bg-center py-[10rem]'
      >
        <div className='max-w-[50rem] mx-auto p-4 text-center text-white'>
          <span>Why should you join Space Club? What do you gain?</span>
          <h2 className='mt-4 mb-2 text-3xl'>The Benefits</h2>
          <p>
            By joining Space Club, you become a part of the family of visionary
            individuals interested in facilitating your growth and exploring
            your hidden potential.
          </p>
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
    </section>
  );
}
