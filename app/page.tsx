import React from "react";
import MainLayout from "./_layouts/MainLayout";
import InfoCard from "./_components/InfoCard";

const aimsAndObjectives = [
  {
    title: "Knowledge Exchange",
    desc: "We aim to give students the opportunity to share acquired knowledge with their colleagues during club activities in a relaxing and fulfilling atmosphere.",
  },
  {
    title: "SST Sustainability",
    desc: "Sustaining all efforts and resources (human and material) as well as other forms of investment in Space Science and Technology(SST)",
  },
  {
    title: "SST Empowerment",
    desc: "Space Club OAU aims to inspire and educate youths and students alike to learn more about SPace Science and Technolofy and also about NIgeria's Space Program and its benefits.",
  },
  {
    title: "Research-based Learning",
    desc: "The promotion of research-based learning in Space Science and Technology through hands-on experience, practical project, audio-visuals and multimedia presentations of space exploration is important.",
  },
  {
    title: "Proper SST Education",
    desc: "At Space Club, we also aim to address and eradicate teh misconceptions of the public about Space, Science and Technology arising from wrong information imbued over time from peers, colleagues, popular literature and general media.",
  },
];

export default function page() {
  return (
    <MainLayout>
      <div
        style={{ backgroundImage: "url('/space2.jpg')" }}
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

      <section className='max-w-[77.5rem] mx-auto p-4 py-20'>
        <div>
          <h2 className='border-l-2 border-l-primary-gold-light pl-2 font-bold text-2xl capitalize'>
            The Space Club Vision
          </h2>
          <p className='mt-4'>
            Space Club OAU, a Non-Profit established by a group of visionary
            students to promote awareness around Space, Science and
            Technology(SST) and to also build STEM capacity in Nigerian
            Universities particularly Obafemi Awolowo University(OAU).
          </p>
        </div>

        <div className='mt-6'>
          <h2 className='border-l-2 border-l-primary-gold-light pl-2 font-bold text-2xl capitalize'>
            Our mission
          </h2>
          <p className='mt-4'>
            Space Club OAU, as the brain-child of the African Regional Center
            for Space Science and Technology Education (ARCSSTE), was conceived
            witht he prurpose fo achieving the &lsquo;Catching them Young&rsquo;
            Initiative. Based on this, we are driven to continuously indulge in
            a sustained effort to sensitize, educate, inform and create
            awareness for students in tetiary institutions in all aspects of
            Space, Science Technology and Research and its benefits to mankind.
          </p>
        </div>
      </section>

      <section>
        <div
          style={{ backgroundImage: "url(/space1.webp)" }}
          className='bg-no-repeat bg-cover bg-center py-[10rem]'
        >
          <div className='max-w-[50rem] mx-auto p-4 text-center text-white'>
            <span>What do we hope to achieve?</span>
            <h2 className='mt-4 mb-2 text-3xl'>Our Aims and Objectives</h2>
            <p>
              At Space Club, we are continuously driven to delive impactful
              experiences that facilitate growth and development to all
              concerned.
            </p>
          </div>
        </div>

        <div className='max-w-[77.5rem] mx-auto -mt-[10rem] p-4 sm:grid sm:grid-cols-2 lg:grid-cols-3'>
          {aimsAndObjectives.map((aim, i) => (
            <InfoCard
              key={i}
              cardTitle={aim.title}
              cardText={aim.desc}
              cardSpan={i > 2 ? 2 : 1}
              cardIndex={i}
            />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
