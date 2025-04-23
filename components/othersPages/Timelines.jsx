import React from "react";
import Image from "next/image";

export default function Timelines() {
  return (
      <section className="flat-spacing-12">
        <div className="container">
          <div className="tf-timeline-wrap position-relative">
            <div className="tf-timeline-line" />
            <div className="tf-timeline-item z-2 position-relative">
              <div className="tf-timeline-inner d-flex align-items-center justify-content-between tf-timeline-content-end">
                <span className="tf-timeline-time">1980</span>
                <div className="tf-timeline-content">
                  <div className="tf-timeline-label fw-7">PHASE 1</div>
                  <h4 className="tf-timeline-title">
                    Inception et établissement de la marque
                  </h4>
                  <div className="tf-timeline-description">
                    L'inception, dans le contexte de l'établissement d'une marque, fait référence à la phase initiale de création et d'introduction d'une marque sur le marché. Cela implique de poser les éléments fondamentaux qui définiront l'identité, les valeurs et le positionnement de la marque dans l'esprit des consommateurs.
                  </div>
                </div>
                <div className="tf-timeline-image">
                  <Image
                      className="lazyload"
                      data-=""
                      alt="image"
                      src="/images/shop/file/timeline1.jpg"
                      width={800}
                      height={593}
                  />
                </div>
              </div>
            </div>
            <div className="tf-timeline-item z-2 position-relative">
              <div className="tf-timeline-inner d-flex align-items-center justify-content-between">
                <span className="tf-timeline-time">2000</span>
                <div className="tf-timeline-content">
                  <div className="tf-timeline-label fw-7">PHASE 2</div>
                  <h4 className="tf-timeline-title">
                    Collection de lancement et entrée sur le marché
                  </h4>
                  <div className="tf-timeline-description">
                    Entrer sur le marché avec une collection de lancement nécessite une planification minutieuse, de la créativité et de la persévérance. En suivant ces étapes et en restant fidèle à votre vision, vous pouvez augmenter vos chances de succès dans l'industrie de la mode.
                  </div>
                </div>
                <div className="tf-timeline-image">
                  <Image
                      className="lazyload"
                      data-=""
                      alt="image"
                      src="/images/shop/file/timeline2.jpg"
                      width={800}
                      height={593}
                  />
                </div>
              </div>
            </div>
            <div className="tf-timeline-item z-2 position-relative">
              <div className="tf-timeline-inner d-flex align-items-center justify-content-between tf-timeline-content-end">
                <span className="tf-timeline-time">2010</span>
                <div className="tf-timeline-content">
                  <div className="tf-timeline-label fw-7">PHASE 3</div>
                  <h4 className="tf-timeline-title">Croissance et reconnaissance</h4>
                  <div className="tf-timeline-description">
                    Pendant la phase de croissance et de reconnaissance du parcours d'une marque, plusieurs éléments clés entrent en jeu pour propulser son expansion et solidifier sa position sur le marché. Voici un aperçu de ce qui se passe généralement pendant cette phase.
                  </div>
                </div>
                <div className="tf-timeline-image">
                  <Image
                      className="lazyload"
                      data-=""
                      alt="image"
                      src="/images/shop/file/timeline3.jpg"
                      width={800}
                      height={593}
                  />
                </div>
              </div>
            </div>
            <div className="tf-timeline-item z-2 position-relative">
              <div className="tf-timeline-inner d-flex align-items-center justify-content-between">
                <span className="tf-timeline-time">2024</span>
                <div className="tf-timeline-content">
                  <div className="tf-timeline-label fw-7">PHASE 4</div>
                  <h4 className="tf-timeline-title">Initiatives durables</h4>
                  <div className="tf-timeline-description">
                    Les initiatives durables jouent un rôle crucial dans la croissance et le développement d'une marque, en particulier dans le paysage actuel du marché, qui est conscient de l'environnement et socialement responsable. Voici quelques exemples d'initiatives durables que les marques peuvent entreprendre.
                  </div>
                </div>
                <div className="tf-timeline-image">
                  <Image
                      className="lazyload"
                      data-=""
                      alt="image"
                      src="/images/shop/file/timeline4.jpg"
                      width={800}
                      height={593}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}