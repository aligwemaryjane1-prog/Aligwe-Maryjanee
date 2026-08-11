import { ServiceItem, DentistProfile, SmileCase, ReviewItem, TechItem, BlogPost } from '../types/dental';

export const CLINIC_INFO = {
  name: 'Aura Dental Studio',
  tagline: 'Exceptional Dental Care in a Serene, Contemporary Studio',
  phone: '(555) 234-8900',
  emergencyPhone: '(555) 911-DENT',
  email: 'care@auradentalstudio.com',
  address: '450 Healthcare Boulevard, Suite 300, San Francisco, CA 94108',
  hours: [
    { days: 'Monday – Thursday', time: '7:30 AM – 6:00 PM' },
    { days: 'Friday', time: '8:00 AM – 4:00 PM' },
    { days: 'Saturday (By Appointment)', time: '9:00 AM – 2:00 PM' },
    { days: 'Sunday', time: 'Emergency On-Call Only' }
  ],
  googleRating: 4.9,
  totalReviews: 380,
  yearsInPractice: 18,
  patientsServed: '12,500+'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'general-exams-cleanings',
    title: 'Comprehensive Exams & Dental Cleanings',
    category: 'preventive',
    shortDescription: 'Thorough oral health evaluations and gentle hygiene care to maintain strong teeth and healthy gums.',
    fullDescription: 'Our routine examinations go beyond standard cleanings. Using digital diagnostics and low-radiation imaging, we inspect tooth enamel, existing restorations, gum tissue stability, and perform oral cancer screenings to catch minor concerns before they become complex issues.',
    benefits: [
      'Prevents gum disease and tooth decay',
      'Early detection of structural enamel wear',
      'Removes stubborn plaque and calculus stains',
      'Fresh breath and smooth polished teeth surface'
    ],
    candidateFor: ['Adults and children seeking routine 6-month checkups', 'Patients with mild gingivitis or plaque buildup'],
    processSteps: [
      { title: 'Digital Diagnostic Imaging', description: 'Low-radiation digital X-rays or intraoral scans if required for comprehensive review.' },
      { title: 'Gentle Ultrasonic Scaling', description: 'Removal of plaque and tartar deposits around teeth and gum lines.' },
      { title: 'Polishing & Fluoride Treatment', description: 'Surface stain removal and enamel strengthening application.' },
      { title: 'Personalized Care Plan', description: 'Review findings with your dentist and establish tailored home-care recommendations.' }
    ],
    faqs: [
      { question: 'How often should I get a dental cleaning?', answer: 'We recommend every 6 months for most patients, or every 3-4 months for those managing periodontal health.' },
      { question: 'Will the cleaning hurt?', answer: 'Our hygienists utilize gentle ultrasonic technology and topical numbing gels if you have sensitive teeth.' }
    ],
    iconName: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    duration: '45 - 60 minutes'
  },
  {
    id: 'cosmetic-teeth-whitening',
    title: 'Professional Teeth Whitening',
    category: 'cosmetic',
    shortDescription: 'Advanced in-office laser whitening and custom take-home trays for a radiant, stain-free smile.',
    fullDescription: 'Brighten your smile safely by up to 8 shades in a single visit. Our professional whitening formulas use desensitizing agents to protect tooth enamel while effectively lifting deep discoloration from coffee, tea, wine, and natural aging.',
    benefits: [
      'Up to 8 shades brighter in just 60 minutes',
      'Formulated with anti-sensitivity desensitizers',
      'Safe for enamel with customized gingival barrier protection',
      'Includes custom-fitted take-home touchup kit'
    ],
    candidateFor: ['Patients with surface or deep enamel discoloration', 'Upcoming weddings, speaking events, or photoshoots'],
    processSteps: [
      { title: 'Shade Assessment', description: 'We measure your baseline enamel shade and set realistic whitening goals.' },
      { title: 'Gum Protection', description: 'A protective barrier is applied to isolate gums and soft tissue.' },
      { title: 'Whitening Gel & LED Light', description: 'Three 15-minute cycles of professional-strength whitening application.' },
      { title: 'Desensitizing Finish', description: 'A soothing remineralizing paste is applied for comfort.' }
    ],
    faqs: [
      { question: 'How long do whitening results last?', answer: 'Results typically last 12-24 months depending on diet, coffee habits, and oral hygiene.' },
      { question: 'Does whitening work on crowns or veneers?', answer: 'Whitening gel only lightens natural enamel. Existing restorations will maintain their original shade.' }
    ],
    iconName: 'Sun',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    duration: '60 minutes'
  },
  {
    id: 'restorative-implants',
    title: 'Dental Implants',
    category: 'restorative',
    shortDescription: 'Permanent, natural-looking replacement for missing teeth anchored securely into the jawbone.',
    fullDescription: 'Dental implants are the gold standard for missing tooth replacement. By replacing both the root and crown, implants preserve jawbone density, prevent adjacent teeth from shifting, and function just like natural teeth.',
    benefits: [
      'Look, feel, and function like natural teeth',
      'Prevents bone loss and facial collapse',
      'Permanent solution with proper care and hygiene',
      'No slipping or adhesive required unlike traditional dentures'
    ],
    candidateFor: ['Patients missing one or multiple teeth', 'Patients with adequate jawbone density looking for long-term solutions'],
    processSteps: [
      { title: '3D CBCT Scan & Planning', description: 'High-precision 3D scan to map bone structure and nerve location.' },
      { title: 'Implant Placement', description: 'Surgical placement of titanium or zirconia post into jawbone.' },
      { title: 'Osseointegration Period', description: 'Healing period (3-6 months) where implant integrates with bone.' },
      { title: 'Custom Crown Fitting', description: 'Attachment of custom aesthetic ceramic crown.' }
    ],
    faqs: [
      { question: 'Are dental implants painful?', answer: 'The procedure is performed under local anesthesia. Most patients report minimal discomfort manageable with mild pain relievers.' },
      { question: 'How long do dental implants last?', answer: 'With good oral hygiene, implant posts can last a lifetime, with crowns lasting 15-20+ years.' }
    ],
    iconName: 'ShieldCheck',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
    duration: 'Multi-stage care'
  },
  {
    id: 'orthodontics-invisalign',
    title: 'Invisalign® Clear Aligners',
    category: 'orthodontics',
    shortDescription: 'Discreet, removable clear aligners that straighten your teeth without metal brackets or wires.',
    fullDescription: 'Achieve a symmetrical, healthy smile with virtually invisible aligners custom-designed using 3D digital simulation technology. Easily remove aligners for eating, brushing, and special occasions.',
    benefits: [
      'Nearly invisible aesthetic during treatment',
      'Removable for easy cleaning and no dietary restrictions',
      'Smooth plastic prevents mouth irritation',
      'Digital preview of your final smile before starting'
    ],
    candidateFor: ['Teens and adults with crowded, gapped, or misaligned teeth', 'Mild to moderate bite issues'],
    processSteps: [
      { title: 'iTero 3D Digital Scan', description: 'No messy impressions. We create a 3D digital model of your teeth.' },
      { title: 'ClinCheck Treatment Plan', description: 'Review your step-by-step teeth movement map.' },
      { title: 'Aligner Series Delivery', description: 'Receive your sets of custom aligners changed every 1-2 weeks.' },
      { title: 'Retainer Phase', description: 'Custom Vivera retainers to preserve your alignment.' }
    ],
    faqs: [
      { question: 'How many hours a day must I wear aligners?', answer: 'Aligners should be worn 20-22 hours daily for optimal progress.' },
      { question: 'How long does Invisalign treatment take?', answer: 'Average treatment duration is 6-18 months depending on case complexity.' }
    ],
    iconName: 'Smile',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    duration: '6 - 18 months'
  },
  {
    id: 'cosmetic-porcelain-veneers',
    title: 'Porcelain Veneers',
    category: 'cosmetic',
    shortDescription: 'Ultra-thin, custom porcelain shells that transform shape, color, symmetry, and spacing.',
    fullDescription: 'Custom-crafted by master ceramists, porcelain veneers permanently cover stubborn discoloration, chipped enamel, gaps, or minor misalignment to deliver a flawless, natural-looking smile makeover.',
    benefits: [
      'Stain-resistant high-lustre porcelain',
      'Custom color and translucency matching natural teeth',
      'Durable structure lasting 15-20+ years',
      'Minimally invasive enamel preparation'
    ],
    candidateFor: ['Patients with chipped, worn, uneven, or permanently discolored teeth'],
    processSteps: [
      { title: 'Digital Smile Design', description: 'Preview your new smile and choose ideal shape and shade.' },
      { title: 'Micro-Preparation', description: 'Gentle shaping of enamel surface for seamless fit.' },
      { title: 'Master Fabrication', description: 'Custom artisan crafted porcelain in boutique laboratory.' },
      { title: 'Precision Bonding', description: 'Permanent bonding and light curing.' }
    ],
    faqs: [
      { question: 'Are veneers permanent?', answer: 'Yes, because a thin layer of enamel is prepared, veneers are a permanent cosmetic choice.' },
      { question: 'Do veneers feel like natural teeth?', answer: 'Yes! High-grade porcelain mimics natural enamel smooth feel and light reflection.' }
    ],
    iconName: 'Gem',
    imageUrl: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80',
    duration: '2 - 3 visits'
  },
  {
    id: 'restorative-crowns-bridges',
    title: 'Ceramic Crowns & Bridges',
    category: 'restorative',
    shortDescription: 'Durable, tooth-colored crowns and bridges that restore full strength to damaged or broken teeth.',
    fullDescription: 'Restore weak, cracked, or severely decayed teeth with high-strength zirconia or porcelain crowns. Bridges replace one or two adjacent missing teeth using natural-looking support crowns.',
    benefits: [
      '100% metal-free, tooth-colored ceramic materials',
      'Restores full chewing function and bite alignment',
      'Custom milled for precise margins and fit',
      'Protects root canal treated teeth from fracture'
    ],
    candidateFor: ['Teeth with large fillings, fractures, or post root canal therapy'],
    processSteps: [
      { title: 'Tooth Preparation', description: 'Removal of decay and gentle shaping of the tooth.' },
      { title: 'Digital Intraoral Scan', description: 'Precision digital scanning without gagging putty.' },
      { title: 'Precision Milling', description: 'Custom fabrication using computer-aided CAD/CAM.' },
      { title: 'Final Cementation', description: 'Secure bonding and bite adjustment.' }
    ],
    faqs: [
      { question: 'What is the difference between a crown and a bridge?', answer: 'A crown caps a single damaged tooth, while a bridge spans across a gap to replace a missing tooth using adjacent teeth for support.' }
    ],
    iconName: 'Award',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    duration: '1 - 2 visits'
  },
  {
    id: 'general-root-canal',
    title: 'Gentle Root Canal Therapy',
    category: 'general',
    shortDescription: 'Pain-relieving treatment that saves infected teeth and prevents extraction.',
    fullDescription: 'Modern root canals are comfortable, painless, and highly routine. By removing infected tissue inside the pulp chamber and sealing the canal, we eliminate severe pain and preserve your natural tooth structure.',
    benefits: [
      'Immediate relief from tooth pain and infection',
      'Saves natural tooth to preserve jaw alignment',
      'High success rate over 95%',
      'Performed with gentle rotary endodontic instruments'
    ],
    candidateFor: ['Patients experiencing persistent severe toothache, heat/cold sensitivity, or abscess'],
    processSteps: [
      { title: 'Local Anesthesia', description: 'Complete numbing of the area for total comfort.' },
      { title: 'Infection Removal', description: 'Gentle cleaning and disinfection of inner root canals.' },
      { title: 'Sealing Canals', description: 'Filling canals with biocompatible gutta-percha material.' },
      { title: 'Protective Crown', description: 'Placing a durable crown to restore full strength.' }
    ],
    faqs: [
      { question: 'Is a root canal painful?', answer: 'No! With modern anesthetics, a root canal feels no different than getting a routine dental filling.' }
    ],
    iconName: 'Activity',
    imageUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
    duration: '60 - 90 minutes'
  },
  {
    id: 'emergency-care',
    title: 'Urgent Emergency Dental Care',
    category: 'emergency',
    shortDescription: 'Same-day emergency visits for acute toothache, broken teeth, or dental trauma.',
    fullDescription: 'Dental emergencies require rapid medical attention to stop pain and save damaged teeth. We reserve dedicated emergency slots daily for immediate relief and repair.',
    benefits: [
      'Same-day appointment availability',
      'Fast pain relief and infection management',
      'Emergency repair for broken crowns, fillings, or teeth',
      'Direct access to on-call clinical team'
    ],
    candidateFor: ['Severe throbbing toothache, knocked-out tooth, broken tooth, swollen gums, or lost restoration'],
    processSteps: [
      { title: 'Triage Call', description: 'Call us immediately for immediate guidance before arrival.' },
      { title: 'Rapid Diagnosis', description: 'Focused examination and X-ray to pinpoint cause.' },
      { title: 'Immediate Relief', description: 'Painless intervention to control acute discomfort.' },
      { title: 'Definitive Repair Plan', description: 'Treatment executed or scheduled for lasting health.' }
    ],
    faqs: [
      { question: 'What should I do if a tooth is knocked out?', answer: 'Keep the tooth moist in milk or saline, touch only the crown (not root), and visit our studio within 60 minutes if possible!' }
    ],
    iconName: 'PhoneCall',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    duration: 'Immediate priority'
  }
];

