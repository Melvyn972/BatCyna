import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import ContactForm2 from "@/components/othersPages/contact/ContactForm2";
import Map2 from "@/components/othersPages/contact/Map2";
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
      <Map2 />
      <ContactForm2 />
      <Footer />
    </>
  );
}
