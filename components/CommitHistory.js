"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitCommit, GitPullRequest } from 'lucide-react';

export default function CommitHistory() {
  // Generate mock data for the grid (53 weeks * 7 days)
  const days = Array.from({ length: 371 }, (_, i) => ({
    level: Math.floor(Math.random() * 5), // 0 to 4 intensity
    date: new Date(new Date().setDate(new Date().getDate() - (370 - i)))
  }));

  const levelColors = [
    'bg-slate-800/50',
    'bg-emerald-900/40',
    'bg-emerald-800/60',
    'bg-emerald-600/80',
    'bg-emerald-500',
  ];

  return (
    <section id="git" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Development Pulse</h2>
        <p className="text-muted-foreground">Monitoring the daily rhythm of code and contributions.</p>
      </div>

      <div className="glass p-8 rounded-3xl border border-white/5 overflow-x-auto">
        <div className="flex justify-between items-center mb-8 min-w-[800px]">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <GitCommit size={16} className="text-accent" />
              <span className="text-sm font-semibold">2,481 Commits</span>
            </div>
            <div className="flex items-center gap-2">
              <GitPullRequest size={16} className="text-purple-400" />
              <span className="text-sm font-semibold">142 Pull Requests</span>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch size={16} className="text-emerald-400" />
              <span className="text-sm font-semibold">12 Open Source</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground flex gap-1 items-center">
            Less <div className="flex gap-1 mx-1">{levelColors.map((c, i) => <div key={i} className={`w-3 h-3 rounded-sm ${c}`}></div>)}</div> More
          </div>
        </div>

        <div className="flex flex-col gap-1 min-w-[800px]">
          <div className="grid grid-flow-col grid-rows-7 gap-1">
            {days.map((day, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: (i % 50) * 0.005 }}
                className={`w-3 h-3 rounded-sm transition-colors hover:ring-2 ring-white/20 cursor-help ${levelColors[day.level]}`}
                title={`${day.date.toDateString()}: ${day.level * 2} contributions`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { title: "Consistent Growth", desc: "Maintained a 250+ day coding streak in 2025." },
          { title: "Open Source", desc: "Contributed to major frameworks including Next.js and Tailwind." },
          { title: "Quality First", desc: "Achieving 95% average test coverage across personal projects." }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="font-bold mb-2">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