export const DENTISTS_DATA: DentistProfile[] = [
  {
    id: 'dr-elena-vance',
    name: 'Dr. Elena Vance, DDS',
    title: 'Lead Clinical Director & Cosmetic Specialist',
    credentials: 'DDS — UCSF School of Dentistry | AACD Fellow',
    specializations: ['Cosmetic Dentistry', 'Porcelain Veneers', 'Full-Mouth Reconstruction', 'Digital Smile Design'],
    experienceYears: 16,
    bio: 'Dr. Elena Vance founded Aura Dental Studio with a vision to blend clinical precision with a tranquil, patient-centered atmosphere. With over 16 years of clinical excellence, Dr. Vance is recognized for her artistic approach to smile design and commitment to minimally invasive techniques.',
    quote: 'A beautiful smile is built on healthy foundations, compassionate communication, and meticulous attention to detail.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    education: [
      'Doctor of Dental Surgery (DDS) — UCSF School of Dentistry',
      'Postgraduate Residency in Advanced Esthetic Dentistry',
      'Certified Invisalign Premier Provider'
    ],
    memberships: [
      'American Academy of Cosmetic Dentistry (AACD)',
      'American Dental Association (ADA)',
      'California Dental Association (CDA)'
    ]
  },
  {
    id: 'dr-marcus-chen',
    name: 'Dr. Marcus Chen, DMD',
    title: 'Implantologist & Restorative Dentist',
    credentials: 'DMD — Harvard School of Dental Medicine | ICOI Fellow',
    specializations: ['Dental Implants', 'CBCT 3D Surgical Planning', 'Complex Restorative Care', 'Bone Grafting'],
    experienceYears: 14,
    bio: 'Dr. Marcus Chen specializes in implant surgery and advanced restorative dentistry. Having placed over 3,000 dental implants, Dr. Chen utilizes 3D computer-guided technology to ensure ultimate accuracy, swift recovery, and lifetime durability.',
    quote: 'Restoring a patient’s ability to chew comfortably and smile confidently is the most rewarding aspect of my craft.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    education: [
      'Doctor of Dental Medicine (DMD) — Harvard University',
      'Fellowship — International Congress of Oral Implantologists (ICOI)',
      'Advanced CBCT Surgical Reconstruction Certification'
    ],
    memberships: [
      'International Congress of Oral Implantologists',
      'Academy of General Dentistry',
      'Academy of Osseointegration'
    ]
  }
];

