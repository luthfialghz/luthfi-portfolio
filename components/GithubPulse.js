"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

import { Clock } from 'lucide-react';

export default function GithubPulse({ username }) {
  const theme = {
    light: ['#f0f0f0', '#ccebee', '#99d7dd', '#66c3cc', '#33afbb'],
    dark: ['#1a1a1a', '#004d40', '#00695c', '#00796b', '#249E94'],
  };

  return (
    <div className="bento-card p-8 lg:col-span-2 bg-card">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold uppercase text-[10px] tracking-widest text-muted-foreground">GitHub Pulse</h3>
        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] font-bold text-accent px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors"
        >
          @{username}
        </a>
      </div>
      
      <div className="flex justify-center overflow-x-auto pb-2 scrollbar-hide min-h-[160px]">
        <GitHubCalendar 
          username={username}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          theme={theme}
          hideColorLegend
          hideTotalCount
          loading={<div className="animate-pulse bg-muted/10 w-full h-full rounded-lg"></div>}
        />
      </div>
      
      <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
        <Clock size={12} className="text-accent" /> Real-time contribution data fetched directly from GitHub.
      </p>
    </div>
  );
}
