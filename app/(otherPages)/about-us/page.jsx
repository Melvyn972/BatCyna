import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import About from "@/components/othersPages/about/About";
import Features from "@/components/othersPages/about/Features";
import FlatTitle from "@/components/othersPages/about/FlatTitle";
import Hero from "@/components/othersPages/about/Hero";
import ShopGram from "@/components/othersPages/about/ShopGram";
import Testimonials from "@/components/othersPages/about/Testimonials";
import React from "react";

export const metadata = {
  title: "A Propos|| CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <FlatTitle />
      <div className="container">
        <div className="line"></div>
      </div>
      <About />
      <Features />
      <Testimonials />
      <div className="container">
        <div className="line"></div>
      </div>
      <ShopGram />
      <Footer />
    </>
  );
}
