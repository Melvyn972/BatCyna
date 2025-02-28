"use client";
import React from "react";
import Link from "next/link";
export default function Login() {
  return (
      <section className="flat-spacing-10">
        <div className="container">
          <div className="tf-grid-layout lg-col-2 tf-login-wrap">
            <div className="tf-login-form">
              <div id="recover">
                <h5 className="mb_24">Réinitialisez votre mot de passe</h5>
                <p className="mb_30">
                  Nous vous enverrons un email pour réinitialiser votre mot de
                  passe.
                </p>
                <div>
                  <form onSubmit={(e) => e.preventDefault()} className="">
                    <div className="tf-field style-1 mb_15">
                      <input
                          className="tf-field-input tf-input"
                          placeholder=""
                          required
                          type="email"
                          autoComplete="abc@xyz.com"
                          id="property3"
                          name="email"
                      />
                      <label
                          className="tf-field-label fw-4 text_black-2"
                          htmlFor="property3"
                      >
                        Email *
                      </label>
                    </div>
                    <div className="mb_20">
                      <a href="#login" className="tf-btn btn-line">
                        Annuler
                      </a>
                    </div>
                    <div className="">
                      <button
                          type="submit"
                          className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
                      >
                        Réinitialiser le mot de passe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div id="login">
                <h5 className="mb_36">Se connecter</h5>
                <div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="tf-field style-1 mb_15">
                      <input
                          required
                          className="tf-field-input tf-input"
                          placeholder=""
                          type="email"
                          autoComplete="abc@xyz.com"
                          id="property3"
                          name="email"
                      />
                      <label
                          className="tf-field-label fw-4 text_black-2"
                          htmlFor="property3"
                      >
                        Email *
                      </label>
                    </div>
                    <div className="tf-field style-1 mb_30">
                      <input
                          required
                          className="tf-field-input tf-input"
                          placeholder=""
                          type="password"
                          id="property4"
                          name="password"
                          autoComplete="current-password"
                      />
                      <label
                          className="tf-field-label fw-4 text_black-2"
                          htmlFor="property4"
                      >
                        Mot de passe *
                      </label>
                    </div>
                    <div className="mb_20">
                      <a href="#recover" className="tf-btn btn-line">
                        Mot de passe oublié ?
                      </a>
                    </div>
                    <div className="">
                      <button
                          type="submit"
                          className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
                      >
                        Se connecter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="tf-login-content">
              <h5 className="mb_36">Je suis nouveau ici</h5>
              <p className="mb_20">
                Inscrivez-vous pour un accès anticipé aux soldes, ainsi que des
                nouveautés, tendances et promotions personnalisées. Pour vous
                désinscrire, cliquez sur "se désabonner" dans nos emails.
              </p>
              <Link href={`/register`} className="tf-btn btn-line">
                S'inscrire
                <i className="icon icon-arrow1-top-left" />
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}