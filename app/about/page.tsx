import React from "react";
import MainLayout from "../_layouts/MainLayout";
import PageTitle from "../_components/global/PageTitle";
import Overview from "../_components/about/Overview";
import Divisions from "../_components/about/Divisions";
import Affiliations from "../_components/about/Affiliations";
import Moments from "../_components/about/Moments";
import Contact from "../_components/global/Contact";
import VisionForYou from "../_components/about/VisionForYou";

export default function page() {
  return (
    <MainLayout>
      <PageTitle title='About Space Club OAU' />
      <Overview />
      <VisionForYou />
      <Divisions />
      <Affiliations />
      <Moments />
      <Contact />
    </MainLayout>
  );
}
