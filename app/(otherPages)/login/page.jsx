import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Login from "@/components/othersPages/Login";
import React from "react";

export const metadata = {
  title: "Login || CYNA Store",
  description: "CYNA Store",
};
export default function page() {
  return (
    <>
      <Header />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Connexion</div>
        </div>
      </div>

      <Login />
      <Footer />
    </>
  );
}
