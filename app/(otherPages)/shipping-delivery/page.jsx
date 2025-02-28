import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import React from "react";

export default function page() {
  return (
      <>
        <Header />
        <>
          {/* titre de la page */}
          <div className="tf-page-title style-2">
            <div className="container-full">
              <div className="heading text-center">Expédition &amp; Livraison</div>
            </div>
          </div>
          {/* /titre de la page */}
          {/* page principale */}
          <section className="flat-spacing-25">
            <div className="container">
              <div className="tf-main-area-page tf-page-delivery">
                <div className="box">
                  <h4>Livraison</h4>
                  <p>Toutes les commandes sont expédiées avec UPS Express.</p>
                  <p>Livraison toujours gratuite pour les commandes de plus de 250 $ US.</p>
                  <p>Toutes les commandes sont expédiées avec un numéro de suivi UPS.</p>
                </div>
                <div className="box">
                  <h4>Retours</h4>
                  <p>
                    Les articles retournés dans les 14 jours suivant leur date d'expédition
                    d'origine dans un état comme neuf seront éligibles pour un remboursement complet ou
                    un crédit en magasin.
                  </p>
                  <p>
                    Les remboursements seront crédités sur le mode de paiement d'origine
                    utilisé pour l'achat.
                  </p>
                  <p>
                    Le client est responsable des frais d'expédition lors des retours et les frais
                    d'expédition/manutention de l'achat d'origine ne sont pas remboursables.
                  </p>
                  <p>Tous les articles en solde sont des achats définitifs.</p>
                </div>
                <div className="box">
                  <h4>Aide</h4>
                  <p>
                    N'hésitez pas à nous contacter si vous avez d'autres questions et/ou
                    préoccupations.
                  </p>
                  <p>
                    Email :
                    <a href="mailto:contact@domain.com" className="cf-mail">
                      contact@domain.com
                    </a>
                  </p>
                  <p>Téléphone : +1 (23) 456 789</p>
                </div>
              </div>
            </div>
          </section>
        </>

        <Footer />
      </>
  );
}