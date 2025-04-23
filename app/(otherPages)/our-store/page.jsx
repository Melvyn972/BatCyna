import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import OurStore from "@/components/othersPages/OurStore";
import React from "react";

export const metadata = {
  title: "Notre Magasin || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Notre Magasin</div>
        </div>
      </div>

      <OurStore />
      <Footer />
    </>
  );
}
