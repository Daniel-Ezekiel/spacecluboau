import React from "react";
import MainLayout from "../_layouts/MainLayout";
import PageTitle from "../_components/global/PageTitle";
import Overview from "../_components/about/Overview";

export default function page() {
  return (
    <MainLayout>
      <PageTitle title='About Space Club OAU' />
      <Overview />
    </MainLayout>
  );
}
