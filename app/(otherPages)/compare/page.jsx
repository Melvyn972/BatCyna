import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Topbar from "@/components/headers/Topbar";

import Compare from "@/components/othersPages/Compare";
import React from "react";

export const metadata = {
  title: "Comparer les produits || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Comparer les produits</div>
        </div>
      </div>

      <Compare />
      <Footer />
    </>
  );
}
