import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Brands from "@/components/homes/home-main/Brands";
import Features from "@/components/homes/home-main/Features";
import Banner from "@/components/homes/home-main/Banner";
import Collections from "@/components/homes/home-main/Collections";
import Collections2 from "@/components/homes/home-main/Collections2";
import Hero from "@/components/homes/home-main/Hero";
import Marquee from "@/components/homes/home-main/Marquee";
import Products from "@/components/homes/home-main/Products";
import Products2 from "@/components/homes/home-main/Products2";
import Testimonials from "@/components/homes/home-main/Testimonials";
import Topbar from "@/components/homes/home-main/Topbar";
import React from "react";

export const metadata = {
    title: "CYNA Store",
    description: "CYNA Store",
};
export default function page() {
    return (
        <>
            <Topbar />
            <Header />
            <Hero />
            <Collections />
            <Collections2 />
            <Banner />
            <Marquee />
            <Products />
            <Features />
            <Products2 />
            <Testimonials />
            <Brands />
            <Footer bgColor="background-gray" />
        </>
    );
}
