"use client";
import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import {aboutLinks, footerLinks, paymentImages} from "@/data/footerLinks";

export default function Footer({bgColor = ""}) {
    useEffect(() => {
        const headings = document.querySelectorAll(".footer-heading-moblie");

        const toggleOpen = (event) => {
            const parent = event.target.closest(".footer-col-block");

            parent.classList.toggle("open");
        };

        headings.forEach((heading) => {
            heading.addEventListener("click", toggleOpen);
        });

        // Nettoyer les écouteurs d'événements lorsque le composant est démonté
        return () => {
            headings.forEach((heading) => {
                heading.removeEventListener("click", toggleOpen);
            });
        };
    }, []); // Le tableau de dépendances vide signifie que cela ne s'exécutera qu'une seule fois au montage

    const formRef = useRef();
    const [success, setSuccess] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    const handleShowMessage = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    };

    const sendEmail = async (e) => {
        e.preventDefault(); // Empêcher le comportement par défaut de soumission du formulaire
        const email = e.target.email.value;

        try {
            const response = await axios.post(
                "https://express-brevomail.vercel.app/api/contacts",
                {
                    email,
                }
            );

            if ([200, 201].includes(response.status)) {
                e.target.reset(); // Réinitialiser le formulaire
                setSuccess(true); // Définir l'état de succès
                handleShowMessage();
            } else {
                setSuccess(false); // Gérer les réponses inattendues
                handleShowMessage();
            }
        } catch (error) {
            console.error("Erreur:", error.response?.data || "Une erreur s'est produite");
            setSuccess(false); // Définir l'état d'erreur
            handleShowMessage();
            e.target.reset(); // Réinitialiser le formulaire
        }
    };

    return (
        <footer id="footer" className={`footer md-pb-70 ${bgColor}`}>
            <div className="footer-wrap">
                <div className="footer-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-12">
                                <div className="footer-infor">
                                    <div className="footer-logo">
                                        <Link href={`/`}>
                                            <Image
                                                alt="image"
                                                src="/images/logo/logo.png"
                                                width="140"
                                                height="21"
                                            />
                                        </Link>
                                    </div>
                                    <ul>
                                        <li>
                                            <p>
                                                Adresse: 10 Avenue Xiao Ni Ma 44 444 
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Email: <a href="#">CYNAStore@xiaonima.com</a>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Téléphone: <a href="#">07 69 96 28 51</a>
                                            </p>
                                        </li>
                                    </ul>
                                    <Link href={`/contact-1`} className="tf-btn btn-line">
                                        Obtenir l'itinéraire
                                        <i className="icon icon-arrow1-top-left"/>
                                    </Link>
                                    <ul className="tf-social-icon d-flex gap-10">
                                        <li>
                                            <a
                                                href="#"
                                                className="box-icon w_34 round social-facebook social-line"
                                            >
                                                <i className="icon fs-14 icon-fb"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="box-icon w_34 round social-twiter social-line"
                                            >
                                                <i className="icon fs-12 icon-Icon-x"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="box-icon w_34 round social-instagram social-line"
                                            >
                                                <i className="icon fs-14 icon-instagram"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="box-icon w_34 round social-tiktok social-line"
                                            >
                                                <i className="icon fs-14 icon-tiktok"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="box-icon w_34 round social-pinterest social-line"
                                            >
                                                <i className="icon fs-14 icon-pinterest-1"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                                <div className="footer-heading footer-heading-desktop">
                                    <h6>Aide</h6>
                                </div>
                                <div className="footer-heading footer-heading-moblie">
                                    <h6>Aide</h6>
                                </div>
                                <ul className="footer-menu-list tf-collapse-content">
                                    {footerLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link href={link.href} className="footer-menu_item">
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                                <div className="footer-heading footer-heading-desktop">
                                    <h6>À propos de nous</h6>
                                </div>
                                <div className="footer-heading footer-heading-moblie">
                                    <h6>À propos de nous</h6>
                                </div>
                                <ul className="footer-menu-list tf-collapse-content">
                                    {aboutLinks.slice(0, 4).map((link, index) => (
                                        <li key={index}>
                                            <Link href={link.href} className="footer-menu_item">
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-xl-3 col-md-6 col-12">
                                <div className="footer-newsletter footer-col-block">
                                    <div className="footer-heading footer-heading-desktop">
                                        <h6>Inscrivez-vous à notre newsletter</h6>
                                    </div>
                                    <div className="footer-heading footer-heading-moblie">
                                        <h6>Inscrivez-vous à notre newsletter</h6>
                                    </div>
                                    <div className="tf-collapse-content">
                                        <div className="footer-menu_item">
                                            Inscrivez-vous pour être le premier à découvrir les nouvelles arrivées, les
                                            ventes, le contenu exclusif, les événements et plus encore !
                                        </div>
                                        <div
                                            className={`tfSubscribeMsg ${
                                                showMessage ? "active" : ""
                                            }`}
                                        >
                                            {success ? (
                                                <p style={{color: "rgb(52, 168, 83)"}}>
                                                    Vous vous êtes inscrit avec succès.
                                                </p>
                                            ) : (
                                                <p style={{color: "red"}}>Quelque chose a mal tourné</p>
                                            )}
                                        </div>
                                        <form
                                            ref={formRef}
                                            onSubmit={sendEmail}
                                            className="form-newsletter subscribe-form"
                                            action="#"
                                            method="post"
                                            acceptCharset="utf-8"
                                            data-mailchimp="true"
                                        >
                                            <div className="subscribe-content">
                                                <fieldset className="email">
                                                    <input
                                                        required
                                                        type="email"
                                                        name="email"
                                                        className="subscribe-email"
                                                        placeholder="Entrez votre email...."
                                                        tabIndex={0}
                                                        aria-required="true"
                                                        autoComplete="abc@xyz.com"
                                                    />
                                                </fieldset>
                                                <div className="button-submit">
                                                    <button
                                                        className="subscribe-button tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                                                        type="submit"
                                                    >
                                                        S'abonner
                                                        <i className="icon icon-arrow1-top-left"/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="subscribe-msg"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div
                                    className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">
                                    <div className="footer-menu_item">
                                    </div>
                                    <div className="tf-payment">
                                        {paymentImages.map((image, index) => (
                                            <Image
                                                key={index}
                                                src={image.src}
                                                width={image.width}
                                                height={image.height}
                                                alt={image.alt}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}