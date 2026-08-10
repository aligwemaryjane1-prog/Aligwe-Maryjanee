import { Project, Service, PricingCategory, Testimonial, ProcessStep, TechItem, StatItem, BlogPost } from '../types/portfolio';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'lumina-health',
    title: 'Lumina Health — AI Patient Intelligence Engine',
    client: 'Lumina Health Technologies',
    industry: 'Healthcare AI & Enterprise',
    year: '2026',
    shortDescription: 'Custom website redesign & conversion engine for a Series-B AI healthcare startup, boosting qualified demo requests by 184%.',
    fullDescription: 'Lumina Health needed a brand-defining web experience to signal enterprise security while communicating their complex medical AI technology to hospital executives and clinical directors.',
    challenge: 'The previous website was dense with technical jargon, had a bounce rate of 68%, and failed to convert enterprise hospital leads. Mobile experience was sluggish and unstructured.',
    solution: 'Designed a high-contrast, fast-loading modern web architecture using custom React interactive UI components, clear messaging hierarchy, and an interactive ROI calculator for hospital decision-makers.',
    technologies: ['WordPress', 'React', 'Next.js', 'Tailwind CSS', 'Figma', 'TypeScript'],
    category: 'Full Site',
    heroImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785946716/imageye___-_imgi_117_d5d813242670151.698f76a61c6f5_1_ftytsq.png',
    desktopMockup: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785946716/imageye___-_imgi_117_d5d813242670151.698f76a61c6f5_1_ftytsq.png',
    mobileMockup: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785946716/imageye___-_imgi_117_d5d813242670151.698f76a61c6f5_1_ftytsq.png',
    metrics: [
      { label: 'Demo Conversion Rate', value: '+184%', trend: 'Up from 1.2% to 3.4%' },
      { label: 'Page Load Speed', value: '0.35s', trend: 'Lighthouse 100/100' },
      { label: 'Pipeline Impact', value: '$4.2M', trend: 'New ARR generated' }
    ],
    liveUrl: 'https://luminahealth.example.com',
    deliverables: ['UX Audit & Strategy', 'Figma Design System', 'Interactive Prototype', 'Next.js Frontend', 'CMS Integration'],
    testimonial: {
      quote: 'Maryjane delivered a website that completely transformed our market perception. We closed our largest enterprise hospital deal within 3 weeks of launch.',
      author: 'Dr. Elena Vance',
      role: 'Chief Commercial Officer at Lumina',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
    }
  },
  {
    id: 'aethel-atelier',
    title: 'Aethel Atelier — Luxury Horology E-Commerce',
    client: 'Aethel Swiss Chronometers',
    industry: 'Luxury Horology & Retail',
    year: '2025',
    shortDescription: 'A bespoke Shopify & WooCommerce luxury shopping experience with interactive product customization and editorial layout.',
    fullDescription: 'Crafted an ultra-exclusive online boutique for a boutique Swiss watchmaker. Blended high-end editorial typography with seamless checkout flow and custom Elementor template engineering.',
    challenge: 'Existing store was clunky, suffered from slow image rendering, and didn’t reflect the $15,000+ price point of their handcrafted timepieces.',
    solution: 'Engineered a lightweight WordPress theme with custom Elementor Pro widgets, lazy-loaded high-resolution gallery, and a custom product configurator built in JavaScript.',
    technologies: ['Shopify', 'WooCommerce', 'WordPress', 'Elementor', 'Tailwind CSS', 'Figma'],
    category: 'E-Commerce',
    heroImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785946778/ChatGPT_Image_Jul_16_2026_03_04_12_PM_jux5sz.png',
    desktopMockup: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785946778/ChatGPT_Image_Jul_16_2026_03_04_12_PM_jux5sz.png',
    mobileMockup: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785946778/ChatGPT_Image_Jul_16_2026_03_04_12_PM_jux5sz.png',
    metrics: [
      { label: 'Average Order Value', value: '+42%', trend: 'Lifted to $18,400' },
      { label: 'Checkout Abandonment', value: '-35%', trend: 'Streamlined 1-step checkout' },
      { label: 'Mobile Sales', value: '62%', trend: 'Of total revenue' }
    ],
    liveUrl: 'https://aethelwatches.example.com',
    deliverables: ['E-Commerce Strategy', 'Custom Shopify Theme', 'WooCommerce Customization', 'Product Configurator', 'Payment Gateway Setup'],
    testimonial: {
      quote: 'Maryjane created an experience that matches our Swiss craftsmanship. Collectors constantly compliment the effortless online purchasing experience.',
      author: 'Marcus Aethelgard',
      role: 'Founder & Master Watchmaker',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
    }
  },
  {
    id: 'solas-capital',
    title: 'Solas Capital — Private Equity & Venture Brand',
    client: 'Solas Global Partners',
    industry: 'Real Estate & Financial VC',
    year: '2025',
    shortDescription: 'Complete website redesign for a $1.2B venture capital fund, featuring dynamic portfolio filtering and interactive LP investor portal.',
    fullDescription: 'Designed a pristine financial portal that conveys stability, modern tech forwardness, and institutional rigor to institutional investors and prospective founders.',
    challenge: 'Outdated static corporate site that failed to highlight their active $1.2B portfolio companies and lacked mobile responsiveness.',
    solution: 'Designed a sophisticated editorial layout with custom WordPress Elementor architecture, dynamic portfolio filtering, and secure investor access integration.',
    technologies: ['WordPress', 'Elementor', 'JavaScript', 'HTML5', 'CSS', 'Figma'],
    category: 'WordPress',
    heroImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785946849/imageye___-_imgi_106_446039241737031.698f76a75506d_tthsb4.png',
    desktopMockup: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785946849/imageye___-_imgi_106_446039241737031.698f76a75506d_tthsb4.png',
    mobileMockup: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785946849/imageye___-_imgi_106_446039241737031.698f76a75506d_tthsb4.png',
    metrics: [
      { label: 'Inbound Founder Pitches', value: '+210%', trend: 'High quality dealflow' },
      { label: 'Time on Site', value: '4m 12s', trend: '+180% engagement' },
      { label: 'LP Portal Logins', value: '100%', trend: 'Zero friction access' }
    ],
    liveUrl: 'https://solascapital.example.com',
    deliverables: ['Brand Refresh', 'WordPress Theme Architecture', 'Elementor Custom Design', 'Security Hardening', 'SEO Optimization'],
    testimonial: {
      quote: 'Maryjane has an exceptional eye for luxury design in finance. The site elevated our position when raising our Fund III.',
      author: 'Sarah Jenkins',
      role: 'Managing Partner at Solas',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop'
    }
  },
  {
    id: 'pulse-analytics',
    title: 'Pulse Analytics — High-Converting SaaS Landing Page',
    client: 'Pulse Technologies Inc.',
    industry: 'Technology & SaaS',
    year: '2026',
    shortDescription: 'A laser-focused landing page redesign engineered for maximum conversion, featuring interactive product tours and customer ROI calculator.',
    fullDescription: 'Built a high-performance landing page for a developer analytics SaaS. Optimized copy flow, social proof placement, and interactive code preview widgets.',
    challenge: 'High cost per acquisition (CPA) on Google and Meta ads due to an unfocused, slow landing page with 3.8s initial render time.',
    solution: 'Rebuilt the landing page using React & Next.js with SSG static generation, sub-300ms page loads, interactive live dashboard demo, and streamlined form flow.',
    technologies: ['Landing Page', 'Next.js', 'React', 'Tailwind CSS', 'Figma', 'GSAP'],
    category: 'Landing Page',
    heroImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785947634/tmaXOHUMIGlg2uCVFHkBDqMdUs_c4jivf.png',
    desktopMockup: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785947634/tmaXOHUMIGlg2uCVFHkBDqMdUs_c4jivf.png',
    mobileMockup: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop',
    beforeImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785947634/tmaXOHUMIGlg2uCVFHkBDqMdUs_c4jivf.png',
    metrics: [
      { label: 'Conversion Rate', value: '12.4%', trend: 'Up from 3.1%' },
      { label: 'Ad CPA Reduction', value: '-58%', trend: 'Immediate ad savings' },
      { label: 'Trial Signups', value: '3,400+', trend: 'First 30 days post-launch' }
    ],
    liveUrl: 'https://pulseanalytics.example.com',
    deliverables: ['Landing Page Audit', 'Copywriting Optimization', 'Next.js Landing Build', 'A/B Testing Integration', 'Analytics Pipeline'],
    testimonial: {
      quote: 'Maryjane reduced our acquisition costs overnight. Her understanding of design psychology and conversion design is unparalleled.',
      author: 'David Chen',
      role: 'VP of Growth at Pulse',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
    }
  }
];

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    iconName: 'Zap',
    description: 'High-converting single-page websites engineered for ad campaigns, launches, and fast lead capture.',
    packages: [
      {
        id: 'lp-starter',
        name: 'Starter',
        price: 249,
        shortDescription: 'Essential single-page landing layout engineered for fast campaign launches and basic lead capture.',
        typicalDuration: '3–5 Days',
        deliverables: [
          'Custom UI Design',
          'Mobile Optimization',
          'Contact Form Integration',
          'Basic Animations',
          'Speed Optimization',
          'Analytics Setup',
          'Technical Support (7 Days)'
        ]
      },
      {
        id: 'lp-professional',
        name: 'Professional',
        price: 499,
        popular: true,
        shortDescription: 'Conversion-focused landing page with custom branding, CMS integration, and SEO setup.',
        typicalDuration: '1 Week',
        deliverables: [
          'Custom UI Design & Branding',
          'Mobile & Tablet Optimization',
          'Interactive Contact & Lead Forms',
          'CMS Integration',
          'Speed Optimization (Sub-1s Load)',
          'On-Page SEO Setup',
          'Analytics Setup & Event Tracking',
          'Technical Support (14 Days)'
        ]
      },
      {
        id: 'lp-premium',
        name: 'Premium',
        price: 799,
        shortDescription: 'Ultimate sales funnel page engineered with custom motion FX, schema markup, and 1-on-1 training.',
        typicalDuration: '1–2 Weeks',
        deliverables: [
          'Bespoke Custom UI/UX Design',
          'Mobile & Multi-Device Optimization',
          'Advanced Contact Forms & Funnels',
          'CMS Integration & Editor Access',
          'Extreme Speed Optimization',
          'On-Page SEO & Schema Setup',
          'Basic Animations & Micro-Interactions',
          '1-on-1 Client Training Session',
          'Full Analytics Setup & Heatmaps',
          'Priority Technical Support (30 Days)'
        ]
      }
    ]
  },
  {
    id: 'business-website',
    title: 'Business Website',
    iconName: 'ShieldCheck',
    description: 'Multi-page corporate websites designed to build market authority, trust, and organic SEO leads.',
    packages: [
      {
        id: 'bw-starter',
        name: 'Starter',
        price: 599,
        shortDescription: 'Clean 3–5 page business website designed to establish brand credibility and capture client inquiries.',
        typicalDuration: '1–2 Weeks',
        deliverables: [
          'Custom 3-5 Page UI Design',
          'Mobile Optimization',
          'Contact Form & Map Setup',
          'CMS Integration (WordPress/Next.js)',
          'Speed Optimization',
          'Basic SEO Setup',
          'Analytics Setup',
          'Technical Support (14 Days)'
        ]
      },
      {
        id: 'bw-growth',
        name: 'Growth',
        price: 999,
        popular: true,
        shortDescription: 'Strategic multi-page website built for expanding companies seeking organic Google traffic and automated leads.',
        typicalDuration: '2–3 Weeks',
        deliverables: [
          'Custom 6-10 Page UI/UX Design',
          'Mobile-First Optimization',
          'Contact Forms & Lead Capture',
          'Full CMS Integration & Dynamic Blog',
          'Speed Optimization (95+ Lighthouse)',
          'On-Page SEO Setup & Sitemap',
          'Basic Animations & Micro-Interactions',
          'Client Training Session',
          'Analytics Setup & Conversion Goals',
          'Priority Technical Support (30 Days)'
        ]
      },
      {
        id: 'bw-premium',
        name: 'Premium',
        price: 1499,
        shortDescription: 'Full-scale digital brand hub with custom components, booking workflows, and technical SEO setup.',
        typicalDuration: '3 Weeks',
        deliverables: [
          'Bespoke UI Design (Multi-Page System)',
          'Complete Mobile & Speed Tuning',
          'Advanced Contact Forms & Booking',
          'Full CMS Integration & Custom Fields',
          'Maximum Speed Optimization',
          'Comprehensive SEO Setup & Schema',
          'Custom Micro-Animations',
          'Dedicated Training Session',
          'Full Analytics Setup & Tracking',
          'Priority Technical Support (60 Days)'
        ]
      }
    ]
  },
  {
    id: 'ecommerce-website',
    title: 'E-commerce Website',
    iconName: 'ShoppingBag',
    description: 'High-converting online storefronts optimized for fast mobile checkout and effortless inventory management.',
    packages: [
      {
        id: 'ec-starter',
        name: 'Starter',
        price: 899,
        shortDescription: 'Turnkey online store with streamlined 1-click checkout, payment gateway, and product catalog.',
        typicalDuration: '2 Weeks',
        deliverables: [
          'Custom Storefront UI Design',
          'Mobile Optimization & Checkout',
          'Payment Integration (Stripe/PayPal)',
          'Product Uploads (Up to 25 Items)',
          'CMS Integration (Shopify/WooCommerce)',
          'Speed Optimization',
          'Contact Forms & Cart Flow',
          'Basic SEO Setup',
          'Technical Support (14 Days)'
        ]
      },
      {
        id: 'ec-growth',
        name: 'Growth',
        price: 1499,
        popular: true,
        shortDescription: 'High-volume store optimized for fast checkout, product filtering, and repeat customer sales.',
        typicalDuration: '2–3 Weeks',
        deliverables: [
          'Custom UI Design & Brand Assets',
          'Mobile Optimization & Fast Checkout',
          'Payment Integration & Tax Config',
          'Product Uploads (Up to 75 Items)',
          'CMS Integration & Order Management',
          'Speed Optimization',
          'On-Page E-commerce SEO Setup',
          'Basic Animations & Product Hover FX',
          'Admin Training Session',
          'Analytics Setup & Ecommerce Tracking',
          'Priority Technical Support (30 Days)'
        ]
      },
      {
        id: 'ec-premium',
        name: 'Premium',
        price: 2499,
        shortDescription: 'Full-featured digital storefront with custom product configurators, automated upsells, and priority support.',
        typicalDuration: '3–4 Weeks',
        deliverables: [
          'Bespoke Storefront UI/UX Design',
          'Frictionless Mobile Checkout Architecture',
          'Multi-Currency & Payment Integration',
          'Product Uploads (150+ / Unlimited)',
          'Full CMS Integration & Inventory Sync',
          'Maximum Speed Optimization',
          'Complete SEO Setup & Rich Snippets',
          'Custom Animations & Micro-UI FX',
          'Comprehensive Training Session',
          'Full Analytics Setup & Conversion Tracking',
          'Priority Technical Support (60 Days)'
        ]
      }
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    iconName: 'Zap',
    shortDescription: 'High-converting single-page websites engineered for ad campaigns, product launches, and fast lead capture.',
    deliverables: ['Custom UI Design', 'Mobile Optimization', 'Contact Form Integration', 'Speed Optimization', 'Basic SEO & Analytics Setup'],
    startingPrice: 249,
    typicalDuration: '3-5 Days',
    popularFor: 'Startups, Product Launches & Lead Gen'
  },
  {
    id: 'business-websites',
    title: 'Business Websites',
    iconName: 'ShieldCheck',
    shortDescription: 'Multi-page corporate websites designed to build market authority, boost trust, and attract local & organic SEO leads.',
    deliverables: ['Custom UI Design (3-10 Pages)', 'CMS Integration', 'Contact & Booking Forms', 'On-Page SEO Setup', 'Speed Optimization'],
    startingPrice: 599,
    typicalDuration: '1-3 Weeks',
    popularFor: 'Local Businesses, Consultancies & Brands'
  },
  {
    id: 'ecommerce-stores',
    title: 'E-commerce Stores',
    iconName: 'ShoppingBag',
    shortDescription: 'High-converting Shopify and WooCommerce online storefronts optimized for fast mobile checkout and seamless sales.',
    deliverables: ['Custom Storefront UI', 'Payment Integration', 'Product Uploads', 'CMS Integration', 'E-commerce SEO & Analytics'],
    startingPrice: 899,
    typicalDuration: '2-4 Weeks',
    popularFor: 'D2C Brands, Retail & Online Shops'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Research',
    shortDesc: 'Deep audit of your market positioning, competitor websites, customer pain points, and conversion goals.',
    detailedDesc: 'We start with a thorough strategic discovery session. We dissect your existing analytics, identify drop-off friction, study your top 3 competitors, and outline target customer psychology.',
    duration: '3-4 Days',
    deliverables: ['UX & Competitor Audit', 'Target Audience Mapping', 'Conversion Goal Sheet', 'Sitemap Architecture']
  },
  {
    number: '02',
    title: 'Strategy',
    shortDesc: 'Formulating conversion copy, sitemap hierarchy, page structure, and lead generation funnels.',
    detailedDesc: 'Before moving into visual design, we construct high-impact copy frameworks and sitemap paths to guide visitors seamlessly from first impression to booking enquiry.',
    duration: '3-5 Days',
    deliverables: ['Content Copy Blueprint', 'Conversion Pathway Map', 'Feature Scope Plan', 'Technical Stack Blueprint']
  },
  {
    number: '03',
    title: 'Wireframe',
    shortDesc: 'Building interactive low-fidelity wireframes to test layout hierarchy, content flow, and CTA positioning.',
    detailedDesc: 'Low-fidelity interactive prototypes allow us to validate user navigation and messaging hierarchy early, ensuring every section serves a clear business purpose.',
    duration: '4-5 Days',
    deliverables: ['Interactive Wireframe Screens', 'Navigation Logic', 'CTA Placement Strategy', 'Mobile Flow Layouts']
  },
  {
    number: '04',
    title: 'UI Design',
    shortDesc: 'Crafting bespoke Figma visual layouts, editorial typography, custom iconography, and micro-interactions.',
    detailedDesc: 'Every screen is designed in Figma using DM Sans headlines, Inter body text, generous whitespace, and subtle brand accents. Pixel-perfect attention to luxury detail.',
    duration: '1-2 Weeks',
    deliverables: ['Figma UI Design System', 'Desktop & Mobile Screen Mockups', 'Interactive Motion Prototype', 'Design Review Sign-off']
  },
  {
    number: '05',
    title: 'Development',
    shortDesc: 'Translating Figma designs into clean, fast code on WordPress, Shopify, Elementor, or Next.js/React.',
    detailedDesc: 'Built for extreme speed and security. Clean semantic HTML, modular CSS, lightweight JavaScript, and easy CMS dashboard integration so your team can edit content effortlessly.',
    duration: '2 Weeks',
    deliverables: ['Production Codebase / Theme', 'WordPress / Shopify Build', 'Elementor Custom Kits', 'Cross-Device Responsiveness']
  },
  {
    number: '06',
    title: 'Optimization',
    shortDesc: 'Lighthouse speed tuning, mobile responsiveness QA, accessibility checks, and SEO technical setup.',
    detailedDesc: 'Rigorous optimization across browsers and mobile screens. Page load times tuned under 0.8 seconds, image lazy-loading, schema markup, and Google Search Console indexing.',
    duration: '3-4 Days',
    deliverables: ['Sub-1s Page Speed Audit', 'SEO Meta & Schema Setup', 'WCAG Accessibility QA', 'Cross-Browser Verification']
  },
  {
    number: '07',
    title: 'Launch',
    shortDesc: 'Seamless server deployment, domain mapping, form testing, client training, and 30-day warranty.',
    detailedDesc: 'Zero downtime deployment. Full client video walkthrough showing how to manage pages easily, plus 30 days of complimentary post-launch technical support.',
    duration: '1-2 Days',
    deliverables: ['Live Production Deployment', 'Client Video Training Portal', 'Form Submission Testing', '30-Day Post-Launch Support']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    quote: 'Maryjane is in the top 1% of web designers I have worked with in my tech career. She understands business conversion strategy just as deeply as she understands typography and interaction design.',
    clientName: 'Dr. Elena Vance',
    clientRole: 'Chief Commercial Officer',
    company: 'Lumina Health AI',
    avatar: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785949355/download_4_mvlzxi.jpg',
    rating: 5,
    projectType: 'WordPress & React Platform',
    verified: true
  },
  {
    id: '2',
    quote: 'Our sales team converted three high-ticket enterprise clients in the first fortnight after Maryjane launched our new Shopify & WooCommerce store. The investment paid for itself tenfold.',
    clientName: 'Marcus Aethelgard',
    clientRole: 'Founder & Master Watchmaker',
    company: 'Aethel Atelier Switzerland',
    avatar: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785813268/samples/smile.jpg',
    rating: 5,
    projectType: 'Shopify E-Commerce Store',
    verified: true
  },
  {
    id: '3',
    quote: 'Working with Maryjane was completely effortless. She met every milestone on schedule, provided asynchronous video updates, and delivered a website that set a new benchmark in our sector.',
    clientName: 'Sarah Jenkins',
    clientRole: 'Managing Director',
    company: 'Solas Capital Partners',
    avatar: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785949410/beauty_girl_model_dgd4xe.jpg',
    rating: 5,
    projectType: 'WordPress Corporate Redesign',
    verified: true
  },
  {
    id: '4',
    quote: 'Maryjane reduced our cost per lead acquisition by 58% simply by redesigning our SaaS landing page. Her attention to conversion design and user psychology is outstanding.',
    clientName: 'David Chen',
    clientRole: 'VP of Growth',
    company: 'Pulse Analytics',
    avatar: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785949391/Tom_Cruise__tomcruise_celebrities_actors_jxhcbz.jpg',
    rating: 5,
    projectType: 'High-Converting Landing Page',
    verified: true
  }
];

