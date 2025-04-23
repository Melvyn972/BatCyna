import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";

import Shop from "@/components/shop/Shop";
import React from "react";

export const metadata = {
  title:
    "Boutique || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Boutique</div>
          <p className="text-center text-2 text_black-2 mt_5">
          Découvrez notre dernière sélection d'article
          </p>
        </div>
      </div>
      <Shop />
      <Footer />
    </>
  );
}
