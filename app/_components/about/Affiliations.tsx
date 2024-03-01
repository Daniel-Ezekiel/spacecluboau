import React from "react";
import SectionTitle from "../global/SectionTitle";
import Image from "next/image";

export default function Affiliations() {
  return (
    <section className='p-4 py-20 xl:py-28'>
      <div className='max-w-[77.5rem] mx-auto'>
        <SectionTitle title='Our Affiliations' />

        <div className='mt-12 md:mt-16 px-10 grid place-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 md:px-0'>
          <div className='aspect-video flex items-center justify-center'>
            <Image
              src='/sgac.jpg'
              height={300}
              width={300}
              alt='SGAC logo'
              className='w-full'
            />
          </div>
          <div className='aspect-video flex items-center justify-center'>
            <Image
              src='/seds.webp'
              height={300}
              width={300}
              alt='SGAC logo'
              className='w-full'
            />
          </div>
          <div className='aspect-video flex items-center justify-center sm:col-span-full md:col-span-1'>
            <Image
              src='/arcsste.gif'
              height={300}
              width={300}
              alt='SGAC logo'
              className='w-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
