import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Topbar from "@/components/headers/Topbar";
import Products from "@/components/homes/home-search/Products";
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
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Recherche</div>
        </div>
      </div>
      <Products />
      <Footer />
    </>
  );
}
