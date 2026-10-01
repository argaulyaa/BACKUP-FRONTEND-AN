"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ponytail: struktur & aset persis Figma About-page (2295:11527), render PNG as reference
const gallery = [
  "/assets/about-gallery-1.jpg",
  "/assets/about-gallery-2.jpg",
  "/assets/about-gallery-3.jpg",
];

const history = [
  {
    year: "2015",
    title: "Core Network Laboratory",
    desc: "Dengan nama Core Network Laboratory, berfokus pada penelitian tentang Network Function Virtualization.",
    logo: "/assets/logo-2015.png",
    logoW: 260,
    milestone: "Berdirinya Laboratorium",
    detail: "Fokus riset: Network Function Virtualization (NFV)",
    tags: ["NFV", "Core Network", "Research"],
  },
  {
    year: "2017",
    title: "Core Network Laboratory",
    desc: "Dengan nama Core Network Laboratory, berfokus pada penelitian tentang Network Function Virtualization.",
    logo: "/assets/logo-2017.png",
    logoW: 160,
    milestone: "Perubahan Identitas Visual",
    detail: "Pembaruan logo & branding laboratorium",
    tags: ["Rebranding", "NFV", "Network"],
  },
  {
    year: "2019",
    title: "Adaptive Network Laboratory",
    desc: "Terjadi pergantian dan peresmian nama menjadi Adaptive Network Laboratory, yang berfokus pada perkembangan future network.",
    logo: "/assets/logo-2019.png",
    logoW: 280,
    milestone: "Peresmian Adaptive Network Lab",
    detail: "Fokus baru: Future Network & SDN/NDN",
    tags: ["Future Network", "SDN", "Adaptive"],
  },
];

const misiItems = [
  "Menumbuhkan dan meningkatkan rasa kekeluargaan, kepedulian, kenyamanan dan kepemilikan setiap asisten terhadap Laboratorium Adaptive Network",
  "Meningkatkan sarana, prasarana, dan kemampuan asisten Laboratorium Adaptive Network baik hard skill maupun soft skill",
  "Menjalin hubungan baik antara asisten, pembina, komunitas, industri, dan laboratorium lain di dalam maupun di luar kampus",
];

