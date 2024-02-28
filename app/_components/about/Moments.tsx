import React from "react";
import SectionTitle from "../global/SectionTitle";

const moments: { id: number; info: string }[] = [
  {
    id: 1,
    info: "We hosted the first SpaceVision Conference in Africa.",
  },
  {
    id: 2,
    info: "We hosted the first SpaceVision Conference in Africa.",
  },
  {
    id: 3,
    info: "We hosted the first SpaceVision Conference in Africa.",
  },
  {
    id: 4,
    info: "We hosted the first SpaceVision Conference in Africa.",
  },
  {
    id: 5,
    info: "We hosted the first SpaceVision Conference in Africa.",
  },
  {
    id: 6,
    info: "We hosted the first SpaceVision Conference in Africa.",
  },
  {
    id: 7,
    info: "We hosted the first SpaceVision Conference in Africa.",
  },
  {
    id: 8,
    info: "We hosted the first SpaceVision Conference in Africa.",
  },
  {
    id: 9,
    info: "We hosted the first SpaceVision Conference in Africa.",
  },
  {
    id: 10,
    info: "We hosted the first SpaceVision Conference in Africa.",
  },
];

export default function Moments() {
  return (
    <section className='p-4 py-20 bg-black text-white'>
      <div className='max-w-[70.5rem] mx-auto'>
        <div>
          <SectionTitle title='Notable Moments in our History' />
          <p className='max-w-[45rem] mt-10 mx-auto text-center'>
            Here at Space Club OAU, we have built up quite a reputation. Here
            are some of the moments we have garnered over the years
          </p>
        </div>

        <div className='mt-12 md:mt-16'>
          <ul className='pl-8 list-disc flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-6 sm:gap-x-10'>
            {moments.map((moment) => (
              <li key={moment.id}>{moment.info}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
