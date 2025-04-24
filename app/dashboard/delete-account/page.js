"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function DeleteAccountPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeleteAccount = async () => {
    if (!confirmDelete) {
      return setError("Veuillez confirmer la suppression en cochant la case ci-dessous.");
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/user/delete-account", {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Une erreur est survenue lors de la suppression du compte");
      }

      // Sign out the user after account deletion
      await signOut({ redirect: false });
      
      // Redirect to home page
      router.push("/?deleted=true");
      
    } catch (err) {
      console.error(err);
      setError(err.message || "Une erreur est survenue lors de la suppression du compte");
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold">Supprimer mon compte</h1>
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
          
          <div className="space-y-4">
            <div className="p-4 bg-red-50 text-red-700 rounded-md">
              <p className="font-medium">Avertissement</p>
              <p className="mt-1">
                La suppression de votre compte est irréversible. Toutes vos données personnelles 
                et votre historique seront définitivement supprimés.
              </p>
            </div>
            
            <p className="text-gray-700">
              Conformément au Règlement Général de Protection des Données (RGPD), 
              vous avez le droit de demander la suppression de vos données personnelles.
            </p>
            
            <p className="text-gray-700">
              Après suppression :
            </p>
            
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Votre compte et profil seront définitivement supprimés</li>
              <li>Vous ne pourrez plus accéder à votre historique d'achats</li>
              <li>Vos données personnelles seront effacées de nos systèmes</li>
            </ul>
            
            <div className="mt-4">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={confirmDelete}
                  onChange={() => setConfirmDelete(!confirmDelete)}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">
                  Je confirme vouloir supprimer définitivement mon compte et toutes mes données associées
                </span>
              </label>
            </div>
            
            <button
              onClick={handleDeleteAccount}
              disabled={isLoading}
              className={`w-full mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center justify-center ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                "Chargement..."
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Supprimer définitivement mon compte
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 