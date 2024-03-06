import React from "react";
import MainLayout from "./_layouts/MainLayout";
import Hero from "./_components/home/Hero";
import About from "./_components/home/About";
import AimsAndObjectives from "./_components/home/AimsAndObjectives";
import Features from "./_components/home/Features";
import Benefits from "./_components/home/Benefits";
import Contact from "./_components/global/Contact";

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
      <Hero />
      <About />
      <AimsAndObjectives aimsAndObjectives={aimsAndObjectives} />
      <Features />
      <Benefits benefits={benefits} />
      <Contact />
    </MainLayout>
  );
}
