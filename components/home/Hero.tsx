"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

interface ServiceCardData {
  title: string;
  desc: string;
  svgPath: React.ReactNode;
}

const SERVICES: ServiceCardData[] = [
  {
    title: "Web Development",
    desc: "Fast, SEO-ready websites built on Next.js and React.",
    svgPath: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
  },
  {
    title: "Mobile Apps",
    desc: "iOS and Android apps in React Native and Flutter.",
    svgPath: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    title: "AI and Automation",
    desc: "AI agents and workflows that take repeat work off your team.",
    svgPath: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
      </>
    ),
  },
  {
    title: "eCommerce",
    desc: "Shopify and WooCommerce stores with UPI and Razorpay.",
    svgPath: (
      <>
        <path d="M3 4h2l2 11h10l2-8H7" />
        <circle cx="9" cy="19" r="1.2" />
        <circle cx="17" cy="19" r="1.2" />
      </>
    ),
  },
  {
    title: "CRM and ERP",
    desc: "Custom CRM and ERP systems built around how you work.",
    svgPath: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="M8 7l3 9M16 7l-3 9M8.5 6h7" />
      </>
    ),
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(true);

  const trackRef = useRef<HTMLElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const snapsRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(0);

  // Cached layout metrics to prevent layout thrashing inside scroll loop
  const metricsRef = useRef({
    w: 800,
    h: 600,
    trackTop: 0,
    dist: 1000,
  });

  const cacheDimensions = useCallback(() => {
    if (!visualRef.current || !trackRef.current) return;
    const w = visualRef.current.offsetWidth;
    const h = visualRef.current.offsetHeight;
    const rect = trackRef.current.getBoundingClientRect();
    const trackTop = rect.top + window.scrollY;
    const dist = Math.max(0, trackRef.current.offsetHeight - window.innerHeight);

    metricsRef.current = { w, h, trackTop, dist };

    // Update snap points on mobile
    if (snapsRef.current) {
      snapsRef.current.innerHTML = "";
      if (window.innerWidth <= 860) {
        for (let k = 0; k < SERVICES.length; k++) {
          const m = document.createElement("i");
          m.style.top = `${Math.round((dist * k) / (SERVICES.length - 1))}px`;
          snapsRef.current.appendChild(m);
        }
      }
    }
  }, []);

  // Primary scene render function - computes orbit math and writes transforms directly
  const renderScene = useCallback((p: number) => {
    if (!trackRef.current) return;

    const t = Math.min(1, p / 0.7);
    const e = 1 - Math.pow(1 - t, 3);

    trackRef.current.style.setProperty("--p", p.toFixed(3));
    trackRef.current.style.setProperty("--e", e.toFixed(3));

    const { w, h } = metricsRef.current;
    const small = w < 600;
    const rx = w * (small ? 0.40 : 0.43);
    const ry = h * (small ? 0.075 : 0.115);
    const n = SERVICES.length;
    const spin = p * (n - 1) * ((Math.PI * 2) / n);

    let best = -2;
    let bi = 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const a = (i / n) * Math.PI * 2 + Math.PI / 2 - spin;
      const s = Math.sin(a);
      const d = (s + 1) / 2;
      const x = Math.cos(a) * rx * (0.35 + 0.65 * e);
      const y = s * ry * (0.4 + 0.6 * e) - ry * 0.4 * (1 - e);
      const sc = (0.7 + 0.4 * d) * (0.8 + 0.2 * e);

      card.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${sc.toFixed(3)})`;
      card.style.opacity = (0.35 + 0.65 * d).toFixed(2);
      card.style.zIndex = d < 0.55 ? "2" : "8";

      if (d > best) {
        best = d;
        bi = i;
      }
    });

    if (bi !== activeIndexRef.current) {
      activeIndexRef.current = bi;
      setActiveIndex(bi);
    }
  }, []);

  // Smooth scroll to step k
  const goToStep = useCallback((k: number) => {
    cacheDimensions();
    const { trackTop, dist } = metricsRef.current;
    const targetY = trackTop + (dist * k) / (SERVICES.length - 1);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: targetY,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [cacheDimensions]);

  // Skip intro click handler
  const handleSkipIntro = useCallback(() => {
    const afterSection = document.getElementById("after");
    if (afterSection) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      afterSection.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    }
  }, []);

  useEffect(() => {
    // Check reduced motion & Save-Data
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData;

    if (reduceMotion || saveData) {
      renderScene(1);
      return;
    }

    cacheDimensions();

    // IntersectionObserver to pause expensive work when off-screen and control will-change
    let observer: IntersectionObserver | null = null;
    if (trackRef.current && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setInView(entry.isIntersecting);
          });
        },
        { rootMargin: "200px 0px" }
      );
      observer.observe(trackRef.current);
    }

    // Enable mobile snap proximity class
    if (window.innerWidth <= 860) {
      document.documentElement.classList.add("hero-snap-active");
    }

    let isCleanedUp = false;
    // Dynamic import of GSAP and ScrollTrigger
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (isCleanedUp || !trackRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        // Sync with existing Lenis instance if available
        const winLenis = (window as unknown as { __lenis?: { on: (e: string, fn: () => void) => void; raf: (t: number) => void } }).__lenis;
        if (winLenis) {
          winLenis.on("scroll", ScrollTrigger.update);
          gsap.ticker.add((time: number) => winLenis.raf(time * 1000));
          gsap.ticker.lagSmoothing(0);
        }

        const mm = gsap.matchMedia();

        // Desktop ScrollTrigger (Continuous scrub)
        mm.add("(min-width: 861px)", () => {
          const trigger = ScrollTrigger.create({
            trigger: trackRef.current,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
              renderScene(self.progress);
            },
            onRefresh: () => {
              cacheDimensions();
            },
          });
          return () => {
            trigger.kill();
          };
        });

        // Mobile ScrollTrigger (Index-based tweening)
        mm.add("(max-width: 860px)", () => {
          const mobileProxy = { p: 0 };
          let currentK = -1;

          const trigger = ScrollTrigger.create({
            trigger: trackRef.current,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
              const p = self.progress;
              const k = Math.min(SERVICES.length - 1, Math.max(0, Math.round(p * (SERVICES.length - 1))));
              if (k !== currentK) {
                currentK = k;
                const targetP = k / (SERVICES.length - 1);
                gsap.to(mobileProxy, {
                  p: targetP,
                  duration: 0.9,
                  ease: "power3.out",
                  overwrite: true,
                  onUpdate: () => {
                    renderScene(mobileProxy.p);
                  },
                });
              }
            },
            onRefresh: () => {
              cacheDimensions();
            },
          });
          return () => {
            trigger.kill();
          };
        });

        // Initial render
        renderScene(0);

        // Store cleanup
        return () => {
          mm.revert();
        };
      }
    );

    const handleResize = () => {
      cacheDimensions();
      if (window.innerWidth <= 860) {
        document.documentElement.classList.add("hero-snap-active");
      } else {
        document.documentElement.classList.remove("hero-snap-active");
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleResize, { passive: true });

    return () => {
      isCleanedUp = true;
      if (observer) observer.disconnect();
      document.documentElement.classList.remove("hero-snap-active");
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [cacheDimensions, renderScene]);

  return (
    <section
      ref={trackRef}
      className={styles.track}
      id="track"
      aria-label="Maxora Technology Cinematic Hero"
    >
      {/* Mobile Scroll-Snap Points */}
      <div ref={snapsRef} className={styles.snaps} aria-hidden="true" />

      {/* Sticky Viewport Stage */}
      <div className={styles.stage} id="stage">
        {/* Background visual layers */}
        <div className={styles.bg} aria-hidden="true" />
        <div className={styles.stars} aria-hidden="true" />
        <div className={styles.horizon} aria-hidden="true" />

        {/* HUD Corner Brackets (Desktop only) */}
        <i className={`${styles.hud} ${styles.hudTopLeft}`} aria-hidden="true" />
        <i className={`${styles.hud} ${styles.hudTopRight}`} aria-hidden="true" />
        <i className={`${styles.hud} ${styles.hudBottomLeft}`} aria-hidden="true" />
        <i className={`${styles.hud} ${styles.hudBottomRight}`} aria-hidden="true" />

        {/* Mobile Skip Intro Button */}
        <button
          type="button"
          onClick={handleSkipIntro}
          className={styles.skip}
          aria-label="Skip hero animation to main content"
        >
          Skip intro ↓
        </button>

        {/* Left Column: Copy Block */}
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Turning ideas into digital reality</p>
          <h1 className={styles.title}>
            Your Growth
            <span className={styles.gradientPhrase}>Powered by Technology.</span>
          </h1>

          {/* Changing Service Descriptions (All 5 live in DOM for SEO/A11y) */}
          <div className={styles.swap} id="swap">
            {SERVICES.map((service, idx) => {
              const isActive = idx === activeIndex;
              return (
                <span
                  key={service.title}
                  className={`${styles.swapItem} ${isActive ? styles.swapItemActive : ""}`}
                  aria-hidden={!isActive}
                >
                  {service.desc}
                </span>
              );
            })}
          </div>

          {/* Call to Action Buttons */}
          <div className={styles.acts}>
            <Link href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
              <span>Start your project</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/Services" className={`${styles.btn} ${styles.btnGhost}`}>
              Explore services
            </Link>
          </div>

          {/* Three Grounded Proof Points */}
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <b className={styles.statValue}>2–4 wks</b>
              <span className={styles.statLabel}>Typical website build</span>
            </div>
            <div className={styles.statItem}>
              <b className={styles.statValue}>100%</b>
              <span className={styles.statLabel}>Code ownership</span>
            </div>
            <div className={styles.statItem}>
              <b className={styles.statValue}>Direct</b>
              <span className={styles.statLabel}>Engineer access</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Stage (Phoenix, Portal, Orbit Cards) */}
        <div
          ref={visualRef}
          className={`${styles.visual} ${inView ? styles.willChangeTransform : ""}`}
          id="visual"
          aria-hidden="true"
        >
          {/* Shattered Crystal Portal */}
          <Image
            src="/hero/portal.webp"
            alt=""
            width={640}
            height={640}
            className={styles.portal}
            sizes="(max-width: 860px) 430px, 640px"
          />

          {/* Radial Halo Glow */}
          <div className={styles.halo} />

          {/* Crystal Phoenix Centerpiece */}
          <Image
            src="/hero/phoenix2.webp"
            alt=""
            width={960}
            height={1440}
            priority
            className={styles.phx}
            sizes="(max-width: 860px) 480px, 960px"
          />

          {/* Glowing Platform Ring */}
          <div className={styles.ring} />

          {/* Mobile Active Service Caption Pill */}
          <div className={styles.cap} id="cap">
            {SERVICES[activeIndex]?.title}
          </div>

          {/* Orbiting Service Cards */}
          <div className={styles.orbit} id="orbit">
            {SERVICES.map((service, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={service.title}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  onClick={() => goToStep(idx)}
                  className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      goToStep(idx);
                    }
                  }}
                  aria-label={`Jump to ${service.title}`}
                >
                  <svg viewBox="0 0 24 24" className={styles.cardIcon}>
                    {service.svgPath}
                  </svg>
                  <b className={styles.cardTitle}>{service.title}</b>
                  <i className={styles.cardArrow} aria-hidden="true">→</i>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Bottom Technology Strip */}
        <div className={styles.tech} aria-hidden="true">
          <span>Built with</span>
          <em className={styles.techEm}>Next.js</em>
          <em className={styles.techEm}>React</em>
          <em className={styles.techEm}>Flutter</em>
          <em className={styles.techEm}>Node.js</em>
          <em className={styles.techEm}>PostgreSQL</em>
        </div>

        {/* Desktop Scroll Hint */}
        <div className={styles.hint} aria-hidden="true">
          <span>Scroll to explore</span>
          <i className={styles.hintLine} />
        </div>

        {/* Desktop Progress Dots */}
        <div className={styles.dots} aria-label="Service progress selector">
          {SERVICES.map((service, idx) => (
            <button
              key={service.title}
              type="button"
              onClick={() => goToStep(idx)}
              className={`${styles.dotBtn} ${idx === activeIndex ? styles.dotBtnActive : ""}`}
              aria-label={`Go to step ${idx + 1}: ${service.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
