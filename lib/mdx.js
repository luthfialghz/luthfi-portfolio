import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getProjectSlugs() {
  const projectsDir = path.join(contentDirectory, 'projects');
  if (!fs.existsSync(projectsDir)) return [];
  return fs.readdirSync(projectsDir).filter((path) => /\.mdx?$/.test(path));
}

export function getProjectBySlug(slug) {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(contentDirectory, 'projects', `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, frontmatter: data, content };
}

export function getAllProjects() {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug));
  return projects.sort((a, b) => {
    if (a.frontmatter.date > b.frontmatter.date) return -1;
    if (a.frontmatter.date < b.frontmatter.date) return 1;
    return 0;
  });
}
