import React from "react";
import Link from "next/link";

export default function ConfirmationPaiement() {
  return (
      <section className="espacement-plat-11">
        <div className="conteneur">
          <div className="rang justifier-contenu-centre">
            <div className="col-lg-6">
              <h5 className="fw-5 mb_20">Confirmation de paiement</h5>
              <div className="tf-page-panier-validation">
                <div className="d-flex align-items-center justify-content-between mb_15">
                  <div className="fs-18">Date</div>
                  <p>01/01/2024</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb_15">
                  <div className="fs-18">Méthode de paiement</div>
                  <p>Visa</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb_15">
                  <div className="fs-18">Numéro de carte</div>
                  <p>**** **** **** 9999</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb_15">
                  <div className="fs-18">Nom du titulaire</div>
                  <p>Themesflat</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb_15">
                  <div className="fs-18">Email</div>
                  <p>info@fashionshop.com</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb_15">
                  <div className="fs-18">Téléphone</div>
                  <p>(212) 555-1234</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb_24">
                  <div className="fs-22 fw-6">Sous-total</div>
                  <span className="valeur-totale">188,00 $ USD</span>
                </div>
                <div className="d-flex écart-10">
                  <Link
                      href={`/checkout`}
                      className="tf-bouton largeur-100 bouton-contour animé-hover-bouton arrondi-0 justifier-contenu-centre"
                  >
                    <span>Annuler le paiement</span>
                  </Link>
                  <a
                      href="#"
                      className="tf-bouton largeur-100 bouton-rempli animé-hover-bouton rayon-3 justifier-contenu-centre"
                  >
                    <span>Confirmer le paiement</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}