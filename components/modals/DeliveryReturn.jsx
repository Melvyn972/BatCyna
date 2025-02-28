import React from "react";

export default function DeliveryReturn() {
  return (
      <div
          className="modal modalCentered fade modalDemo tf-product-modal modal-part-content"
          id="delivery_return"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Expédition &amp; Livraison</div>
              <span
                  className="icon-close icon-close-popup"
                  data-bs-dismiss="modal"
              />
            </div>
            <div className="overflow-y-auto">
              <div className="tf-product-popup-delivery">
                <div className="title">Livraison</div>
                <p className="text-paragraph">
                  Toutes les commandes sont expédiées avec UPS Express.
                </p>
                <p className="text-paragraph">
                  Livraison gratuite pour toutes les commandes de plus de 250 €.
                </p>
                <p className="text-paragraph">
                  Toutes les commandes sont expédiées avec un numéro de suivi UPS.
                </p>
              </div>
              <div className="tf-product-popup-delivery">
                <div className="title">Retours</div>
                <p className="text-paragraph">
                  Les articles retournés dans les 14 jours suivant leur date
                  d'expédition d'origine, dans un état identique à celui dans
                  lequel ils ont été reçus, seront éligibles pour un remboursement
                  complet ou un crédit en magasin.
                </p>
                <p className="text-paragraph">
                  Les remboursements seront crédités sur le mode de paiement
                  d'origine utilisé pour l'achat.
                </p>
                <p className="text-paragraph">
                  Le client est responsable des frais d'expédition lors des
                  retours, et les frais d'expédition/manutention de l'achat
                  d'origine ne sont pas remboursables.
                </p>
                <p className="text-paragraph">
                  Tous les articles en promotion sont des achats définitifs.
                </p>
              </div>
              <div className="tf-product-popup-delivery">
                <div className="title">Aide</div>
                <p className="text-paragraph">
                  N'hésitez pas à nous contacter si vous avez d'autres questions
                  ou préoccupations.
                </p>
                <p className="text-paragraph">
                  Email :{" "}
                  <a
                      href="mailto:contact@domain.com"
                      aria-describedby="a11y-external-message"
                  >
                    <span className="__cf_email__">contact@domain.com</span>
                  </a>
                </p>
                <p className="text-paragraph mb-0">Téléphone : +1 (23) 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}