function FadeInView({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${inView ? delay : 0}ms` }}
      className={`transition-all duration-[420ms] ease-[cubic-bezier(0.2,0.7,0.3,1)] ${className} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
      }`}
    >
      {children}
    </div>
  );
}

function HistoryCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right");
  const touchStartX = useRef(null);
  const total = history.length;

  const prev = () => {
    setDirection("left");
    setActive((active - 1 + total) % total);
  };
  const next = () => {
    setDirection("right");
    setActive((active + 1) % total);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (Math.abs(deltaX) < 40) {
      touchStartX.current = null;
      return;
    }

    if (deltaX < 0) {
      next();
    } else {
      prev();
    }

    touchStartX.current = null;
  };

  const goTo = (i) => {
    if (i === active) return;
    setDirection(i > active ? "right" : "left");
    setActive(i);
  };

  const h = history[active];

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center md:flex-row md:items-stretch">
      <div
        className="bg-navy relative flex w-full flex-1 flex-col px-5 py-5 text-white sm:px-8 md:px-16 md:py-8"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="mb-5 text-center md:mb-6">
          <h2 className="mb-1 font-display text-3xl font-extrabold uppercase leading-none tracking-[-0.06em] sm:text-4xl">Sejarah</h2>
          <p className="text-xs text-gray-300 sm:text-sm">Adaptive Network Laboratory</p>
        </div>

        <div className="mb-5 flex items-center gap-3 md:mb-7">
          {history.map((item, i) => (
            <button
              key={item.year}
              onClick={() => goTo(i)}
              className={"flex items-center gap-2 group transition-all " + (i === active ? "flex-1" : "shrink-0")}
              aria-label={"Lihat sejarah " + item.year}
            >
              <div className={"h-1 rounded-full transition-all duration-300 " + (i === active ? "flex-1 bg-primary" : "w-8 bg-white/20 group-hover:bg-primary/40")} />
              <span className={"text-sm font-bold transition-colors " + (i === active ? "text-primary" : "text-gray-400 group-hover:text-gray-200")}>
                {item.year}
              </span>
            </button>
          ))}
        </div>

        <div
          key={active}
          className={`grid w-full flex-1 grid-cols-1 items-center gap-4 pb-14 md:grid-cols-2 md:gap-12 md:pb-0 ${direction === 'right' ? 'animate-fade-in-right' : 'animate-fade-in-left'}`}
        >
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary sm:text-sm md:mb-3">
              {h.milestone}
            </span>
            <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl md:mb-4 md:text-3xl">{h.title}</h3>
            <p className="mb-3 text-sm leading-relaxed text-gray-300 sm:text-base md:mb-5">{h.desc}</p>

            <div className="flex w-fit items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 sm:text-sm md:px-4 md:py-3">
              <svg className="mt-0.5 shrink-0 text-primary" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
              </svg>
              <span>{h.detail}</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex min-h-[112px] w-full items-center justify-center rounded-2xl border border-border bg-white px-6 py-5 shadow-sm sm:min-h-[150px] md:min-h-[200px] md:px-8 md:py-12">
              <img
                key={h.year}
                src={h.logo}
                alt={"Logo " + h.year}
                width={Math.round(h.logoW * 0.7)}
                className="max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-10 flex w-full items-center justify-center gap-3 md:hidden">
        <button
          onClick={prev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-navy shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
          aria-label="Sebelumnya"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={next}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-navy shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
          aria-label="Selanjutnya"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-navy shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white md:flex md:h-14 md:w-14"
        aria-label="Sebelumnya"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-4 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-navy shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white md:flex md:h-14 md:w-14"
        aria-label="Selanjutnya"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header variant="light" />

      <main className="flex-1">
        <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#E3F2FD] px-5 py-3 text-black md:px-12 md:py-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[min(70vw,48rem)] w-[min(70vw,48rem)] rounded-full border border-[#0D47A1]/10" />
          <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-[#0D47A1]/20 pb-3 font-mono text-[0.58rem] tracking-[0.15em] text-[#0D47A1]/75 md:text-[0.62rem]">
              <span>ADAPTIVE NETWORK LABORATORY / ABOUT</span>
              <span className="hidden sm:block">CORE NETWORK / TELKOM UNIVERSITY</span>
            </div>

            <div className="grid flex-1 items-center gap-4 py-2 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:py-10">
              <div className="max-w-xl">
                <FadeInView delay={0}>
                  <p className="editorial-label mb-3 !text-[#0D47A1] md:mb-5">Who we are</p>
                  <h1 className="mb-3 font-display text-[clamp(3.25rem,7vw,6.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.075em] text-black md:mb-7">
                    About
                    <br />
                    <span className="text-[#2196F3]">Us</span>
                  </h1>
                  <p className="max-w-lg text-[0.8rem] leading-relaxed text-black/75 sm:text-base md:text-lg">
                    Adaptive Network Laboratory adalah laboratorium yang melakukan eksplorasi di bidang core network. Selain aktif dalam kegiatan riset, lab kami juga memfasilitasi untuk kegiatan praktikum Jaringan Komputer dan Data.
                  </p>
                </FadeInView>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4">
                <FadeInView delay={0}>
                  <Link href="/practicum" className="group flex h-full min-h-[140px] flex-col rounded-md border border-[#0D47A1] bg-[#0D47A1] p-3 transition-colors hover:bg-[#2196F3] sm:min-h-[210px] sm:p-5 md:min-h-[290px] md:p-7">
                    <div className="mb-2 flex items-start justify-between sm:mb-6">
                      <span className="font-mono text-[0.58rem] tracking-[0.12em] text-white/65">01 / LEARN</span>
                    </div>
                    <h2 className="font-display text-xl font-extrabold uppercase leading-tight tracking-[-0.05em] text-white md:text-2xl">Praktikum</h2>
                    <p className="mt-1 flex-1 text-[0.68rem] leading-relaxed text-white/75 sm:mt-2 sm:text-sm">
                      Praktikum mata kuliah Jaringan Komputer dan Komunikasi Data.
                    </p>
                    <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-md border border-white/60 bg-transparent px-2.5 py-1.5 font-mono text-[0.55rem] tracking-[0.08em] text-white transition-colors group-hover:bg-white group-hover:text-[#0D47A1] sm:mt-4 sm:px-3 sm:py-2 sm:text-[0.58rem]">
                      LANJUT BACA <span aria-hidden>↗</span>
                    </span>
                  </Link>
                </FadeInView>
                <FadeInView delay={200}>
                  <Link href="/research" className="group flex h-full min-h-[140px] flex-col rounded-md border border-[#0D47A1] bg-[#0D47A1] p-3 transition-colors hover:bg-[#2196F3] sm:min-h-[210px] sm:p-5 md:min-h-[290px] md:p-7">
                    <div className="mb-2 flex items-start justify-between sm:mb-6">
                      <span className="font-mono text-[0.58rem] tracking-[0.12em] text-white/65">02 / RESEARCH</span>
                    </div>
                    <h2 className="font-display text-xl font-extrabold uppercase leading-tight tracking-[-0.05em] text-white md:text-2xl">Riset</h2>
                    <p className="mt-1 flex-1 text-[0.68rem] leading-relaxed text-white/75 sm:mt-2 sm:text-sm">
                      Cari tau topik riset yang sedang dieksplorasi oleh asisten.
                    </p>
                    <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-md border border-white/60 bg-transparent px-2.5 py-1.5 font-mono text-[0.55rem] tracking-[0.08em] text-white transition-colors group-hover:bg-white group-hover:text-[#0D47A1] sm:mt-4 sm:px-3 sm:py-2 sm:text-[0.58rem]">
                      LANJUT BACA <span aria-hidden>↗</span>
                    </span>
                  </Link>
                </FadeInView>
              </div>
            </div>

            <div className="flex items-end justify-between border-t border-[#0D47A1]/20 pt-3 font-mono text-[0.55rem] tracking-[0.14em] text-[#0D47A1]/75">
              <span>RESEARCH / PRACTICUM / NETWORK</span>
              <span>ADAPTIVE NETWORK LABORATORY</span>
            </div>
          </div>
        </section>

        {/* Visi, Misi & Gallery */}
        <section className="flex min-h-svh flex-col overflow-hidden bg-[#101827] px-5 py-5 text-white sm:px-8 md:px-12 md:py-8">
          <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-white/20 pb-3 font-mono text-[0.55rem] tracking-[0.14em] text-white/55 sm:text-[0.62rem]">
              <span>ABOUT / OUR DIRECTION</span>
              <span>ADAPTIVE NETWORK LABORATORY</span>
            </div>

            <div className="grid flex-1 content-center gap-5 py-5 md:grid-cols-2 md:gap-12 md:py-6">
              <FadeInView delay={0}>
                <div>
                  <p className="editorial-label mb-2 !text-[#90CAF9]">01 / OUR VISION</p>
                  <h2 className="mb-2 font-display text-3xl font-extrabold uppercase leading-none tracking-[-0.06em] sm:text-4xl md:mb-4 md:text-5xl">Visi</h2>
                  <p className="max-w-2xl text-xs leading-relaxed text-white/75 sm:text-sm md:text-base">
                    Menciptakan Laboratorium Adaptive Network sebagai laboratorium yang unggul dan
                    berprestasi dalam hal riset, publikasi, dan kompetisi baik di dalam kampus maupun
                    luar kampus serta menjadi wadah dalam meningkatkan kemampuan, baik hard skill
                    maupun soft skill untuk menciptakan sumber daya manusia yang unggul dan berprestasi
                    dalam menghadapi era revolusi industri yang terus berkembang.
                  </p>
                </div>
              </FadeInView>

              <FadeInView delay={120}>
                <div>
                  <p className="editorial-label mb-2 !text-[#90CAF9]">02 / OUR MISSION</p>
                  <h2 className="mb-2 font-display text-3xl font-extrabold uppercase leading-none tracking-[-0.06em] sm:text-4xl md:mb-4 md:text-5xl">Misi</h2>
                  <ul className="space-y-2 text-xs leading-relaxed text-white/75 sm:text-sm md:space-y-3 md:text-base">
                    {misiItems.map((m, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="shrink-0 font-mono text-[#90CAF9]">0{i + 1}</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            </div>

            <FadeInView delay={180}>
              <div className="grid grid-cols-3 gap-2 border-t border-white/20 pt-3 sm:gap-3 md:gap-4">
                {gallery.map((src, i) => (
                  <img key={src} src={src} alt={"Kegiatan lab " + (i + 1)} className="image-reveal h-20 w-full object-cover sm:h-28 md:h-36" />
                ))}
              </div>
            </FadeInView>
          </div>
        </section>

        {/* SEJARAH — carousel */}
        <section className="flex min-h-svh flex-col overflow-hidden bg-[#E3F2FD] px-5 py-5 sm:px-8 md:px-12 md:py-8">
          <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-[#0D47A1]/20 pb-3 font-mono text-[0.55rem] tracking-[0.14em] text-[#0D47A1]/75 sm:text-[0.62rem]">
              <span>ABOUT / OUR HISTORY</span>
              <span>2015 — PRESENT</span>
            </div>
          <FadeInView delay={0} className="flex flex-1 flex-col">
            <HistoryCarousel />
          </FadeInView>
          </div>
        </section>

        {/* Achievement teaser */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
          <FadeInView delay={0}>
            <>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary inline-flex items-center gap-3 justify-center">Achievement</h2>
              <p className="text-text-primary text-sm sm:text-base mt-3 mb-8 md:mb-10">Apresiasi kepada asisten atas usahanya yang luar biasa.</p>
              <Link href="/achievement" className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 sm:px-10 rounded-full transition-colors text-sm sm:text-base">
                Lihat Achievement
              </Link>
            </>
          </FadeInView>
        </section>
      </main>

      <Footer />
    </div>
  );
}
