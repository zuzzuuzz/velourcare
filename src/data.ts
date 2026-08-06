import { CaseStudy, BlogPost, FAQItem, Testimonial, TreatmentService } from "./types";

export const brandHeroImage = "/images/smilyx-hero-banner.jpg";

export const services: TreatmentService[] = [
  {
    id: "digital-diagnostics",
    title: "Precision Digital diagnostics",
    shortDesc: "High-resolution 3D intraoral scans and panoramic radiographs that give the planning team a clear starting point.",
    fullDesc: "Every aligner case starts with accurate records. Instead of traditional putty impressions, we use laser-based intraoral scanners to capture a detailed, color-mapped 3D model of the teeth. Combined with digital cephalometric radiography, this gives our lab a reliable anatomic baseline for planning.",
    duration: "1 Session (30 mins)",
    suitableFor: ["Crowding", "Spacing", "Overbite", "Underbite", "Crossbite"],
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ortho-design",
    title: "Expert Orthodontic Planning",
    shortDesc: "Tooth-movement mapping by our clinical doctors, aligner planning expert, and certified dental technologist under licensed orthodontist supervision.",
    fullDesc: "Tooth movement needs careful planning. Vélourcare Ortho uses digital setup software to review the force and sequence required for each tooth. Your plan is prepared by our clinical doctors, aligner design specialists, and an assisting certified dental technologist, with direct supervision from a licensed orthodontist. The goal is a clear step-by-step path that is comfortable, safe, and ready for review in 24 hours.",
    duration: "24 Hours",
    suitableFor: ["All malocclusions", "Custom case planning", "Relapse corrections"],
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "aligner-fabrication",
    title: "Medical-Grade Aligner Fabrication",
    shortDesc: "Multi-layer thermoformed polymers produced from accurate 3D printed models for a clear, close fit.",
    fullDesc: "Our manufacturing process uses Class-VI biocompatible PETG polyurethane materials. Each aligner sheet is thermoformed over a high-resolution 3D printed dental model, laser-trimmed to the scalloped gingival margin, and hand-polished. The result is a comfortable, clear tray with consistent gentle force.",
    duration: "7-10 Business Days",
    suitableFor: ["Direct patient setups", "Clinical partner labs", "Replacement sets"],
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-01",
    patientName: "Dr. Amanda Ross (Clinical Trial)",
    age: 28,
    condition: "Severe Anterior Crowding & Overlap",
    difficulty: "Severe",
    durationMonths: 11,
    beforeImg: "https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
    description: "The patient presented with severe imbrication of the maxillary anterior region, specifically severe rotated central incisors and deep bite. Traditional metal braces were declined for aesthetic reasons.",
    clinicalNotes: "Treatment used 22 active stages of clear aligners. Precision buccal attachments were placed on teeth 12, 11, 21, and 22 to guide rotation. Interproximal reduction (IPR) of 0.2mm was applied on the lower anterior teeth.",
    doctorInCharge: "Dr. Marcus Vance, DDS, MS"
  },
  {
    id: "case-02",
    patientName: "Liam Sterling",
    age: 34,
    condition: "Maxillary Diastema (4.5mm Spacing Gap)",
    difficulty: "Moderate",
    durationMonths: 7,
    beforeImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    description: "Patient experienced social anxiety due to a highly noticeable midline gap between his upper central incisors. The goal was full space closure with stable posterior occlusion.",
    clinicalNotes: "Achieved full midline space closure over 14 active aligner trays. No stripping was needed. A lingual retainer wire was installed on completion to support long-term retention of the high-relapse anterior gap.",
    doctorInCharge: "Dr. Sarah Chen, Orthodontist"
  },
  {
    id: "case-03",
    patientName: "Sophia Martinez",
    age: 22,
    condition: "Mild Mandibular Crowding & Relapse",
    difficulty: "Mild",
    durationMonths: 4.5,
    beforeImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    description: "A classic case of post-orthodontic relapse. The patient forgot to wear her retainer years after traditional braces, leading to progressive lower incisor crowding.",
    clinicalNotes: "Minor alignment adjustments using 9 active stages. Custom scalloped laser trims were used to accommodate her low gumline. Relapse correction was completed inside five months with minimal discomfort.",
    doctorInCharge: "Dr. Marcus Vance, DDS, MS"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-01",
    slug: "how-clear-aligners-safely-move-teeth",
    title: "How Clear Aligners Safely Move Teeth: The Biomechanics",
    excerpt: "A clear look at bone remodeling, periodontal ligament response, and the controlled forces behind clear aligners.",
    content: "When you wear a new set of clear aligners, the tray applies light, planned pressure to specific teeth. That pressure starts a normal biological process called bone remodeling. On the pressure side, the periodontal ligament compresses and osteoclasts help resorb old bone. On the tension side, osteoblasts help build new bone. Vélourcare Ortho aligners are made from medical polyurethane selected to keep these forces controlled and comfortable throughout treatment.",
    category: "Biomechanics",
    author: {
      name: "Nomair Ahmad",
      role: "Chief Orthodontist",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&auto=format&fit=crop"
    },
    date: "June 24, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "blog-02",
    slug: "ultimate-retainer-guide",
    title: "The Ultimate Retainer Guide: Protecting Your Smile Long Term",
    excerpt: "Why teeth can shift after treatment and how a clear retention plan helps protect the result.",
    content: "Finishing clear aligner treatment is a major step, but retention is what keeps the result stable. Teeth can shift because periodontal fibers and surrounding bone need time to settle after movement. This is known as post-treatment relapse. To protect your alignment, we recommend a clear thermoformed retainer. Most patients wear it 22 hours a day at first, then move to night-time wear once the supervising doctor confirms the case is stable.",
    category: "Post-Care",
    author: {
      name: "Nomair Ahmad",
      role: "Lead Orthodontist",
      avatar: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=150&auto=format&fit=crop"
    },
    date: "July 02, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "blog-03",
    slug: "clear-aligners-vs-traditional-braces",
    title: "Clear Aligners vs. Traditional Braces: How Digital Precision Is Redefining Modern Smile Design",
    excerpt: "When considering orthodontic treatment, one question arises more frequently than any other: Should you choose clear aligners or traditional metal braces? We break down aesthetics, digital CAD/CAM precision, daily lifestyle impact, and clinical scope to help you decide.",
    content: `When considering orthodontic treatment to straighten your teeth and improve oral health, one question arises more frequently than any other: Should you choose clear aligners or traditional metal braces?

While both approaches aim to deliver a healthier, aligned, and aesthetic smile, the technology, daily experience, and clinical precision behind them differ significantly. Modern digital dentistry workflows now allow for unprecedented CAD/CAM accuracy, enabling personalized treatment plans tailored to unique facial aesthetics.

## 1. The Visual & Aesthetic Comparison

A primary consideration for adults and teenagers alike when choosing orthodontic treatment is visual discretion. Daily social interactions, professional settings, and personal confidence play significant roles in this decision.

**Traditional Metal Braces** utilize high-grade stainless steel brackets bonded to the front of each tooth, connected by archwires and elastic bands. While highly reliable for complex biomechanical movements, they remain prominently visible throughout treatment.

**Clear Aligners** are custom-fabricated using medical-grade, highly transparent thermoplastic polymers. Engineered to fit snugly over the dental arch, they are virtually invisible during daily conversations, meetings, and photography.

## 2. Digital CAD/CAM Precision & Predictability

The true secret behind the high success rate of clear aligner therapy isn't merely the clear tray itself — it is the advanced digital design software (CAD) and treatment planning operating behind the scenes.

**Predictable 3D Digital Simulations:** Using advanced 3D intraoral scanning and CAD software, clinicians map out micro-movements of each tooth prior to manufacturing. Patients can visualize a step-by-step 3D rendering of their projected smile progression before treatment commences.

**Targeted Biomechanical Force:** Digital algorithms calculate exact force vectors required for movement. By applying force only where necessary, clear aligner protocols optimize tooth movement speed while minimizing patient discomfort.

## 3. Comfort, Maintenance & Daily Lifestyle

Living with orthodontic appliances impacts daily routines, dietary choices, and hygiene habits. Clear aligners offer unmatched lifestyle flexibility compared to fixed appliances.

| Feature | Clear Aligners | Traditional Braces |
|---------|---------------|-------------------|
| **Dietary Freedom** | Removable during meals. No dietary restrictions — nuts, apples, and sticky foods are all allowed. | Fixed appliance. Hard, sticky, or chewy foods must be avoided to prevent bracket dislodgement. |
| **Oral Hygiene** | Easy brushing and flossing after removing aligners. Low risk of plaque accumulation. | Requires specialized threaders and interdental brushes to clean around brackets and wires. |
| **Soft Tissue Comfort** | Smooth, digitally trimmed margins align comfortably with the gingival line without sharp edges. | Metal brackets and wire ends can cause localized cheek or lip irritation, requiring orthodontic wax. |
| **Maintenance Visits** | Routine check-ins for tray progression; fewer emergency visits for broken wires or loose brackets. | Regular clinical visits required for wire tightening, elastic changes, and bracket repairs. |

## 4. Clinical Scope & Candidacy

Clear aligners excel across a wide range of aesthetic and functional dental misalignments, particularly when planned by experienced digital treatment designers:

- **Mild to Moderate Crowding:** Resolving overlapped or twisted teeth efficiently.
- **Spacing & Gaps:** Closing unwanted diastemas and interdental spacing.
- **Bite Malocclusions:** Correcting overbites, underbites, and crossbites with specialized attachments and elastics.

Your ideal smile starts with a precision-tailored digital plan. Explore our customized aligner and aesthetic restoration services or consult with our experts today.`,
    category: "Education",
    author: {
      name: "Nomair Ahmad",
      role: "Clinical Director",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop"
    },
    date: "July 10, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  }
];

export const FAQs: FAQItem[] = [
  {
    category: "General",
    question: "What makes Vélourcare Ortho aligners different from standard aligners?",
    answer: "Vélourcare Ortho aligners use multi-layer polymers selected for steady orthodontic force. Each setup is custom-designed and approved by a licensed, board-certified orthodontist rather than left to an algorithm alone."
  },
  {
    category: "Treatment",
    question: "How many hours a day must I wear my aligners?",
    answer: "For effective teeth movement, aligners must be worn for 20 to 22 hours daily. They should only be removed to eat, drink anything other than cool water, brush, and floss."
  },
  {
    category: "Treatment",
    question: "How long does the average Vélourcare Ortho alignment take?",
    answer: "Many cases finish in 6 to 12 months. Mild cases may take about 4 months, while complex cases can take 18 months or longer depending on the treatment goals."
  },
  {
    category: "Care & Wear",
    question: "Are clear aligners painful to wear?",
    answer: "You may feel tight pressure during the first 24 to 48 hours of a new tray. That usually means the aligner is active. The soreness is temporary and should settle quickly."
  },
  {
    category: "Care & Wear",
    question: "How do I clean and sanitize my aligners?",
    answer: "Rinse them with cool water every time you take them out. Brush them gently with a soft-bristled toothbrush and a clear, mild liquid soap (avoid colored toothpastes, which can scratch or stain the clear polymer). You can also submerge them in standard orthodontic retainer cleaning tablets."
  },
  {
    category: "Pricing",
    question: "How do I submit a trial case?",
    answer: "Dental practitioners and trial patients can submit a trial case via our online portal. Simply fill out the 'Submit Trial Case' form with your basic details, and our orthodontic lab team will contact you to coordinate your 3D digital scan or upload existing clinical STL files."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t-01",
    name: "Dr. Catherine Bennett",
    role: "Clinical Partner",
    clinic: "Bennett Aesthetic Dentistry",
    feedback: "Vélourcare Ortho has made our clear aligner workflow much easier. Their digital setup turnaround is fast, and the polished trim line has reduced soft-tissue irritation complaints from my patients.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t-02",
    name: "Jeremy Thorne",
    role: "Relapse Patient",
    clinic: "Vélourcare Member",
    feedback: "I wore braces as a teenager but stopped wearing my retainer, and my lower teeth became crowded again. Vélourcare Ortho corrected the relapse in 5 months. The trays were clear enough that most people did not notice them.",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "t-03",
    name: "Elena Rostova",
    role: "Verified Patient",
    clinic: "Vélourcare Member",
    feedback: "I had a large gap between my front teeth for years. Vélourcare Ortho designed a 7-month plan that closed it, and the support team guided me through each tray change. I feel much more comfortable smiling now.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    rating: 5
  }
];

export const officeAddress = "Nawab Town E Block";
export const officeHours = [
  { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { days: "Saturday", hours: "9:00 AM - 3:00 PM" },
  { days: "Sunday", hours: "Closed" }
];
export const officeContact = {
  phone: "+923294053244",
  // TODO: Replace with verified Vélourcare Ortho email address when available
  email: "partner@smilyx-aligners.com"
};
