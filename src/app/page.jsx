"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { apiFetch, ApiError } from "@/lib/api";

const ourValues = [
  { title: "Dedication", desc: "Komitmen dalam memberikan yang terbaik untuk setiap kegiatan dan program laboratorium.", icon: "/assets/icon-dedication.svg" },
  { title: "Teamwork", desc: "Kolaborasi dan sinergi antar asisten untuk mencapai tujuan bersama.", icon: "/assets/icon-teamwork.svg" },
  { title: "Learning", desc: "Pembelajaran berkelanjutan di bidang jaringan komputer dan teknologi terkini.", icon: "/assets/icon-learning.svg" },
];

const ourEvents = [
  { title: "NetSchool", desc: "Program study group jaringan komputer untuk mahasiswa baru.", icon: "M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5", link: "/netschool" },
  { title: "NetDevelopment", desc: "Pengembangan skill mahasiswa di bidang networking dan system.", icon: "M16 18l6-6-6-6 M8 6l-6 6 6 6" },
  { title: "NetShow", desc: "Presentasi dan showcase proyek dari asisten laboratorium.", icon: "M2 3h20v14H2z M8 21h8 M12 17v4" },
  { title: "NetTraining", desc: "Pelatihan praktikum jaringan komputer tingkat lanjut.", icon: "M12 2v20M2 12h20M5 5l14 14M19 5L5 19" },
  { title: "NetClass", desc: "Kelas online materi jaringan komputer dan komunikasi data.", icon: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" },
];

const learningMaterials = [
  { title: "NG-SDN", desc: "Apa Itu P4 Language dan Mengapa P4 Languange?", icon: "/assets/icon-ngsdn.svg" },
  { title: "Pemrograman Python", desc: "Membuat Website Sederhana dengan Django", icon: "/assets/icon-python.svg" },
  { title: "5G C-V2X", desc: "5G C-V2X 101", icon: "/assets/icon-ndn.svg" },
  { title: "Openstack", desc: "Instalasi Multi Node Openstack Ussuri dengan Kolla Ansible", icon: "/assets/icon-openstack.svg" },
  { title: "Docker & Kubernetes", desc: "Kubernetes Fundamental 101", icon: "/assets/icon-docker.svg" },
];

const faqStatic = [
  { q: "Apa saja program yang tersedia di Adaptive?", a: "Workshop, NetTraining, NetClass, dan program riset di bidang jaringan komputer." },
  { q: "Bagaimana cara mendaftar kegiatan?", a: "Pendaftaran dilakukan melalui website atau menghubungi contact person laboratorium." },
  { q: "Dimana lokasi laboratorium?", a: "Gedung TULT Ruang 13.13, Telkom University Bandung." },
  { q: "Kapan pelaksanaan praktikum?", a: "Jadwal praktikum menyesuaikan kalender akademik Telkom University." },
];

function ChevronIcon({ open }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      className={`text-primary transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function HomePage() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    let alive = true;
    apiFetch("/v1/landing-page/homepage")
      .then((r) => alive && setData(r.data))
      .catch((e) => alive && setErr(e instanceof ApiError ? `${e.status}` : "Gagal ambil data"))
      .finally(() => alive && setLoading(false));
    return () => { alive = false; };
  }, []);

  const faqItems = data?.faq?.length ? data.faq.map(f => ({ q: f.judul, a: f.isi })) : faqStatic;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header variant="light" />

      <main className="flex-1">
        <section className="home-hero relative isolate flex min-h-svh flex-col overflow-hidden bg-navy px-6 py-8 text-white md:px-12 md:py-10">
          <div aria-hidden="true" className="hero-image-photo absolute inset-0 z-0 overflow-hidden">
            <img
              src="/assets/team-photo-1.jpg"
              alt=""
              className="hero-image-cover absolute inset-0 h-full w-full object-cover object-[center_30%] grayscale md:object-[center_20%]"
            />
            <div className="hero-image-overlay absolute inset-0" />
          </div>
          <div aria-hidden="true" className="hero-image-seam pointer-events-none absolute inset-y-0 left-[16%] z-[1] hidden w-[44%] md:block" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-[linear-gradient(180deg,transparent_0%,rgba(16,24,39,0.18)_25%,rgba(16,24,39,0.58)_58%,rgba(16,24,39,0.9)_82%,#101827_100%)] md:h-56"
          />

          <div className="relative z-[3] mx-auto flex min-h-0 w-full max-w-[1440px] flex-1 flex-col">
            <div className="home-hero-meta flex items-center justify-between border-b border-white/20 pb-3 font-mono text-[0.62rem] tracking-[0.15em] text-white/60">
              <span>ADAPTIVE NETWORK LABORATORY / TELKOM UNIVERSITY</span>
              <span className="hidden sm:block">BANDUNG, INDONESIA</span>
            </div>

            <div className="grid flex-1 grid-cols-[minmax(0,1fr)] items-end gap-7 py-8 md:grid-cols-[1.12fr_0.88fr] md:gap-12 md:py-12">
              <div className="home-hero-copy relative z-10 min-w-0 md:col-start-1">
                <div className="relative z-10">
                  <p className="editorial-label mb-5">Research / Learning / Network</p>
                  <h1 className="home-hero-title max-w-[11ch] text-[clamp(3.75rem,9.3vw,8.375rem)] leading-[0.82] tracking-[-0.04em] max-md:w-full max-md:max-w-full max-md:!text-[clamp(2.375rem,11.5vw,3.75rem)] max-md:!tracking-[-0.06em]">
                    Adaptive
                    <br />
                    Network
                    <br />
                    Laboratory
                  </h1>
                </div>
              </div>
            </div>

            <div className="home-hero-meta flex items-end justify-between border-t border-white/20 pt-3 font-mono text-[0.58rem] tracking-[0.14em] text-white/50">
              <span>CORE NETWORK / DATA COMMUNICATION</span>
              <span>EST. TELKOM UNIVERSITY</span>
            </div>
          </div>

          <img
            src="/assets/axl.png"
            alt="Logo Telkom University"
            className="pointer-events-none absolute right-6 top-14 z-10 hidden w-20 md:right-12 md:top-10 md:block md:w-24"
          />
        </section>

        <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-navy px-6 py-5 text-white md:px-12 md:py-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 -z-10 h-[min(75vw,52rem)] w-[min(75vw,52rem)] border border-white/5" />
          <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-white/20 pb-3 font-mono text-[0.62rem] tracking-[0.15em] text-white/50">
              <span>ADAPTIVE NETWORK LABORATORY / VALUES</span>
              <span className="hidden sm:block">01 — THE FOUNDATION</span>
            </div>

            <div className="grid flex-1 items-center gap-5 py-5 md:gap-10 md:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div className="max-w-xl">
                <p className="editorial-label mb-3 md:mb-5">The way we work</p>
                <h2 className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.78] tracking-[-0.1em] text-white">
                  Our
                  <br />
                  <span className="text-[#2196F3]">Values</span>
                </h2>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-white/60 md:mt-8 md:text-lg">
                  Kami berkomitmen untuk menerapkan nilai-nilai ini dalam setiap pekerjaan.
                </p>
              </div>

              <div className="border-t border-white/20">
                {ourValues.map((value, index) => (
                  <article
                    key={value.title}
                    className="grid grid-cols-[2.5rem_1fr] items-start gap-4 border-b border-white/20 py-3 md:grid-cols-[3.5rem_1fr] md:gap-6 md:py-7"
                  >
                    <span className="pt-1 font-mono text-xs tracking-[0.12em] text-primary">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl uppercase leading-none tracking-[-0.04em] text-white md:text-4xl">
                        {value.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/55 md:mt-3 md:text-base">
                        {value.desc}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="flex items-end justify-between border-t border-white/20 pt-3 font-mono text-[0.58rem] tracking-[0.14em] text-white/50">
              <span>DEDICATION / TEAMWORK / LEARNING</span>
              <span>ADAPTIVE NETWORK LABORATORY</span>
            </div>
          </div>
        </section>

        <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#E3F2FD] px-5 py-4 text-black md:px-12 md:py-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 -z-10 h-[min(70vw,48rem)] w-[min(70vw,48rem)] rounded-full border border-black/10" />
          <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-black/20 pb-3 font-mono text-[0.58rem] tracking-[0.15em] text-black/75 md:text-[0.62rem]">
              <span>ADAPTIVE NETWORK LABORATORY / PROGRAMS</span>
              <span className="hidden sm:block">LEARN / BUILD / SHARE</span>
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="flex flex-col items-stretch justify-between gap-3 border-b border-[#0D47A1]/25 py-3 sm:flex-row sm:items-center sm:gap-8 md:py-4">
                <div>
                  <h2 className="font-display text-[clamp(5rem,18vw,7rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.07em] text-black sm:text-6xl sm:leading-none md:text-[8rem]">Event</h2>
                </div>
                <p className="max-w-[85%] self-end text-right text-[0.58rem] leading-relaxed text-black/75 sm:max-w-xs sm:text-xs md:max-w-md md:text-sm">
                  Berbagai program dan kegiatan untuk mengembangkan keterampilan mahasiswa di bidang jaringan komputer.
                </p>
              </div>

              <div>
                {ourEvents.map((e, i) => (
                  <Link
                    key={e.title}
                    href={e.link || "/activity"}
                    aria-label={`Pelajari program ${e.title}`}
                    className="group grid grid-cols-[3.25rem_minmax(0,1fr)_2rem] items-center gap-3 border-b border-[#0D47A1]/25 py-3 transition-colors hover:bg-[#90CAF9]/25 sm:grid-cols-[5rem_minmax(0,1fr)_2.5rem] sm:gap-5 sm:py-3.5 md:grid-cols-[minmax(12rem,0.8fr)_minmax(0,1.4fr)_3rem] md:gap-8 md:py-4"
                  >
                    <span className="font-display text-4xl font-extrabold leading-none tracking-[-0.08em] text-[#0D47A1] sm:text-5xl md:text-6xl">
                      0{i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-extrabold uppercase leading-tight tracking-[-0.04em] text-black sm:text-base md:text-xl">{e.title}</span>
                      <span className="mt-1 block text-[0.62rem] leading-snug text-black/70 sm:text-xs md:mt-1.5 md:text-sm">{e.desc}</span>
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0D47A1]/35 text-lg text-[#0D47A1] transition-colors group-hover:border-[#0D47A1] group-hover:bg-[#0D47A1] group-hover:text-white sm:h-9 sm:w-9">
                      <span aria-hidden>↘</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-end justify-between border-t border-black/20 pt-3 font-mono text-[0.55rem] tracking-[0.14em] text-black/75">
              <span>NETWORKING / RESEARCH / PEOPLE</span>
              <span>ADAPTIVE NETWORK LABORATORY</span>
            </div>
          </div>
        </section>

        {/* Video Profile — YouTube embed klik-to-play */}
        <VideoProfile />

        <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0D47A1] px-5 py-5 text-white md:px-12 md:py-10">
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 -left-36 -z-10 h-[min(70vw,48rem)] w-[min(70vw,48rem)] rounded-full border border-white/10" />
          <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-white/25 pb-3 font-mono text-[0.58rem] tracking-[0.15em] text-white/75 md:text-[0.62rem]">
              <span>ADAPTIVE NETWORK LABORATORY / KNOWLEDGE</span>
              <span className="hidden sm:block">READ / PRACTICE / RESEARCH</span>
            </div>

            <div className="grid flex-1 grid-cols-1 items-center gap-4 py-3 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:py-8">
              <div className="max-w-lg">
                <p className="editorial-label mb-2 !text-[#90CAF9] md:mb-4">Explore the knowledge base</p>
                <h2 className="font-display text-[clamp(2.75rem,6vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.075em] text-white">
                  Learning
                  <br />
                  <span className="text-black">Materials</span>
                </h2>
                <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/75 sm:text-sm md:mt-6 md:text-base">
                  Temukan topik bacaan dan materi belajar seputar jaringan komputer, pemrograman, dan teknologi terkini.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                {learningMaterials.map((m, index) => (
                  <Link
                    key={m.title}
                    href="/research"
                    className={`group relative flex min-h-[82px] items-center gap-3 overflow-hidden rounded-md border border-white/20 bg-white/[0.06] p-3 transition-colors hover:bg-white/15 sm:min-h-[94px] sm:gap-4 sm:p-4 md:min-h-[112px] md:p-5 ${index === 0 ? "sm:col-span-2" : ""}`}
                  >
                    <span className="absolute inset-y-0 left-0 w-1 bg-[#90CAF9] transition-all group-hover:w-1.5" />
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white p-2 sm:h-12 sm:w-12">
                      <img src={m.icon} alt="" width={48} height={48} className="h-full w-full object-contain" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="mb-1 block font-mono text-[0.52rem] tracking-[0.12em] text-[#90CAF9]">TOPIC / 0{index + 1}</span>
                      <span className="block font-display text-xs font-extrabold uppercase leading-tight tracking-[-0.035em] text-white sm:text-sm md:text-base">{m.title}</span>
                      <span className="mt-1 block text-[0.62rem] leading-snug text-white/65 sm:text-xs">{m.desc}</span>
                    </span>
                    <span className="ml-auto shrink-0 text-lg text-white/60 transition-transform group-hover:translate-x-1 group-hover:text-white" aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-end justify-between border-t border-white/25 pt-3 font-mono text-[0.55rem] tracking-[0.14em] text-white/70">
              <span>LEARNING / NETWORK / TECHNOLOGY</span>
              <span>ADAPTIVE NETWORK LABORATORY</span>
            </div>
          </div>
        </section>

        {/* Kegiatan (from BE) */}
        {loading && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 pb-8">
            <p className="text-text-secondary text-sm">Memuat kegiatan…</p>
          </section>
        )}
        {data && data.kegiatan?.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-2">Kegiatan</h2>
            <p className="text-text-secondary mb-10">Adaptive Network Laboratory</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.kegiatan.map((k) => (
                <a key={k.uid} href={k.hyperlink} target="_blank" rel="noreferrer"
                   className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow block">
                  <h3 className="text-lg font-bold text-text-primary mb-2">{k.judul}</h3>
                  <p className="text-text-secondary text-sm">{k.descSingkat}</p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Article (from BE) */}
        {data && data.article?.length > 0 && (
          <section className="bg-surface py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <h2 className="text-3xl font-bold text-text-primary mb-2">Artikel</h2>
              <p className="text-text-secondary mb-10">Adaptive Network Laboratory</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.article.map((a, i) => (
                  <a key={i} href={a.hyperlink} target="_blank" rel="noreferrer"
                     className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow block">
                    <h3 className="text-lg font-bold text-text-primary mb-2">{a.judul}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{a.caption}{a.caption.length >= 100 ? "…" : ""}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="relative isolate min-h-[200svh] overflow-hidden bg-navy px-6 text-white md:px-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-1/4 -z-10 h-[min(75vw,54rem)] w-[min(75vw,54rem)] -translate-y-1/2 rounded-full border border-white/5" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-32 -z-10 h-[min(70vw,48rem)] w-[min(70vw,48rem)] rounded-full border border-white/5" />

          <div className="absolute inset-x-6 top-6 z-10 mx-auto flex max-w-[1440px] items-center justify-between border-b border-white/20 pb-3 font-mono text-[0.58rem] tracking-[0.15em] text-white/55 md:inset-x-12 md:top-10 md:text-[0.62rem]">
            <span>ADAPTIVE NETWORK LABORATORY / WELCOME</span>
            <span className="hidden sm:block">TELKOM UNIVERSITY / BANDUNG</span>
          </div>

          <div className="mx-auto w-full max-w-[1440px]">
            <div className="grid min-h-svh items-center gap-6 pb-16 pt-24 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:pb-20 md:pt-32">
              <div className="mx-auto shrink-0 md:mx-0">
                <img
                  src="/assets/avatar-1.png"
                  alt="Dr. Sofia Naning Hertiana"
                  className="w-44 sm:w-56 md:w-[min(32vw,28rem)]"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="editorial-label mb-4 md:mb-6">Sambutan Pembina / 01</p>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="#2196F3" opacity="0.8" className="mx-auto mb-4 md:mx-0 md:mb-6" aria-hidden="true">
                  <path d="M3 21c3 0 7-1 7-8V5H4v6h4c0 4-2 5-5 5v5zm10 0c3 0 7-1 7-8V5h-6v6h4c0 4-2 5-5 5v5z" />
                </svg>
                <p className="mx-auto max-w-3xl font-display text-xl font-semibold leading-relaxed tracking-[-0.035em] text-white sm:text-2xl md:mx-0 md:text-4xl">
                  This laboratory gives students room to explore computer networking, from
                  hands-on practice to research that makes a meaningful impact.
                </p>
                <p className="mt-5 font-display text-base font-extrabold text-[#90CAF9] sm:text-lg md:mt-8 md:text-xl">Dr. Sofia Naning Hertiana, S.T., M.T.</p>
              </div>
            </div>

            <div className="grid min-h-svh items-center gap-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pb-24 md:pt-20">
              <div className="order-2 text-center md:order-1 md:text-left">
                <p className="editorial-label mb-4 md:mb-6">Sambutan Pembina / 02</p>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="#2196F3" opacity="0.8" className="mx-auto mb-4 md:mx-0 md:mb-6" aria-hidden="true">
                  <path d="M3 21c3 0 7-1 7-8V5H4v6h4c0 4-2 5-5 5v5zm10 0c3 0 7-1 7-8V5h-6v6h4c0 4-2 5-5 5v5z" />
                </svg>
                <p className="mx-auto max-w-3xl font-display text-xl font-semibold leading-relaxed tracking-[-0.035em] text-white sm:text-2xl md:mx-0 md:text-4xl">
                  Learn the basics, break the limits, and build something awesome. That’s what we do at Adaptive Network Laboratory.
                </p>
                <p className="mt-5 font-display text-base font-extrabold text-[#90CAF9] sm:text-lg md:mt-8 md:text-xl">Dr. Ridha Muldina Negara, S.T., M.T.</p>
              </div>
              <div className="order-1 mx-auto w-full max-w-[min(72vw,24rem)] overflow-hidden rounded-md border border-white/15 bg-white/5 md:order-2 md:max-w-[min(34vw,30rem)]">
                <img
                  src="/assets/dr-ridha-muldina-negara.png"
                  alt="Dr. Ridha Muldina Negara"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-6 bottom-6 z-10 mx-auto flex max-w-[1440px] items-end justify-between border-t border-white/20 pt-3 font-mono text-[0.55rem] tracking-[0.14em] text-white/50 md:inset-x-12 md:bottom-10">
            <span>LEARN / BUILD / CONTRIBUTE</span>
            <span>ADAPTIVE NETWORK LABORATORY</span>
          </div>
        </section>

        {/* FAQ + Contact sidebar */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <span className="text-primary text-sm font-medium block mb-2">Frequently Asked Questions</span>
              <h2 className="text-3xl font-bold text-text-primary mb-2">Adaptive Network Laboratory</h2>

              {err && (
                <p className="text-red-500 text-sm mb-4">
                  {err}. Backend /v1/landing-page/homepage tidak terjangkau — menampilkan FAQ statis.
                </p>
              )}
              <div className="space-y-3">
                {faqItems.map((f, i) => (
                  <div key={i} className="bg-white rounded-xl border border-border overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full px-5 py-4 flex justify-between items-center text-left font-medium text-text-primary"
                    >
                      {f.q}
                      <ChevronIcon open={openFaq === i} />
                    </button>
                    {openFaq === i && (
                      <p className="px-5 pb-4 text-text-secondary text-sm leading-relaxed">{f.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-2xl p-6 text-white sticky top-6">
                <h3 className="text-xl font-bold mb-2">Ada pertanyaan?</h3>
                <p className="text-gray-400 text-sm mb-4">Kirimkan pertanyaanmu lewat email.</p>
                <a
                  href="mailto:adaptivelab@telkomuniversity.ac.id"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark rounded-lg py-2.5 px-5 text-white font-medium transition-colors text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13 M22 2l-7 20-4-9-9-4z" />
                  </svg>
                  Kirim email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pembina (from BE) */}
        {data && data.pembina?.length > 0 && (
          <section className="bg-surface py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <h2 className="text-3xl font-bold text-text-primary mb-2">Pembina</h2>
              <p className="text-text-secondary mb-10">Adaptive Network Laboratory</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.pembina.map((p) => (
                  <div key={p.uid} className="bg-white rounded-2xl p-6 shadow-sm border border-border flex gap-4">
                    {p.imageUrl && (
                      <img src={p.imageUrl} alt={p.namaPembina}
                           className="w-20 h-20 rounded-full object-cover flex-shrink-0 border border-border" />
                    )}
                    <div>
                      <h3 className="text-lg font-bold text-text-primary">{p.namaPembina}</h3>
                      <p className="text-xs text-primary font-medium mb-2">{p.judul}</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{p.isi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

function VideoProfile() {
  const videoId = "xbQWlYBBHWQ";

  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0D47A1] px-5 py-5 text-white md:px-12 md:py-10">
      <img
        src="/assets/video-profile.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,24,54,0.42)_0%,rgba(7,24,54,0.58)_44%,rgba(7,24,54,0.9)_100%)] max-md:bg-[linear-gradient(180deg,rgba(7,24,54,0.9)_0%,rgba(7,24,54,0.72)_48%,rgba(7,24,54,0.52)_100%)]" />

      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
        <div className="flex flex-col items-end border-b border-white/30 pb-3 text-right font-mono text-[0.58rem] tracking-[0.15em] text-white/75 md:text-[0.62rem]">
          <span>ADAPTIVE NETWORK LABORATORY / FILM 01</span>
          <span className="mt-1">BANDUNG, INDONESIA</span>
        </div>

        <div className="flex flex-1 flex-col justify-between py-7 md:py-10">
          <div className="ml-auto max-w-4xl text-right">
            <p className="editorial-label mb-4 !text-[#90CAF9] md:mb-6">People / Research / Network</p>
            <h2 className="ml-auto max-w-[12ch] font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.84] tracking-[-0.075em] text-white">
              Video
              <br />
              Profile
            </h2>
            <p className="ml-auto mt-5 max-w-lg text-sm leading-relaxed text-white/85 md:mt-7 md:text-lg">
              Kenali Adaptive Network Laboratory, ruang untuk belajar, bertumbuh, dan mengeksplorasi teknologi jaringan.
            </p>
          </div>

          <a
            href={`https://youtu.be/${videoId}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Tonton video profile Adaptive Network Laboratory di YouTube"
            className="group mt-8 inline-flex w-fit items-center gap-4 rounded-md border border-white/70 bg-white/10 px-5 py-4 font-mono text-[0.62rem] tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0D47A1] md:mb-2 md:mt-0"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span>TONTON VIDEO <span aria-hidden>↗</span></span>
          </a>
        </div>

        <div className="flex items-end justify-between border-t border-white/30 pt-3 font-mono text-[0.55rem] tracking-[0.14em] text-white/70">
          <span>RESEARCH / LEARNING / NETWORK</span>
          <span>ADAPTIVE NETWORK LABORATORY</span>
        </div>
      </div>
    </section>
  );
}