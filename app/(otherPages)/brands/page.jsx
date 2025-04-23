import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Brands from "@/components/othersPages/brands/Brands";
import React from "react";

export const metadata = {
  title: "Marque || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Marque</div>
        </div>
      </div>

      <Brands />
      <Footer />
    </>
  );
}
