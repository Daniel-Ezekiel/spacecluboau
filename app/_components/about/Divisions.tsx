import React from "react";
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
            {divisions.map((division) => (
              <li key={division}>{division}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
