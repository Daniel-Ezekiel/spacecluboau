import React from "react";
import {
  IoLocation,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";
import SectionTitle from "../global/SectionTitle";
import { ContactForm } from "./Form";

export default function Contact() {
  return (
    <section
      style={{ backgroundImage: 'url("/space_club_oau_cover.jpg")' }}
      className='py-20 bg-cover bg-center bg-no-repeat text-white relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:bg-opacity-60'
    >
      <div className='relative max-w-[70rem] mx-auto p-4 grid z-10 md:grid-cols-2 md:gap-12'>
        <SectionTitle
          className='font-medium text-3xl text-center after:bg-transparent'
          title='Connect with us Anytime, Anywhere.'
        />

        <div className='mt-12'>
          <ul className='flex flex-col gap-3'>
            <li>
              <a
                href='http://'
                className='flex items-center gap-2'
                target='_blank'
              >
                <IoLocation size={24} color='#bc9159' /> Opposite Ajose Lecture
                Theatre, OAU, Ife.
              </a>
            </li>

            <li>
              <a
                href='mailto:official.spacecluboau@gmail.com'
                className='flex items-center gap-2'
              >
                <IoMail size={24} color='#bc9159' />{" "}
                official.spacecluboau@gmail.com
              </a>
            </li>

            <div className='mt-6 flex gap-4 md:justify-start'>
              <a
                href='https://www.linkedin.com/in/spaceclub-oau?trk=contact-info'
                className='hover:animate-pulse'
              >
                <IoLogoLinkedin size={28} />
              </a>
              <a
                href='https://instagram.com/spaceclub_oau'
                className='hover:animate-pulse'
              >
                <IoLogoInstagram size={28} />
              </a>
              <a
                href='https://x.com/spaceclub_oau'
                target='_blank'
                className='hover:animate-pulse'
              >
                <IoLogoTwitter size={28} />
              </a>
            </div>
          </ul>
        </div>

        <div className='row-start-2 mt-10 md:col-start-2 md:mt-0'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
