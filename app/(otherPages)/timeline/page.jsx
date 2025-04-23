import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Timelines from "@/components/othersPages/Timelines";
import React from "react";

export const metadata = {
  title: "Timeline || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Timeline</div>
        </div>
      </div>

      <Timelines />
      <Footer />
    </>
  );
}
