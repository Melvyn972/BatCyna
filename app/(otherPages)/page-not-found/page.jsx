import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Page Non Trouvée || CYNA Store",
  description: "CYNA Store",
};

export default function notFound() {
  return (
      <>
        <Header />
        <section className="page-404-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="image">
                  <Image
                      alt="image"
                      src="/images/item/404.svg"
                      width="394"
                      height="319"
                  />
                </div>
                <div className="title">Oups... Ce lien est brisé.</div>
                <p>
                  Désolé pour le désagrément. Allez sur notre page d'accueil pour
                  découvrir nos dernières collections.
                </p>
                <Link
                    href="/"
                    className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                >
                  Retour à l'accueil
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
  );
}