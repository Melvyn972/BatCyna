"use client";
import React, { useState } from "react";

export default function AccountEdit() {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [dataConsent, setDataConsent] = useState(false);

  const handleDeleteAccount = () => {
    if (confirmDelete) {
      alert("Votre compte a été supprimé.");
    }
  };

  const handleExportData = () => {
    alert("Vos données personnelles ont été exportées (fictif).");
  };

  return (
    <div className="my-account-content account-edit position-relative">
      {/* Export Button in top-right */}
      <div className="position-absolute top-0 end-0 p-3">
        <button
          onClick={handleExportData}
          className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
          title="Exporter mes données personnelles"
        >
          <i className="bi bi-download"></i>
          Exporter mes données (PDF/JSON)
        </button>
      </div>

      <div className="">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=""
          id="form-password-change"
          action="#"
        >
          {/* User Info */}
          <div className="tf-field style-1 mb_15">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="text"
              id="property1"
              required
              name="first name"
            />
            <label
              className="tf-field-label fw-4 text_black-2"
              htmlFor="property1"
            >
              Prénom
            </label>
          </div>
          <div className="tf-field style-1 mb_15">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="text"
              required
              id="property2"
              name="last name"
            />
            <label
              className="tf-field-label fw-4 text_black-2"
              htmlFor="property2"
            >
              Nom de famille
            </label>
          </div>
          <div className="tf-field style-1 mb_15">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="email"
              autoComplete="email"
              required
              id="property3"
              name="email"
            />
            <label
              className="tf-field-label fw-4 text_black-2"
              htmlFor="property3"
            >
              Email
            </label>
          </div>

          {/* Password change */}
          <h6 className="mb_20">Changement de mot de passe</h6>
          <div className="tf-field style-1 mb_30">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="password"
              required
              autoComplete="current-password"
              id="property4"
              name="password"
            />
            <label
              className="tf-field-label fw-4 text_black-2"
              htmlFor="property4"
            >
              Mot de passe actuel
            </label>
          </div>
          <div className="tf-field style-1 mb_30">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="password"
              id="property5"
              required
              autoComplete="new-password"
              name="new-password"
            />
            <label
              className="tf-field-label fw-4 text_black-2"
              htmlFor="property5"
            >
              Nouveau mot de passe
            </label>
          </div>
          <div className="tf-field style-1 mb_30">
            <input
              className="tf-field-input tf-input"
              placeholder=" "
              type="password"
              id="property6"
              required
              autoComplete="new-password"
              name="confirm-password"
            />
            <label
              className="tf-field-label fw-4 text_black-2"
              htmlFor="property6"
            >
              Confirmez le mot de passe
            </label>
          </div>

          {/* RGPD Consent */}
          <div className="border-top pt-4 mt-4">
            <h6 className="fw-bold mb-3">Consentement à la collecte des données personnelles</h6>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="dataConsent"
                checked={dataConsent}
                onChange={(e) => setDataConsent(e.target.checked)}
                required
              />
              <label className="form-check-label ms-2" htmlFor="dataConsent">
                J’accepte que mes données personnelles soient collectées et utilisées par Cyna conformément à sa{" "}
                <a href="/privacy-policy" target="_blank" className="text-primary text-decoration-underline">
                  politique de confidentialité
                </a>.
              </label>
            </div>
          </div>

          {/* Save changes */}
          <div className="mb_20 mt-4">
            <button
              type="submit"
              className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center"
            >
              Sauvegarder les changements
            </button>
          </div>
        </form>

        {/* Delete Account */}
        <div className="border-top pt-4 mt-4">
          <h6 className="text-danger fw-bold mb-3">Supprimer mon compte</h6>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="confirmDelete"
              checked={confirmDelete}
              onChange={(e) => setConfirmDelete(e.target.checked)}
            />
            <label className="form-check-label ms-2" htmlFor="confirmDelete">
              Je comprends que cette action est <strong>irréversible</strong> et supprimera toutes mes données personnelles conformément au RGPD.
            </label>
          </div>
          <button
            type="button"
            disabled={!confirmDelete}
            onClick={handleDeleteAccount}
            className="btn btn-danger w-100"
          >
            Supprimer définitivement mon compte
          </button>
        </div>
      </div>
    </div>
  );
}
