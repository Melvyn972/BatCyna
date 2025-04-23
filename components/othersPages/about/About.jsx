import React from "react";
import Image from "next/image";

export default function About() {
  return (
      <>
        <section className="flat-spacing-23 flat-image-text-section">
          <div className="container">
            <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
              <div className="tf-image-wrap">
                <Image
                    className="lazyload w-100"
                    data-src="/images/collections/collection-69.jpg"
                    alt="image de collection"
                    src="/images/collections/collection-69.jpg"
                    width={600}
                    height={499}
                />
              </div>
              <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">
                <div>
                  <div className="heading">Établi - 1995</div>
                  <div className="text">
                    CYNA Store a été fondé en 1995 par Jane Smith, une passionnée de mode avec
                    <br className="d-xl-block d-none" />
                    une passion pour le style intemporel. Jane a toujours été attirée par
                    des pièces classiques <br className="d-xl-block d-none" />
                    qui pouvaient être portées saison après saison, et elle
                    croyait qu'il <br className="d-xl-block d-none" />
                    y avait un vide sur le marché pour un magasin qui se concentrait
                    uniquement sur des vêtements <br className="d-xl-block d-none" />
                    classiques pour femmes. Elle a ouvert le premier magasin dans une petite ville
                    du <br className="d-xl-block d-none" />
                    Nouveau Angleterre, où il est rapidement devenu un favori local.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flat-spacing-15">
          <div className="container">
            <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
              <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">
                <div>
                  <div className="heading">Notre mission</div>
                  <div className="text">
                    Notre mission est d'autonomiser les gens à travers la mode durable.
                    <br className="d-xl-block d-none" />
                    Nous voulons que tout le monde se sente bien et ait fière allure, tout en
                    faisant notre part pour <br className="d-xl-block d-none" />
                    aider l'environnement. Nous croyons que la mode doit être
                    élégante, <br className="d-xl-block d-none" />
                    abordable et accessible à tous. La positivité corporelle et
                    l'inclusivité <br className="d-xl-block d-none" />
                    sont des valeurs qui sont au cœur de notre marque.
                  </div>
                </div>
              </div>
              <div className="grid-img-group">
                <div className="tf-image-wrap box-img item-1">
                  <div className="img-style">
                    <Image
                        className="lazyload"
                        src="/images/collections/collection-71.jpg"
                        data-=""
                        alt="img-slider"
                        width={337}
                        height={388}
                    />
                  </div>
                </div>
                <div className="tf-image-wrap box-img item-2">
                  <div className="img-style">
                    <Image
                        className="lazyload"
                        src="/images/collections/collection-70.jpg"
                        data-=""
                        alt="img-slider"
                        width={400}
                        height={438}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}