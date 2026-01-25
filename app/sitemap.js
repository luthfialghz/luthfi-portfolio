export const baseUrl = 'https://luthfialghz.github.io'; 

export default function sitemap() {
  const routes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
