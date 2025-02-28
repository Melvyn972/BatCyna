import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Checkout from "@/components/othersPages/Checkout";
import React from "react";

export const metadata = {
  title: "Checkout || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Finaliser la commande</div>
        </div>
      </div>

      <Checkout />
      <Footer />
    </>
  );
}
