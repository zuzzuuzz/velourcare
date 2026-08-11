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
    imageUrl: "/images/precision-dental-diagnosis.jpg"
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
    imageUrl: "/images/aligner-fabrication.jpg"
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
    beforeImg: "/images/adult-ortho.jpg",
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
    excerpt: "A deep dive into the cellular processes, controlled force systems, and CAD/CAM digital engineering principles that allow clear aligners to safely and predictably transform a smile.",
    content: `To the untrained eye, clear aligners look like simple plastic trays that snap over teeth. However, behind every successful treatment lies a sophisticated blend of **biomechanical engineering, cellular biology, and CAD/CAM software design**. Understanding the biomechanics of clear aligners explains why treatment is both safe and predictable when planned correctly. This guide explores the cellular processes, force systems, and digital engineering principles that allow clear aligners to safely transform a smile.

## 1. The Cellular Level: How Tooth Movement Actually Works

Teeth are not set directly into rigid jawbone; they are suspended within alveolus bone by the **periodontal ligament (PDL)** — a collagen-rich vascular tissue acting as a shock absorber.

**Pressure Side (Bone Resorption):** When an aligner applies micro-pressure to a tooth, the PDL compresses on one side. Reduced blood flow triggers signaling molecules that activate **osteoclasts** — specialized cells that safely break down tiny amounts of bone matrix to clear a path for the root.

**Tension Side (Bone Deposition):** On the opposite side, the PDL stretches. This tension stimulates blood flow and activates **osteoblasts** — cells that lay down fresh, new bone matrix behind the moving root, locking the tooth safely into its new position.

## 2. Controlled Forces: Why Light, Continuous Pressure Is Essential

In orthodontic biomechanics, more force does not mean faster movement. In fact, excessive force halts tooth movement and causes tissue damage.

- **Optimal Force Threshold:** Bone remodeling occurs safest when forces remain within a gentle, optimal biological window (typically 0.2N to 0.35N per tooth).
- **Hyalinization Avoidance:** Heavy forces crush PDL blood vessels, causing tissue necrosis (hyalinization). The body must then clear dead tissue before bone can remodel, slowing progress and causing pain.
- **Root Resorption Protection:** Controlled, incremental forces protect tooth root tips from shortening or breaking down during transit.

## 3. The Staging Protocol: CAD/CAM Digital Precision

Unlike traditional braces where archwires deliver continuous pulling forces across entire arches, aligners move teeth incrementally using **staged digital steps** calculated in CAD software.

| Biomechanical Concept | Incremental Staging | Clinical Advantage |
|----------------------|--------------------|--------------------|
| **Distance per Tray** | 0.2mm to 0.25mm movement per tray step. | Prevents tissue overload and excessive soreness. |
| **Rotational Limits** | 1° to 2° of rotation per tray step. | Maintains tracking and predictable force application. |
| **Selective Movement** | Anchors non-moving teeth while moving targeted teeth. | Maximizes biomechanical efficiency without unwanted side effects. |

## 4. Composite Attachments & Force Vectors

Because smooth plastic trays can struggle to grip curved tooth enamel, clinicians use tooth-colored **composite attachments** placed on specific teeth.

- **Creating Pushing Surfaces:** Attachments create precise shape angles that allow the aligner material to exert direct force vectors.
- **Complex Movements:** Essential for difficult movements such as tooth extrusion (pulling a tooth down), root torqueing, and severe rotations.
- **Power Ridges:** Built-in tray indents that exert targeted torque near the gingival margin to tilt tooth roots accurately.

## 5. Material Science: Polymeric Elasticity

Modern clear aligners are engineered using multi-layer polyurethane or co-polyester polymers. These advanced materials provide:

- **Constant Force Retention:** Delivers low, sustained force across the full 1 to 2-week wear cycle of a single tray.
- **Stress Relaxation Resistance:** Prevents the plastic from stretching out prematurely or losing its shape under internal mouth heat.
- **Flexibility with Memory:** High elasticity allows easy insertion and removal without permanent deformation.

Discover how custom aligner staging and advanced CAD design elevate patient outcomes with Vélourcare Ortho.`,
    category: "Biomechanics",
    author: {
      name: "Nomair Ahmad",
      role: "Chief Orthodontist",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&auto=format&fit=crop"
    },
    date: "June 24, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "blog-02",
    slug: "ultimate-retainer-guide",
    title: "The Ultimate Retainer Guide: Protecting Your Smile Long Term",
    excerpt: "Completing orthodontic treatment is only half the journey. This comprehensive guide breaks down why retainers are essential, compares the main types of retainers, and outlines best practices for wear and long-term care.",
    content: `Completing orthodontic treatment with braces or clear aligners is a major milestone, but finishing active treatment is only half the journey. The true secret to maintaining a perfectly aligned smile for life lies in **post-orthodontic retention**. Without a structured retention plan, natural physiological processes cause teeth to drift back toward their original positions. This comprehensive guide breaks down why retainers are essential, compares the main types of retainers, and outlines best practices for wear and long-term care.

## 1. Why Retention Is Essential: Understanding Relapse

During orthodontic treatment, your teeth move through bone remodeling. When pressure is applied, bone on one side of the tooth resorbs while new bone forms on the other. Once appliances are removed, surrounding tissues require time to stabilize around the new positions.

**Periodontal Ligament Elasticity:** Elastic fibers in the gingival tissue act like tiny rubber bands, naturally pulling teeth back toward their pre-treatment placement.

**Bone Remodeling Lag:** It takes **6 to 12 months** for bone tissue to fully remineralize and densify around newly aligned tooth roots.

**Natural Aging & Mesial Drift:** Teeth naturally shift forward and inward over time as part of physiological aging, regardless of orthodontic history.

## 2. Comparing the 3 Main Types of Retainers

| Feature | Hawley Retainer | Clear / Essix Retainer | Fixed / Bonded Wire |
|---------|----------------|----------------------|-------------------|
| **Material** | Acrylic palate with metal labial wire. | Clear medical-grade thermoplastic. | Braided stainless steel or titanium wire. |
| **Aesthetics** | Visible wire across front teeth. | Near-invisible transparent tray. | Completely hidden behind front teeth. |
| **Typical Lifespan** | 5 to 10+ years. | 1 to 3 years. | Indefinite (requires checks). |
| **Adjustability** | High (wires adjustable by clinician). | None (must be remade if shifted). | N/A (bonded directly). |
| **Best For** | Durability, adjustability, grinders. | Maximum discretion, aligner users. | High relapse risk, lower arch. |

## 3. Retainer Wear Protocols: Timeline for Success

**Months 1 to 6 (Full-Time Phase):** Wear removable retainers for **20 to 22 hours per day**. Remove only for eating, non-water drinking, and brushing.

**Months 6 to 12 (Transition Phase):** If stability is verified, transition to nighttime-only wear (8 to 10 hours per night).

**Year 1 & Beyond (Maintenance Phase):** Wear your retainer every night while sleeping to guarantee lifelong alignment.

## 4. Daily Cleaning & Maintenance Guidelines

**Recommended Practices:**

- **Rinse Immediately:** Rinse with cool water upon removal to prevent dried saliva plaque.
- **Clean Daily:** Brush gently using liquid dish soap and a soft toothbrush.
- **Soak Periodically:** Use specialized cleaning tablets weekly to dissolve mineral deposits.
- **Floss Bonded Wires:** Use floss threaders or water flossers daily beneath fixed wires.

**Mistakes to Avoid:**

- **Avoid Hot Water:** Heat warps plastic and distorts acrylic frameworks.
- **Skip Abrasive Toothpaste:** Micro-abrasives scratch plastic, harboring bacteria.
- **Never Wrap in Napkins:** Napkin storage leads directly to accidental disposal.
- **Avoid Harsh Chemicals:** Bleach or alcohol-based mouthwashes degrade materials.

## 5. Signs It Is Time for Replacement or Repair

- **Visible Cracks or Tears:** Structural damage compromises retainer retention force.
- **Loose Fit:** An appliance that no longer snaps firmly permits subtle tooth movement.
- **Debonded Wire:** A detached fixed wire requires prompt re-bonding to prevent rapid rotation.
- **Persistent Calculus:** Heavy white calcification signals deep bacterial build-up.

Your smile is an investment worth protecting. Explore custom retainer options, replacement trays, and digital alignment protection with Vélourcare Ortho.`,
    category: "Post-Care",
    author: {
      name: "Nomair Ahmad",
      role: "Lead Orthodontist",
      avatar: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=150&auto=format&fit=crop"
    },
    date: "July 02, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
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
    imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=800&auto=format&fit=crop"
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
  email: "info@vélourcare.com"
};
