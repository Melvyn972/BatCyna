"use client";
import {useState} from "react";
import React from "react";
import Image from "next/image";
import {useContextElement} from "@/context/Context";

export default function Productcard23({product}) {
    const [currentImage, setCurrentImage] = useState(product.imgSrc);
    const {setQuickViewItem} = useContextElement();
    const {
        setQuickAddItem,
        addToWishlist,
        isAddedtoWishlist,
        addToCompareItem,
        isAddedtoCompareItem,
    } = useContextElement();
    return (
        <div className="card-product list-layout">
            <div className="card-product-wrapper">
                <a href="#" className="product-img">
                    <Image
                        className="lazyload img-product"
                        alt="image-produit"
                        src={currentImage}
                        width={720}
                        height={1005}
                    />
                    <Image
                        className="lazyload img-hover"
                        alt="image-produit"
                        src={product.imgHoverSrc}
                        width={720}
                        height={1005}
                    />
                </a>
            </div>
            <div className="card-product-info">
                <a href="#" className="title link">
                    {product.title}
                </a>
                <span className="price">{product.price.toFixed(2)} €</span>
                <p className="description">
                    Manches de chemise boutonnées et silhouette décontractée. Il est confectionné avec un tissu texturé
                    froissé et drapé, fabriqué à partir de fibres de bois d'origine responsable LENZING™ ECOVERO™
                    Viscose, produites par un processus qui réduit...
                </p>
                {product.colors && (
                    <ul className="list-color-product">
                        {product.colors.map((color) => (
                            <li
                                className={`list-color-item color-swatch ${
                                    currentImage == color.imgSrc ? "active" : ""
                                } `}
                                onMouseOver={() => setCurrentImage(color.imgSrc)}
                                key={color.name}
                            >
                                <span className="tooltip">{color.name}</span>
                                <span className={`swatch-value ${color.colorClass}`}/>
                                <Image
                                    className="lazyload"
                                    data-src={color.imgSrc}
                                    src={color.imgSrc}
                                    alt="image-produit"
                                    width={720}
                                    height={1005}
                                />
                            </li>
                        ))}
                    </ul>
                )}
                {product.sizes && (
                    <div className="size-list">
                        {product.sizes.map((size) => (
                            <span key={size}>{size}</span>
                        ))}
                    </div>
                )}
                <div className="list-product-btn">
                    <a
                        href="#quick_add"
                        onClick={() => setQuickAddItem(product.id)}
                        data-bs-toggle="modal"
                        className="box-icon quick-add style-3 hover-tooltip"
                    >
                        <span className="icon icon-bag"/>
                        <span className="tooltip">Ajout rapide</span>
                    </a>
                    <a
                        onClick={() => addToWishlist(product.id)}
                        className="box-icon wishlist style-3 hover-tooltip"
                    >
                        <span
                            className={`icon icon-heart ${
                                isAddedtoWishlist(product.id) ? "added" : ""
                            }`}
                        />
                        <span className="tooltip">
                          {isAddedtoWishlist(product.id)
                              ? "Déjà dans la liste de souhaits"
                              : "Ajouter à la liste de souhaits"}
                        </span>
                    </a>

                    <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        aria-controls="offcanvasLeft"
                        onClick={() => addToCompareItem(product.id)}
                        className="box-icon compare style-3 hover-tooltip"
                    >
                        <span
                            className={`icon icon-compare ${
                                isAddedtoCompareItem(product.id) ? "added" : ""
                            }`}
                        />
                        <span className="tooltip">
                          {isAddedtoCompareItem(product.id)
                              ? "Déjà comparé"
                              : "Ajouter à comparer"}
                        </span>
                    </a>
                    <a
                        href="#quick_view"
                        onClick={() => setQuickViewItem(product)}
                        data-bs-toggle="modal"
                        className="box-icon quickview style-3 hover-tooltip"
                    >
                        <span className="icon icon-view"/>
                        <span className="tooltip">Aperçu rapide</span>
                    </a>
                </div>
            </div>
        </div>
    );
}