/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useId } from 'react';
import {
  Ship,
  Anchor,
  FileCheck2,
  ShieldCheck,
  PackageCheck,
  Plane,
  Globe2,
  Award,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Send,
  Boxes,
  FileText,
  DollarSign,
  ChevronUp,
  Building2,
  Factory,
  ArrowUpRight,
  Layers,
  Sparkles,
  Search,
  Check,
  Calendar,
  Compass,
  AlertCircle
} from 'lucide-react';

// Images generated specifically for Alpha Global Traders
import heroCargoShipImg from './assets/images/hero_cargo_ship_1792511625875.jpg';
import spicesImg from './assets/images/product_indian_spices_1792511627303.jpg';
import textilesImg from './assets/images/product_indian_textiles_1792511627399.jpg';
import logisticsPortImg from './assets/images/logistics_container_port_1792511627971.jpg';
import handicraftsImg from './assets/images/product_indian_handicrafts_1792511628636.jpg';

/* ==========================================================================
   COMPANY CONFIGURATION (EDITABLE DATA STORE)
   Replace placeholders [YOUR PHONE], [YOUR EMAIL], [YOUR ADDRESS] etc.
   ========================================================================== */
export const COMPANY_CONFIG = {
  companyName: "Alphaa Global Traders",
  brandKicker: "Indian Merchant Exporter & Global Supply Partner",
  tagline: "Connecting India to the World",
  subheading: "Reliable export of quality Indian products to buyers across the globe with end-to-end documentation, stringent inspection, and seamless multimodal shipping.",
  
  // Contact details & placeholders
  contact: {
    phone: "+91 98765 43210 [YOUR PHONE]",
    phoneRaw: "+919876543210",
    email: "inquiries@alphaaglobaltraders.com [YOUR EMAIL]",
    emailRaw: "inquiries@alphaaglobaltraders.com",
    whatsapp: "+91 98765 43210 [YOUR WHATSAPP]",
    whatsappRaw: "919876543210",
    address: "Tower 4, Level 12, World Trade Centre, Cuffe Parade, Mumbai, Maharashtra 400005, India [YOUR ADDRESS]",
    operatingHours: "Monday to Saturday: 09:00 AM – 06:30 PM (IST / UTC+5:30)",
    portsOfOrigin: "Nhava Sheva (JNPT Mumbai), Mundra Port (Gujarat), Chennai Port, Cochin Port",
    registeredWith: "Directorate General of Foreign Trade (DGFT), Government of India"
  },

  // Section 3: Stats Strip (4 counters)
  stats: [
    { label: "Years of Experience", value: 15, suffix: "+", detail: "Continuous cross-border trading" },
    { label: "Countries Served", value: 38, suffix: "+", detail: "Across Europe, GCC, Americas & Asia" },
    { label: "Shipments Delivered", value: 12500, suffix: "+", detail: "TEU containers & breakbulk cargo" },
    { label: "Happy Clients", value: 450, suffix: "+", detail: "Repeat B2B buyers & distributors" }
  ],

  // Section 4: What We Do (6 service cards)
  services: [
    {
      id: "sourcing",
      title: "Product Sourcing",
      icon: Search,
      shortDesc: "Direct farm-gate and factory sourcing across India's top agricultural belts and industrial hubs, securing competitive pricing with guaranteed purity.",
      features: ["Factory vetting & audits", "Raw material verification", "Volume price negotiations"]
    },
    {
      id: "inspection",
      title: "Quality Inspection",
      icon: ShieldCheck,
      shortDesc: "Rigorous pre-shipment quality assurance with third-party testing protocols (SGS, Bureau Veritas, Spice Board, APEDA guidelines) to guarantee zero rejection.",
      features: ["Batch sampling & lab reports", "Pre-dispatch container check", "Phytosanitary & purity tests"]
    },
    {
      id: "documentation",
      title: "Export Documentation",
      icon: FileCheck2,
      shortDesc: "Complete regulatory compliance handling Bills of Lading, Certificates of Origin, EUR-1, COO, MSDS, packing lists, and commercial consular legalizations.",
      features: ["Error-free customs filing", "Certificate of Origin (COO)", "Consular attestations & LC audits"]
    },
    {
      id: "packaging",
      title: "Packaging and Labelling",
      icon: PackageCheck,
      shortDesc: "Tailored export-grade packaging (vacuum-sealed, palletized, PP woven, corrugated Master cartons) customized with buyer branding and barcode compliance.",
      features: ["Export pallets (ISPM-15)", "Multi-language compliance labels", "Moisture barrier & desiccant packs"]
    },
    {
      id: "freight",
      title: "Sea and Air Freight",
      icon: Ship,
      shortDesc: "Multimodal logistics network delivering FCL (Full Container Load), LCL consolidation, and express air cargo with preferential carrier contracts.",
      features: ["FCL / LCL consolidation", "Temperature-controlled reefers", "Real-time vessel tracking"]
    },
    {
      id: "customs",
      title: "Customs Clearance",
      icon: Anchor,
      shortDesc: "Licensed CHA customs brokerage ensuring rapid duty clearance at major Indian ports (Nhava Sheva, Mundra, Chennai) without costly demurrage delays.",
      features: ["Zero-demurrage clearance", "EDI port documentation", "Duty drawback & rebate filing"]
    }
  ],

  // Section 5: Products Data (Categorized, easily editable)
  productCategories: [
    "All Products",
    "Agricultural Products",
    "Spices",
    "Textiles",
    "Handicrafts",
    "Engineering Goods"
  ],

  products: [
    {
      id: "spices-assorted",
      category: "Spices",
      title: "Indian Whole Spices & Blends",
      origin: "Kerala & Karnataka, India",
      image: spicesImg,
      badge: "Export Grade A+",
      description: "Naturally dried Malabar black pepper, Alleppey green cardamom (7mm-8mm bold), organic Salem turmeric fingers with high curcumin (3.5%+), and royal star anise.",
      specs: ["Purity: 99% Min", "Moisture: <10%", "Curcumin in Turmeric: 3.5% - 4.2%", "Cert: Spice Board / FSSAI / USDA Organic"],
      minOrder: "1 MT (Metric Ton)",
      packaging: "25kg / 50kg Jute or Food-grade PP Sacks"
    },
    {
      id: "textiles-cotton",
      category: "Textiles",
      title: "Organic Cotton & Linen Fabrics",
      origin: "Tamil Nadu & Gujarat, India",
      image: textilesImg,
      badge: "GOTS Certified",
      description: "Premium long-staple Indian combed cotton yarns, grey fabric, finished dyed textiles, bed linens, and sustainable organic woven fabrics for global apparel brands.",
      specs: ["Count: 20s to 80s Combed", "GSM: 110 to 320", "Weave: Plain, Twill, Satin", "Standard: OEKO-TEX Standard 100"],
      minOrder: "2,000 Metres / 1 FCL",
      packaging: "Moisture-sealed Roll Packing on Heavy Cores"
    },
    {
      id: "handicrafts-wood-brass",
      category: "Handicrafts",
      title: "Artisanal Woodware & Brass Vessels",
      origin: "Saharanpur & Moradabad, India",
      image: handicraftsImg,
      badge: "Handcrafted Heritage",
      description: "Master-crafted Sheesham wood carved decorative boxes, hand-hammered solid brass tableware, ornamental vases, and polished stone handicrafts for luxury homeware retailers.",
      specs: ["Material: Grade-1 Brass & Seasoned Wood", "Finish: Antique Gold / Matte Lacquer", "Food Contact: Lead-Free Safe", "Compliance: Lacey Act / FSC Certified"],
      minOrder: "250 Pieces / Assorted",
      packaging: "Individual Bubble Wrap + 5-Ply Corrugated Cartons"
    },
    {
      id: "agri-basmati",
      category: "Agricultural Products",
      title: "Premium 1121 Basmati Rice",
      origin: "Punjab & Haryana, India",
      image: spicesImg, // fallback or themed produce
      badge: "Extra Long Grain",
      description: "Aged 1121 and Traditional Indian Basmati rice. Average grain length exceeding 8.35mm before cooking, non-sticky texture, rich aroma, and elongation ratio of 2.5x.",
      specs: ["Grain Length: 8.35mm+", "Broken Grains: Max 1%", "Aging: 12-24 Months", "Moisture: Max 12.5%"],
      minOrder: "1 x 20ft Container (approx 25 MT)",
      packaging: "5kg, 10kg, 20kg, 50kg Non-woven BOPP Bags"
    },
    {
      id: "agri-millet",
      category: "Agricultural Products",
      title: "Nutri-Cereals & Millets (Bajra, Ragi)",
      origin: "Rajasthan & Maharashtra, India",
      image: spicesImg,
      badge: "Superfood Grade",
      description: "Nutritious export-grade Pearl Millet (Bajra), Finger Millet (Ragi), and Sorghum. Cleaned, destoned, sortexed, gluten-free grains for health food manufacturers.",
      specs: ["Sortex Cleaned: 99.8%", "Foreign Matter: 0.2% Max", "Aflatoxin: Under 10 ppb", "Non-GMO Verified"],
      minOrder: "10 MT",
      packaging: "25kg / 50kg Multiwall Paper or PP Bags"
    },
    {
      id: "engineering-valves",
      category: "Engineering Goods",
      title: "Industrial Precision Castings & Forgings",
      origin: "Coimbatore & Rajkot, India",
      image: logisticsPortImg,
      badge: "ISO 9001:2015 Spec",
      description: "High-tolerance ductile iron castings, stainless steel flange fittings, industrial valve bodies, and precision machined components engineered to ASTM and DIN standards.",
      specs: ["Material: SS316 / SS304 / Ductile Iron", "Tolerance: DIN ISO 2768-m", "Testing: Hydrostatic / Ultrasonic / Mill Test", "Surface: Anti-rust oiled / Powder coated"],
      minOrder: "500 Units / 1 Palette",
      packaging: "ISPM-15 Wooden Crates with VCI Anti-Corrosion Liners"
    }
  ],

  // Section 6: Why Choose Us (6 points)
  whyChooseUs: [
    {
      title: "Quality Assurance",
      description: "Double-tier quality checks at production origin and port-loading point. Certified lab testing certificates provided with every single shipment.",
      icon: ShieldCheck
    },
    {
      title: "Competitive Pricing",
      description: "Direct farm-gate and manufacturer procurement eliminates multiple intermediary margins, passing verifiable cost advantages to foreign buyers.",
      icon: DollarSign
    },
    {
      title: "On-Time Delivery",
      description: "Contractual scheduling with priority shipping line bookings across Maersk, MSC, and CMA CGM ensures predictable port-to-port ETAs.",
      icon: Clock
    },
    {
      title: "Complete Documentation Support",
      description: "Flawless compliance with importing nation guidelines, Letters of Credit (LC at Sight / Usance), COO, phytosanitary, and customs clearance paperwork.",
      icon: FileText
    },
    {
      title: "Trusted Partner Network",
      description: "An entrenched network of 120+ vetted manufacturers, certified growers, cold-chain operators, and bonded warehouse partners across 18 Indian states.",
      icon: Users
    },
    {
      title: "Dedicated Support",
      description: "A single dedicated trade manager assigned to your account, providing 24/7 shipment milestone status updates across all global timezones.",
      icon: MessageCircle
    }
  ],

  // Section 7: How Exporting Works (6 steps)
  exportSteps: [
    {
      number: "01",
      title: "Enquiry",
      shortDesc: "Buyer submits RFQ detailing required product, specifications, quantity, and target port.",
      detail: "Within 24 hours, our trade team analyzes availability, tariff schedules, and seasonal harvesting cycles."
    },
    {
      number: "02",
      title: "Quotation",
      shortDesc: "We provide comprehensive FOB or CIF quotation with transparent freight and insurance estimates.",
      detail: "Includes product test spec sheet, lab analysis parameters, and commercial terms tailored to your port."
    },
    {
      number: "03",
      title: "Order Confirmation",
      shortDesc: "Proforma Invoice (PI) issued, sales contract executed, and LC / payment terms locked.",
      detail: "Clear terms specifying Incoterms 2020 (FOB, CIF, CFR), packaging guidelines, and loading schedules."
    },
    {
      number: "04",
      title: "Quality Check",
      shortDesc: "Batch production inspected, lab tested, sortex-cleaned, and packed under strict supervision.",
      detail: "Photographic & video inspection records shared with buyer before container stuffing."
    },
    {
      number: "05",
      title: "Shipping",
      shortDesc: "Customs clearance at Indian port, bill of lading generation, and vessel departure.",
      detail: "Containers sealed with RFID high-security bolt seals; real-time satellite tracking links activated."
    },
    {
      number: "06",
      title: "Delivery",
      shortDesc: "Original shipping documents dispatched via courier / bank; cargo clears destination port smoothly.",
      detail: "Our post-delivery follow-up ensures satisfaction and schedules rolling supply agreements."
    }
  ],

  // Section 8: Global Reach Data
  globalRegions: [
    {
      id: "middle-east",
      name: "Middle East & GCC",
      countries: "UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain",
      transitTime: "3 – 5 Days (Sea Freight from Mumbai/Mundra)",
      commodities: "Basmati Rice, Whole Spices, Fresh Agri Produce, Cotton Fabrics",
      primaryHub: "Jebel Ali Port (Dubai), King Abdulaziz Port (Dammam)"
    },
    {
      id: "europe",
      name: "Europe & UK",
      countries: "Germany, UK, Netherlands, France, Italy, Spain",
      transitTime: "18 – 24 Days (Direct Maritime Corridor)",
      commodities: "Organic Spices, GOTS Cotton, Brass Handicrafts, Engineering Castings",
      primaryHub: "Rotterdam, Hamburg, Felixstowe, Antwerp"
    },
    {
      id: "north-america",
      name: "North America",
      countries: "United States, Canada, Mexico",
      transitTime: "24 – 30 Days (East & West Coast Services)",
      commodities: "Aged Basmati, Specialty Spices, Home Furnishings, Industrial Forgings",
      primaryHub: "New York/New Jersey, Savannah, Los Angeles, Montreal"
    },
    {
      id: "southeast-asia",
      name: "Southeast Asia",
      countries: "Singapore, Malaysia, Indonesia, Vietnam, Thailand",
      transitTime: "6 – 10 Days (Bay of Bengal / Malacca Strait)",
      commodities: "Spices, Raw Cotton, Grains, Agri Commodities",
      primaryHub: "Port of Singapore, Port Klang, Tanjung Pelepas"
    },
    {
      id: "africa",
      name: "Africa",
      countries: "Kenya, South Africa, Tanzania, Nigeria, Egypt",
      transitTime: "10 – 16 Days (Western Indian Ocean Route)",
      commodities: "Milled Rice, Machinery Spares, Textiles, Packaging Solutions",
      primaryHub: "Mombasa, Durban, Dar es Salaam, Alexandria"
    }
  ],

  // Section 9: Insights / News (3 articles)
  insights: [
    {
      id: 1,
      date: "October 14, 2026",
      readTime: "4 min read",
      category: "Trade Policy",
      title: "India's New Green Shipping Corridors: What Global Importers Need to Know",
      summary: "Modernized container terminal operations at Nhava Sheva and Mundra reduce average vessel turnaround time to under 22 hours, cutting demurrage risks for overseas buyers.",
      author: "Alphaa Trade Advisory Team"
    },
    {
      id: 2,
      date: "September 28, 2026",
      readTime: "5 min read",
      category: "Quality Standards",
      title: "Meeting EU & US FDA Compliance for Indian Whole Spice Consignments",
      summary: "A practical guide to pesticide residue screening, steam sterilization protocols, and ethylene oxide testing required for seamless customs clearance abroad.",
      author: "Quality & Regulatory Desk"
    },
    {
      id: 3,
      date: "August 19, 2026",
      readTime: "6 min read",
      category: "Supply Chain",
      title: "Hedging Ocean Freight Volatility: FOB vs CIF Strategies for 2026-2027",
      summary: "How structured volume commitments and forward charter arrangements help our B2B clients lock in predictable landed costs despite maritime fluctuations.",
      author: "Logistics Operations Lead"
    }
  ],

  // Section 10: Testimonials (3 reviews)
  testimonials: [
    {
      id: 1,
      quote: "Alphaa Global Traders has been our exclusive Indian sourcing partner for Tellicherry black pepper and green cardamom for over four years. Their consignment consistency and lab report precision mean our German customs inspections clear without a hitch.",
      clientName: "Michael Vance",
      title: "VP of Global Procurement",
      company: "Nordic Spice Import GmbH",
      location: "Hamburg, Germany",
      verifiedTrade: "40+ TEU containers imported annually"
    },
    {
      id: 2,
      quote: "In the Gulf market, rice quality and prompt delivery before peak consumption seasons are critical. Alphaa Global Traders delivered our 1121 Basmati consignments into Jebel Ali three days ahead of schedule, with flawless packaging and moisture control.",
      clientName: "Tariq Al-Mansoor",
      title: "Managing Director",
      company: "Al-Mansoor Foodstuffs & Distribution",
      location: "Dubai, United Arab Emirates",
      verifiedTrade: "Basmati Rice & Agri Commodities"
    },
    {
      id: 3,
      quote: "Sourcing certified organic cotton and artisan homeware from across India used to require visiting ten different factories. Alphaa Global Traders unified the entire audit, quality check, and container stuffing process under one transparent contract.",
      clientName: "Eleanor Hughes",
      title: "Head of Ethical Sourcing",
      company: "Heritage Home & Living Ltd.",
      location: "London, United Kingdom",
      verifiedTrade: "GOTS Cotton & Handcrafted Decor"
    }
  ],

  // Section 11: Who We Are
  about: {
    story: "Founded with the ambition to bridge Indian production excellence with discerning international commerce, Alphaa Global Traders operates as a trusted merchant exporter based out of India's commercial capital, Mumbai. We partner directly with agricultural cooperatives, state-of-the-art textile mills, and engineering fabrication units to deliver institutional grade commodities across six continents.",
    mission: "To be the most dependable bridge between Indian manufacturing and global markets by delivering uncompromising quality, transparent trade governance, and predictable logistics at competitive terms.",
    vision: "To establish Indian excellence as the premier benchmark in international B2B commerce, advancing sustainable sourcing, ethical craftsmanship, and technological transparency in every cross-border shipment.",
    values: [
      { label: "Integrity", desc: "Transparent contracts with zero hidden logistics or documentation surcharges." },
      { label: "Precision", desc: "Strict adherence to international sanitary, phytosanitary, and industrial tolerances." },
      { label: "Velocity", desc: "Swift processing cycles from proforma issuance to vessel departure." },
      { label: "Partnership", desc: "Long-term bilateral relationships built on shared growth and mutual respect." }
    ]
  }
};

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [activeRegionIdx, setActiveRegionIdx] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Inquiry form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    product: "Indian Whole Spices & Blends",
    incoterm: "CIF (Cost, Insurance & Freight)",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quoteReferenceId, setQuoteReferenceId] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [selectedProductHighlight, setSelectedProductHighlight] = useState(false);

  // Monitor scroll for Back-To-Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products by category
  const filteredProducts = activeCategory === "All Products"
    ? COMPANY_CONFIG.products
    : COMPANY_CONFIG.products.filter(p => p.category === activeCategory);

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Product Enquire Now click handler
  const handleEnquireProduct = (productTitle: string) => {
    setFormData(prev => ({
      ...prev,
      product: productTitle,
      message: prev.message || `We are interested in receiving a detailed export quotation, specification sheet, and pricing for ${productTitle}. Target destination port: `
    }));
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSelectedProductHighlight(true);
      setTimeout(() => setSelectedProductHighlight(false), 2500);
    }
  };

  // Form submit handler with validation
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = "Please provide your full name";
    if (!formData.company.trim()) errors.company = "Company / Organization name is required";
    if (!formData.country.trim()) errors.country = "Destination country is required";
    if (!formData.email.trim() || !formData.email.includes("@")) errors.email = "Valid corporate email is required";
    if (!formData.phone.trim()) errors.phone = "Phone or WhatsApp number is required";
    if (!formData.message.trim()) errors.message = "Please share details about your required quantity and port of delivery";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    const refNum = `AGT-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    setQuoteReferenceId(refNum);
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: "",
      company: "",
      country: "",
      email: "",
      phone: "",
      product: "Indian Whole Spices & Blends",
      incoterm: "CIF (Cost, Insurance & Freight)",
      message: ""
    });
  };

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % COMPANY_CONFIG.testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + COMPANY_CONFIG.testimonials.length) % COMPANY_CONFIG.testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans">

      {/* ====================================================================
          SECTION 1: STICKY TOP NAVIGATION BAR (Top Bar Contract: 3 Zones)
          Zone 1: Single text element wordmark
          Zone 2: 4-5 concise single-line nav links
          Zone 3: 1 primary action button
          ==================================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 shrink-0 group focus:outline-hidden">
            <div className="w-10 h-10 rounded-lg bg-[#0B3D91] flex items-center justify-center text-white shadow-sm group-hover:bg-[#082d6b] transition-colors">
              <Ship className="w-5 h-5 text-[#C9A227]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0B3D91] whitespace-nowrap">
                Alphaa Global Traders
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase">
                Merchant Exporter · India
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a 
              href="#what-we-do" 
              onClick={(e) => scrollToSection(e, 'what-we-do')}
              className="hover:text-[#0B3D91] transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#0B3D91]"
            >
              What We Do
            </a>
            <a 
              href="#products" 
              onClick={(e) => scrollToSection(e, 'products')}
              className="hover:text-[#0B3D91] transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#0B3D91]"
            >
              Products
            </a>
            <a 
              href="#who-we-are" 
              onClick={(e) => scrollToSection(e, 'who-we-are')}
              className="hover:text-[#0B3D91] transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#0B3D91]"
            >
              Who We Are
            </a>
            <a 
              href="#insights" 
              onClick={(e) => scrollToSection(e, 'insights')}
              className="hover:text-[#0B3D91] transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#0B3D91]"
            >
              Insights
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hover:text-[#0B3D91] transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#0B3D91]"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D91] rounded-lg hover:bg-[#082d6b] transition-colors shadow-xs whitespace-nowrap"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9A227]" />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#0B3D91] hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg">
            <div className="flex flex-col space-y-3">
              <a
                href="#what-we-do"
                onClick={(e) => scrollToSection(e, 'what-we-do')}
                className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
              >
                What We Do
              </a>
              <a
                href="#products"
                onClick={(e) => scrollToSection(e, 'products')}
                className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
              >
                Products
              </a>
              <a
                href="#who-we-are"
                onClick={(e) => scrollToSection(e, 'who-we-are')}
                className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
              >
                Who We Are
              </a>
              <a
                href="#insights"
                onClick={(e) => scrollToSection(e, 'insights')}
                className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
              >
                Insights
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
              >
                Contact
              </a>
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#0B3D91] rounded-lg shadow-sm"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A227]" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>


      {/* ====================================================================
          SECTION 2: HERO BANNER
          Full-width background image of cargo ship at port, dark blue overlay,
          TCS-inspired clean typography, bold enterprise presence
          ==================================================================== */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-[#071F4A] overflow-hidden">
        {/* Background photo with dark royal blue overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroCargoShipImg}
            alt="International container cargo ship docking at Indian deepwater port"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Graded corporate scrim: Deep Royal Blue to dark navy */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071F4A]/95 via-[#0B3D91]/80 to-[#071F4A]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full text-white">
          <div className="max-w-3xl">
            {/* Clean kicker text */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest text-[#C9A227]">
              <span>International Trade & Sourcing</span>
              <span aria-hidden="true">·</span>
              <span>Government Recognized Exporter</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 text-white text-balance">
              Connecting India to the World
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl">
              Reliable export of quality Indian products to buyers across the globe. We bridge Indian agricultural, textile, and industrial capacity with seamless international logistics.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-slate-900 bg-[#C9A227] hover:bg-[#d8b030] rounded-lg transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </a>

              <a
                href="#products"
                onClick={(e) => scrollToSection(e, 'products')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg backdrop-blur-xs transition-all whitespace-nowrap"
              >
                <span>Explore Products</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C9A227]" />
                <span>Verified APEDA, Spice Board & DGFT Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C9A227]" />
                <span>Pre-Shipment SGS / Third-Party Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C9A227]" />
                <span>Incoterms 2020: FOB, CIF, CFR, EXW</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ====================================================================
          SECTION 3: STATS STRIP
          4 animated / clean counters: Years of Experience, Countries Served,
          Shipments Delivered, Happy Clients
          ==================================================================== */}
      <section className="bg-white border-b border-slate-200 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {COMPANY_CONFIG.stats.map((stat, idx) => (
              <div key={idx} className={`flex flex-col ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B3D91] font-mono tabular-nums">
                    {stat.value.toLocaleString()}
                  </span>
                  <span className="text-2xl lg:text-3xl font-bold text-[#C9A227]">
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mt-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ====================================================================
          SECTION 4: WHAT WE DO
          6 service cards with icons: Product Sourcing, Quality Inspection,
          Export Documentation, Packaging and Labelling, Sea and Air Freight,
          Customs Clearance
          ==================================================================== */}
      <section id="what-we-do" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0B3D91] mb-2">
              Comprehensive Export Logistics
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              What We Do
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              We manage the entire export continuum from Indian factories and farm belts to your overseas port of entry, ensuring complete regulatory compliance and transparent cargo custody.
            </p>
          </div>

          {/* 6 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_CONFIG.services.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0B3D91] flex items-center justify-center group-hover:bg-[#0B3D91] group-hover:text-white transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0B3D91] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Maritime Capability Callout Banner */}
          <div className="mt-12 bg-white rounded-xl border border-slate-200 p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C9A227]/15 flex items-center justify-center text-[#0B3D91] shrink-0">
                <Ship className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Preferential Freight Contracts from Major Indian Gateways
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Direct departures through Nhava Sheva (JNPT), Mundra, Chennai, and Cochin to global deepwater hubs.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B3D91] hover:text-white bg-blue-50 hover:bg-[#0B3D91] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Request Port Schedule</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>


      {/* ====================================================================
          SECTION 5: OUR PRODUCTS
          Card grid with category tabs, image, title, short description, and
          "Enquire Now" button that scrolls to contact form and pre-fills
          ==================================================================== */}
      <section id="products" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-[#0B3D91] mb-2">
                Export Catalog
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Our Products
              </h2>
              <p className="text-base text-slate-600 mt-3">
                All commodities adhere to international grade specifications, phytosanitary certifications, and standardized export packaging.
              </p>
            </div>

            {/* Catalog replacement note for user */}
            <div className="text-xs text-slate-400 bg-slate-50 px-3.5 py-2 rounded-md border border-slate-200 shrink-0">
              <span>Data defined in </span>
              <code className="text-[#0B3D91] font-semibold">COMPANY_CONFIG.products</code>
            </div>
          </div>

          {/* Category Tabs (Interactive Filter Controls) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {COMPANY_CONFIG.productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#0B3D91] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
              >
                {/* Product Image Slot with Fallback Container */}
                <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      // Fallback gracefully if image load fails
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Subtle Gradient Scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {/* Clean unboxed category badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#0B3D91] text-[11px] font-bold px-2.5 py-1 rounded shadow-xs uppercase tracking-wider">
                    {product.category}
                  </div>

                  {/* Export Badge */}
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                    <span>{product.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span>Origin: {product.origin}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0B3D91] transition-colors mb-2">
                      {product.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Specifications list */}
                    <div className="bg-slate-50 rounded-lg p-3 mb-4 space-y-1.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Export Specifications
                      </div>
                      {product.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#0B3D91]" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs text-slate-500 mb-6 flex flex-col gap-1 border-t border-slate-100 pt-3">
                      <div><span className="font-semibold text-slate-700">Min Order:</span> {product.minOrder}</div>
                      <div><span className="font-semibold text-slate-700">Packaging:</span> {product.packaging}</div>
                    </div>
                  </div>

                  {/* Enquire Now Button */}
                  <button
                    type="button"
                    onClick={() => handleEnquireProduct(product.title)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#0B3D91] hover:text-white bg-blue-50 hover:bg-[#0B3D91] rounded-lg border border-blue-200 hover:border-[#0B3D91] transition-all cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Procurement Notice */}
          <div className="mt-12 text-center bg-slate-50 border border-slate-200 rounded-xl p-8">
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              Need a Custom Product, Private Label, or Bulk Agri Commodity?
            </h4>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto mb-5">
              Our sourcing desks across Gujarat, Maharashtra, Punjab, and South India can procure any tailored grade with custom branding and laboratory certification.
            </p>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B3D91] hover:bg-[#082d6b] rounded-lg transition-colors shadow-xs"
            >
              <span>Submit Custom Commodity Requirement</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9A227]" />
            </a>
          </div>

        </div>
      </section>


      {/* ====================================================================
          SECTION 6: WHY CHOOSE US
          6 points: Quality Assurance, Competitive Pricing, On-Time Delivery,
          Complete Documentation Support, Trusted Partner Network, Dedicated Support
          ==================================================================== */}
      <section className="py-20 lg:py-28 bg-[#071F4A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-2">
              The Alphaa Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Why Global Buyers Partner With Us
            </h2>
            <p className="text-base text-slate-300 mt-4 leading-relaxed">
              International trade requires eliminating unpredictability. We provide total institutional accountability, transparent costing, and verifiable quality at every step.
            </p>
          </div>

          {/* 6 Grid points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_CONFIG.whyChooseUs.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#C9A227]/20 text-[#C9A227] flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                    <Check className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Guaranteed SLA & Compliance</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ====================================================================
          SECTION 7: HOW EXPORTING WORKS
          Horizontal step timeline: Enquiry -> Quotation -> Order Confirmation
          -> Quality Check -> Shipping -> Delivery
          ==================================================================== */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0B3D91] mb-2">
              Seamless Cross-Border Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              How Exporting Works
            </h2>
            <p className="text-base text-slate-600 mt-4">
              Our structured 6-step export protocol guarantees clarity, regulatory safety, and zero surprise costs from inquiry to final port destination.
            </p>
          </div>

          {/* Horizontal Step Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {COMPANY_CONFIG.exportSteps.map((step, idx) => (
              <div
                key={step.number}
                className="relative bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between group hover:border-[#0B3D91] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#0B3D91]">
                      {step.number}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227]" />
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#0B3D91] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {step.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 leading-normal">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline assurance badge */}
          <div className="mt-12 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-6">
            <span>Average initial quote turnaround: <strong>24 Hours</strong></span>
            <span aria-hidden="true">·</span>
            <span>Pre-shipment photo & video confirmation prior to sealing</span>
            <span aria-hidden="true">·</span>
            <span>Real-time container bill of lading tracking</span>
          </div>

        </div>
      </section>


      {/* ====================================================================
          SECTION 8: GLOBAL REACH
          World map graphic & interactive list of countries served with marked regions
          ==================================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0B3D91] mb-2">
              Worldwide Logistics Footprint
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Global Reach
            </h2>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              From Indian deepwater terminals in Mumbai and Gujarat, our trade routes connect directly with 38+ destination countries across the Americas, Europe, Middle East, Africa, and the Asia-Pacific.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Region Tabs & Specifications */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Select Trade Corridor:
              </div>

              {COMPANY_CONFIG.globalRegions.map((region, idx) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegionIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    activeRegionIdx === idx
                      ? "bg-white border-[#0B3D91] shadow-md ring-1 ring-[#0B3D91]/20"
                      : "bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div>
                    <h4 className={`text-sm font-bold ${activeRegionIdx === idx ? 'text-[#0B3D91]' : 'text-slate-800'}`}>
                      {region.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {region.countries}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeRegionIdx === idx ? 'text-[#0B3D91] translate-x-1' : 'text-slate-400'}`} />
                </button>
              ))}
            </div>

            {/* Right Column: Detailed Corridor Card & Port Terminals */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-8 shadow-xs">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
                    Active Trade Lane
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {COMPANY_CONFIG.globalRegions[activeRegionIdx].name}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0B3D91] flex items-center justify-center">
                  <Globe2 className="w-6 h-6" />
                </div>
              </div>

              <div className="py-6 space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Countries Regularly Served
                  </div>
                  <div className="text-sm font-medium text-slate-800">
                    {COMPANY_CONFIG.globalRegions[activeRegionIdx].countries}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50 rounded-lg p-3.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Standard Sea Transit Time
                    </div>
                    <div className="text-sm font-semibold text-[#0B3D91] mt-1 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#C9A227]" />
                      <span>{COMPANY_CONFIG.globalRegions[activeRegionIdx].transitTime}</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-3.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Primary Destination Gateways
                    </div>
                    <div className="text-xs font-semibold text-slate-800 mt-1 flex items-center gap-1.5">
                      <Ship className="w-4 h-4 text-[#0B3D91]" />
                      <span>{COMPANY_CONFIG.globalRegions[activeRegionIdx].primaryHub}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Key Exported Commodities on this Corridor
                  </div>
                  <div className="text-sm text-slate-700">
                    {COMPANY_CONFIG.globalRegions[activeRegionIdx].commodities}
                  </div>
                </div>
              </div>

              {/* Indian Ports Origin Summary */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span>Indian Load Ports: </span>
                  <span className="font-semibold text-slate-800">Nhava Sheva (JNPT), Mundra, Chennai, Cochin</span>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B3D91] hover:underline"
                >
                  <span>Check Port Tariff for this Route</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ====================================================================
          SECTION 9: INSIGHTS / NEWS
          3 blog-style cards with placeholder titles about export trends
          ==================================================================== */}
      <section id="insights" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-[#0B3D91] mb-2">
                Knowledge & Market Intelligence
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Insights & Trade Updates
              </h2>
              <p className="text-base text-slate-600 mt-3">
                Key updates on Indian trade agreements, regulatory standards, container availability, and harvest updates.
              </p>
            </div>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Subscribe to Monthly Trade Bulletin</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_CONFIG.insights.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl border border-slate-200 p-7 flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-[#0B3D91]">{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0B3D91] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>By {article.author}</span>
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className="text-[#0B3D91] font-semibold flex items-center gap-1 hover:underline"
                  >
                    <span>Read Analysis</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* ====================================================================
          SECTION 10: TESTIMONIALS
          Slider with 3 placeholder client reviews
          ==================================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0B3D91] mb-2">
              Verified Overseas Client Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Trusted by B2B Buyers Worldwide
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm relative">
            <div className="max-w-4xl">
              {/* Star rating icons */}
              <div className="flex items-center gap-1 mb-6 text-[#C9A227]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
                <span className="text-xs font-semibold text-slate-500 ml-2">
                  Verified Commercial Partnership
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-2xl font-medium text-slate-800 leading-relaxed mb-8">
                "{COMPANY_CONFIG.testimonials[testimonialIdx].quote}"
              </blockquote>

              {/* Author & Verification */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-100">
                <div>
                  <div className="text-base font-bold text-slate-900">
                    {COMPANY_CONFIG.testimonials[testimonialIdx].clientName}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600">
                    {COMPANY_CONFIG.testimonials[testimonialIdx].title} · <span className="font-semibold text-slate-800">{COMPANY_CONFIG.testimonials[testimonialIdx].company}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {COMPANY_CONFIG.testimonials[testimonialIdx].location} · {COMPANY_CONFIG.testimonials[testimonialIdx].verifiedTrade}
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#0B3D91] hover:border-[#0B3D91] transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    0{testimonialIdx + 1} / 0{COMPANY_CONFIG.testimonials.length}
                  </span>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#0B3D91] hover:border-[#0B3D91] transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ====================================================================
          SECTION 11: WHO WE ARE
          About section with company story, mission, and vision (placeholder text)
          ==================================================================== */}
      <section id="who-we-are" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story & Background */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#0B3D91] mb-2">
                  Institutional Trade Heritage
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                  Who We Are
                </h2>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                {COMPANY_CONFIG.about.story}
              </p>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2 text-[#0B3D91] font-bold text-sm uppercase tracking-wider">
                    <Compass className="w-4 h-4 text-[#C9A227]" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {COMPANY_CONFIG.about.mission}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2 text-[#0B3D91] font-bold text-sm uppercase tracking-wider">
                    <Globe2 className="w-4 h-4 text-[#C9A227]" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {COMPANY_CONFIG.about.vision}
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Operational Values
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {COMPANY_CONFIG.about.values.map((v, i) => (
                    <div key={i} className="text-xs">
                      <span className="font-bold text-slate-900">{v.label}: </span>
                      <span className="text-slate-600">{v.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Anchor: Port Logistics Photography & Fast Facts */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src={logisticsPortImg}
                  alt="Multi-modal container terminal and modern logistics facility"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="font-bold text-[#C9A227]">Terminal Operations</span> · Direct integration with Nhava Sheva (JNPT) and Mundra ICD terminals.
                </div>
              </div>

              {/* Regulatory Affiliations Box */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Export Trade Affiliations & Certifications
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0B3D91]" />
                    <span>DGFT IEC Registered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0B3D91]" />
                    <span>APEDA Certified Exporter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0B3D91]" />
                    <span>Spices Board of India Member</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0B3D91]" />
                    <span>FIEO (Federation of Indian Export Org)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ====================================================================
          SECTION 12: CONTACT SECTION
          Form (Name, Company, Country, Email, Phone/WhatsApp, Product of Interest,
          Message) with validation, contact details (phone, email, address, WhatsApp)
          and a Google Map embed placeholder
          ==================================================================== */}
      <section id="contact" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0B3D91] mb-2">
              B2B Inquiry & Quotation Desk
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Get an Export Quote
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Connect with our international trade desk for formal proforma invoices, FOB/CIF freight schedules, and customized product specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 7 Cols: Inquiry Form */}
            <div className={`lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border transition-all ${
              selectedProductHighlight ? 'border-[#C9A227] ring-2 ring-[#C9A227]/40 shadow-lg' : 'border-slate-200 shadow-xs'
            }`}>
              
              {formSubmitted ? (
                /* Success Confirmation State */
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Inquiry Logged Successfully
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                      Thank You, {formData.name}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                      Your RFQ for <span className="font-semibold text-slate-800">{formData.product}</span> has been routed to our Trade Advisory Desk.
                    </p>
                  </div>

                  <div className="inline-block bg-slate-50 border border-slate-200 rounded-lg px-6 py-3 text-xs font-mono text-slate-700">
                    Reference ID: <strong className="text-[#0B3D91]">{quoteReferenceId}</strong>
                  </div>

                  <p className="text-xs text-slate-500">
                    A copy of your proforma inquiry has been acknowledged to <strong>{formData.email}</strong>. Our trade officer will reply within 24 business hours.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B3D91] bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Real Validated RFQ Form */
                <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3D91]/30 transition-all ${
                          formErrors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Global Imports Ltd"
                        className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3D91]/30 transition-all ${
                          formErrors.company ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.company && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Destination Country */}
                    <div>
                      <label htmlFor="contact-country" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Destination Country / Port <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-country"
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. Germany (Hamburg Port)"
                        className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3D91]/30 transition-all ${
                          formErrors.country ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.country && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.country}
                        </p>
                      )}
                    </div>

                    {/* Corporate Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Corporate Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="buyer@company.com"
                        className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3D91]/30 transition-all ${
                          formErrors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 555 123 4567"
                        className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3D91]/30 transition-all ${
                          formErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Product of Interest */}
                    <div>
                      <label htmlFor="contact-product" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Product of Interest
                      </label>
                      <select
                        id="contact-product"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3D91]/30"
                      >
                        {COMPANY_CONFIG.products.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title} ({p.category})
                          </option>
                        ))}
                        <option value="Custom Sourcing Requirement">Other / Custom Sourcing Requirement</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Incoterm */}
                  <div>
                    <label htmlFor="contact-incoterm" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Trade Terms (Incoterms 2020)
                    </label>
                    <select
                      id="contact-incoterm"
                      value={formData.incoterm}
                      onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3D91]/30"
                    >
                      <option value="FOB (Free on Board - Indian Port)">FOB (Free on Board - Indian Port)</option>
                      <option value="CIF (Cost, Insurance & Freight - Destination Port)">CIF (Cost, Insurance & Freight - Destination Port)</option>
                      <option value="CFR (Cost and Freight)">CFR (Cost and Freight)</option>
                      <option value="EXW (Ex Works - Factory Gate)">EXW (Ex Works - Factory Gate)</option>
                    </select>
                  </div>

                  {/* Message / Quantity */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Required Quantity, Specifications & Comments <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify your estimated volume (e.g. 1 FCL 20ft container), target delivery window, and any special packaging or lab testing requirements..."
                      className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B3D91]/30 transition-all ${
                        formErrors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white bg-[#0B3D91] hover:bg-[#082d6b] rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Request for Quotation (RFQ)</span>
                      <Send className="w-4 h-4 text-[#C9A227]" />
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-2">
                      All business inquiries handled under strict mutual non-disclosure and commercial confidence.
                    </p>
                  </div>

                </form>
              )}
            </div>

            {/* Right 5 Cols: Direct Contact Details & Google Map Embed Placeholder */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Details Card */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Trade Headquarters
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Direct communication lines to our senior export executives
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3D91] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 block">Registered Office:</span>
                      <span className="text-slate-600 leading-relaxed">{COMPANY_CONFIG.contact.address}</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3D91] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 block">Telephone:</span>
                      <a href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`} className="text-[#0B3D91] font-semibold hover:underline">
                        {COMPANY_CONFIG.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 block">WhatsApp Trade Support:</span>
                      <a
                        href={`https://wa.me/${COMPANY_CONFIG.contact.whatsappRaw}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 font-semibold hover:underline"
                      >
                        {COMPANY_CONFIG.contact.whatsapp}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B3D91] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 block">Email Inquiries:</span>
                      <a href={`mailto:${COMPANY_CONFIG.contact.emailRaw}`} className="text-[#0B3D91] font-semibold hover:underline">
                        {COMPANY_CONFIG.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 block">Operating Hours:</span>
                      <span className="text-slate-600">{COMPANY_CONFIG.contact.operatingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Commercial Ports: </span>
                  <span>{COMPANY_CONFIG.contact.portsOfOrigin}</span>
                </div>
              </div>

              {/* Google Map Embed Placeholder Card */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <MapPin className="w-4 h-4 text-[#0B3D91]" />
                    <span>Location Map · Mumbai Port Hub</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Maharashtra, India</span>
                </div>

                {/* Google Map iframe Embed with clean styling */}
                <div className="relative h-64 bg-slate-100 w-full">
                  <iframe
                    title="Alphaa Global Traders Location Map"
                    src="https://maps.google.com/maps?q=World+Trade+Centre+Cuffe+Parade+Mumbai+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    aria-label="Google Map location of Alphaa Global Traders"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-medium text-slate-700 shadow-xs">
                    World Trade Centre, Cuffe Parade, Mumbai
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ====================================================================
          SECTION 13: FOOTER
          Dark blue background (#071F4A / #0B3D91), logo, quick links, products
          list, contact info, social icons, and copyright notice
          ==================================================================== */}
      <footer className="bg-[#071F4A] text-slate-300 pt-16 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            
            {/* Col 1 & 2: Brand Lockup & Purpose */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0B3D91] flex items-center justify-center text-white border border-white/20">
                  <Ship className="w-5 h-5 text-[#C9A227]" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Alphaa Global Traders
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
                A leading Indian merchant exporter delivering premium agricultural commodities, spices, textiles, handicrafts, and engineered goods to B2B buyers across 38+ countries worldwide.
              </p>

              <div className="pt-2 text-xs text-slate-400 space-y-1">
                <div>Directorate General of Foreign Trade (DGFT) Authorized</div>
                <div>APEDA & Spices Board of India Affiliated</div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C9A227] hover:text-slate-900 transition-colors flex items-center justify-center text-white text-xs font-bold"
                  aria-label="LinkedIn Profile"
                >
                  in
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C9A227] hover:text-slate-900 transition-colors flex items-center justify-center text-white text-xs font-bold"
                  aria-label="Facebook Page"
                >
                  fb
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C9A227] hover:text-slate-900 transition-colors flex items-center justify-center text-white text-xs font-bold"
                  aria-label="Instagram Profile"
                >
                  ig
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C9A227] hover:text-slate-900 transition-colors flex items-center justify-center text-white text-xs font-bold"
                  aria-label="YouTube Channel"
                >
                  yt
                </a>
              </div>
            </div>

            {/* Col 3: Quick Navigation */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#what-we-do" onClick={(e) => scrollToSection(e, 'what-we-do')} className="hover:text-white transition-colors">
                    What We Do
                  </a>
                </li>
                <li>
                  <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className="hover:text-white transition-colors">
                    Export Products
                  </a>
                </li>
                <li>
                  <a href="#who-we-are" onClick={(e) => scrollToSection(e, 'who-we-are')} className="hover:text-white transition-colors">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#insights" onClick={(e) => scrollToSection(e, 'insights')} className="hover:text-white transition-colors">
                    Market Insights
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition-colors">
                    Get a Quote
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Products */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-4">
                Product Lines
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a href="#products" onClick={(e) => { setActiveCategory("Spices"); scrollToSection(e, 'products'); }} className="hover:text-white transition-colors">
                    Whole Spices & Blends
                  </a>
                </li>
                <li>
                  <a href="#products" onClick={(e) => { setActiveCategory("Agricultural Products"); scrollToSection(e, 'products'); }} className="hover:text-white transition-colors">
                    Basmati Rice & Millets
                  </a>
                </li>
                <li>
                  <a href="#products" onClick={(e) => { setActiveCategory("Textiles"); scrollToSection(e, 'products'); }} className="hover:text-white transition-colors">
                    Organic Cotton & Linen
                  </a>
                </li>
                <li>
                  <a href="#products" onClick={(e) => { setActiveCategory("Handicrafts"); scrollToSection(e, 'products'); }} className="hover:text-white transition-colors">
                    Artisanal Wood & Brass
                  </a>
                </li>
                <li>
                  <a href="#products" onClick={(e) => { setActiveCategory("Engineering Goods"); scrollToSection(e, 'products'); }} className="hover:text-white transition-colors">
                    Engineering Castings
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: Contact Info */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-4">
                Export Inquiries
              </h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <span className="text-slate-400 block">Corporate Email:</span>
                  <a href={`mailto:${COMPANY_CONFIG.contact.emailRaw}`} className="text-white hover:underline">
                    {COMPANY_CONFIG.contact.email}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block">Direct Phone:</span>
                  <a href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`} className="text-white hover:underline">
                    {COMPANY_CONFIG.contact.phone}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block">WhatsApp Desk:</span>
                  <a href={`https://wa.me/${COMPANY_CONFIG.contact.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:underline">
                    {COMPANY_CONFIG.contact.whatsapp}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block">Port Operations:</span>
                  <span className="text-slate-300">Nhava Sheva · Mundra · Chennai</span>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright & Legal Notice */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div>
              © 2026 Alphaa Global Traders. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-[11px]">
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition-colors">Export Terms</a>
              <span aria-hidden="true">·</span>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition-colors">Privacy Notice</a>
              <span aria-hidden="true">·</span>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition-colors">DGFT Compliance</a>
            </div>
          </div>

        </div>
      </footer>


      {/* ====================================================================
          EXTRA FEATURES:
          1. Floating WhatsApp Chat Button at Bottom-Right
          2. Back to Top Button
          ==================================================================== */}

      {/* Floating WhatsApp Chat Button */}
      <a
        href={`https://wa.me/${COMPANY_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent('Hello Alphaa Global Traders team, I am interested in inquiring about export products.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2 group cursor-pointer focus:outline-hidden"
        aria-label="Chat with Alphaa Global Traders on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline-block text-xs font-bold pr-1">
          WhatsApp Desk
        </span>
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-24 sm:right-48 z-40 bg-white/90 hover:bg-white text-slate-700 hover:text-[#0B3D91] border border-slate-300 p-3 rounded-full shadow-md transition-all cursor-pointer focus:outline-hidden"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
