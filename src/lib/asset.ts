// Prefix root-relative public asset paths with Vite's BASE_URL so they resolve
// correctly when the app is served from a sub-path (e.g. GitHub Pages project site).
// External URLs (http/https) and already-relative paths are returned unchanged.
export const asset = (path: string): string => {
  if (/^(https?:)?\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL; // e.g. "/" or "/digital-portfolio-assembler-core/"
  return path.startsWith("/") ? `${base}${path.slice(1)}` : path;
};
