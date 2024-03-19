import React from "react";
import MainLayout from "../_layouts/MainLayout";
import PageTitle from "../_components/global/PageTitle";
import Overview from "../_components/about/Overview";
import Divisions from "../_components/about/Divisions";
import Affiliations from "../_components/about/Affiliations";
import Moments from "../_components/about/Moments";
import Contact from "../_components/global/Contact";
import VisionForYou from "../_components/about/VisionForYou";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Club OAU -  Space for Everyone.",
  description:
    "Space Club OAU, a Non-Profit established by a group of visionary students to promote awareness around Space, Science and Technology(SST) and to also build STEM capacity in Nigeriann Universities",
  keywords: ["Space Club OAU", "Space Club", "Space Education in Nigerian"],
  authors: [{ name: "Daniel", url: "https://danielezekiel.vercel.app" }],
  creator: "Daniel B. Ezekiel",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: "/about" },
  openGraph: {
    images: "/logo-black.webp",
    url: "/about",
    type: "website",
    title: "About - Space Club OAU",
    description:
      "Space Club OAU was established by a set of visionary students who had a passion to build awareness around Space Science and Technology. Their aim was to build STEM capacity in African Universities.",
  },
  icons: {
    icon: [
      { url: "/logo-black.webp" },
      new URL("/logo-black.webp", "https://spaceclub-oau.vercel.app"),
      { url: "/logo-white.webp", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/logo-black.webp"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "About Space Club OAU",
    description:
      "Space Club OAU was established by a set of visionary students who had a passion to build awareness around Space Science and Technology. Their aim was to build STEM capacity in African Universities.",
    // siteId: '1467726470533754880',
    creator: "Daniel B. Ezekiel",
    // creatorId: '1467726470533754880',
    images: ["https://spaceclub-oau.vercel.app/logo-black.webp"], // Must be an absolute URL
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

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
