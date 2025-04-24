"use client";

import { useState } from "react";
import Link from "next/link";

export default function DataExportPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleExport = async () => {
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/user/export-data", {
        method: "GET",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Une erreur est survenue");
      }

      const data = await response.json();
      
      // Create a downloadable file with the user data
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "mes-donnees.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setSuccess("Vos données ont été exportées avec succès");
      
    } catch (err) {
      console.error(err);
      setError(err.message || "Une erreur est survenue lors de l'exportation des données");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold">Exporter mes données</h1>
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
          
          <div className="space-y-4">
            <p className="text-gray-700">
              Conformément au Règlement Général de Protection des Données (RGPD), 
              vous pouvez télécharger une copie de toutes vos données personnelles 
              que nous conservons.
            </p>
            
            <p className="text-gray-700">
              Le fichier exporté contiendra :
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Vos informations personnelles</li>
              <li>Votre historique d'achats</li>
              <li>Vos préférences et paramétrages</li>
            </ul>
            
            <button
              onClick={handleExport}
              disabled={isLoading}
              className={`w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                "Chargement..."
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Télécharger mes données
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 