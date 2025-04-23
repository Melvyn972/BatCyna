import Testimonials from "@/components/common/Testimonials";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Cart from "@/components/othersPages/Cart";
import RecentProducts from "@/components/shopDetails/RecentProducts";
import React from "react";

export const metadata = {
  title: "Panier || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Panier</div>
        </div>
      </div>

      <Cart />
      <Testimonials />
      <RecentProducts />
      <Footer />
    </>
  );
}
