"use client";
import React, { useRef, useState } from "react";

export default function ContactForm2() {
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
      <section className="bg_grey-7 flat-spacing-9">
        <div className="container">
          <div className="flat-title">
            <span className="title">Contactez-nous</span>
            <p className="sub-title text_black-2">
              Si vous avez de superbes produits à proposer ou si vous souhaitez
              travailler avec nous, n'hésitez pas à nous contacter.
            </p>
          </div>
          <div>
            <form
                ref={formRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMail();
                }}
                className="mw-705 mx-auto text-center form-contact"
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
              <div className="send-wrap">
                <div className={`tfSubscribeMsg ${showMessage ? "active" : ""}`}>
                  {success ? (
                      <p style={{ color: "rgb(52, 168, 83)" }}>
                        Le message a été envoyé avec succès.
                      </p>
                  ) : (
                      <p style={{ color: "red" }}>Une erreur s'est produite</p>
                  )}
                </div>
                <button
                    type="submit"
                    className="tf-btn radius-3 btn-fill animate-hover-btn justify-content-center"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  );
}