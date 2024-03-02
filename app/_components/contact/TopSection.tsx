import React from "react";
import SectionTitle from "../global/SectionTitle";

export default function TopSection() {
  return (
    <section className='max-w-[70rem] mx-auto py-24'>
      <SectionTitle title='Get in Touch' />
      <p className='max-w-[45rem] mx-auto mt-12 text-center'>
        If you want to learn about Space, its exploration, current news about
        Space or even Drones, General Aviation and Rocketry.
        <br />
        <br />
        We at Space Club are available to discuss these subjects, including your
        growth goals as a member.
      </p>
    </section>
  );
}
