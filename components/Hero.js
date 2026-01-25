"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-20 px-8 text-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-accent"
      >
        <Sparkles size={14} />
        <span>Associate Software Development Engineer</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
      >
        Building the <span className="gradient-text">Future</span> of <br /> Digital Experiences.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-2xl text-muted-foreground text-lg mb-10 leading-relaxed"
      >
        Hi, I'm a passionate developer specializing in building scalable web applications and intuitive user interfaces. I turn complex problems into elegant solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex gap-4"
      >
        <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
          View Projects <ArrowRight size={18} />
        </button>
        <button className="glass px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
          Github Profile
        </button>
      </motion.div>
    </section>
  );
}
