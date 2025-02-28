export const allHomepages = [


];

export const demoItems = [

];

export const productsPages = [
  {
    heading: "Mises en page de la boutique",
    links: [
      { href: "/shop-default", text: "Par défaut" },
      { href: "/shop-left-sidebar", text: "Barre latérale gauche" },
      { href: "/shop-right-sidebar", text: "Barre latérale droite" },
      { href: "/shop-fullwidth", text: "Plein écran" },
      { href: "/shop-collection-sub", text: "Sous-collection" },
      { href: "/shop-collection-list", text: "Liste des collections" },
    ],
  },
  {
    heading: "Fonctionnalités",
    links: [
      { href: "/shop-link", text: "Liens de pagination" },
      { href: "/shop-loadmore", text: "Charger plus de pagination" },
      {
        href: "/shop",
        text: "Défilement infini de pagination",
      },
      { href: "/shop-filter-sidebar", text: "Filtre latéral" },
      { href: "/shop-filter-hidden", text: "Filtre caché" },
    ],
  },
  {
    heading: "Styles de produit",
    links: [
      // { href: "/product-style-list", text: "Liste des styles de produit" },
      { href: "/product-style-01", text: "Style de produit 01" },
      { href: "/product-style-02", text: "Style de produit 02" },
      { href: "/product-style-03", text: "Style de produit 03" },
      { href: "/product-style-04", text: "Style de produit 04" },
      { href: "/product-style-05", text: "Style de produit 05" },
      { href: "/product-style-06", text: "Style de produit 06" },
      { href: "/product-style-07", text: "Style de produit 07" },
    ],
  },
];

export const productDetailPages = [
  {
    heading: "Mises en page de produit",
    links: [
      { href: "/product-detail/1", text: "Produit par défaut" },
      { href: "/product-grid-1/2", text: "Grille de produit 1" },
      { href: "/product-grid-2/3", text: "Grille de produit 2" },
      { href: "/product-stacked/4", text: "Produit empilé" },
      { href: "/product-right-thumbnails/5", text: "Vignettes de produit à droite" },
      {
        href: "/product-bottom-thumbnails/6",
        text: "Vignettes de produit en bas",
      },
      { href: "/product-drawer-sidebar/7", text: "Barre latérale du tiroir de produit" },
      {
        href: "/product-description-accordion/8",
        text: "Accordéon de description de produit",
      },
      {
        href: "/product-description-list/10",
        text: "Liste de description de produit",
      },
      {
        href: "/product-description-vertical/11",
        text: "Description de produit verticale",
      },
    ],
  },
  {
    heading: "Détails du produit",
    links: [
      { href: "/product-inner-zoom/12", text: "Zoom intérieur du produit" },
      { href: "/product-zoom-magnifier/13", text: "Loupe de zoom du produit" },
      { href: "/product-no-zoom/14", text: "Pas de zoom sur le produit" },
      {
        href: "/product-photoswipe-popup/15",
        text: "Popup photoswipe du produit",
      },
      {
        href: "/product-zoom-popup/16",
        text: "Zoom externe du produit et popup photoswipe",
      },
      { href: "/product-video/17", text: "Vidéo du produit" },
      { href: "/product-3d/18", text: "Produit 3D, modèles AR" },
      {
        href: "/product-options-customizer/19",
        text: "Options de produit & personnalisation",
      },
      { href: "/product-advanced-types/20", text: "Types de produit avancés" },
      {
        href: "/product-giftcard/21",
        text: "Formulaire d'information du destinataire pour les produits de carte-cadeau",
      },
    ],
  },
  {
    heading: "Échantillons de produit",
    links: [
      { href: "/product-color-swatch/22", text: "Échantillon de couleur de produit" },
      { href: "/product-rectangle/23", text: "Rectangle de produit" },
      { href: "/product-rectangle-color/24", text: "Rectangle de produit couleur" },
      { href: "/product-swatch-image/25", text: "Image d'échantillon de produit" },
      {
        href: "/product-swatch-image-rounded/26",
        text: "Image d'échantillon de produit arrondie",
      },
      { href: "/product-swatch-dropdown/27", text: "Menu déroulant d'échantillon de produit" },
      {
        href: "/product-swatch-dropdown-color/29",
        text: "Menu déroulant d'échantillon de produit couleur",
      },
    ],
  },
  {
    heading: "Fonctionnalités du produit",
    links: [
      {
        href: "/product-frequently-bought-together/30",
        text: "Souvent acheté ensemble",
      },
      {
        href: "/product-frequently-bought-together-2/31",
        text: "Souvent acheté ensemble 2",
      },
      { href: "/product-upsell-features/32", text: "Fonctionnalités de vente incitative de produit" },
      { href: "/product-pre-orders/33", text: "Précommandes de produit" },
      { href: "/product-notification/34", text: "Notification de retour en stock" },
      { href: "/product-pickup/35", text: "Ramassage de produit" },
      { href: "/product-images-grouped/36", text: "Images de variantes groupées" },
      { href: "/product-complimentary/37", text: "Produits complémentaires" },
      {
        href: "/product-quick-order-list/38",
        text: "Liste de commande rapide",
        extra: (
            <div className="demo-label">
              <span className="demo-new">Nouveau</span>
            </div>
        ),
      },
      {
        href: "/product-detail-volume-discount/38",
        text: "Remise sur volume",
        extra: (
            <div className="demo-label">
              <span className="demo-new">Nouveau</span>
            </div>
        ),
      },
      {
        href: "/product-detail-volume-discount-grid/38",
        text: "Grille de remise sur volume",
        extra: (
            <div className="demo-label">
              <span className="demo-new">Nouveau</span>
            </div>
        ),
      },
      {
        href: "/product-detail-buyx-gety/38",
        text: "Achetez X Obtenez Y",
        extra: (
            <div className="demo-label">
              <span className="demo-new">Nouveau</span>
            </div>
        ),
      },
    ],
  },
];

