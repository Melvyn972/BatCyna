"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function RGPDPage() {
  const [consentSettings, setConsentSettings] = useState({
    marketing: true,
    analytics: true,
    thirdParty: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load current consent settings
  useEffect(() => {
    const loadConsent = async () => {
      try {
        const response = await fetch("/api/user/consent");
        if (response.ok) {
          const data = await response.json();
          setConsentSettings(data.consent);
        }
      } catch (err) {
        console.error("Error loading consent settings:", err);
      }
    };
    
    loadConsent();
  }, []);

  const handleToggleConsent = (key) => {
    setConsentSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSaveConsent = async () => {
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/user/consent", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ consent: consentSettings }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Une erreur est survenue");
      }

      setSuccess("Vos préférences de consentement ont été mises à jour");
      
    } catch (err) {
      console.error(err);
      setError(err.message || "Une erreur est survenue lors de la mise à jour des préférences");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold">Paramètres RGPD</h1>
          <Link 
            href="/dashboard" 
            className="px-4 py-2 text-gray-600 hover:text-gray-900"
          >
            Retour
          </Link>
        </div>
        
        <div className="p-6 bg-white shadow rounded-lg">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
              {success}
            </div>
          )}
          
          <div className="space-y-6">
            <p className="text-gray-700">
              Conformément au Règlement Général de Protection des Données (RGPD), 
              vous pouvez contrôler comment vos données sont utilisées.
            </p>
            
            <div className="space-y-4 mt-4">
              <div className="p-4 border border-gray-200 rounded-md">
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <span className="font-medium text-gray-800">Communications marketing</span>
                    <p className="text-sm text-gray-600 mt-1">
                      J'accepte de recevoir des emails concernant les nouveaux produits et offres promotionnelles.
                    </p>
                  </div>
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={consentSettings.marketing}
                      onChange={() => handleToggleConsent("marketing")}
                    />
                    <div className={`block w-14 h-8 rounded-full transition ${consentSettings.marketing ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${consentSettings.marketing ? 'translate-x-6' : ''}`}></div>
                  </div>
                </label>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-md">
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <span className="font-medium text-gray-800">Analyses et statistiques</span>
                    <p className="text-sm text-gray-600 mt-1">
                      J'accepte que mes données de navigation soient utilisées pour améliorer le service.
                    </p>
                  </div>
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={consentSettings.analytics}
                      onChange={() => handleToggleConsent("analytics")}
                    />
                    <div className={`block w-14 h-8 rounded-full transition ${consentSettings.analytics ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${consentSettings.analytics ? 'translate-x-6' : ''}`}></div>
                  </div>
                </label>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-md">
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <span className="font-medium text-gray-800">Partage avec des tiers</span>
                    <p className="text-sm text-gray-600 mt-1">
                      J'accepte que mes données soient partagées avec des partenaires de confiance.
                    </p>
                  </div>
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={consentSettings.thirdParty}
                      onChange={() => handleToggleConsent("thirdParty")}
                    />
                    <div className={`block w-14 h-8 rounded-full transition ${consentSettings.thirdParty ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${consentSettings.thirdParty ? 'translate-x-6' : ''}`}></div>
                  </div>
                </label>
              </div>
            </div>
            
            <button
              onClick={handleSaveConsent}
              disabled={isLoading}
              className={`w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Chargement..." : "Enregistrer mes préférences"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 