import React from "react";
import Link from "next/link";

export default function MonCompte() {
  return (
      <div className="contenu-mon-compte tableau-de-bord-compte">
        <div className="mb_60">
          <h5 className="fw-5 mb_20">Bonjour Themesflat</h5>
          <p>
            Depuis le tableau de bord de votre compte, vous pouvez consulter vos{" "}
            <Link className="text_primary" href={`/my-account-orders`}>
              commandes récentes
            </Link>
            , gérer vos{" "}
            <Link className="text_primary" href={`/my-account-edit`}>
              adresses de livraison et de facturation
            </Link>
            , et{" "}
            <Link className="text_primary" href={`/my-account-edit`}>
              modifier votre mot de passe et les détails de votre compte
            </Link>
            .
          </p>
        </div>
      </div>
  );
}