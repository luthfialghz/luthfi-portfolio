"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Layout, 
  Layers, 
  Cpu, 
  Globe, 
  Terminal,
  FileJson,
  Braces
} from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: <Layout />, tools: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'] },
  { name: 'Backend', icon: <Database />, tools: ['Node.js', 'Express', 'Prisma', 'PostgreSQL'] },
  { name: 'Languages', icon: <Braces />, tools: ['JavaScript', 'TypeScript', 'Python', 'Go'] },
  { name: 'DevOps', icon: <Layers />, tools: ['Docker', 'AWS', 'Vercel', 'Github Actions'] },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech Ecosystem</h2>
        <p className="text-muted-foreground">The tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl glass border border-white/5"
          >
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
              {React.cloneElement(skill.icon, { size: 24 })}
            </div>
            <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.tools.map((tool, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-muted-foreground">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
