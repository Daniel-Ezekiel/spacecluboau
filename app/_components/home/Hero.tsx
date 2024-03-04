import React from "react";

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: "url('/bg-hero.webp')" }}
      className='relative pt-[15rem] bg-no-repeat bg-cover bg-center before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-black before:bg-opacity-40'
    >
      <section className='relative p-4 pt-[8rem] pb-[8rem] max-w-[75rem] h-full mx-auto z-10 text-white'>
        <div className='max-w-[25rem] xl:max-w-[30rem]'>
          <h1 className='flex flex-col gap-2 font-raleway font-black text-3xl xl:text-5xl'>
            we are{" "}
            <span className='w-fit p-2 px-4 rounded-2xl bg-primary-gray text-primary-dark'>
              SpaceClub OAU
            </span>
          </h1>
          <p className='mt-3'>
            Join us today! Let us be your guide on your journey through this
            vastness called Space.
          </p>
        </div>
      </section>
    </div>
  );
}
