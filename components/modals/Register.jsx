"use client";
import React from "react";
import Link from "next/link";
export default function Register() {
  return (
    <div
      className="modal modalCentered fade form-sign-in modal-part-content"
      id="register"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <div className="demo-title">S'inscrire</div>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="tf-login-form">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="d-flex flex-column gap-3"
            >
              {/* Prénom */}
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="text"
                  required
                  name="firstName"
                />
                <label className="tf-field-label" htmlFor="firstName">
                  Prénom
                </label>
              </div>

              {/* Nom */}
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="text"
                  required
                  name="lastName"
                />
                <label className="tf-field-label" htmlFor="lastName">
                  Nom
                </label>
              </div>

              {/* Email */}
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="email"
                  autoComplete="email"
                  required
                  name="email"
                />
                <label className="tf-field-label" htmlFor="email">
                  Email *
                </label>
              </div>

              {/* Mot de passe */}
              <div className="tf-field style-1">
                <input
                  className="tf-field-input tf-input"
                  placeholder=" "
                  type="password"
                  required
                  name="password"
                  autoComplete="current-password"
                />
                <label className="tf-field-label" htmlFor="password">
                  Mot de passe *
                </label>
              </div>

              {/* RGPD Consent */}
              <div className="form-check mt-3 text-start">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rgpdConsent"
                  required
                />
                <label className="form-check-label ms-2" htmlFor="rgpdConsent">
                  J'accepte la collecte et le traitement de mes données personnelles conformément à la{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    className="text-primary text-decoration-underline"
                  >
                    politique de confidentialité
                  </a>{" "}
                  du site.
                </label>
              </div>

              {/* ✅ Consentement aux offres et emails */}
              <div className="form-check text-start">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="newsletterConsent"
                  name="newsletterConsent"
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="newsletterConsent"
                >
                  Êtes-vous d'accord pour recevoir des emails et des offres promotionnelles de la part de Cyna ?
                </label>
              </div>

              {/* Buttons */}
              <div className="d-flex flex-column gap-2 mt-3">
                <button
                  type="submit"
                  className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                >
                  S'inscrire
                </button>
                <a
                  href="#login"
                  data-bs-toggle="modal"
                  className="btn-link fw-6 text-center"
                >
                  Vous avez déjà un compte ? Connectez-vous ici
                  <i className="icon icon-arrow1-top-left ms-1" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
