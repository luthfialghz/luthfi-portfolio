import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx?$/, ""),
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return (
    <div className="flex min-h-screen grainy">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 p-6 md:p-12 lg:p-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground mb-12 transition-colors">
            <ArrowLeft size={16} /> Back
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">{project.frontmatter.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {project.frontmatter.description}
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-wrap gap-2">
                {project.frontmatter.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 border border-border rounded-md text-[10px] font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="h-4 w-[1px] bg-border hidden sm:block"></div>
              <div className="flex gap-4">
                <a href="#" className="p-2 border border-border rounded-full hover:bg-foreground hover:border-foreground hover:text-background transition-all">
                  <Github size={18} />
                </a>
                <a href="#" className="p-2 border border-border rounded-full hover:bg-foreground hover:border-foreground hover:text-background transition-all">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </header>

          <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-16 bento-card">
            <Image 
              src={project.frontmatter.image} 
              alt={project.frontmatter.title}
              fill
              className="object-cover"
            />
          </div>

          <article className="prose prose-invert prose-lg max-w-none prose-headings:tracking-tighter prose-headings:font-black prose-p:text-muted-foreground prose-a:text-foreground prose-strong:text-foreground">
            <MDXRemote source={project.content} />
          </article>
          
          <footer className="mt-24 pt-10 border-t border-border">
            <div className="flex justify-between items-center">
               <p className="text-sm text-muted-foreground">Thanks for reading.</p>
               <Link href="/" className="text-sm font-bold uppercase tracking-widest">Next Project</Link>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
