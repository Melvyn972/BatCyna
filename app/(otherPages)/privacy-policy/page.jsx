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
            <div className="heading text-center">Politique de Confidentialité</div>
          </div>
        </div>
        {/* /titre de la page */}
        {/* page principale */}
        <section className="flat-spacing-25">
          <div className="container">
            <div className="tf-main-area-page">
              <h4>Politique de Confidentialité – Cyna</h4>

              <p>
                Chez <strong>Cyna</strong>, la protection de vos données personnelles est une priorité.
                Nous nous engageons à respecter le <strong>Règlement Général sur la Protection des Données (RGPD)</strong>
                et à garantir la transparence sur la manière dont vos données sont collectées, utilisées, stockées
                et sécurisées.
              </p>

              <h5>1. Responsable du traitement</h5>
              <p>
                Le responsable du traitement est l’équipe de Cyna, joignable à l’adresse : marketing@cyna.com.
              </p>

              <h5>2. Données personnelles collectées</h5>
              <p>
                Nous collectons uniquement les données nécessaires à la fourniture de nos services :
                nom, prénom, adresse e-mail, mot de passe chiffré, adresse de livraison, historique de commandes.
              </p>

              <h5>3. Finalités du traitement</h5>
              <div>
                Les données sont utilisées pour :
                <ul>
                  <li>Créer et gérer votre compte utilisateur</li>
                  <li>Assurer le traitement des commandes</li>
                  <li>Vous contacter en cas de besoin (service client)</li>
                  <li>Envoyer des communications marketing si vous y avez consenti</li>
                  <li>Améliorer nos services (via des données statistiques anonymisées)</li>
                </ul>
              </div>

              <h5>4. Vos droits</h5>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
                <ul>
                  <li><strong>Droit d’accès</strong> à vos données</li>
                  <li><strong>Droit de rectification</strong> si les données sont incorrectes</li>
                  <li><strong>Droit d’effacement</strong> (droit à l’oubli)</li>
                  <li><strong>Droit d’opposition</strong> à certains traitements</li>
                  <li><strong>Droit à la portabilité</strong> de vos données</li>
                </ul>
                Vous pouvez exercer ces droits à tout moment en nous contactant à : <strong>marketing@cyna.com</strong>.
              </p>

              <h5>5. Conservation des données</h5>
              <p>
                Vos données sont conservées uniquement pendant la durée nécessaire à la finalité pour laquelle
                elles ont été collectées, sauf obligation légale contraire.
              </p>

              <h5>6. Sécurité</h5>
              <p>
                Cyna met en place toutes les mesures techniques et organisationnelles pour protéger vos données :
                chiffrement, accès restreints, sauvegardes régulières, etc.
              </p>

              <h5>7. Cookies</h5>
              <p>
                Notre site utilise des cookies pour améliorer l’expérience utilisateur. Vous pouvez à tout moment
                gérer vos préférences via notre gestionnaire de cookies.
              </p>

              <h5>8. Modifications</h5>
              <p>
                Cette politique peut être modifiée à tout moment. Toute mise à jour sera publiée sur cette page
                avec mention de la date de modification.
              </p>

              <p>
                Dernière mise à jour : Avril 2025.
              </p>

              <p>
                Pour toute question, écrivez-nous à : <strong>marketing@cyna.com</strong>
              </p>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </>
  );
}
