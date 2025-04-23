import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Brands2 from "@/components/othersPages/brands/Brands2";
import React from "react";

export const metadata = {
  title: "Marque 2 || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Marque v2</div>
        </div>
      </div>

      <Brands2 />
      <Footer />
    </>
  );
}
