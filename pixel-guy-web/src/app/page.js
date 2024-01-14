"use client";
import { HomepageHeroCarousel } from "@/components/HomepageHeroCarousel";
import heroImg1 from "../assets/hero-1.png";
import heroImg2 from "../assets/hero-2.png";
import heroImg3 from "../assets/hero-3.png";
import heroImg4 from "../assets/hero-4.png";

const carouselContent = [
  {
    src: heroImg1,
    title: "Game Development",
  },
  {
    src: heroImg2,
    title: "Product Design",
  },
  {
    src: heroImg3,
    title: "Software Development",
  },
  {
    src: heroImg4,
    title: "Architecture Visualization",
  },
];

export default function Home() {
  return (
    <>
      <HomepageHeroCarousel>{carouselContent}</HomepageHeroCarousel>
    </>
  );
}