export const pages = [
  {
    href: "/about-us",
    text: "À propos de nous",
    className: "menu-link-text link text_black-2",
    links: null,
  },
  {
    href: "#",
    text: "Marques",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/brands",
        text: "Marques",
        className: "menu-link-text link text_black-2 position-relative",
        label: "Nouveau",
      },
      {
        href: "/brands-v2",
        text: "Marque V2",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "Contact",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/contact-1",
        text: "Contact 1",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/contact-2",
        text: "Contact 2",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "FAQ",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/faq-1",
        text: "FAQ 01",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/faq-2",
        text: "FAQ 02",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "Magasin",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/our-store",
        text: "Notre magasin",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/store-locations",
        text: "Localisateur de magasin",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "/timeline",
    text: "Chronologie",
    className: "menu-link-text link text_black-2 position-relative",
    label: "Nouveau",
  },
  {
    href: "/view-cart",
    text: "Voir le panier",
    className: "menu-link-text link text_black-2 position-relative",
  },
  {
    href: "/checkout",
    text: "Passer à la caisse",
    className: "menu-link-text link text_black-2 position-relative",
  },
  {
    href: "#",
    text: "Paiement",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/payment-confirmation",
        text: "Confirmation de paiement",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/payment-failure",
        text: "Échec du paiement",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "Mon compte",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/my-account",
        text: "Mon compte",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-orders",
        text: "Ma commande",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-orders-details",
        text: "Détails de ma commande",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-address",
        text: "Mon adresse",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-edit",
        text: "Détails de mon compte",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-wishlist",
        text: "Ma liste de souhaits",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "/invoice",
    text: "Facture",
    className: "menu-link-text link text_black-2 position-relative",
  },
  {
    href: "/page-not-found",
    text: "404",
    className: "menu-link-text link text_black-2 position-relative",
  },
];

export const blogLinks = [
  { href: "/blog-grid", text: "Mise en page en grille" },
  { href: "/blog-sidebar-left", text: "Barre latérale gauche" },
  { href: "/blog-sidebar-right", text: "Barre latérale droite" },
  { href: "/blog-list", text: "Liste de blog" },
  { href: "/blog-detail/1", text: "Article unique" },
];

