"use client";
import React, { useEffect, useState } from 'react';
import { GitCommit, GitPullRequest, ExternalLink, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

export default function GithubActivity({ username }) {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubActivity = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/events/public`);
        if (!response.ok) throw new Error('Failed to fetch activity');
        
        const data = await response.json();
        
        // Filter for relevant events
        const rawEvents = data.filter(event => ['PushEvent', 'CreateEvent', 'PullRequestEvent'].includes(event.type));
        
        // Group consecutive events for the same repo to avoid clutter
        const processed = [];
        let lastRepo = null;
        
        for (const event of rawEvents) {
          if (processed.length >= 5) break;
          
          const repoName = event.repo.name.split('/')[1];
          let message = '';
          
          if (event.type === 'PushEvent') {
            // Get the last commit message from the push
            const commits = event.payload.commits || [];
            message = commits[commits.length - 1]?.message || 'Pushed some code';
          } else if (event.type === 'CreateEvent') {
            message = `Created ${event.payload.ref_type} ${event.payload.ref || ''}`;
          } else if (event.type === 'PullRequestEvent') {
            message = `${event.payload.action} pull request: ${event.payload.pull_request?.title}`;
          }

          processed.push({
            id: event.id,
            type: event.type,
            repo: repoName,
            repoUrl: `https://github.com/${event.repo.name}`,
            message,
            time: new Date(event.created_at),
          });
        }

        setActivities(processed);
      } catch (err) {
        console.error('GitHub API error:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubActivity();
    // Refresh every 5 minutes
    const interval = setInterval(fetchGithubActivity, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [username]);

  return (
    <div className="bento-card p-8 lg:col-span-2 bg-card relative overflow-hidden group">
      {/* Background decoration */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all duration-700"></div>
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <h3 className="font-bold uppercase text-[10px] tracking-widest text-muted-foreground">Git History</h3>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[9px] font-bold text-green-500 uppercase tracking-tight">Live</span>
          </div>
        </div>
        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] font-bold text-accent px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-all flex items-center gap-1"
        >
          @{username} <ExternalLink size={10} />
        </a>
      </div>

      <div className="space-y-4 relative z-10">
        {isLoading && activities.length === 0 ? (
          Array(3).fill(0).map((_, i) => (
            <div key={i} className="flex gap-4 items-start animate-pulse">
              <div className="w-8 h-8 rounded-lg bg-muted/20 shrink-0"></div>
              <div className="space-y-2 flex-1 pt-1">
                <div className="h-3 bg-muted/20 rounded w-1/4"></div>
                <div className="h-4 bg-muted/20 rounded w-full"></div>
              </div>
            </div>
          ))
        ) : error ? (
          <div className="text-xs text-muted-foreground py-4 text-center border border-dashed border-border rounded-xl">
            Could not load activities. <br/> 
            <button onClick={() => window.location.reload()} className="text-accent hover:underline mt-2">Retry</button>
          </div>
        ) : activities.length > 0 ? (
          <AnimatePresence mode="popLayout">
            {activities.map((activity, index) => (
              <motion.div 
                key={activity.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start group/item"
              >
                <div className="mt-1 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 border border-accent/20 group-hover/item:bg-accent group-hover/item:text-white transition-all duration-300">
                  {activity.type === 'PushEvent' ? <GitCommit size={16} /> : 
                   activity.type === 'PullRequestEvent' ? <GitPullRequest size={16} /> : 
                   <Sparkles size={16} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[11px] font-bold text-accent truncate">{activity.repo}</span>
                    <span className="text-[10px] text-muted-foreground">•</span>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                      {formatDistanceToNow(activity.time)} ago
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground/80 line-clamp-1 group-hover/item:text-foreground transition-colors leading-snug">
                    {activity.message}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <p className="text-xs text-muted-foreground py-4 text-center">No recent public activity found.</p>
        )}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
        <p className="text-[10px] text-muted-foreground flex items-center gap-2 italic">
          <Clock size={10} className="text-accent" /> Showing real-time public activity from GitHub
        </p>
      </div>
    </div>
  );
}
