/**
 * Swiss Minimalist Interaction Engine for Alphaa Global Traders
 * Powered by Clash Display & Satoshi typography, sharp geometric boundaries,
 * live order manifest cart, instant search, and Swiss index dispatcher.
 */

import './index.css';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  unit: string;
  image: string;
  description: string;
  spec: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'STRIDE CLASSIC DERBY 1974',
    category: 'FOOTWEAR',
    brand: 'STRIDE ATELIER',
    price: '$185.00',
    unit: 'PER PAIR (MIN 100 PRS)',
    image: '/src/assets/images/product_indian_textiles_1792511627399.jpg',
    description: 'Full-grain oiled pull-up leather upper, storm welt construction, solid brass eyelets.',
    spec: 'ASTM-F2413 / ISO 20345'
  },
  {
    id: 'prod-2',
    name: 'MALABAR BLACK PEPPER BOLD 550GL',
    category: 'SPICES',
    brand: 'ALPHAA SPICE CO',
    price: '$6,450.00',
    unit: 'PER METRIC TON',
    image: '/src/assets/images/product_indian_spices_1792511627303.jpg',
    description: 'Sun-cured Tellicherry whole black peppercorns, steam sterilized, piperine 5.8% min.',
    spec: 'ASTA / ESA QUALITY'
  },
  {
    id: 'prod-3',
    name: 'VINTAGE RUNNER LOW-TOP CHOP',
    category: 'FOOTWEAR',
    brand: 'STRIDE ATELIER',
    price: '$140.00',
    unit: 'PER PAIR (MIN 250 PRS)',
    image: '/src/assets/images/product_indian_textiles_1792511627399.jpg',
    description: 'Hand-dyed organic canvas, vulcanized natural gum rubber sole, archival 1977 silhouette.',
    spec: 'OEKO-TEX 100 CERT'
  },
  {
    id: 'prod-4',
    name: 'GOTS ORGANIC COMBED COTTON 40S',
    category: 'TEXTILES',
    brand: 'MILL DEPT.',
    price: '$4.80',
    unit: 'PER METRE (MIN 1000M)',
    image: '/src/assets/images/product_indian_textiles_1792511627399.jpg',
    description: 'High-density combed long-staple Indian cotton twill, mercerized raw ecru finish.',
    spec: 'GOTS VERSION 7.0'
  },
  {
    id: 'prod-5',
    name: 'SOLID SHEESHAM CARVED COMMODE BOX',
    category: 'COMMODITIES',
    brand: 'HERITAGE GUILD',
    price: '$38.50',
    unit: 'PER UNIT (MIN 50 PCS)',
    image: '/src/assets/images/product_indian_handicrafts_1792511628636.jpg',
    description: 'Kiln-dried seasoned Indian rosewood with antiqued brass latch fittings and hand-jointing.',
    spec: 'ISPM-15 FUMIGATED'
  },
  {
    id: 'prod-6',
    name: 'ALLEPPEY GREEN CARDAMOM 8MM JUMBO',
    category: 'SPICES',
    brand: 'ALPHAA SPICE CO',
    price: '$28.00',
    unit: 'PER KG (MIN 100 KG)',
    image: '/src/assets/images/product_indian_spices_1792511627303.jpg',
    description: 'Vibrant green extra-bold 8mm pods with volatile oil content > 7.5%, sortex cleaned.',
    spec: 'SPICE BOARD GRADE A+'
  },
  {
    id: 'prod-7',
    name: 'DUCTILE IRON FLANGE VALVE FITTINGS',
    category: 'ENGINEERING',
    brand: 'PRECISION FOUNDRY',
    price: '$92.00',
    unit: 'PER UNIT (MIN 200 PCS)',
    image: '/src/assets/images/logistics_container_port_1792511627971.jpg',
    description: 'Hydrostatically tested ductile iron ANSI Class 150/300 flanged valves with anti-corrosion VCI seal.',
    spec: 'ISO 9001 / ASTM A536'
  },
  {
    id: 'prod-8',
    name: 'AGED 1121 BASMATI RICE STEAM PARBOIL',
    category: 'COMMODITIES',
    brand: 'AGRI GRAIN CO',
    price: '$1,120.00',
    unit: 'PER METRIC TON',
    image: '/src/assets/images/product_indian_spices_1792511627303.jpg',
    description: '24-month aged 1121 steam basmati rice, average grain length 8.35mm before cooking.',
    spec: 'APEDA VERIFIED EXPORT'
  }
];

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

