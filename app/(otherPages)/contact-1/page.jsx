import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import ContactForm from "@/components/othersPages/contact/ContactForm";
import Map from "@/components/othersPages/contact/Map";
import React from "react";

export const metadata = {
  title: "Contactez nous || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Contactez nous</div>
        </div>
      </div>

      <Map />
      <ContactForm />
      <Footer />
    </>
  );
}
