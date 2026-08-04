import { Shield, Award, Star, Microscope, Users } from "lucide-react";
import Reveal from "../components/Reveal";
import RevealGroup from "../components/RevealGroup";

export default function AboutUs() {
  const team = [
    {
      name: "Liaquat Hussain, DDS, MS",
      role: "Supervising Orthodontist",
      bio: "Board-certified orthodontist with over 18 years of experience. Reviews and supervises custom staging plans for clinical safety.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop"
    },
 
    {
      name: "Dr. Fouzia Anjum, DDS",
      role: "Clinical Treatment Doctor",
      bio: "Experienced clinician focused on case validation, patient assessment, and biomechanical safety checks.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Faizan Afzal, CO",
      role: "Lead Aligner Planning Expert",
      bio: "Specialist in computer-aided staging and polymer behavior, refining tooth-movement sequences for a close and comfortable fit.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Nomair Ahmad, CDT",
      role: "Certified Dental Technologist",
      bio: "Digital design specialist who assists doctors with accurate dental alignment plans.",
      image: "/images/nomair-ahmad.jpg"
    }
  ];

  const values = [
    {
      icon: <Award className="w-6 h-6 text-brand-600" />,
      title: "Expert Oversight",
      desc: "Every single clear aligner setup is designed by our team of dedicated clinical doctors and an aligner planning expert, assisted by a certified dental technologist, under the direct supervision of a licensed master orthodontist."
    },
    {
      icon: <Microscope className="w-6 h-6 text-brand-600" />,
      title: "Biomaterial Innovation",
      desc: "Our Class-VI PETG polymers are selected for steady, gentle pressure while keeping the trays clear."
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-600" />,
      title: "Micron-Level Precision",
      desc: "Each clear tray is laser-trimmed to the scalloped gingival margin and hand-polished at our laboratory."
    }
  ];

  return (
    <div id="about-us-page" className="pb-20 bg-white space-y-24">
      {/* Hero Intro */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2400&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Clinic laboratory background"
            referrerPolicy="no-referrer"
          />
        </div>
        <Reveal className="layout-container relative z-10 text-center space-y-4">
          <div className="badge badge-underline badge-underline--dark" id="badge-underline-dark">
            <Users className="badge-icon" />
            <span>The Vélourcare Foundation</span>
            <div className="badge-underline__line badge-underline__line--gold"></div>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            About Us
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Founded by clinical orthodontists, Vélourcare Ortho is built around careful diagnosis, biocompatible materials, and consistent lab workflows.
          </p>
        </Reveal>
      </section>

      {/* Narrative Section */}
      <section className="layout-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <Reveal variant="left" className="lg:col-span-6 relative">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
              alt="Vélourcare Ortho team at work"
              className="rounded-[40px] shadow-2xl relative z-10 w-full aspect-[4/3] object-cover border border-slate-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-100 rounded-full -z-10 filter blur-xl opacity-50" />
          </Reveal>

          <Reveal variant="right" className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center text-brand-600">
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                Our Genesis Story
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight leading-none">
              Where Technology Meets Clinical Expertise.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              In 2021, our founders saw clear aligner treatment becoming too commercial and too automated. Some direct-to-consumer providers were shipping aligners without complete orthodontic examinations or close doctor supervision.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Vélourcare Ortho was created to bring doctor oversight back into the process. We combine modern 3D thermoforming with structured clinical review. Today, we support doctor partners and direct patients, with every case checked before treatment moves forward.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Clinical Values */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="layout-container space-y-16">
          <Reveal className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
              Core Pillars
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Our Foundational Beliefs
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We put diagnostic accuracy, materials, and clinical review first. These values guide our laboratory.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8" childClassName="h-full">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 space-y-4 text-left"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">{val.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Team grid */}
      <section className="layout-container space-y-16">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-widest block">
            The Planning Team
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Meet Our Planning Experts
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Our treatment plans are designed by our dedicated clinical doctors and an aligner planning expert, assisted by a certified dental technologist, all under licensed orthodontist supervision.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" childClassName="h-full">
          {team.map((member, idx) => (
            <div
              key={idx}
              id={`team-card-${idx}`}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300 text-left flex flex-col h-full"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-tight">{member.name}</h3>
                  <span className="text-xs font-bold text-brand-600 block">{member.role}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed pt-2 border-t border-slate-50 mt-3">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </RevealGroup>
      </section>
    </div>
  );
}