export const TECH_DATA: TechItem[] = [
  {
    id: '3d-cbct-imaging',
    name: '3D Cone Beam CT Scanning',
    tagline: 'High-Precision 3D Anatomical Mapping',
    description: 'Generates ultra-detailed 3D digital views of teeth, bone density, root structures, and nerve pathways with 90% less radiation than conventional hospital CTs.',
    patientBenefits: ['Flawless implant placement planning', 'Safer root canal mapping', 'Fast scan in under 15 seconds'],
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'itero-intraoral-scanner',
    name: 'iTero® 3D Intraoral Scanner',
    tagline: 'Go Impression-Free with Digital Precision',
    description: 'Replaces uncomfortable, messy impression putty with a high-speed optical wand that creates instant 3D interactive color models of your teeth.',
    patientBenefits: ['No gagging or messy physical putty', 'Instant 3D smile simulator preview', 'Higher precision crowns and aligners'],
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'laser-dentistry',
    name: 'Soft Tissue Dental Lasers',
    tagline: 'Gentle, Needle-Free Gum Care',
    description: 'Advanced laser wavelength technology heals gum tissue, reshapes uneven gum lines, and eliminates bacteria without scalpels or sutures.',
    patientBenefits: ['Virtually painless gum recontouring', 'Accelerated healing and minimal bleeding', 'Targeted bacteria elimination'],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cad-cam-milling',
    name: 'CAD/CAM Digital Ceramics',
    tagline: 'Precision Engineered Tooth Restorations',
    description: 'Computer-aided design and high-speed ceramic milling craft monolithic crowns and veneers with exact micrometric margin fit.',
    patientBenefits: ['Durable metal-free aesthetics', 'Perfect contact points and bite balance', 'Biocompatible natural feel'],
    imageUrl: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?auto=format&fit=crop&w=1000&q=80'
  }
];

