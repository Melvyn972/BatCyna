import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import DashboardNav from "@/components/othersPages/dashboard/DashboardNav";
import Wishlist from "@/components/othersPages/dashboard/Wishlist";
import React from "react";

export const metadata = {
    title: "Liste de souhaits de mon compte || Cyna Store",
    description: "Cyna Store",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Liste de souhaits de mon compte</div>
        </div>
      </div>
      <section className="flat-spacing-11">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <DashboardNav />
            </div>
            <div className="col-lg-9">
              <Wishlist />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
