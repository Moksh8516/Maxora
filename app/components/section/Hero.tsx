  // components/sections/Hero.tsx
  "use client";

  import { useState, useEffect } from "react";
  import Link from "next/link";
  import { ArrowRight, Play, Shield, Zap, Globe, Code } from "lucide-react";
  import { Typewriter } from "react-simple-typewriter";

  interface Feature {
    icon: React.ElementType;
    label: string;
  }

  interface Stat {
    value: string;
    label: string;
  }

  export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const features: Feature[] = [
      { icon: Shield, label: "Enterprise Security" },
      { icon: Zap, label: "High Performance" },
      { icon: Globe, label: "Global Support" },
      { icon: Code, label: "Clean Code" },
    ];

    const stats: Stat[] = [
      { value: "99.9%", label: "Uptime" },
      { value: "<24h", label: "Response Time" },
      { value: "A+", label: "Security" },
      { value: "∞", label: "Scalability" },
    ];

    return (
      <section className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
        {/* Mouse gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 80%)`,
          }}
        />

        {/* Floating blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div className="text-center pt-2 lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-glow" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Trusted by Fortune 500 Companies
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6">
                <span className="block text-[color:var(--text-main)]">
                  Premium
                </span>

                <span className="block mt-2 gradient-text">
                  <Typewriter
                    words={[
                      "IT Solutions",
                      "Digital Innovation",
                      "Tech Excellence",
                      "Business Growth",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-muted mb-10 max-w-2xl leading-relaxed">
                Maxora Technology delivers enterprise-grade digital solutions that
                drive innovation, scalability, and measurable business growth. We
                transform complex challenges into seamless technological
                experiences.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/Contact"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover-lift shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight
                    className="ml-3 group-hover:translate-x-2 transition-transform"
                    size={20}
                  />
                </Link>

                <button className="group inline-flex items-center justify-center glass-effect px-8 py-4 rounded-xl font-semibold text-lg hover-lift">
                  <Play
                    className="mr-3 text-blue-600 dark:text-blue-400"
                    size={20}
                  />
                  Watch Showcase
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-[color:var(--text-main)]">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="relative mx-auto lg:mx-0 max-w-lg">
                <div className="glass-effect rounded-3xl p-8 shadow-2xl hover-lift">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Code Card — keep dark always for contrast */}
                    <div className="col-span-2 bg-slate-900 rounded-xl p-4">
                      <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>

                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex gap-3">
                          <span className="text-blue-400">const</span>
                          <span className="text-green-400">maxoraTech</span>
                          <span className="text-white">=</span>
                          <span className="text-yellow-400">{"{"}</span>
                        </div>
                        <div className="ml-6 text-cyan-300">
                          innovation: <span className="text-green-400">true</span>
                          ,
                        </div>
                        <div className="ml-6 text-cyan-300">
                          quality:{" "}
                          <span className="text-green-400">enterprise</span>,
                        </div>
                        <div className="ml-6 text-cyan-300">
                          results:{" "}
                          <span className="text-green-400">guaranteed</span>
                        </div>
                        <div className="text-yellow-400">{"}"}</div>
                      </div>
                    </div>

                    {/* Stats */}
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-4 rounded-xl glass-effect"
                      >
                        <div className="text-2xl font-bold gradient-text">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl rotate-12 animate-float" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl -rotate-12 animate-float-delayed" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-theme rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>
    );
  }
