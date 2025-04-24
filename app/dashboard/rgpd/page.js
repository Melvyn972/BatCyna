"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function RGPDPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  
  const [consentSettings, setConsentSettings] = useState({
    marketing: true,
    analytics: true,
    thirdParty: false,
  });
  const [dataRetentionPeriod, setDataRetentionPeriod] = useState("2_years");
  const [consentHistory, setConsentHistory] = useState([]);
  const [activeTab, setActiveTab] = useState(
    tabParam === "historique" || tabParam === "conservation"
      ? tabParam
      : "consentements"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load current consent settings and history
  useEffect(() => {
    const loadConsentData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/user/consent");
        if (response.ok) {
          const data = await response.json();
          setConsentSettings(data.consent);
          setDataRetentionPeriod(data.dataRetentionPeriod);
          setConsentHistory(data.history || []);
        }
      } catch (err) {
        console.error("Error loading consent settings:", err);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadConsentData();
  }, []);

  // Update active tab when URL parameter changes
  useEffect(() => {
    if (tabParam === "historique" || tabParam === "conservation") {
      setActiveTab(tabParam);
    } else {
      setActiveTab("consentements");
    }
  }, [tabParam]);

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
        body: JSON.stringify({ 
          consent: consentSettings,
          dataRetentionPeriod
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Une erreur est survenue");
      }

      // Reload consent history
      const updatedData = await fetch("/api/user/consent").then(res => res.json());
      setConsentHistory(updatedData.history || []);
      
      setSuccess("Vos préférences de consentement ont été mises à jour");
      
    } catch (err) {
      console.error(err);
      setError(err.message || "Une erreur est survenue lors de la mise à jour des préférences");
    } finally {
      setIsLoading(false);
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatConsentType = (type) => {
    switch(type) {
      case 'marketing': return 'Communications marketing';
      case 'analytics': return 'Analyses et statistiques';
      case 'thirdParty': return 'Partage avec des tiers';
      default: return type;
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
        
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <Link
              href="/dashboard/rgpd"
              className={`py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === 'consentements'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Consentements
            </Link>
            <Link
              href="/dashboard/rgpd?tab=historique"
              className={`ml-8 py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === 'historique'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Historique des consentements
            </Link>
            <Link
              href="/dashboard/rgpd?tab=conservation"
              className={`ml-8 py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === 'conservation'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Conservation des données
            </Link>
          </nav>
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
          
          {isLoading && activeTab !== 'consentements' ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              {/* Consentements tab */}
              {activeTab === 'consentements' && (
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
                </div>
              )}
              
              {/* Historique tab */}
              {activeTab === 'historique' && (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Voici l'historique des modifications apportées à vos consentements.
                  </p>
                  
                  {consentHistory.length === 0 ? (
                    <div className="py-4 text-gray-500 text-center">
                      Aucun historique disponible
                    </div>
                  ) : (
                    <div className="mt-4 overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Statut
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {consentHistory.map((item) => (
                              <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {formatTimestamp(item.timestamp)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {formatConsentType(item.consentType)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    item.status 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-red-100 text-red-800'
                                  }`}>
                                    {item.status ? 'Accordé' : 'Retiré'}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Conservation tab */}
              {activeTab === 'conservation' && (
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Vous pouvez définir pour combien de temps nous conservons vos données personnelles.
                    À la fin de cette période, certaines de vos données peuvent être anonymisées ou supprimées.
                  </p>
                  
                  <div className="mt-4">
                    <label htmlFor="dataRetention" className="block text-sm font-medium text-gray-700">
                      Durée de conservation
                    </label>
                    <select
                      id="dataRetention"
                      name="dataRetention"
                      value={dataRetentionPeriod}
                      onChange={(e) => setDataRetentionPeriod(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="1_year">1 an après ma dernière connexion</option>
                      <option value="2_years">2 ans après ma dernière connexion</option>
                      <option value="3_years">3 ans après ma dernière connexion</option>
                      <option value="5_years">5 ans après ma dernière connexion</option>
                    </select>
                  </div>
                  
                  <div className="mt-6 bg-yellow-50 border border-yellow-100 p-4 rounded-md">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">
                          Information sur la conservation des données
                        </h3>
                        <div className="mt-2 text-sm text-yellow-700">
                          <p>
                            Même si vous choisissez de supprimer vos données, nous pourrons être amenés à conserver certaines informations
                            pour des raisons légales, de sécurité ou pour des obligations fiscales, conformément aux lois en vigueur.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          
          <button
            onClick={handleSaveConsent}
            disabled={isLoading}
            className={`w-full mt-8 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Chargement..." : "Enregistrer mes préférences"}
          </button>
        </div>
      </section>
    </main>
  );
} 