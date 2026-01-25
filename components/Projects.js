"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Project Highlights</h2>
          <p className="text-muted-foreground max-w-lg">A selection of my recent work, ranging from complex enterprise systems to experimental web applications.</p>
        </div>
        <button className="text-accent font-semibold flex items-center gap-2 hover:underline">
          View all projects <ExternalLink size={16} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col rounded-3xl overflow-hidden glass border border-white/5"
          >
            <Link href={`/projects/${project.slug}`} className="relative h-64 overflow-hidden block">
              <Image 
                src={project.frontmatter.image} 
                alt={project.frontmatter.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </Link>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-2xl font-bold hover:text-accent transition-colors">{project.frontmatter.title}</h3>
                </Link>
                <div className="flex gap-3">
                  <Github size={20} className="text-muted-foreground hover:text-white cursor-pointer" />
                  <ExternalLink size={20} className="text-muted-foreground hover:text-white cursor-pointer" />
                </div>
              </div>
              <p className="text-muted-foreground mb-6 line-clamp-2">
                {project.frontmatter.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.frontmatter.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-accent">#{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
