import { getAllProjects } from "@/lib/mdx";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowUpRight, 
  MapPin, 
  Clock, 
  Github, 
  Instagram, 
  Linkedin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  Gamepad2,
  LucideIcon
} from "lucide-react";

import GithubActivity from "@/components/GithubActivity";

export default function Home() {
  const projects = getAllProjects();
  const githubUsername = "luthfialghz"; // Change this to your actual GitHub username

  return (
    <div className="flex grainy min-h-screen">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 w-full p-6 pt-24 md:p-12 lg:p-20 transition-all duration-300">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          
          {/* Hero Section - Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="md:col-span-2 bento-card p-6 md:p-10 flex flex-col justify-end min-h-[400px] relative bg-gradient-to-br from-card to-background">
              <div className="absolute top-10 left-10">
                <div className="px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider inline-block text-accent">Based in Indonesia</div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none mb-6">
                Associate <br />
                <span className="text-muted-foreground">Software Development Engineer</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                Specializing in robust Full-Stack Web and Mobile Development. Delivering scalable enterprise solutions with Kotlin, React, and Next.js.
              </p>
            </section>
            
            <div className="space-y-6">
              <div className="bento-card p-6 md:p-8 flex flex-col items-center justify-center text-center bg-card">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-accent/20 p-1 shadow-inner">
                  <Image src="/profile.png" alt="Profile" width={80} height={80} className="rounded-full object-cover" />
                </div>
                <h2 className="font-bold text-xl tracking-tight">Luthfi Yafi Alfiansyah</h2>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1 justify-center">
                   <MapPin size={12} className="text-accent" /> Jakarta, Indonesia
                </p>
                <div className="flex gap-4 mt-6">
                  <a href="https://github.com/luthfialghz" target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                  </a>
                  <a href="https://instagram.com/luthfiyell" target="_blank" rel="noopener noreferrer">
                    <Instagram size={18} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/in/luthfi-yafi" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                  </a>
                  <a href="https://linktr.ee/luthfiyell" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                  </a>
                </div>
              </div>
              
              <div className="bento-card p-6 md:p-8 bg-card border-accent/20 min-w-0">
                <h3 className="text-muted font-bold text-[10px] mb-4 uppercase tracking-widest">Current Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['Kotlin', 'Java', 'JavaScript', 'React', 'HTML', 'CSS', 'Android', 'GitHub'].map(s => (
                    <span key={s} className="px-3 py-1 bg-accent/10 text-accent rounded-lg text-[10px] font-bold border border-accent/20 hover:bg-accent/20 transition-all cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Now / Activity Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bento-card p-8 min-w-0">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <h3 className="font-bold uppercase text-[10px] tracking-widest text-muted-foreground">Now</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed font-medium">
                <strong className="text-foreground font-bold">Associate Software Developer Engineer at PT NTT Indonesia</strong> with a Bachelor’s degree in Computer Engineering and a specialized focus on mobile and web development, I bring a unique professional trajectory transitioning from managing client service desks to building scalable software solutions. This background provides me with a comprehensive understanding of the full software lifecycle, from user troubleshooting and service level management to backend implementation.
              </p>
            </div>
            
            <GithubActivity username={githubUsername} />
          </div>

          {/* Experience Section */}
          <section id="experience" className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={20} className="text-accent" />
              <h2 className="text-2xl font-bold tracking-tight">Professional Experience</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {/* Experience 1 */}
              <div className="bento-card p-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-xl font-bold">Associate Software Developer Engineer</h3>
                    <p className="text-muted-foreground font-medium text-lg">PT NTT Indonesia</p>
                  </div>
                  <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-bold whitespace-nowrap border border-accent/20">
                    June 2025 – Present
                  </span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-muted-foreground text-sm">
                  <li className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                    <span><strong className="text-foreground">Full-Stack Development:</strong> Architecting and implementing clean, maintainable code using a diverse stack including Kotlin, React, Java, and JavaScript for both Web and Mobile platforms.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                    <span><strong className="text-foreground">Agile Collaboration:</strong> Partnering with cross-functional teams (UI/UX, Product Managers, and Senior Engineers) to translate complex requirements into technical specifications and high-performing software.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                    <span><strong className="text-foreground">Quality Assurance:</strong> Actively identifying and resolving software defects while assisting in the execution of unit and integration tests to ensure production stability.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                    <span><strong className="text-foreground">Technical Documentation:</strong> Maintaining rigorous standards for API documentation and design specifications to facilitate knowledge sharing and system scalability.</span>
                  </li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div className="bento-card p-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-xl font-bold">Managed Services Client Service Desk Administrator</h3>
                    <p className="text-muted-foreground font-medium text-lg">PT NTT Indonesia</p>
                  </div>
                  <span className="px-4 py-1.5 bg-muted/20 text-muted-foreground rounded-full text-xs font-bold whitespace-nowrap border border-border">
                    June 2024 – June 2025
                  </span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-muted-foreground text-sm">
                  <li className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0"></div>
                    <span><strong className="text-foreground">Incident Management:</strong> Diagnosed and resolved complex client requests across the product portfolio, consistently meeting or exceeding strict Service Level Agreements (SLAs).</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0"></div>
                    <span><strong className="text-foreground">Process Improvement:</strong> Proactively identified operational gaps and recommended optimizations that enhanced team efficiency and client satisfaction.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0"></div>
                    <span><strong className="text-foreground">Knowledge Leadership:</strong> Authored technical knowledge base articles for recurring issues, reducing resolution times and empowering the team with standardized SOPs.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0"></div>
                    <span><strong className="text-foreground">Analytics & Reporting:</strong> Generated and analyzed ticket aging reports to identify bottleneck areas, improving overall service desk performance.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={20} className="text-accent" />
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
            </div>
            <div className="bento-card p-8 bg-card border-accent/10">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-xl font-bold">Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka</h3>
                    <p className="text-muted-foreground font-medium text-lg mt-1">Android Learning Path</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="px-4 py-1.5 bg-muted/20 text-muted-foreground rounded-full text-xs font-bold whitespace-nowrap border border-border">
                      Feb 2022 - Jul 2022
                    </span>
                  </div>
              </div>
              <div className="bg-accent/5 rounded-xl p-6 border border-accent/10">
                  <div className="flex items-center gap-2 mb-3 text-accent font-bold text-sm uppercase tracking-wider">
                    <Award size={16} /> Graduate with Distinction
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                      Bangkit Academy Graduate (Distinction), skilled in Kotlin, React, and Java, with a proven track record of collaborating in agile environments to deliver high-quality technical solutions.
                  </p>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Trophy size={20} className="text-accent" />
              <h2 className="text-2xl font-bold tracking-tight">Achievements & Extra-curriculars</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bento-card p-8 md:col-span-1 bg-gradient-to-br from-accent/5 to-transparent border-accent/10">
                 <div className="mb-4 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Gamepad2 size={20} />
                 </div>
                 <h3 className="font-bold text-lg mb-3">Esports Leadership</h3>
                 <p className="text-sm text-foreground/80 leading-relaxed">
                    My background as a professional esports player and event coordinator has instilled in me a high level of discipline, leadership, and a results-oriented mindset that I apply to every engineering challenge.
                 </p>
              </div>

              <div className="bento-card p-8 md:col-span-2">
                <h3 className="font-bold text-lg mb-4">Competitive History</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                     <div className="mt-1 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 font-bold text-xs border border-accent/20">
                        2nd
                     </div>
                     <div>
                        <h4 className="font-bold text-foreground">Telkom University Esport Championship (TEC)</h4>
                        <p className="text-xs text-muted-foreground mb-1">Issued by Telkom University Esports · Aug 2021</p>
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-muted/20 text-muted-foreground border border-border">Runner Up</span>
                     </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                     <div className="mt-1 w-8 h-8 rounded-lg bg-muted/10 flex items-center justify-center text-muted-foreground shrink-0 font-bold text-xs border border-border">
                        SF
                     </div>
                     <div>
                        <h4 className="font-bold text-foreground">Pekan Olahraga FIK (PERAGA)</h4>
                        <p className="text-xs text-muted-foreground mb-1">Issued by BEM FIK · Nov 2021</p>
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-muted/20 text-muted-foreground border border-border">Semifinalist</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Highlights */}
          <section id="projects" className="space-y-8">
            <div className="flex justify-between items-end px-2">
              <h2 className="text-2xl font-bold tracking-tight">Recent Projects</h2>
              <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1">
                View All <ArrowUpRight size={14} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.slug} className="group relative bento-card h-full flex flex-col group-hover:border-white/20 min-w-0 overflow-hidden transition-all duration-300">
                  <Link href={`/projects/${project.slug}`} className="block relative aspect-video overflow-hidden">
                    <Image 
                      src={project.frontmatter.image} 
                      alt={project.frontmatter.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <Link href={`/projects/${project.slug}`}>
                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.frontmatter.title}</h3>
                      </Link>
                      <div className="flex gap-3">
                        {project.frontmatter.github && (
                          <a href={project.frontmatter.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-1" title="GitHub">
                            <Github size={18} />
                          </a>
                        )}
                        {project.frontmatter.external && (
                          <a href={project.frontmatter.external} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-1" title="Live Demo">
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed mb-6">
                      {project.frontmatter.description}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex flex-wrap gap-3">
                        {project.frontmatter.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">#{tag}</span>
                        ))}
                      </div>
                      {project.frontmatter.url && (
                        <a 
                          href={project.frontmatter.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs font-bold uppercase tracking-widest text-accent hover:underline flex items-center gap-1"
                        >
                          Launch <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-20 pb-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Luthfi Yafi Alfiansyah</p>
            <div className="flex gap-8">
              {['Instagram', 'GitHub', 'LinkedIn', 'Linktr.ee', 'Mail'].map(s => (
                <a key={s} href="#" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">{s}</a>
              ))}
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