export const TECH_STACK_DATA: TechItem[] = [
  { name: 'WordPress', category: 'CMS', icon: 'Wordpress', experience: '5+ Years', description: 'Custom theme development, ACF Pro, speed optimization, secure headless & traditional builds.' },
  { name: 'Shopify', category: 'E-Commerce', icon: 'ShoppingBag', experience: '5+ Years', description: 'Liquid template design, custom storefronts, subscription setup, checkout flow optimization.' },
  { name: 'WooCommerce', category: 'E-Commerce', icon: 'Store', experience: '5+ Years', description: 'Bespoke checkout flows, custom payment integrations, high-volume online store architecture.' },
  { name: 'Elementor', category: 'CMS', icon: 'LayoutGrid', experience: '5+ Years', description: 'Pixel-perfect custom widget extensions, global style kits, intuitive client drag-and-drop handoffs.' },
  { name: 'Next.js', category: 'Frontend', icon: 'Layers', experience: '4+ Years', description: 'SSR, SSG, App Router, SEO-optimized React static sites and lightning-fast web performance.' },
  { name: 'React', category: 'Frontend', icon: 'Atom', experience: '5+ Years', description: 'Component architecture, custom hooks, dynamic interactive web applications.' },
  { name: 'HTML', category: 'Frontend', icon: 'Code2', experience: '5+ Years', description: 'Semantic, accessible HTML5 markup adhering strictly to WCAG 2.1 AA accessibility.' },
  { name: 'CSS', category: 'Frontend', icon: 'Palette', experience: '5+ Years', description: 'Modern CSS Grid, Flexbox, custom variables, responsive fluid layout calculations.' },
  { name: 'JavaScript', category: 'Frontend', icon: 'FileCode', experience: '5+ Years', description: 'ES6+, DOM manipulation, async API integrations, custom interaction logic.' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'Sparkles', experience: '5+ Years', description: 'Utility-first design tokens, responsive breakpoints, clean zero-runtime build CSS.' },
  { name: 'GSAP', category: 'Frontend', icon: 'Zap', experience: '4+ Years', description: 'Smooth scroll animations, timeline choreography, micro-interaction feedback.' },
  { name: 'Figma', category: 'Design', icon: 'Figma', experience: '5+ Years', description: 'Design systems, auto-layout 5.0, component variants, high-fidelity interactive prototypes.' }
];

