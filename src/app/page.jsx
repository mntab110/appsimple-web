import React from "react";
import {
  ExternalLink,
  Mail,
  ArrowUpRight,
  Smartphone,
  Globe,
} from "lucide-react";

export default function HomePage() {
  const projects = [
    {
      title: "ForkNotes",
      status: "Currently in development for iOS",
      description:
        "An upcoming iOS application designed to help users preserve, organize, and revisit their dining experiences.",
      features: [
        "Receipt-based meal tracking",
        "Smart categorization",
        "Dining notes and favorites",
        "Personalized dining history",
        "Beautiful shareable dining postcards",
      ],
      image:
        "https://appsimple.com/images/forknotes-postcard.jpg",
      onboarding: [
        "/images/forknotes-onboarding-1.png",
        "/images/forknotes-onboarding-2.png",
        "/images/forknotes-onboarding-3.png",
        "/images/forknotes-onboarding-4.png",
      ],
      type: "Mobile App",
    },
    {
      title: "Aurea.art",
      status: "Live Experience",
      description:
        "A modern online art experience created for the presentation and discovery of original artwork. Focused on simplicity, elegance, and visual presentation.",
      link: "https://aurea.art",
      image:
        "https://dtvoeevhaseb5.cloudfront.net/user-uploads/ab8459b4-9541-445c-8363-ac256d1c4784.png",
      type: "Web Experience",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.png"
              alt="AppSimple Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-black transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-black transition-colors"
            >
              About
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-black transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-24 md:pt-24 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">
            Independent Software Studio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            Focused mobile and web experiences designed with simplicity,
            usability, and thoughtful detail.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed">
            AppSimple is an independent app development studio currently
            developing consumer-focused applications and digital experiences.
          </p>
        </div>
      </section>

      {/* Featured Studio Image */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50">
          <img
            src="https://appsimple.com/images/hero-laptop.jpg"
            alt="AppSimple Studio"
            className="w-full aspect-[21/9] object-cover"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 bg-[#fafafa] border-y border-gray-100 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Current Projects
              </h2>
              <p className="text-gray-500">
                A selection of our active work and past releases.
              </p>
            </div>
          </div>

          <div className="grid gap-24 md:gap-32">
            {/* ForkNotes */}
            <div className="flex flex-col gap-10">
              <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                    <Smartphone size={14} />
                    Mobile App — Upcoming
                  </div>
                  <h3 className="text-4xl font-bold mb-6">ForkNotes</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    ForkNotes is an upcoming iOS application designed to help
                    users preserve, organize, and revisit their dining
                    experiences.
                  </p>
                  <div className="space-y-4 mb-10">
                    {projects[0].features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-black text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 opacity-50 cursor-not-allowed">
                      Coming Soon to iOS
                    </div>
                  </div>
                </div>
                {/* Main postcard image */}
                <div className="order-1 md:order-2">
                  <div className="relative bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden group">
                    <img
                      src={projects[0].image}
                      alt="ForkNotes Postcard"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Onboarding screenshots row */}
              <div className="grid grid-cols-4 gap-3 md:gap-5">
                {projects[0].onboarding.map((src, i) => (
                  <div
                    key={i}
                    className="relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden aspect-[9/19.5] group"
                  >
                    <img
                      src={src}
                      alt={`ForkNotes onboarding screen ${i + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Aurea.art */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="relative aspect-video bg-white rounded-[2rem] p-4 shadow-xl border border-gray-100 overflow-hidden group">
                <img
                  src={projects[1].image}
                  alt="Aurea.art Preview"
                  className="w-full h-full object-cover rounded-[1.5rem] transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  <Globe size={14} />
                  Web Experience — Live
                </div>
                <h3 className="text-4xl font-bold mb-6">Aurea.art</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Aurea.art is a modern online art experience created for the
                  presentation and discovery of original artwork.
                </p>
                <p className="text-gray-500 mb-10 leading-relaxed">
                  Designed and developed as a custom web experience focused on
                  simplicity, elegance, and visual presentation.
                </p>
                <a
                  href={projects[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 px-8 py-4 rounded-xl text-sm font-bold hover:bg-black hover:text-white hover:border-black transition-all group"
                >
                  Visit Aurea.art
                  <ArrowUpRight
                    size={18}
                    className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Get in touch
          </h2>
          <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
            Whether you have an inquiry or just want to say hello, we'd love to
            hear from you.
          </p>
          <a
            href="mailto:admin@appsimple.com"
            className="inline-flex items-center gap-3 text-2xl font-bold hover:opacity-60 transition-opacity border-b-4 border-black pb-2"
          >
            <Mail size={24} />
            admin@appsimple.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 grayscale opacity-60">
            <img
              src="https://dtvoeevhaseb5.cloudfront.net/user-uploads/cc4a3341-9cae-43a6-9cf7-34622c1659df.png"
              alt="AppSimple Logo"
              className="h-6 w-auto object-contain"
            />
          </div>

          <div className="text-sm text-gray-400">
            © 2026 AppSimple LLC. All rights reserved.
          </div>

          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <a href="/privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a
              href="mailto:admin@appsimple.com"
              className="hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
