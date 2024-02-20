import React from "react";
import MainLayout from "./_layouts/MainLayout";
import InfoCard from "./_components/InfoCard";

const aimsAndObjectives = [
  {
    title: "Promotoing Awareness",
    desc: "Space Club OAU conducts diverse events like workshops, seminars, and exhibitions to raise awareness about space science and technology among students. By showcasing practical applications and breakthroughs, the club ignites curiosity and appreciation for space-related fields, inspiring future scientists and engineers.",
  },
  {
    title: "STEM Capacity Building",
    desc: "Through workshops, mentorship programs, and projects, Space Club OAU equips students with skills in science, technology, engineering, and mathematics (STEM). These initiatives empower students to deepen their understanding and pursue careers in space-related industries, ensuring a competent workforce for the future.",
  },
  {
    title: "Partnerships and Collaborations",
    desc: "Establish partnerships and collaborations with the African Regional Center for Space Science and Technology Education (ARCSSTE) and other relevant organizations, both locally and internationally, to leverage resources and expertise for the advancement of space science education and research.",
  },
  {
    title: "Research-based Learning",
    desc: "Space Club OAU encourages students to explore new ideas and undertake research projects in space-related fields. By fostering creativity and experimentation, the club empowers students to develop solutions to real-world problems, contributing to the advancement of space science and technology.",
  },
  {
    title: "Sensitizaton and Education",
    desc: "Through educational programs and outreach activities, Space Club OAU educates students about the significance of space exploration and its impact on society. By promoting inclusivity and diversity in STEM education, the club empowers students to engage with complex issues and advocate for positive change in space-related fields.",
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

      <section className='max-w-[77.5rem] mx-auto p-4 py-20 lg:px-20'>
        <div className='mt-6 lg:flex gap-4'>
          <div className='border-l-2 border-l-primary-gold-light flex items-center'>
            <h2 className='pl-2 font-bold text-2xl capitalize lg:w-[13rem] lg:text-3xl'>
              The Space Club Vision
            </h2>
          </div>
          <p className='mt-4'>
            Space Club OAU, a Non-Profit established by a group of visionary
            students to promote awareness around Space, Science and
            Technology(SST) and to also build STEM capacity in Nigerian
            Universities particularly Obafemi Awolowo University(OAU).
          </p>
        </div>

        <div className='hidden lg:block mt-12 mx-auto h-1 w-20  border-t-8 border-dotted border-primary-gold-dark'></div>

        <div className='mt-6 lg:flex lg:flex-row-reverse gap-6'>
          <div className='w-[20rem] border-l-2 border-l-primary-gold-light flex items-center lg:pr-8 lg:border-l-0 lg:border-r-2 lg:border-r-primary-gold-light lg:text-right'>
            <h2 className='pl-2 font-bold text-2xl capitalize lg:text-3xl'>
              Our mission
            </h2>
          </div>
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

        <div className='max-w-[77.5rem] mx-auto -mt-[10rem] p-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-6'>
          {aimsAndObjectives.map((aim, i) => (
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
    </MainLayout>
  );
}
