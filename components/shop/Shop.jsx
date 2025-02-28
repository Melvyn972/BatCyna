"use client";
import { layouts, sortingOptions } from "@/data/shop";
import { useEffect, useRef, useState } from "react";
import { products6, products7, allProducts } from "@/data/products";
import ShopFilter from "./ShopFilter";
import Sorting from "./Sorting";
import Productcard23 from "@/components/shopCards/Productcard23";
import Productcart3 from "@/components/shopCards/Productcart3";

export default function Shop() {
    const [gridItems, setGridItems] = useState(4);
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [allproducts, setAllproducts] = useState([...products6, ...products7]);
    const [products, setProducts] = useState([]);
    const [finalSorted, setFinalSorted] = useState([]);

    // Vérification du contenu de products6 et products7
    useEffect(() => {
        console.log("Mise à jour de finalSorted:", [...products6, ...products7]);
        setFinalSorted([...products6, ...products7]);
        setAllproducts([...products6, ...products7]); // Ajouté pour synchroniser
    }, []);

    const handleLoad = () => {
        setLoading(true);
        setTimeout(() => {
            console.log("Ajout de produits:", products6, products7);
            setAllproducts((pre) => [...pre, ...products6, ...products7]);
            setLoading(false);
            setLoaded(true);
        }, 1000);
    };

    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    handleLoad();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    // Vérification du rendu des produits avant affichage
    console.log("Produits affichés:", finalSorted);

    return (
        <>
            <section className="flat-spacing-2">
                <div className="container">
                    <div className="tf-shop-control grid-3 align-items-center">
                        <div className="tf-control-filter">
                            <a
                                href="#filterShop"
                                data-bs-toggle="offcanvas"
                                aria-controls="offcanvasLeft"
                                className="tf-btn-filter"
                            >
                                <span className="icon icon-filter" />
                                <span className="text">Filtrer</span>
                            </a>
                        </div>
                        <ul className="tf-control-layout d-flex justify-content-center">
                            {layouts.map((layout, index) => (
                                <li
                                    key={index}
                                    className={`tf-view-layout-switch ${layout.className} ${
                                        gridItems == layout.dataValueGrid ? "active" : ""
                                    }`}
                                    onClick={() => setGridItems(layout.dataValueGrid)}
                                >
                                    <div className="item">
                                        <span className={`icon ${layout.iconClass}`} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="tf-control-sorting d-flex justify-content-end">
                            <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                                <Sorting setFinalSorted={setFinalSorted} products={products} />
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-control-shop">
                        <div className="meta-filter-shop" />
                        <div
                            style={{
                                width: "fit-content",
                                margin: "0  auto",
                                fontSize: "17px",
                                marginBottom: "24px",
                            }}
                        >
                            {finalSorted.length} produit(s) trouvé(s)
                        </div>
                        {gridItems == 1 ? (
                            <div className="grid-layout" data-grid="grid-list">
                                {finalSorted.map((elm, i) => (
                                    <Productcard23 product={elm} key={i} />
                                ))}
                            </div>
                        ) : (
                            <div
                                className="grid-layout wrapper-shop"
                                data-grid={`grid-${gridItems}`}
                            >
                                {finalSorted.map((elm, i) => (
                                    <Productcart3 product={elm} key={i} />
                                ))}
                            </div>
                        )}
                        <div className="tf-pagination-wrap view-more-button text-center tf-pagination-btn">
                            {!loaded && (
                                <button
                                    ref={elementRef}
                                    className={`tf-btn-loading tf-loading-default animate-hover-btn btn-loadmore ${
                                        loading ? "loading" : ""
                                    } `}
                                    onClick={() => handleLoad()}
                                >
                                    <span className="text">Charger plus</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <ShopFilter products={allproducts} setProducts={setProducts} />
        </>
    );
}
