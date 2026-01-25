"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Briefcase, 
  PenTool, 
  Layout, 
  Github, 
  Instagram,
  Linkedin,
  Mail,
  Zap,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { clsx } from 'clsx';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: <Home size={20} /> },
    { name: 'Projects', href: '#projects', icon: <Layout size={20} /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={20} /> },
    { name: 'Stack', href: '#tech', icon: <Zap size={20} /> },
  ];

  const socialItems = [
    { name: 'GitHub', href: 'https://github.com/luthfialghz', icon: <Github size={20} /> },
    { name: 'Instagram', href: 'https://instagram.com/luthfiyell', icon: <Instagram size={20} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/luthfi-yafi', icon: <Linkedin size={20} /> },
    { name: 'Linktree', href: 'https://linktr.ee/luthfiyell', icon: <ExternalLink size={20} /> },
    { name: 'Contact', href: 'mailto:luthfialghz@gmail.com', icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* Mobile Nav Header */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b border-border bg-background/80 backdrop-blur-md z-50 flex items-center justify-between px-4 sm:px-6 transition-all duration-300">
        <Link href="/" className="flex items-center gap-3 overflow-hidden" onClick={() => setIsOpen(false)}>
           <div className="w-9 h-9 rounded-xl bg-black overflow-hidden flex items-center justify-center border border-border shadow-sm shrink-0">
            <Image src="/y2k-brand-logo-black.png" alt="Logo" width={28} height={28} className="object-cover" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-sm tracking-tight text-foreground truncate">
              Luthfi Yafi Alfiansyah
            </span>
            <span className="text-[10px] text-muted font-medium truncate">
              Associate Software Dev. Engineer
            </span>
          </div>
        </Link>
        <button 
          className="p-2 -mr-2 text-foreground/80 hover:text-foreground active:scale-95 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Sidebar (Desktop & Mobile Drawer) */}
      <aside className={clsx(
        "fixed left-0 top-0 h-screen w-64 flex flex-col border-r border-border bg-sidebar/95 backdrop-blur-xl p-8 z-40 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:z-0",
        isOpen ? "translate-x-0 pt-24" : "-translate-x-full lg:pt-8"
      )}>
        <div className="mb-12 px-2 flex flex-col gap-4 text-foreground">
          <div className="w-20 h-20 rounded-xl bg-black overflow-hidden flex items-center justify-center shadow-2xl border border-white/10 group">
            <Image src="/y2k-brand-logo-black.png" alt="LYA Y2K Logo" width={80} height={80} className="object-cover scale-125 transition-transform group-hover:scale-150 duration-500" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tighter leading-tight block">Luthfi Yafi Alfiansyah</span>
            <span className="font-medium text-sm text-muted block">Associate Software Development Engineer</span>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <div className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] px-4 mb-6">Navigation</div>
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "sidebar-link group",
                pathname === item.href && "active"
              )}
            >
              <span className="group-hover:text-accent transition-colors">{item.icon}</span>
              <span className="text-sm font-semibold">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-6">
          <div>
            <div className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] px-4 mb-4">Connect</div>
            <div className="space-y-1">
              {socialItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-link group"
                >
                  <span className="group-hover:text-accent transition-colors">{item.icon}</span>
                  <span className="text-sm font-semibold">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
      
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

