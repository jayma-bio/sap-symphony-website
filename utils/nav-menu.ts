
/** Scroll to a hash element, retrying up to 10× if not yet in the DOM */
export function scrollToHash(hash: string, attempt = 0): void {
  const el = document.getElementById(hash);
  if (el) {
    setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  } else if (attempt < 10) {
    setTimeout(() => scrollToHash(hash, attempt + 1), 150);
  }
}

/** Parse "/services#pricing" → { pathname: "/services", hash: "pricing" | null } */
export function parsePath(path: string): { pathname: string; hash: string | null } {
  if (!path.includes("#")) return { pathname: path, hash: null };
  const [pathname, hash] = path.split("#");
  return { pathname: pathname || "/", hash };
}
