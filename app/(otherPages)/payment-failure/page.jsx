import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import PaymentFailure from "@/components/othersPages/PaymentFailure";
import React from "react";

export const metadata = {
  title: "Erreur de Paiement || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Erreur de Paiement</div>
        </div>
      </div>

      <PaymentFailure />
      <Footer />
    </>
  );
}
