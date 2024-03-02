import React from "react";
import MainLayout from "../_layouts/MainLayout";
import PageTitle from "../_components/global/PageTitle";
import TopSection from "../_components/contact/TopSection";
import Contact from "../_components/contact/Contact";

export default function page() {
  return (
    <MainLayout>
      <PageTitle title='Contact' />
      <TopSection />
      <Contact />
    </MainLayout>
  );
}
