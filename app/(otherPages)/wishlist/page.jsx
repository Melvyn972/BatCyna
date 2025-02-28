import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Topbar from "@/components/headers/Topbar";

import Wishlist from "@/components/othersPages/Wishlist";
import React from "react";

export const metadata = {
  title: "Wishlist || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header />
      <div className="tf-page-title ">
        <div className="container-full">
          <div className="heading text-center">Votre wishlist</div>
        </div>
      </div>

      <Wishlist />

      <Footer />
    </>
  );
}