export const STATS_DATA: StatItem[] = [
  { id: 'projects', value: 140, suffix: '+', label: 'Projects Completed', description: 'Bespoke WordPress, Shopify, and landing page experiences launched.' },
  { id: 'clients', value: 95, suffix: '%', label: 'Conversion Lift', description: 'Average client conversion rate increase across website redesigns.' },
  { id: 'years', value: 5, suffix: '+', label: 'Years Experience', description: 'Dedicated website design, user experience, and conversion development.' },
  { id: 'satisfaction', value: 99.6, suffix: '%', label: 'Client Satisfaction', description: 'Based on post-launch client reviews and ongoing retainers.' }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'why-wordpress-shopify-rule-b2b',
    title: 'Why Custom WordPress & Shopify Architecture Still Dominates High-Ticket Conversion in 2026',
    category: 'Website Strategy',
    date: 'July 28, 2026',
    readTime: '6 min read',
    summary: 'An editorial breakdown of why commodity page builders fail enterprise brands, and how bespoke schema hierarchy and sub-second page performance double conversion rates.',
    image: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785983192/PASS_the_ATI_TEAS_exam_with_these_Strategies_d1wpjl.jpg',
    author: {
      name: 'Aligwe Maryjane',
      avatar: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785896038/ChatGPT_Image_Jun_30__2026__06_49_06_PM-removebg-preview_vxrmre.png'
    },
    featured: true
  },
  {
    id: 'ux-micro-interactions-trust',
    title: 'The Psychology of Micro-Interactions: How Visual Tactility Reduces Cart Abandonment',
    category: 'UX',
    date: 'July 14, 2026',
    readTime: '4 min read',
    summary: 'How subtle cursor feedback, visual component weight, and smooth state changes communicate enterprise credibility to luxury buyers.',
    image: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785982005/Top_5_Key_Factors_to_Consider_for_a_Successful_Website_Design_wnstsz.jpg',
    author: {
      name: 'Aligwe Maryjane',
      avatar: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785896038/ChatGPT_Image_Jun_30__2026__06_49_06_PM-removebg-preview_vxrmre.png'
    }
  },
  {
    id: 'seo-core-web-vitals-shopify',
    title: 'Sub-Second Load Times: Optimizing Shopify liquid and WordPress for Core Web Vitals 100/100',
    category: 'SEO',
    date: 'June 30, 2026',
    readTime: '5 min read',
    summary: 'Practical code optimization guide: image asset pipelines, font display swap rules, script deferment, and clean DOM node counts.',
    image: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785981512/Boost_Your_Business_with_Expert_SEO_Services_qkkyfj.jpg',
    author: {
      name: 'Aligwe Maryjane',
      avatar: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785896038/ChatGPT_Image_Jun_30__2026__06_49_06_PM-removebg-preview_vxrmre.png'
    }
  },
  {
    id: 'scaling-elementor-performance',
    title: 'High-Performance Elementor: Building Heavy Client Sites Without Sacrificing Page Speed',
    category: 'WordPress',
    date: 'June 18, 2026',
    readTime: '7 min read',
    summary: 'How to bypass Elementor bloat through custom DOM structure, Asset CleanUp Pro techniques, and selective script loading.',
    image: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785982342/Premium_WordPress_Website_Design_Using_Elementor_Builder_xiyqbu.jpg',
    author: {
      name: 'Aligwe Maryjane',
      avatar: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785896038/ChatGPT_Image_Jun_30__2026__06_49_06_PM-removebg-preview_vxrmre.png'
    }
  }
];