export const SMILE_CASES: SmileCase[] = [
  {
    id: 'case-1',
    title: 'Full Porcelain Veneers Transformation',
    category: 'veneers',
    description: 'Correction of worn enamel, minor crowding, and deep staining with 8 custom handcrafted porcelain veneers.',
    treatmentTime: '2 weeks (2 appointments)',
    beforeImageUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    afterImageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    patientAgeGroup: 'Adult 30s'
  },
  {
    id: 'case-2',
    title: 'Invisalign® Alignment & Laser Whitening',
    category: 'orthodontics',
    description: 'Correction of anterior crowding and deep overbite followed by in-office laser whitening treatment.',
    treatmentTime: '10 months',
    beforeImageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    afterImageUrl: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
    patientAgeGroup: 'Adult 20s'
  },
  {
    id: 'case-3',
    title: 'Single Dental Implant & Ceramic Crown',
    category: 'implants',
    description: 'Seamless replacement of a fractured upper central incisor with a titanium implant and custom translucency crown.',
    treatmentTime: '4 months (Healing + Crown)',
    beforeImageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    afterImageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    patientAgeGroup: 'Adult 40s'
  },
  {
    id: 'case-4',
    title: 'In-Office Laser Whitening & Bonding',
    category: 'whitening',
    description: 'Elimination of coffee discoloration paired with conservative composite edge bonding.',
    treatmentTime: '1 visit (90 mins)',
    beforeImageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    afterImageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    patientAgeGroup: 'Adult 30s'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    patientName: 'Sophia R.',
    rating: 5,
    date: '2 weeks ago',
    serviceCategory: 'Porcelain Veneers',
    reviewText: 'Dr. Vance and her team at Aura Dental Studio are absolute miracle workers. I had been self-conscious about my chipped front teeth for years. The digital smile design let me see the exact result before starting. My veneers look so natural, and the office feels like a luxury spa!',
    verified: true
  },
  {
    id: 'rev-2',
    patientName: 'David K.',
    rating: 5,
    date: '1 month ago',
    serviceCategory: 'Dental Implant',
    reviewText: 'I was terrified of dental surgery, but Dr. Chen made the implant process completely stress-free. The 3D scan technology is incredible, and I felt zero pain during the procedure. I can chew normally again with complete confidence.',
    verified: true
  },
  {
    id: 'rev-3',
    patientName: 'Emily M.',
    rating: 5,
    date: '3 weeks ago',
    serviceCategory: 'Invisalign & Cleaning',
    reviewText: 'The most calming dental experience I have ever had. The staff is warm, punctual, and transparent about costs before doing any work. The digital impressions meant no gagging on messy putty.',
    verified: true
  },
  {
    id: 'rev-4',
    patientName: 'Michael P.',
    rating: 5,
    date: '2 months ago',
    serviceCategory: 'Emergency Dental Care',
    reviewText: 'Cracked a molar during dinner on a Thursday night. Aura Dental fitted me in first thing Friday morning for an emergency crown. Gentle, compassionate, and highly skilled care.',
    verified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Invisalign vs. Traditional Veneers: Which is Right for Your Smile Goals?',
    slug: 'invisalign-vs-veneers-guide',
    category: 'Cosmetic Dentistry',
    readTime: '5 min read',
    date: 'August 2, 2026',
    author: 'Dr. Elena Vance',
    authorRole: 'Lead Cosmetic Director',
    excerpt: 'Comparing alignment timelines, enamel preservation, and aesthetic outcomes to help you choose the ideal smile transformation pathway.',
    content: `When considering a smile enhancement, two of the most popular procedures requested at our practice are Invisalign® clear aligners and porcelain veneers. While both deliver remarkable smile upgrades, they accomplish different clinical objectives.

### Understanding Invisalign®
Invisalign works by physically straightening your natural teeth through a series of custom-milled BPA-free aligners. 
- **Best For:** Mild to moderate crowding, spacing, deep bite or crossbite.
- **Key Advantage:** Preserves 100% of your natural enamel without surface preparation.
- **Timeline:** 6 to 18 months depending on alignment needs.

### Understanding Porcelain Veneers
Porcelain veneers are ultra-thin ceramic shells customized by master lab technicians and bonded to the front of teeth.
- **Best For:** Fixing deep intrinsic discoloration, chipped edges, severe shape asymmetry, or worn enamel.
- **Key Advantage:** Instant structural and color transformation in just 2 studio visits.
- **Timeline:** 2 to 3 weeks total.

### Combining Both Treatments
For many patients, the ideal solution is a hybrid approach: brief 4-month Invisalign alignment followed by 2 conservative veneers on central incisors. Schedule a consultation to review 3D digital simulations of both paths!`,
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    tags: ['Invisalign', 'Veneers', 'Cosmetic Dentistry', 'Smile Makeover']
  },
  {
    id: 'blog-2',
    title: 'The Truth About Dental Implants: Lifespan, Care, and Bone Density Requirements',
    slug: 'dental-implants-truth-guide',
    category: 'Dental Implants',
    readTime: '7 min read',
    date: 'July 18, 2026',
    author: 'Dr. Marcus Chen',
    authorRole: 'Implantologist',
    excerpt: 'Everything you need to know about replacing missing teeth permanently with modern 3D CBCT guided implantology.',
    content: `Dental implants have revolutionized restorative care, boasting a success rate exceeding 95% over a 20-year span. Unlike traditional bridges that rely on neighboring teeth for support, an implant replaces both the tooth root and crown independently.

### The Role of 3D CBCT Scans
At Aura Dental Studio, every implant procedure begins with high-resolution 3D Cone Beam CT imaging. This allows us to assess bone volume, nerve depth, and maxillary sinus locations down to the millimeter prior to surgery.

### What Happens During Recovery?
Osseointegration is the process where your jawbone fuses with the biocompatible titanium post over 3 to 4 months. During this healing phase, patients experience minimal disruption to daily life and can wear a comfortable temporary tooth.

### Long-Term Maintenance
Maintaining a dental implant is identical to caring for natural teeth: daily flossing, brushing with non-abrasive toothpaste, and biannual professional hygiene visits.`,
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
    tags: ['Implants', 'Restorative', '3D Scanning', 'Oral Health']
  },
  {
    id: 'blog-3',
    title: '5 Daily Hygiene Habits to Protect Tooth Enamel and Prevent Sensitivity',
    slug: 'protect-tooth-enamel-habits',
    category: 'Preventive Care',
    readTime: '4 min read',
    date: 'June 29, 2026',
    author: 'Aura Hygiene Team',
    authorRole: 'Clinical Dental Hygienists',
    excerpt: 'Simple, evidence-based habits to shield your enamel against acidic wear and keep tooth nerves comfortable.',
    content: `Enamel is the hardest substance in the human body, yet it cannot regenerate once lost. Shielding your enamel is the key to preventing sensitivity, cavities, and costly restorative care.

1. **Wait 30 Minutes After Eating Acidic Foods:** Brushing immediately after consuming citrus fruits, coffee, or wine can rub softened enamel away. Rinse with water first!
2. **Use a Soft-Bristled Electric Toothbrush:** Hard bristles and aggressive scrubbing wear down enamel and cause gum recession.
3. **Floss Nightly Before Brushing:** Removing food debris between teeth allows fluoridated or nano-hydroxyapatite toothpaste to reach tight contact points.
4. **Hydrate Frequently:** Saliva is your mouth's natural buffering defense system against acid attacks.
5. **Wear a Custom Night Guard:** Unconscious teeth grinding (bruxism) exerts up to 250 lbs of pressure per square inch.`,
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
    tags: ['Preventive', 'Oral Hygiene', 'Enamel Care', 'Sensitivity']
  }
];

