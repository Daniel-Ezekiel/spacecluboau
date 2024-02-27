import React from "react";

export default function PageTitle({ title }: { title: string }) {
  return (
    <section className='p-4 py-12 bg-black text-white'>
      <h1 className='font-raleway font-bold text-center text-3xl leading-relaxed md:text-4xl'>
        {title}
      </h1>
    </section>
  );
}
