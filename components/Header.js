"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ButtonSignin from "./ButtonSignin";
import ThemeToggle from "@/app/components/ThemeToggle";
import logo from "@/app/icon.png";
import config from "@/config";

const links = [
  {
    href: "/#features",
    label: "Fonctionnalités",
  },
  {
    href: "/#pricing",
    label: "Tarifs",
  },
  {
    href: "/#testimonials",
    label: "Témoignages",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
];

const cta = <ButtonSignin extraStyle="btn-primary" />;

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // setIsOpen(false) when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'dark:bg-black/80 bg-white/80 backdrop-blur-lg py-3' : 'bg-transparent py-6'
    }`}>
      <nav
        className="container flex items-center justify-between px-6 md:px-10 mx-auto"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex">
          <Link
            className="flex items-center gap-3"
            href="/"
            title={`${config.appName} hompage`}
          >
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-8 h-8"
              placeholder="blur"
              priority={true}
              width={32}
              height={32}
            />
            <span className="font-bold text-xl dark:text-white text-gray-900">{config.appName}</span>
          </Link>
        </div>
        
        {/* Burger menu button */}
        <div className="flex lg:hidden">
          <div className="flex items-center gap-3">
            <ThemeToggle />
          <button
            type="button"
              className="inline-flex items-center justify-center p-2 rounded-md dark:text-white text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(true)}
          >
              <span className="sr-only">Ouvrir le menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
                className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-10">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="dark:text-white/80 text-gray-700 dark:hover:text-white hover:text-gray-900 transition-colors text-sm font-medium"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA button and Theme Toggle */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <ThemeToggle />
          <Link
            href="/auth/login"
            className="px-5 py-2.5 dark:bg-white dark:text-black bg-gray-900 text-white dark:hover:bg-gray-200 hover:bg-gray-800 text-sm font-medium rounded-full transition-all"
          >
            Commencer
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 dark:bg-black/60 bg-gray-800/50 backdrop-blur-lg" onClick={() => setIsOpen(false)}></div>
        <div className="fixed inset-y-0 right-0 w-full max-w-sm dark:bg-black bg-white p-6 overflow-y-auto transform transition-all duration-300">
          <div className="flex items-center justify-between mb-8">
            <Link
              className="flex items-center gap-3"
              href="/"
              title={`${config.appName} hompage`}
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-8 h-8"
                placeholder="blur"
                priority={true}
                width={32}
                height={32}
              />
              <span className="font-bold text-xl dark:text-white text-gray-900">{config.appName}</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <ThemeToggle />
            <button
              type="button"
                className="dark:text-white text-gray-800 dark:hover:text-gray-300 hover:text-gray-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
                <span className="sr-only">Fermer le menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 mt-10">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                className="dark:text-white/80 text-gray-700 dark:hover:text-white hover:text-gray-900 transition-colors text-lg font-medium"
                    title={link.label}
                onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
            
            <div className="mt-8">
              <Link
                href="/auth/login"
                className="inline-block w-full px-5 py-3 dark:bg-white dark:text-black bg-gray-900 text-white dark:hover:bg-gray-200 hover:bg-gray-800 text-center font-medium rounded-full transition-all"
                onClick={() => setIsOpen(false)}
              >
                Commencer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
