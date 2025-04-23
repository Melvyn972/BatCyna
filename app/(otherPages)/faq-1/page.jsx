import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Faq1 from "@/components/othersPages/faq/Faq1";
import Faq2 from "@/components/othersPages/faq/Faq2";
import Faq3 from "@/components/othersPages/faq/Faq3";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "FAQ 01 || CYNA Store",
  description: "CYNA Store",
};

export default function page() {
  return (
      <>
        <Header />
        <>
          <div className="tf-page-title style-2">
            <div className="container-full">
              <div className="heading text-center">FAQ 01</div>
            </div>
          </div>
          {/* /titre de la page */}
          {/* FAQ */}
          <section className="flat-spacing-11">
            <div className="container">
              <div className="tf-accordion-wrap d-flex justify-content-between">
                <div className="content">
                  <Faq1 />
                  <Faq2 />
                  <Faq3 />
                </div>
                <div className="box tf-other-content radius-10 bg_grey-8">
                  <h5 className="mb_20">Vous avez une question</h5>
                  <p className="text_black-2 mb_40">
                    Si vous avez un problème ou une question qui nécessite une
                    assistance immédiate, vous pouvez cliquer sur le bouton ci-dessous
                    pour discuter en direct avec un représentant du service client.
                    <br />
                    <br />
                    Veuillez prévoir 06 à 12 jours ouvrables à partir du moment où
                    votre colis nous revient pour qu'un remboursement soit émis.
                  </p>
                  <div className="d-flex gap-20 align-items-center">
                    <Link
                        href={`/contact-1`}
                        className="tf-btn radius-3 btn-fill animate-hover-btn justify-content-center"
                    >
                      Contactez-nous
                    </Link>
                    <Link href={`/contact-2`} className="tf-btn btn-line">
                      Chat en direct
                      <i className="icon icon-arrow1-top-left" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>

        <Footer />
      </>
  );
}