"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "How does CynaStore protect against zero-day threats?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Our AI-powered threat detection engine continuously analyzes behavioral patterns across your network and endpoints to identify anomalous activities, even from previously unknown threats. Unlike signature-based solutions, we don't rely solely on known threat indicators, allowing us to detect and respond to sophisticated zero-day attacks before they cause damage.
      </div>
    ),
  },
  {
    question: "Is CynaStore compliant with industry regulations?",
    answer: (
      <p>
        Absolutely. CynaStore is designed with compliance at its core, supporting GDPR, HIPAA, SOC 2, ISO 27001, and other major regulatory frameworks. Our platform not only helps you achieve compliance but also maintains required documentation and evidence for audits, reducing your compliance burden by up to 70%.
      </p>
    ),
  },
  {
    question: "How long does it take to implement CynaStore?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Most organizations are fully operational with CynaStore within 5-7 business days. Our streamlined onboarding process includes dedicated implementation specialists who handle the technical setup while your team receives comprehensive training. Unlike traditional security solutions that can take months to deploy, CynaStore's cloud-native architecture enables rapid integration with your existing infrastructure.
      </div>
    ),
  },
  {
    question: "What makes CynaStore different from traditional security providers?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        CynaStore delivers enterprise-grade security through a SaaS model that eliminates the complexity and overhead of traditional solutions. We combine advanced technology with human expertise through our 24/7 Security Operations Center, providing comprehensive protection without requiring you to build an in-house security team. Our platform continuously evolves through AI learning, ensuring you're protected against emerging threats.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Security Questions Answered
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
