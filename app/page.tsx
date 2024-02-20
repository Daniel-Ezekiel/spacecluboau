import React from "react";
import MainLayout from "./_layouts/MainLayout";
import InfoCard from "./_components/InfoCard";
import Link from "next/link";

const aimsAndObjectives = [
  {
    title: "Promoting Awareness",
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

const benefits = [
  {
    title: "Growth",
    desc: "Space Club OAU engages in activities that will increase your capacity tremendously in things around space science and technology, philosophy and arts. At Space Club OAU, you will definitely develop your potential and unlock new opportunities for your success.",
  },
  {
    title: "Community",
    desc: "Here in Space Club OAU, you will build meaninful connections with like-minded peers, industry professionals and probably form your best squad thereby fostering a sense of belonging and collboration. The Club provides valuable network of support and encouragement for its members.",
  },
  {
    title: "Skill Development",
    desc: "Members of Space Club OAU have access to resources, training, and mentorship opportunities that facilitate skill development in STEM disciplines. Through practical projects, teamwork, and leadership roles, members can enhance their problem-solving abilities, critical thinking skills, and technical expertise, preparing them for future academic and professional endeavors.",
  },
  {
    title: "Education and Awareness",
    desc: "Space Club OAU promotes education and awareness about Space Science and Technology among its members and the wider community. Through educational events, outreach activities, and informational campaigns, we will help you know your role in Space, Science and Technology and stay informed about the latest developments and opportunities in the field, inspiring curiosity and interest in space-related topics.",
  },
  {
    title: "Innovation and Research",
    desc: "Joining Space Club OAU provides members with opportunities to engage in innovative research projects and exploration initiatives. By encouraging curiosity, experimentation, and creativity, the club empowers members to explore new ideas, develop groundbreaking technologies, and contribute to the advancement of space science and technology through their research endeavors.",
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
            with the purpose of achieving the &lsquo;Catching them Young&rsquo;
            Initiative. Based on this, we are driven to continuously indulge in
            a sustained effort to sensitize, educate, inform and create
            awareness for students in tetiary institutions in all aspects of
            Space, Science Technology and Research and its benefits to mankind.
          </p>
        </div>
      </section>

      <section className='mb-28'>
        <div
          style={{ backgroundImage: "url(/space1.webp)" }}
          className='bg-no-repeat bg-cover bg-center py-[10rem]'
        >
          <div className='max-w-[50rem] mx-auto p-4 text-center text-white'>
            <span>What do we hope to achieve?</span>
            <h2 className='mt-4 mb-2 text-3xl'>Our Aims and Objectives</h2>
            <p>
              At Space Club, we are continuously driven to deliver impactful
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

      <section className='bg-primary-dark text-white'>
        <div className='max-w-[77.5rem] mx-auto p-4 py-[5.5rem] grid gap-6 text-base sm:grid-cols-2 xl:grid-cols-4'>
          <p className='my-4 text-2xl text-center sm:col-span-full'>
            not just space enthusiasts, we are{" "}
            <span className='font-bold'>THE</span> Commmunity!
          </p>

          <div className='flex flex-col items-center gap-3 border border-primary-gold-light p-10 xl:px-7'>
            <h3 className='font-bold text-center text-5xl'>
              11 <span className='block text-lg'>Divisions</span>
            </h3>
            <p className='text-center'>
              From Rocketry, Space Policy and Law to Software Engineering,
              Drones and General Aviation Systems, there are multiple divisions
              you could join depending on your interests.
            </p>
          </div>

          <div className='flex flex-col items-center gap-3 border border-primary-gold-light p-10 xl:px-7'>
            <h3 className='font-bold text-center text-5xl'>
              50+ <span className='block text-lg'>Intellectuals</span>
            </h3>
            <p className='text-center'>
              With over 50 Intellectuals from different fields, knowledge
              acquisition and exchange happens consistently in a relaxed and
              fulfilling atmosphere.
            </p>
          </div>

          <div className='flex flex-col items-center gap-3 border border-primary-gold-light p-10 xl:px-7'>
            <h3 className='font-bold text-center text-5xl'>
              5+ <span className='block text-lg'>Disciplines</span>
            </h3>
            <p className='text-center'>
              In Space Club, there is space for everyone. We are spread out
              across different disciplines, from STEM to Social Sciences and
              even the Arts. There is definitely enough space for you.
            </p>
          </div>

          <div className='flex flex-col items-center gap-3 border border-primary-gold-light p-10 xl:px-7'>
            <h3 className='font-bold text-center text-5xl'>
              75+ <span className='block text-lg'>Professionals</span>
            </h3>
            <p className='text-center'>
              Space Club members possess a variety of professional skillsets
              through which many have built and are building a career. There are
              no idle hands in Space Club as we are a focused and committed
              group on individuals.
            </p>
          </div>
        </div>
      </section>

      <section className='mb-28'>
        <div
          style={{ backgroundImage: "url(/space1.jpg)" }}
          className='bg-no-repeat bg-cover bg-center py-[10rem]'
        >
          <div className='max-w-[50rem] mx-auto p-4 text-center text-white'>
            <span>Why should you join Space Club? What do you gain?</span>
            <h2 className='mt-4 mb-2 text-3xl'>The Benefits</h2>
            <p>
              By joining Space Club, you become a part of the family of
              visionary individuals interested in facilitating your growth and
              exploring your hidden potential.
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

      <section className='max-w-[45rem] mx-auto py-28 px-5 flex flex-col gap-2 items-center justify-center bg-primary-dark text-white md:mb-28 md:py-20 md:px-10'>
        <p className='mb-6 p-5 border-y border-y-primary-gold-dark text-3xl text-center leading-10 md:px-10 md:max-w-[70%] md:mx-auto'>
          Ready to join? <br />
          Become a member of Space Club OAU today.
        </p>

        <Link
          href='/contact'
          className='w-[10rem] h-12 flex items-center justify-center bg-primary-gold-light uppercase font-medium text-center'
        >
          Reach Out
        </Link>
      </section>
    </MainLayout>
  );
}
