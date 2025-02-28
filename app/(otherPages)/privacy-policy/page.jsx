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
                <h4>Politique de la Société Privée Limitée</h4>
                <p>
                  La Société Privée Limitée et chacune de leurs sociétés
                  filiales, mères et affiliées est considérée comme opérant ce
                  site Web (“nous” ou “notre”) reconnaît que vous vous souciez de
                  la manière dont les informations vous concernant sont utilisées
                  et partagées. Nous avons créé cette Politique de Confidentialité
                  pour vous informer des informations que nous collectons sur le
                  site Web, comment nous utilisons vos informations et les choix
                  que vous avez concernant la manière dont vos informations sont
                  collectées et utilisées. Veuillez lire cette Politique de
                  Confidentialité attentivement. Votre utilisation du site Web
                  indique que vous avez lu et accepté nos pratiques de
                  confidentialité, telles que décrites dans cette Politique de
                  Confidentialité.
                </p>
                <p>
                  Veuillez noter que les pratiques décrites dans cette Politique
                  de Confidentialité s'appliquent aux informations recueillies par
                  nous ou nos filiales, affiliés ou agents : (i) par le biais de
                  ce site Web, (ii) le cas échéant, par le biais de notre
                  Service Client en lien avec ce site Web, (iii) par le biais
                  des informations fournies dans nos magasins de détail, et (iv)
                  par le biais des informations fournies en lien avec des
                  promotions marketing et des concours.
                </p>
                <p>
                  Nous ne sommes pas responsables du contenu ou des pratiques de
                  confidentialité sur d'autres sites Web.
                </p>
                <p>
                  Nous nous réservons le droit, à notre seule discrétion, de
                  modifier, mettre à jour, ajouter, interrompre, supprimer ou
                  autrement changer toute partie de cette Politique de
                  Confidentialité, en tout ou en partie, à tout moment. Lorsque
                  nous modifions cette Politique de Confidentialité, nous
                  réviserons la date de “dernière mise à jour” située en haut de
                  cette Politique de Confidentialité.
                </p>
                <p>
                  Si vous nous fournissez des informations ou accédez ou utilisez
                  le site Web de quelque manière que ce soit après que cette
                  Politique de Confidentialité a été modifiée, vous serez
                  réputé avoir consenti et accepté sans condition ces
                  modifications. La version la plus récente de cette Politique de
                  Confidentialité sera disponible sur le site Web et remplacera
                  toutes les versions précédentes de cette Politique de
                  Confidentialité.
                </p>
                <p>
                  Si vous avez des questions concernant cette Politique de
                  Confidentialité, vous devez contacter notre Service Client par
                  e-mail à marketing@company.com
                </p>
              </div>
            </div>
          </section>
        </>

        <Footer />
      </>
  );
}