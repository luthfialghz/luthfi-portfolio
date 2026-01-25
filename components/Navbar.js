"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 glass"
    >
      <div className="text-2xl font-bold gradient-text">Portofolio.</div>
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        <Link href="#home" className="hover:text-accent transition-colors">Home</Link>
        <Link href="#tech" className="hover:text-accent transition-colors">Stack</Link>
        <Link href="#projects" className="hover:text-accent transition-colors">Projects</Link>
        <Link href="#git" className="hover:text-accent transition-colors">Activity</Link>
      </div>
      <button className="bg-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
        Get in touch
      </button>
    </motion.nav>
  );
}