let cart: CartItem[] = [
  { product: PRODUCTS[0], quantity: 2 },
  { product: PRODUCTS[1], quantity: 1 }
];

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const cartBadge = document.getElementById('cart-badge');
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartBackdrop = document.getElementById('cart-backdrop');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const checkoutBtn = document.getElementById('checkout-btn');
  const checkoutNotice = document.getElementById('checkout-notice');

  const searchToggleBtn = document.getElementById('search-toggle-btn');
  const searchModal = document.getElementById('search-modal');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-input') as HTMLInputElement | null;
  const searchResults = document.getElementById('search-results');

  const categoryButtons = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
  const productCards = document.querySelectorAll<HTMLElement>('.product-card');

  // Update Cart UI
  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) {
      cartBadge.textContent = totalCount.toString();
      cartBadge.classList.toggle('hidden', totalCount === 0);
    }

    if (cartItemsList) {
      if (cart.length === 0) {
        cartItemsList.innerHTML = `
          <div class="py-16 text-center text-[#111111]">
            <span class="inline-block text-[10px] font-mono tracking-widest text-[#838282] uppercase mb-2">[ EMPTY MANIFEST ]</span>
            <p class="font-clash text-2xl uppercase tracking-tight">NO COMMODITIES ALLOCATED</p>
            <p class="font-satoshi text-xs text-[#838282] mt-1">Select items from the product catalogue to generate proforma manifests.</p>
          </div>
        `;
      } else {
        cartItemsList.innerHTML = cart
          .map(
            (item, index) => `
          <div class="border border-[#111111] bg-white p-4 mb-3 flex gap-4 items-start relative group">
            <div class="w-16 h-16 border border-[#111111] bg-[#f2f2f2] shrink-0 overflow-hidden">
              <img src="${item.product.image}" alt="${item.product.name}" class="w-full h-full object-cover swiss-reveal-image" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-baseline justify-between text-[10px] font-mono-swiss text-[#838282] uppercase tracking-wider mb-1">
                <span>${item.product.brand}</span>
                <span class="font-clash text-sm text-[#111111] font-bold">${item.product.price}</span>
              </div>
              <h4 class="font-clash text-xs uppercase text-[#111111] truncate mb-1">${item.product.name}</h4>
              <div class="text-[10px] text-[#838282] font-mono-swiss uppercase">${item.product.unit}</div>
              
              <div class="flex items-center gap-2 mt-3 pt-2 border-t border-[#f2f2f2]">
                <button type="button" data-cart-index="${index}" data-action="dec" class="cart-qty-btn w-6 h-6 border border-[#111111] bg-[#f2f2f2] font-mono-swiss text-xs flex items-center justify-center hover:bg-[#111111] hover:text-white transition-colors cursor-pointer">-</button>
                <span class="font-mono-swiss text-xs px-2 font-bold text-[#111111]">${item.quantity}</span>
                <button type="button" data-cart-index="${index}" data-action="inc" class="cart-qty-btn w-6 h-6 border border-[#111111] bg-[#f2f2f2] font-mono-swiss text-xs flex items-center justify-center hover:bg-[#111111] hover:text-white transition-colors cursor-pointer">+</button>
                <button type="button" data-cart-index="${index}" data-action="remove" class="cart-qty-btn ml-auto text-[10px] font-mono-swiss uppercase text-[#838282] hover:text-[#111111] underline cursor-pointer">REMOVE</button>
              </div>
            </div>
          </div>
        `
          )
          .join('');

        // Wire quantity buttons
        const qtyBtns = cartItemsList.querySelectorAll<HTMLButtonElement>('.cart-qty-btn');
        qtyBtns.forEach((btn) => {
          btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-cart-index') || '0', 10);
            const action = btn.getAttribute('data-action');
            if (action === 'inc') {
              cart[idx].quantity += 1;
            } else if (action === 'dec') {
              if (cart[idx].quantity > 1) {
                cart[idx].quantity -= 1;
              } else {
                cart.splice(idx, 1);
              }
            } else if (action === 'remove') {
              cart.splice(idx, 1);
            }
            updateCartUI();
          });
        });
      }
    }

    // Subtotal
    if (cartSubtotalEl) {
      const totalAmount = cart.reduce((acc, cur) => {
        const numeric = parseFloat(cur.product.price.replace(/[$,]/g, '')) || 0;
        return acc + numeric * cur.quantity;
      }, 0);
      cartSubtotalEl.textContent = `$${totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  }

  // Open / Close Cart Drawer
  function openCart() {
    if (cartDrawer && cartBackdrop) {
      cartBackdrop.classList.remove('hidden');
      cartDrawer.classList.remove('translate-x-full');
    }
  }

  function closeCart() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.add('translate-x-full');
      cartBackdrop.classList.add('hidden');
    }
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

  // Wire "Add to Cart" on product cards
  const addCartButtons = document.querySelectorAll<HTMLButtonElement>('.add-to-cart-btn');
  addCartButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute('data-product-id');
      const prod = PRODUCTS.find((p) => p.id === prodId);
      if (prod) {
        const existing = cart.find((item) => item.product.id === prod.id);
        if (existing) {
          existing.quantity += 1;
        } else {
          cart.push({ product: prod, quantity: 1 });
        }
        updateCartUI();
        openCart();
      }
    });
  });

  // Filter Buttons
  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');

      categoryButtons.forEach((b) => {
        b.classList.remove('bg-[#111111]', 'text-[#f2f2f2]');
        b.classList.add('bg-transparent', 'text-[#111111]');
      });
      btn.classList.remove('bg-transparent', 'text-[#111111]');
      btn.classList.add('bg-[#111111]', 'text-[#f2f2f2]');

      productCards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'ALL' || cardCat === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Search Modal
  function openSearch() {
    if (searchModal) {
      searchModal.classList.remove('hidden');
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
        renderSearchResults('');
      }
    }
  }

  function closeSearch() {
    if (searchModal) {
      searchModal.classList.add('hidden');
    }
  }

  function renderSearchResults(query: string) {
    if (!searchResults) return;
    const q = query.trim().toUpperCase();
    const matches = PRODUCTS.filter(
      (p) =>
        p.name.toUpperCase().includes(q) ||
        p.category.toUpperCase().includes(q) ||
        p.brand.toUpperCase().includes(q) ||
        p.spec.toUpperCase().includes(q)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="py-12 text-center text-[#111111]">
          <p class="font-clash text-lg uppercase">NO CORRESPONDING MANIFEST FOUND</p>
          <p class="font-satoshi text-xs text-[#838282] mt-1">Refine specification search query or view complete export catalogue.</p>
        </div>
      `;
    } else {
      searchResults.innerHTML = matches
        .map(
          (p) => `
        <div class="border border-[#111111] bg-white p-4 flex items-center justify-between gap-4 group">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-12 h-12 border border-[#111111] bg-[#f2f2f2] shrink-0 overflow-hidden">
              <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover swiss-reveal-image" />
            </div>
            <div class="min-w-0">
              <span class="text-[10px] font-mono-swiss text-[#838282] uppercase tracking-wider block mb-0.5">${p.category} // ${p.brand}</span>
              <h4 class="font-clash text-sm uppercase text-[#111111] truncate mb-0.5">${p.name}</h4>
              <span class="text-xs font-mono-swiss font-bold text-[#111111]">${p.price}</span>
            </div>
          </div>
          <button type="button" data-product-id="${p.id}" class="search-add-btn shrink-0 px-4 py-2 border border-[#111111] bg-[#111111] text-[#f2f2f2] hover:bg-transparent hover:text-[#111111] font-mono-swiss text-xs uppercase tracking-wider transition-all cursor-pointer">
            + MANIFEST
          </button>
        </div>
      `
        )
        .join('');

      const searchAddBtns = searchResults.querySelectorAll<HTMLButtonElement>('.search-add-btn');
      searchAddBtns.forEach((b) => {
        b.addEventListener('click', () => {
          const pid = b.getAttribute('data-product-id');
          const p = PRODUCTS.find((item) => item.id === pid);
          if (p) {
            const ex = cart.find((item) => item.product.id === p.id);
            if (ex) ex.quantity += 1;
            else cart.push({ product: p, quantity: 1 });
            updateCartUI();
            closeSearch();
            openCart();
          }
        });
      });
    }
  }

  if (searchToggleBtn) searchToggleBtn.addEventListener('click', openSearch);
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults((e.target as HTMLInputElement).value);
    });
  }

  // Swiss Index Interactive Switcher
  const editorialStories = [
    {
      subtitle: 'SWISS INDEX 01 // NHAVA SHEVA CORRIDOR',
      headline: 'THE ARCHITECTURAL SOLE',
      tagline: 'VULCANIZED NATURAL RUBBER FUSED WITH HIGH-DENSITY HEAVY CANVAS.',
      watermarkText: 'CRAFT',
      watermarkImg: '/src/assets/images/hero_cargo_ship_1792511625875.jpg',
      cta: 'EXPLORE THE ATELIER'
    },
    {
      subtitle: 'SWISS INDEX 02 // DEEP-SEA LOGISTICS',
      headline: 'DEEPWATER MARITIME RUNNERS',
      tagline: 'DIRECT FREIGHT CORRIDORS LINKING NHAVA SHEVA TERMINALS TO GLOBAL PORTS.',
      watermarkText: 'OCEAN',
      watermarkImg: '/src/assets/images/logistics_container_port_1792511627971.jpg',
      cta: 'VIEW LOGISTICS MANIFEST'
    },
    {
      subtitle: 'SWISS INDEX 03 // TELLICHERRY PURITY',
      headline: 'MALABAR GOLD & CURCUMIN',
      tagline: 'ESTATE GROWN WHOLE SPICES SORTED WITH 99.8% SPECIFICATION PURITY.',
      watermarkText: 'SPICE',
      watermarkImg: '/src/assets/images/product_indian_spices_1792511627303.jpg',
      cta: 'ORDER HARVEST LOT'
    }
  ];

  let currentStoryIdx = 0;
  const editorialNextBtn = document.getElementById('editorial-next-btn');
  const editorialSubtitle = document.getElementById('editorial-subtitle');
  const editorialHeadline = document.getElementById('editorial-headline');
  const editorialTagline = document.getElementById('editorial-tagline');
  const editorialWatermarkImg = document.getElementById('editorial-watermark-img') as HTMLImageElement | null;
  const editorialWatermarkText = document.getElementById('editorial-watermark-text');
  const editorialCta = document.getElementById('editorial-cta');

  function updateEditorialStory(idx: number) {
    const story = editorialStories[idx];
    if (editorialSubtitle) editorialSubtitle.textContent = story.subtitle;
    if (editorialHeadline) editorialHeadline.textContent = story.headline;
    if (editorialTagline) editorialTagline.textContent = story.tagline;
    if (editorialWatermarkText) editorialWatermarkText.textContent = story.watermarkText;
    if (editorialWatermarkImg) editorialWatermarkImg.src = story.watermarkImg;
    if (editorialCta) editorialCta.textContent = story.cta;
  }

  if (editorialNextBtn) {
    editorialNextBtn.addEventListener('click', () => {
      currentStoryIdx = (currentStoryIdx + 1) % editorialStories.length;
      updateEditorialStory(currentStoryIdx);
    });
  }

  // Checkout Button
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (checkoutNotice) {
        checkoutNotice.classList.remove('hidden');
        setTimeout(() => {
          checkoutNotice.classList.add('hidden');
        }, 5000);
      }
      cart = [];
      updateCartUI();
    });
  }

  // Initial cart UI render
  updateCartUI();
});
