import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className='font-semibold text-center text-2xl relative after:absolute after:h-1 after:w-[10rem] after:left-1/2 after:top-10 after:-translate-x-1/2 after:bg-primary-gold-light after:rounded-full md:col-span-full md:mb-4 md:text-4xl md:after:top-12'>
      {title}
    </h2>
  );
}
