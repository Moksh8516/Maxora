"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  ArrowLeft,
  Search,
  AlertTriangle,
  Navigation,
  Compass,
  Sparkles,
  Rocket,
  Satellite,
  Zap,
  RefreshCw,
  ChevronRight,
} from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  type Star = {
    id: number;
    x: number;
    y: number;
    delay: number;
    size: number;
  };
  const [searchQuery, setSearchQuery] = useState("");
  // Create floating stars
  const [stars] = useState<Star[]>(() => {
    const starCount = 50;
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      size: Math.random() * 4 + 1,
    }));
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const quickLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Zap },
    { name: "Contact", href: "/contact", icon: Navigation },
    { name: "Blog", href: "/blog", icon: Compass },
  ];

  return (
    <div className="min-h-screen pt-24 flex flex-col items-center justify-center relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-blue-400/20 dark:bg-blue-300/50"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: star.delay,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated 404 Number */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="relative inline-block">
            <motion.h1
              className="text-[180px] md:text-[240px] font-black leading-none tracking-tighter"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                404
              </span>
            </motion.h1>

            {/* Animated Error Icon */}
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="p-4 rounded-full bg-linear-to-br from-red-500 to-orange-500 shadow-xl">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Floating Particles */}
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Page Not Found
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lost in Digital Space
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The page you&apos;re looking for seems to have drifted into the
            void. Let&apos;s help you navigate back to familiar territory.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/">
            <motion.div
              className="group px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              <motion.div
                animate={{ rotate: hovered ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home className="w-5 h-5" />
              </motion.div>
              Go Home
              <motion.div
                animate={{ x: hovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Quick Links Grid */}
        <motion.div
          className="mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-6 flex items-center justify-center gap-2">
            <Navigation className="w-5 h-5" />
            Quick Navigation
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={link.href}>
                    <div className="group p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl transition-all">
                      <div className="flex flex-col items-center text-center">
                        <motion.div
                          className="p-3 rounded-full bg-linear-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 mb-3 group-hover:scale-110 transition-transform"
                          whileHover={{ rotate: 10 }}
                        >
                          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                        <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {link.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="relative h-32">
          <motion.div
            className="absolute top-0 left-1/4"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Satellite className="w-8 h-8 text-blue-400/50" />
          </motion.div>

          <motion.div
            className="absolute top-0 right-1/4"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <Rocket className="w-8 h-8 text-purple-400/50" />
          </motion.div>
        </div>
      </div>

      {/* Animated Bottom Gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </motion.div>
    </div>
  );
}