export const FAQS_DATA = [
  {
    question: 'How do I request or schedule a dental appointment?',
    answer: 'You can easily request an appointment online through our 24/7 booking request portal on this site, or call our receptionist directly at (555) 234-8900. Our team will contact you within 2 business hours to confirm your preferred time slot.'
  },
  {
    question: 'Do you accept dental insurance?',
    answer: 'Yes! We accept most major PPO dental insurance plans including Delta Dental, Cigna, MetLife, Aetna, Guardian, and Humana. Our patient care coordinators handle all claims processing directly to maximize your benefits.'
  },
  {
    question: 'What financing options are available for non-insured or cosmetic care?',
    answer: 'We believe premium care should be accessible. We offer 0% interest flexible payment plans through CareCredit® and Sunbit®, as well as our in-house Aura Dental Membership Plan for non-insured patients.'
  },
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring a valid photo ID, your dental insurance card if applicable, and complete our digital new patient form ahead of time via the link sent to your phone/email.'
  },
  {
    question: 'How does Aura Dental Studio accommodate anxious or phobic patients?',
    answer: 'Patient comfort is central to our practice. We offer noise-canceling headphones, ceiling entertainment screens, warm lavender scented towels, local numbing gels, and mild oral relaxation options to ensure a calm experience.'
  },
  {
    question: 'What qualifies as a dental emergency and how quickly can I be seen?',
    answer: 'Severe throbbing toothache, broken or knocked-out teeth, facial swelling, bleeding, or lost crowns are dental emergencies. We reserve daily emergency blocks for same-day evaluation.'
  }
];

export const INSURANCE_PROVIDERS = [
  'Delta Dental PPO',
  'Cigna Dental',
  'MetLife PDP',
  'Aetna Dental',
  'Guardian Anywhere',
  'Humana Choice',
  'Principal Financial',
  'United Healthcare'
];
