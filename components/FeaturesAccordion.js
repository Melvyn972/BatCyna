"use client";

import { useState, useRef } from "react";
import Image from "next/image";

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - icon: The path to the icon for the feature
const features = [
  {
    title: "Détection & Réponse aux Menaces",
    description:
      "Détection avancée des menaces alimentée par l'IA qui identifie les comportements malveillants en temps réel. Notre système de réponse automatisé neutralise les menaces avant qu'elles n'impactent vos opérations.",
    icon: "/icons/shield-check.svg",
  },
  {
    title: "Automatisation de la Conformité",
    description:
      "Restez conforme avec RGPD, HIPAA, SOC 2 et autres cadres réglementaires. Notre plateforme automatise la documentation, les pistes d'audit et les contrôles de sécurité requis pour la certification.",
    icon: "/icons/certificate.svg",
  },
  {
    title: "Centre d'Opérations de Sécurité",
    description:
      "Surveillance 24/7 par des experts en sécurité qui analysent les menaces, valident les alertes et coordonnent la réponse aux incidents. Notre équipe SOC étend vos capacités de sécurité sans les frais d'une équipe interne.",
    icon: "/icons/monitor.svg",
  },
  {
    title: "Gestion des Vulnérabilités",
    description:
      "Analyse continue et priorisation des vulnérabilités basées sur le niveau de risque. Notre plateforme fournit des instructions claires de remédiation et suit le processus de résolution de la détection à l'achèvement.",
    icon: "/icons/search.svg",
  },
];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({ feature, isActive, onClick, index }) => {
  const accordion = useRef(null);
  const { title, description } = feature;

  return (
    <div 
      className={`border-b border-gray-800 relative transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-black to-gray-900' : 'hover:bg-gray-900/30'}`}
    >
      <button
        className="w-full flex items-start justify-between py-6 px-6 text-left focus:outline-none"
        onClick={onClick}
        aria-expanded={isActive}
      >
        <div className="flex items-center gap-4">
          <span className={`text-lg font-semibold transition-colors ${isActive ? 'text-white' : 'text-white/70'}`}>
            {`0${index + 1}`}
        </span>
          <h3 className={`text-xl md:text-2xl font-medium transition-colors ${isActive ? 'text-white' : 'text-white/70'}`}>
            {title}
          </h3>
        </div>
        <span className={`transform transition-transform duration-300 ${isActive ? 'rotate-45' : 'rotate-0'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <div
        ref={accordion}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-8 pt-2 px-6 pl-16 text-gray-300 leading-relaxed max-w-3xl">
          {description}
        </div>
      </div>
    </div>
  );
};

// A component to display a visual representation of the feature
const Media = ({ feature }) => {
  return (
    <div className="rounded-2xl aspect-square w-full sm:w-[26rem] bg-base-200 flex items-center justify-center">
      <div className="text-6xl p-8 bg-base-100 rounded-full shadow-lg">
        <Image
          src={feature.icon || "/icons/shield-check.svg"}
          alt={feature.title}
          width={150}
          height={150}
          className="h-24 w-24 object-contain opacity-90"
        />
      </div>
    </div>
  );
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="py-24 md:py-32 bg-black text-white relative overflow-hidden"
      id="features"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-80 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="inline-block py-1 px-3 text-xs bg-white/10 text-white rounded-full mb-6">
            Fonctionnalités
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Sécurité de niveau entreprise,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"> accessible à tous</span>
        </h2>
          <p className="text-xl text-gray-300">
            Protégez votre entreprise avec des solutions puissantes, intuitives et abordables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="border-t border-gray-800 rounded-sm">
              {features.map((feature, index) => (
                <Item
                  key={index}
                  feature={feature}
                  index={index}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center">
            <div className="w-full aspect-square max-w-md relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-1">
              <div className="w-full h-full bg-black rounded-xl flex items-center justify-center p-12">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl blur-2xl"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={features[activeIndex].icon || "/icons/shield-check.svg"}
                      alt={features[activeIndex].title}
                      width={150}
                      height={150}
                      className="h-24 w-24 object-contain opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
