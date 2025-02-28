"use client";
import { socialLinksWithBorder } from "@/data/socials";
import React, { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendMail = (e) => {};

  return (
      <section className="flat-spacing-21">
        <div className="container">
          <div className="tf-grid-layout gap30 lg-col-2">
            <div className="tf-content-left">
              <h5 className="mb_20">Visitez notre magasin</h5>
              <div className="mb_20">
                <p className="mb_15">
                  <strong>Adresse</strong>
                </p>
                <p>66 Mott St, New York, New York, Code Postal : 10006, AS</p>
              </div>
              <div className="mb_20">
                <p className="mb_15">
                  <strong>Téléphone</strong>
                </p>
                <p>(623) 934-2400</p>
              </div>
              <div className="mb_20">
                <p className="mb_15">
                  <strong>Email</strong>
                </p>
                <p>EComposer@example.com</p>
              </div>
              <div className="mb_36">
                <p className="mb_15">
                  <strong>Horaires d'ouverture</strong>
                </p>
                <p className="mb_15">Notre magasin a rouvert pour le shopping,</p>
                <p>échanges tous les jours de 11h à 19h</p>
              </div>
              <div>
                <ul className="tf-social-icon d-flex gap-20 style-default">
                  {socialLinksWithBorder.map((link, index) => (
                      <li key={index}>
                        <a
                            href={link.href}
                            className={`box-icon link round ${link.className} ${link.borderClass}`}
                        >
                          <i
                              className={`icon ${link.iconSize} ${link.iconClass}`}
                          />
                        </a>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="tf-content-right">
              <h5 className="mb_20">Contactez-nous</h5>
              <p className="mb_24">
                Si vous avez de superbes produits à proposer ou si vous souhaitez
                travailler avec nous, n'hésitez pas à nous contacter.
              </p>
              <div>
                <form
                    ref={formRef}
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendMail();
                    }}
                    className="form-contact"
                    id="contactform"
                    action="./contact/contact-process.php"
                    method="post"
                >
                  <div className="d-flex gap-15 mb_15">
                    <fieldset className="w-100">
                      <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          placeholder="Nom *"
                      />
                    </fieldset>
                    <fieldset className="w-100">
                      <input
                          type="email"
                          autoComplete="abc@xyz.com"
                          name="email"
                          id="email"
                          required
                          placeholder="Email *"
                      />
                    </fieldset>
                  </div>
                  <div className="mb_15">
                  <textarea
                      placeholder="Message"
                      name="message"
                      id="message"
                      required
                      cols={30}
                      rows={10}
                      defaultValue={""}
                  />
                  </div>
                  <div
                      className={`tfSubscribeMsg ${showMessage ? "active" : ""}`}
                  >
                    {success ? (
                        <p style={{ color: "rgb(52, 168, 83)" }}>
                          Le message a été envoyé avec succès.
                        </p>
                    ) : (
                        <p style={{ color: "red" }}>Une erreur s'est produite</p>
                    )}
                  </div>
                  <div className="send-wrap">
                    <button
                        type="submit"
                        className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}