export const navItems = [
  {
    id: "dropdown-menu-one",
    label: "Accueil",
    links: [
      { href: "/", label: "Accueil Mode 01" },
      { href: "/home-multi-brand", label: "Accueil Multi Marque" },
      { href: "/home-02", label: "Accueil Mode 02" },
      { href: "/home-03", label: "Accueil Mode 03" },
      { href: "/home-04", label: "Accueil Mode 04" },
      { href: "/home-05", label: "Accueil Mode 05" },
      { href: "/home-06", label: "Accueil Mode 06" },
      { href: "/home-personalized-pod", label: "Accueil Pod Personnalisé" },
      { href: "/home-pickleball", label: "Accueil Pickleball" },
      { href: "/home-ceramic", label: "Accueil Céramique" },
      { href: "/home-food", label: "Accueil Nourriture" },
      { href: "/home-camp-and-hike", label: "Accueil Camping et Randonnée" },
      { href: "/home-07", label: "Accueil Mode 07" },
      { href: "/home-08", label: "Accueil Mode 08" },
      { href: "/home-skincare", label: "Accueil Soins de la Peau" },
      { href: "/home-main", label: "Accueil Casque" },
      { href: "/home-giftcard", label: "Accueil Carte Cadeau" },
      { href: "/home-furniture", label: "Accueil Meubles" },
      { href: "/home-furniture-02", label: "Accueil Meubles 2" },
      { href: "/home-skateboard", label: "Accueil Planche à Roulettes" },
      { href: "/home-stroller", label: "Accueil Poussette" },
      { href: "/home-decor", label: "Accueil Décor" },
      { href: "/home-electronic", label: "Accueil Électronique" },
      { href: "/home-setup-gear", label: "Accueil Équipement de Configuration" },
      { href: "/home-dog-accessories", label: "Accueil Accessoires pour Chiens" },
      { href: "/home-kitchen-wear", label: "Accueil Ustensiles de Cuisine" },
      { href: "/home-phonecase", label: "Accueil Coque de Téléphone" },
      { href: "/home-paddle-boards", label: "Accueil Planches à Pagaie" },
      { href: "/home-glasses", label: "Accueil Lunettes" },
      { href: "/home-pod-store", label: "Accueil Boutique POD" },
      { href: "/home-activewear", label: "Vêtements de Sport" },
      { href: "/home-handbag", label: "Accueil Sac à Main" },
      { href: "/home-tee", label: "Accueil T-shirt" },
      { href: "/home-sock", label: "Accueil Chaussette" },
      { href: "/home-jewerly", label: "Accueil Bijoux" },
      { href: "/home-sneaker", label: "Accueil Baskets" },
      { href: "/home-accessories", label: "Accueil Accessoires" },
      { href: "/home-grocery", label: "Accueil Épicerie" },
      { href: "/home-baby", label: "Accueil Bébé" },
      { href: "/home-cosmetic", label: "Accueil Cosmétique" },
      { href: "/home-plant", label: "Accueil Plante" },
      { href: "/home-swimwear", label: "Accueil Maillots de Bain" },
      { href: "/home-electric-bike", label: "Accueil Vélo Électrique" },
      { href: "/home-footwear", label: "Accueil Chaussures" },
      { href: "/home-bookstore", label: "Accueil Librairie" },
      { href: "/home-gaming-accessories", label: "Accueil Accessoires de Jeu" },
    ],
  },
  {
    id: "dropdown-menu-two",
    label: "Boutique",
    links: [
      {
        id: "sub-shop-one",
        label: "Mises en page de la boutique",
        links: [
          { href: "/shop-default", label: "Par défaut" },
          { href: "/shop-left-sidebar", label: "Barre latérale gauche" },
          { href: "/shop-right-sidebar", label: "Barre latérale droite" },
          { href: "/shop-fullwidth", label: "Plein écran" },
          { href: "/shop-collection-sub", label: "Sous-collection" },
          { href: "/shop-collection-list", label: "Liste des collections" },
        ],
      },
      {
        id: "sub-shop-two",
        label: "Fonctionnalités",
        links: [
          { href: "/shop-link", label: "Liens de pagination" },
          { href: "/shop-loadmore", label: "Charger plus de pagination" },
          {
            href: "/shop",
            label: "Défilement infini de pagination",
          },
          { href: "/shop-filter-sidebar", label: "Filtre latéral" },
          { href: "/shop-filter-hidden", label: "Filtre caché" },
        ],
      },
      {
        id: "sub-shop-three",
        label: "Styles de produit",
        links: [
          // { href: "/product-style-list", label: "Liste des styles de produit" },
          { href: "/product-style-01", label: "Style de produit 01" },
          { href: "/product-style-02", label: "Style de produit 02" },
          { href: "/product-style-03", label: "Style de produit 03" },
          { href: "/product-style-04", label: "Style de produit 04" },
          { href: "/product-style-05", label: "Style de produit 05" },
          { href: "/product-style-06", label: "Style de produit 06" },
          { href: "/product-style-07", label: "Style de produit 07" },
        ],
      },
    ],
  },
  {
    id: "dropdown-menu-three",
    label: "Produits",
    links: [
      {
        id: "sub-product-one",
        label: "Mises en page de produit",
        links: [
          { href: "/product-detail/1", label: "Produit par défaut" },
          { href: "/product-grid-1/2", label: "Grille de produit 1" },
          { href: "/product-grid-2/3", label: "Grille de produit 2" },
          { href: "/product-stacked/4", label: "Produit empilé" },
          {
            href: "/product-right-thumbnails/5",
            label: "Vignettes de produit à droite",
          },
          {
            href: "/product-bottom-thumbnails/6",
            label: "Vignettes de produit en bas",
          },
          {
            href: "/product-drawer-sidebar/7",
            label: "Barre latérale du tiroir de produit",
          },
          {
            href: "/product-description-accordion/8",
            label: "Accordéon de description de produit",
          },
          {
            href: "/product-description-list/9",
            label: "Liste de description de produit",
          },
          {
            href: "/product-description-vertical/10",
            label: "Description de produit verticale",
          },
        ],
      },
      {
        id: "sub-product-two",
        label: "Détails du produit",
        links: [
          { href: "/product-inner-zoom/11", label: "Zoom intérieur du produit" },
          {
            href: "/product-zoom-magnifier/12",
            label: "Loupe de zoom du produit",
          },
          { href: "/product-no-zoom", label: "Pas de zoom sur le produit" },
          {
            href: "/product-photoswipe-popup/13",
            label: "Popup photoswipe du produit",
          },
          {
            href: "/product-zoom-popup/15",
            label: "Zoom externe du produit et popup photoswipe",
          },
          { href: "/product-video/16", label: "Vidéo du produit" },
          { href: "/product-3d", label: "Produit 3D, modèles AR" },
          {
            href: "/product-options-customizer/17",
            label: "Options de produit & personnalisation",
          },
          {
            href: "/product-advanced-types/18",
            label: "Types de produit avancés",
          },
          {
            href: "/product-giftcard/19",
            label: "Formulaire d'information du destinataire pour les produits de carte-cadeau",
          },
        ],
      },
      {
        id: "sub-product-three",
        label: "Échantillons de produit",
        links: [
          { href: "/product-color-swatch/20", label: "Échantillon de couleur de produit" },
          { href: "/product-rectangle", label: "Rectangle de produit" },
          {
            href: "/product-rectangle-color/21",
            label: "Rectangle de produit couleur",
          },
          { href: "/product-swatch-image/22", label: "Image d'échantillon de produit" },
          {
            href: "/product-swatch-image-rounded",
            label: "Image d'échantillon de produit arrondie",
          },
          {
            href: "/product-swatch-dropdown/23",
            label: "Menu déroulant d'échantillon de produit",
          },
          {
            href: "/product-swatch-dropdown-color/24",
            label: "Menu déroulant d'échantillon de produit couleur",
          },
        ],
      },
      {
        id: "sub-product-four",
        label: "Fonctionnalités du produit",
        links: [
          {
            href: "/product-frequently-bought-together/25",
            label: "Souvent acheté ensemble",
          },
          {
            href: "/product-frequently-bought-together-2/26",
            label: "Souvent acheté ensemble 2",
          },
          {
            href: "/product-upsell-features/27",
            label: "Fonctionnalités de vente incitative de produit",
          },
          { href: "/product-pre-orders/28", label: "Précommandes de produit" },
          {
            href: "/product-notification/28",
            label: "Notification de retour en stock",
          },
          { href: "/product-pickup/29", label: "Ramassage de produit" },
          {
            href: "/product-images-grouped/30",
            label: "Images de variantes groupées",
          },
          {
            href: "/product-complimentary/31",
            label: "Produits complémentaires",
          },
          {
            href: "/product-quick-order-list/32",
            label: "Liste de commande rapide",
            demoLabel: true,
          },
          {
            href: "/product-detail-volume-discount/38",
            label: "Remise sur volume",
            demoLabel: true,
          },
          {
            href: "/product-detail-volume-discount-grid/38",
            label: "Grille de remise sur volume",
            demoLabel: true,
          },
          {
            href: "/product-detail-buyx-gety/38",
            label: "Achetez X Obtenez Y",
            demoLabel: true,
          },
        ],
      },
    ],
  },
  {
    id: "dropdown-menu-four",
    label: "Pages",
    links: [
      { href: "/about-us", label: "À propos de nous" },
      { href: "/brands", label: "Marques", demoLabel: true },
      { href: "/brands-v2", label: "Marques V2" },
      { href: "/contact-1", label: "Contact 1" },
      { href: "/contact-2", label: "Contact 2" },
      { href: "/faq-1", label: "FAQ 01" },
      { href: "/faq-2", label: "FAQ 02" },
      { href: "/our-store", label: "Notre magasin" },
      { href: "/store-locations", label: "Localisateur de magasin" },
      { href: "/timeline", label: "Chronologie", demoLabel: true },
      { href: "/view-cart", label: "Voir le panier" },
      { href: "/my-account", label: "Mon compte" },
      { href: "/wishlist", label: "Liste de souhaits" },
      { href: "/terms", label: "Termes et conditions" },
      { href: "/page-not-found", label: "Page 404" },
    ],
  },
  {
    id: "dropdown-menu-five",
    label: "Blogs",
    links: [
      { href: "/blog-grid", label: "Mise en page en grille" },
      { href: "/blog-sidebar-left", label: "Barre latérale gauche" },
      { href: "/blog-sidebar-right", label: "Barre latérale droite" },
      { href: "/blog-list", label: "Liste de blog" },
      { href: "/blog-detail/1", label: "Article unique" },
    ],
  },
];